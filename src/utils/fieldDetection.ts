import type { FieldType, DetectedField } from '../types';

const CATEGORICAL_THRESHOLD = 20;

const DATE_PATTERNS = [
  /^\d{4}-\d{2}-\d{2}$/,
  /^\d{4}-\d{2}-\d{2}T/,
  /^\d{1,2}\/\d{1,2}\/\d{2,4}$/,
];

function isTemporalField(values: unknown[]): boolean {
  const stringValues = values.filter((v): v is string => typeof v === 'string');
  if (stringValues.length < values.length * 0.8) return false;

  const dateMatches = stringValues.filter(
    (v) => DATE_PATTERNS.some((pattern) => pattern.test(v)) || !isNaN(Date.parse(v))
  );

  return dateMatches.length >= stringValues.length * 0.8;
}

export function detectFieldType(values: unknown[]): FieldType {
  const nonNullValues = values.filter((v) => v !== null && v !== undefined && v !== '');

  if (nonNullValues.length === 0) return 'nominal';

  const sample = nonNullValues.slice(0, 100);
  const uniqueValues = new Set(sample);
  const uniqueCount = uniqueValues.size;

  if (isTemporalField(sample)) {
    return 'temporal';
  }

  const numericValues = sample.filter(
    (v) => typeof v === 'number' || (typeof v === 'string' && !isNaN(Number(v)))
  );
  const isNumeric = numericValues.length === sample.length;

  if (isNumeric) {
    if (uniqueCount <= CATEGORICAL_THRESHOLD) {
      return 'ordinal';
    }
    return 'quantitative';
  }

  return 'nominal';
}

export function detectAllFields(data: Record<string, unknown>[]): DetectedField[] {
  if (data.length === 0) return [];

  const fieldNames = Object.keys(data[0]);

  return fieldNames.map((name) => {
    const values = data.map((row) => row[name]);
    const type = detectFieldType(values);
    const uniqueCount = new Set(values.filter((v) => v != null)).size;

    return {
      name,
      type,
      uniqueCount,
    };
  });
}

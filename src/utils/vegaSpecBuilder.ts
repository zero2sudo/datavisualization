import type { TopLevelSpec } from 'vega-lite';
import type { DetectedField, EncodingState } from '../types';

function inferMark(encodings: EncodingState): string {
  const { x, y } = encodings;

  if (x && y) {
    if (x.type === 'quantitative' && y.type === 'quantitative') {
      return 'point';
    }
    if ((x.type === 'nominal' || x.type === 'ordinal') && y.type === 'quantitative') {
      return 'bar';
    }
    if (x.type === 'quantitative' && (y.type === 'nominal' || y.type === 'ordinal')) {
      return 'bar';
    }
    if (x.type === 'temporal' && y.type === 'quantitative') {
      return 'line';
    }
    if (y.type === 'temporal' && x.type === 'quantitative') {
      return 'line';
    }
    if ((x.type === 'nominal' || x.type === 'ordinal') && (y.type === 'nominal' || y.type === 'ordinal')) {
      return 'rect';
    }
  }

  if (x && !y) {
    return 'bar';
  }
  if (y && !x) {
    return 'bar';
  }

  return 'point';
}

function buildChannelEncoding(field: DetectedField) {
  const encoding: Record<string, unknown> = {
    field: field.name,
    type: field.type,
  };

  if (field.type === 'temporal') {
    encoding.timeUnit = 'year';
  }

  return encoding;
}

export function buildVegaSpec(
  encodings: EncodingState,
  data: Record<string, unknown>[]
): TopLevelSpec | null {
  if (!encodings.x && !encodings.y) {
    return null;
  }

  const mark = inferMark(encodings);

  const encoding: Record<string, unknown> = {};

  if (encodings.x) {
    encoding.x = buildChannelEncoding(encodings.x);
  }
  if (encodings.y) {
    encoding.y = buildChannelEncoding(encodings.y);
  }
  if (encodings.color) {
    encoding.color = buildChannelEncoding(encodings.color);
  }
  if (encodings.size) {
    encoding.size = buildChannelEncoding(encodings.size);
  }
  if (encodings.shape) {
    encoding.shape = buildChannelEncoding(encodings.shape);
  }
  if (encodings.row) {
    encoding.row = buildChannelEncoding(encodings.row);
  }
  if (encodings.column) {
    encoding.column = buildChannelEncoding(encodings.column);
  }

  const spec: TopLevelSpec = {
    $schema: 'https://vega.github.io/schema/vega-lite/v6.json',
    data: { values: data },
    mark: { type: mark as 'point' | 'bar' | 'line' | 'rect', tooltip: true },
    encoding,
    width: 'container',
    height: 400,
  };

  return spec;
}

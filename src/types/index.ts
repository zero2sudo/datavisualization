export type FieldType = 'quantitative' | 'nominal' | 'ordinal' | 'temporal';

export interface DetectedField {
  name: string;
  type: FieldType;
  uniqueCount: number;
}

export type EncodingChannel = 'x' | 'y' | 'color' | 'size' | 'shape' | 'row' | 'column';

export type EncodingState = {
  [K in EncodingChannel]?: DetectedField;
};

export interface AppState {
  data: Record<string, unknown>[];
  fields: DetectedField[];
  encodings: EncodingState;
  isLoading: boolean;
  error: string | null;
}

export type AppAction =
  | { type: 'SET_DATA'; payload: Record<string, unknown>[] }
  | { type: 'SET_FIELDS'; payload: DetectedField[] }
  | { type: 'ASSIGN_FIELD'; channel: EncodingChannel; field: DetectedField }
  | { type: 'REMOVE_FIELD'; channel: EncodingChannel }
  | { type: 'CLEAR_ALL' }
  | { type: 'SET_LOADING'; payload: boolean }
  | { type: 'SET_ERROR'; payload: string };

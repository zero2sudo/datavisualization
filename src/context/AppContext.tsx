import { createContext, useContext, useReducer, useEffect, ReactNode } from 'react';
import type { AppState, AppAction, DetectedField, EncodingChannel, FieldType } from '../types';
import { detectAllFields } from '../utils/fieldDetection';
import carsData from '../../cars.json';

const initialState: AppState = {
  data: [],
  fields: [],
  encodings: {},
  isLoading: true,
  error: null,
};

function appReducer(state: AppState, action: AppAction): AppState {
  switch (action.type) {
    case 'SET_DATA':
      return { ...state, data: action.payload, isLoading: false };
    case 'SET_FIELDS':
      return { ...state, fields: action.payload };
    case 'ASSIGN_FIELD':
      return {
        ...state,
        encodings: { ...state.encodings, [action.channel]: action.field },
      };
    case 'REMOVE_FIELD': {
      const newEncodings = { ...state.encodings };
      delete newEncodings[action.channel];
      return { ...state, encodings: newEncodings };
    }
    case 'CLEAR_ALL':
      return { ...state, encodings: {} };
    case 'SET_LOADING':
      return { ...state, isLoading: action.payload };
    case 'SET_ERROR':
      return { ...state, error: action.payload, isLoading: false };
    case 'TOGGLE_FIELD_TYPE': {
      const newFields = state.fields.map((field) => {
        if (field.name === action.fieldName) {
          // Toggle between ordinal and nominal
          const newType: FieldType = field.type === 'ordinal' ? 'nominal' : 'ordinal';
          return { ...field, type: newType };
        }
        return field;
      });
      // Also update any encodings that use this field
      const newEncodings = { ...state.encodings };
      for (const [channel, field] of Object.entries(newEncodings)) {
        if (field && field.name === action.fieldName) {
          const newType: FieldType = field.type === 'ordinal' ? 'nominal' : 'ordinal';
          newEncodings[channel as EncodingChannel] = { ...field, type: newType };
        }
      }
      return { ...state, fields: newFields, encodings: newEncodings };
    }
    default:
      return state;
  }
}

interface AppContextType {
  state: AppState;
  assignField: (channel: EncodingChannel, field: DetectedField) => void;
  removeField: (channel: EncodingChannel) => void;
  clearAll: () => void;
  toggleFieldType: (fieldName: string) => void;
}

const AppContext = createContext<AppContextType | null>(null);

export function AppProvider({ children }: { children: ReactNode }) {
  const [state, dispatch] = useReducer(appReducer, initialState);

  useEffect(() => {
    try {
      const data = carsData as Record<string, unknown>[];
      dispatch({ type: 'SET_DATA', payload: data });
      const fields = detectAllFields(data);
      dispatch({ type: 'SET_FIELDS', payload: fields });
    } catch (err) {
      dispatch({ type: 'SET_ERROR', payload: 'Failed to load data' });
      console.error(err);
    }
  }, []);

  const assignField = (channel: EncodingChannel, field: DetectedField) => {
    dispatch({ type: 'ASSIGN_FIELD', channel, field });
  };

  const removeField = (channel: EncodingChannel) => {
    dispatch({ type: 'REMOVE_FIELD', channel });
  };

  const clearAll = () => {
    dispatch({ type: 'CLEAR_ALL' });
  };

  const toggleFieldType = (fieldName: string) => {
    dispatch({ type: 'TOGGLE_FIELD_TYPE', fieldName });
  };

  return (
    <AppContext.Provider value={{ state, assignField, removeField, clearAll, toggleFieldType }}>
      {children}
    </AppContext.Provider>
  );
}

export function useApp() {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useApp must be used within AppProvider');
  }
  return context;
}

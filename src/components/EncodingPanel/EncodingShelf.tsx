import { useState } from 'react';
import type { EncodingChannel, DetectedField, FieldType } from '../../types';
import { useApp } from '../../context/AppContext';

const TYPE_COLORS: Record<FieldType, string> = {
  quantitative: 'var(--color-quantitative)',
  nominal: 'var(--color-nominal)',
  ordinal: 'var(--color-ordinal)',
  temporal: 'var(--color-temporal)',
};

const TYPE_LABELS: Record<FieldType, string> = {
  quantitative: 'Q',
  nominal: 'N',
  ordinal: 'O',
  temporal: 'T',
};

interface EncodingShelfProps {
  channel: EncodingChannel;
  label: string;
}

export function EncodingShelf({ channel, label }: EncodingShelfProps) {
  const { state, assignField, removeField } = useApp();
  const [isOver, setIsOver] = useState(false);
  const [isHoveredRemove, setIsHoveredRemove] = useState(false);

  const assignedField = state.encodings[channel];

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    e.dataTransfer.dropEffect = 'copy';
    setIsOver(true);
  };

  const handleDragLeave = () => {
    setIsOver(false);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsOver(false);

    const fieldData = e.dataTransfer.getData('application/json');
    if (fieldData) {
      const field = JSON.parse(fieldData) as DetectedField;
      assignField(channel, field);
    }
  };

  const handleRemove = () => {
    removeField(channel);
  };

  const color = assignedField ? TYPE_COLORS[assignedField.type] : 'var(--color-accent)';

  return (
    <div>
      {/* Label */}
      <label
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: '6px',
          marginBottom: '6px',
          fontSize: '11px',
          fontWeight: 500,
          color: assignedField ? 'var(--color-text-secondary)' : 'var(--color-text-muted)',
          textTransform: 'uppercase',
          letterSpacing: '0.05em',
          transition: 'color 0.2s ease',
        }}
      >
        {label}
        {assignedField && (
          <span
            style={{
              width: '4px',
              height: '4px',
              borderRadius: '50%',
              backgroundColor: color,
              boxShadow: `0 0 6px ${color}`,
            }}
          />
        )}
      </label>

      {/* Drop zone */}
      <div
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        onDrop={handleDrop}
        style={{
          minHeight: '44px',
          padding: assignedField ? '6px' : '12px',
          backgroundColor: isOver
            ? 'var(--color-accent-glow)'
            : assignedField
              ? 'var(--color-bg-tertiary)'
              : 'var(--color-bg-elevated)',
          border: `1px ${isOver ? 'solid' : 'dashed'} ${
            isOver
              ? 'var(--color-accent)'
              : assignedField
                ? 'var(--color-border)'
                : 'var(--color-border)'
          }`,
          borderRadius: '8px',
          transition: 'all 0.2s cubic-bezier(0.4, 0, 0.2, 1)',
          display: 'flex',
          alignItems: 'center',
          transform: isOver ? 'scale(1.02)' : 'scale(1)',
        }}
      >
        {assignedField ? (
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              width: '100%',
              padding: '6px 10px',
              backgroundColor: 'var(--color-bg-secondary)',
              border: '1px solid var(--color-border)',
              borderRadius: '6px',
              animation: 'fadeIn 0.2s ease-out',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              {/* Type badge */}
              <span
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  width: '20px',
                  height: '20px',
                  backgroundColor: color,
                  color: 'white',
                  borderRadius: '4px',
                  fontSize: '10px',
                  fontWeight: 600,
                  boxShadow: `0 0 8px ${color}40`,
                }}
              >
                {TYPE_LABELS[assignedField.type]}
              </span>
              {/* Field name */}
              <span
                style={{
                  fontSize: '12px',
                  fontWeight: 500,
                  color: 'var(--color-text-primary)',
                }}
              >
                {assignedField.name}
              </span>
            </div>

            {/* Remove button */}
            <button
              onClick={handleRemove}
              onMouseEnter={() => setIsHoveredRemove(true)}
              onMouseLeave={() => setIsHoveredRemove(false)}
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                width: '22px',
                height: '22px',
                padding: 0,
                backgroundColor: isHoveredRemove
                  ? 'rgba(239, 68, 68, 0.15)'
                  : 'transparent',
                border: 'none',
                borderRadius: '4px',
                cursor: 'pointer',
                color: isHoveredRemove ? '#ef4444' : 'var(--color-text-muted)',
                transition: 'all 0.15s ease',
              }}
            >
              <svg
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </button>
          </div>
        ) : (
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              color: isOver ? 'var(--color-accent)' : 'var(--color-text-muted)',
              fontSize: '12px',
              transition: 'color 0.2s ease',
            }}
          >
            <svg
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              style={{
                opacity: isOver ? 1 : 0.5,
                transition: 'opacity 0.2s ease',
              }}
            >
              <line x1="12" y1="5" x2="12" y2="19" />
              <line x1="5" y1="12" x2="19" y2="12" />
            </svg>
            <span>{isOver ? 'Drop to assign' : 'Drop field here'}</span>
          </div>
        )}
      </div>
    </div>
  );
}

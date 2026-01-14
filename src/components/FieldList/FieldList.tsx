import { useApp } from '../../context/AppContext';
import { FieldPill } from './FieldPill';
import type { FieldType } from '../../types';

const TYPE_INFO: { type: FieldType; label: string; color: string }[] = [
  { type: 'quantitative', label: 'Quantitative', color: 'var(--color-quantitative)' },
  { type: 'nominal', label: 'Nominal', color: 'var(--color-nominal)' },
  { type: 'ordinal', label: 'Ordinal', color: 'var(--color-ordinal)' },
  { type: 'temporal', label: 'Temporal', color: 'var(--color-temporal)' },
];

export function FieldList() {
  const { state, deselectField } = useApp();
  const hasSelectedField = state.selectedField !== null;

  return (
    <aside
      style={{
        padding: '24px',
        backgroundColor: 'var(--color-bg-secondary)',
        borderRight: '1px solid var(--color-border)',
        height: '100%',
        overflow: 'auto',
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      {/* Section header */}
      <div style={{ marginBottom: '20px' }}>
        <h2
          style={{
            fontFamily: 'var(--font-display)',
            fontSize: '15px',
            fontWeight: 400,
            color: 'var(--color-text-primary)',
            marginBottom: '4px',
            fontStyle: 'italic',
          }}
        >
          Data Fields
        </h2>
        <p
          style={{
            fontSize: '11px',
            color: 'var(--color-text-muted)',
            letterSpacing: '0.02em',
          }}
        >
          Drag or tap fields to encode your chart
        </p>
      </div>

      {/* Selection indicator for touch mode */}
      {hasSelectedField && (
        <div
          style={{
            marginBottom: '16px',
            padding: '10px 12px',
            backgroundColor: 'var(--color-accent-glow)',
            border: '1px solid var(--color-accent)',
            borderRadius: '8px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            animation: 'fadeIn 0.2s ease-out',
          }}
        >
          <span
            style={{
              fontSize: '11px',
              color: 'var(--color-accent)',
              fontWeight: 500,
            }}
          >
            "{state.selectedField!.name}" selected — tap an encoding
          </span>
          <button
            onClick={deselectField}
            style={{
              padding: '4px 8px',
              backgroundColor: 'transparent',
              border: '1px solid var(--color-accent)',
              borderRadius: '4px',
              fontSize: '10px',
              color: 'var(--color-accent)',
              cursor: 'pointer',
              transition: 'all 0.15s ease',
            }}
            onMouseOver={(e) => {
              e.currentTarget.style.backgroundColor = 'var(--color-accent)';
              e.currentTarget.style.color = 'white';
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.backgroundColor = 'transparent';
              e.currentTarget.style.color = 'var(--color-accent)';
            }}
          >
            Cancel
          </button>
        </div>
      )}

      {/* Type legend */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '8px',
          marginBottom: '24px',
          padding: '12px',
          backgroundColor: 'var(--color-bg-tertiary)',
          borderRadius: '8px',
        }}
      >
        {TYPE_INFO.map(({ type, label, color }) => (
          <div
            key={type}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '6px',
            }}
          >
            <span
              style={{
                width: '8px',
                height: '8px',
                backgroundColor: color,
                borderRadius: '2px',
                boxShadow: `0 0 8px ${color}40`,
              }}
            />
            <span
              style={{
                fontSize: '10px',
                color: 'var(--color-text-secondary)',
                textTransform: 'uppercase',
                letterSpacing: '0.05em',
                fontWeight: 500,
              }}
            >
              {label}
            </span>
          </div>
        ))}
      </div>

      {/* Fields list */}
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '6px',
          flex: 1,
        }}
      >
        {state.fields.map((field, index) => (
          <FieldPill key={field.name} field={field} index={index} />
        ))}
      </div>

      {/* Footer decoration */}
      <div
        style={{
          marginTop: '24px',
          paddingTop: '16px',
          borderTop: '1px solid var(--color-border)',
          fontSize: '10px',
          color: 'var(--color-text-muted)',
          textAlign: 'center',
          letterSpacing: '0.1em',
          textTransform: 'uppercase',
        }}
      >
        {state.fields.length} fields available
      </div>
    </aside>
  );
}

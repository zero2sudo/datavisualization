import { useState } from 'react';
import { useApp } from '../../context/AppContext';
import { EncodingShelf } from './EncodingShelf';

interface EncodingSection {
  title: string;
  icon: React.ReactNode;
  channels: { channel: 'x' | 'y' | 'color' | 'size' | 'shape' | 'row' | 'column'; label: string }[];
}

const SECTIONS: EncodingSection[] = [
  {
    title: 'Position',
    icon: (
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <line x1="12" y1="19" x2="12" y2="5" />
        <polyline points="5 12 12 5 19 12" />
      </svg>
    ),
    channels: [
      { channel: 'x', label: 'X Axis' },
      { channel: 'y', label: 'Y Axis' },
    ],
  },
  {
    title: 'Mark Properties',
    icon: (
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <circle cx="12" cy="12" r="4" />
      </svg>
    ),
    channels: [
      { channel: 'color', label: 'Color' },
      { channel: 'size', label: 'Size' },
      { channel: 'shape', label: 'Shape' },
    ],
  },
  {
    title: 'Faceting',
    icon: (
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="3" width="7" height="7" />
        <rect x="14" y="3" width="7" height="7" />
        <rect x="3" y="14" width="7" height="7" />
        <rect x="14" y="14" width="7" height="7" />
      </svg>
    ),
    channels: [
      { channel: 'row', label: 'Row' },
      { channel: 'column', label: 'Column' },
    ],
  },
];

export function EncodingPanel() {
  const { clearAll, state } = useApp();
  const [hoveredClear, setHoveredClear] = useState(false);

  const hasEncodings = Object.keys(state.encodings).length > 0;

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
      {/* Header */}
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'flex-start',
          marginBottom: '24px',
        }}
      >
        <div>
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
            Encoding Channels
          </h2>
          <p
            style={{
              fontSize: '11px',
              color: 'var(--color-text-muted)',
              letterSpacing: '0.02em',
            }}
          >
            Map data to visual properties
          </p>
        </div>
        {hasEncodings && (
          <button
            onClick={clearAll}
            onMouseEnter={() => setHoveredClear(true)}
            onMouseLeave={() => setHoveredClear(false)}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '6px',
              padding: '6px 10px',
              fontSize: '11px',
              fontWeight: 500,
              backgroundColor: hoveredClear
                ? 'rgba(239, 68, 68, 0.15)'
                : 'rgba(239, 68, 68, 0.08)',
              color: '#ef4444',
              border: '1px solid rgba(239, 68, 68, 0.2)',
              borderRadius: '6px',
              cursor: 'pointer',
              transition: 'all 0.2s ease',
              letterSpacing: '0.02em',
            }}
          >
            <svg
              width="12"
              height="12"
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
            Clear
          </button>
        )}
      </div>

      {/* Sections */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', flex: 1 }}>
        {SECTIONS.map((section, sectionIndex) => (
          <div
            key={section.title}
            style={{
              animation: `fadeIn 0.4s ease-out ${sectionIndex * 0.1}s both`,
            }}
          >
            {/* Section header */}
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                marginBottom: '12px',
                paddingBottom: '8px',
                borderBottom: '1px solid var(--color-border)',
              }}
            >
              <span style={{ color: 'var(--color-accent)', opacity: 0.8 }}>
                {section.icon}
              </span>
              <h3
                style={{
                  fontSize: '10px',
                  fontWeight: 600,
                  color: 'var(--color-text-secondary)',
                  textTransform: 'uppercase',
                  letterSpacing: '0.1em',
                  margin: 0,
                }}
              >
                {section.title}
              </h3>
            </div>

            {/* Channels */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
              {section.channels.map(({ channel, label }) => (
                <EncodingShelf key={channel} channel={channel} label={label} />
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Status indicator */}
      <div
        style={{
          marginTop: '24px',
          paddingTop: '16px',
          borderTop: '1px solid var(--color-border)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '8px',
        }}
      >
        <span
          style={{
            width: '6px',
            height: '6px',
            borderRadius: '50%',
            backgroundColor: hasEncodings
              ? 'var(--color-temporal)'
              : 'var(--color-text-muted)',
            boxShadow: hasEncodings ? '0 0 8px var(--color-temporal)' : 'none',
            transition: 'all 0.3s ease',
          }}
        />
        <span
          style={{
            fontSize: '10px',
            color: 'var(--color-text-muted)',
            letterSpacing: '0.1em',
            textTransform: 'uppercase',
          }}
        >
          {hasEncodings
            ? `${Object.keys(state.encodings).length} active`
            : 'No encodings'}
        </span>
      </div>
    </aside>
  );
}

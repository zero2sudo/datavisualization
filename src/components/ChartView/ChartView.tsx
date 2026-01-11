import { useEffect, useRef } from 'react';
import embed from 'vega-embed';
import { useApp } from '../../context/AppContext';
import { buildVegaSpec } from '../../utils/vegaSpecBuilder';

export function ChartView() {
  const { state } = useApp();
  const containerRef = useRef<HTMLDivElement>(null);

  const spec = buildVegaSpec(state.encodings, state.data);

  useEffect(() => {
    if (!containerRef.current) return;

    if (!spec) {
      containerRef.current.innerHTML = '';
      return;
    }

    const embedChart = async () => {
      try {
        await embed(containerRef.current!, spec, {
          actions: { export: true, source: false, compiled: false, editor: false },
          renderer: 'svg',
          config: {
            background: 'transparent',
            axis: {
              labelColor: '#a3a3a3',
              titleColor: '#fafafa',
              gridColor: 'rgba(255, 255, 255, 0.06)',
              domainColor: 'rgba(255, 255, 255, 0.15)',
              tickColor: 'rgba(255, 255, 255, 0.15)',
              labelFont: 'DM Sans, sans-serif',
              titleFont: 'Instrument Serif, serif',
              labelFontSize: 11,
              titleFontSize: 13,
              titleFontWeight: 400,
              titleFontStyle: 'italic',
            },
            legend: {
              labelColor: '#a3a3a3',
              titleColor: '#fafafa',
              labelFont: 'DM Sans, sans-serif',
              titleFont: 'DM Sans, sans-serif',
              labelFontSize: 11,
              titleFontSize: 11,
              titleFontWeight: 600,
            },
            title: {
              color: '#fafafa',
              font: 'Instrument Serif, serif',
              fontSize: 18,
              fontWeight: 400,
              fontStyle: 'italic',
            },
            view: {
              stroke: 'transparent',
            },
            range: {
              category: ['#3b82f6', '#f97316', '#a855f7', '#22c55e', '#ef4444', '#eab308', '#06b6d4', '#ec4899'],
            },
          },
        });
      } catch (error) {
        console.error('Vega embed error:', error);
      }
    };

    embedChart();
  }, [spec]);

  const hasEncodings = Object.keys(state.encodings).length > 0;

  return (
    <main
      style={{
        padding: '32px',
        backgroundColor: 'var(--color-bg-primary)',
        height: '100%',
        overflow: 'auto',
        display: 'flex',
        flexDirection: 'column',
        position: 'relative',
      }}
    >
      {/* Background pattern */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          backgroundImage: `
            radial-gradient(circle at 25% 25%, rgba(255, 107, 74, 0.03) 0%, transparent 50%),
            radial-gradient(circle at 75% 75%, rgba(59, 130, 246, 0.03) 0%, transparent 50%)
          `,
          pointerEvents: 'none',
        }}
      />

      {/* Header */}
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          marginBottom: '24px',
          position: 'relative',
          zIndex: 1,
        }}
      >
        <div>
          <h2
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: '18px',
              fontWeight: 400,
              color: 'var(--color-text-primary)',
              marginBottom: '4px',
              fontStyle: 'italic',
            }}
          >
            Visualization
          </h2>
          <p
            style={{
              fontSize: '12px',
              color: 'var(--color-text-muted)',
            }}
          >
            {hasEncodings
              ? spec
                ? 'Your chart is ready'
                : 'Add X or Y axis to render'
              : 'Start by dragging fields to encodings'}
          </p>
        </div>

        {spec && (
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '6px',
              padding: '6px 12px',
              backgroundColor: 'var(--color-bg-tertiary)',
              borderRadius: '6px',
              fontSize: '11px',
              color: 'var(--color-text-secondary)',
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
              <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
            </svg>
            Live Preview
          </div>
        )}
      </div>

      {/* Chart area */}
      {!hasEncodings ? (
        <div
          style={{
            flex: 1,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            position: 'relative',
            zIndex: 1,
          }}
        >
          <div
            style={{
              textAlign: 'center',
              maxWidth: '320px',
              animation: 'fadeIn 0.5s ease-out',
            }}
          >
            {/* Decorative chart icon */}
            <div
              style={{
                width: '80px',
                height: '80px',
                margin: '0 auto 24px',
                borderRadius: '20px',
                background: 'linear-gradient(135deg, var(--color-bg-tertiary) 0%, var(--color-bg-elevated) 100%)',
                border: '1px solid var(--color-border)',
                display: 'flex',
                alignItems: 'flex-end',
                justifyContent: 'center',
                gap: '6px',
                padding: '16px',
              }}
            >
              <div
                style={{
                  width: '12px',
                  height: '20px',
                  backgroundColor: 'var(--color-quantitative)',
                  borderRadius: '3px 3px 0 0',
                  opacity: 0.6,
                }}
              />
              <div
                style={{
                  width: '12px',
                  height: '32px',
                  backgroundColor: 'var(--color-nominal)',
                  borderRadius: '3px 3px 0 0',
                  opacity: 0.8,
                }}
              />
              <div
                style={{
                  width: '12px',
                  height: '24px',
                  backgroundColor: 'var(--color-ordinal)',
                  borderRadius: '3px 3px 0 0',
                  opacity: 0.7,
                }}
              />
            </div>

            <h3
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: '20px',
                fontWeight: 400,
                color: 'var(--color-text-primary)',
                marginBottom: '8px',
                fontStyle: 'italic',
              }}
            >
              Create Your Chart
            </h3>
            <p
              style={{
                fontSize: '13px',
                color: 'var(--color-text-muted)',
                lineHeight: 1.6,
              }}
            >
              Drag data fields from the left panel to encoding channels to build your visualization
            </p>
          </div>
        </div>
      ) : !spec && (
        <div
          style={{
            flex: 1,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            position: 'relative',
            zIndex: 1,
          }}
        >
          <div
            style={{
              textAlign: 'center',
              maxWidth: '320px',
              animation: 'fadeIn 0.5s ease-out',
            }}
          >
            {/* Axes indicator */}
            <div
              style={{
                width: '80px',
                height: '80px',
                margin: '0 auto 24px',
                position: 'relative',
              }}
            >
              {/* Y axis */}
              <div
                style={{
                  position: 'absolute',
                  left: '20px',
                  top: '10px',
                  bottom: '20px',
                  width: '2px',
                  backgroundColor: 'var(--color-accent)',
                  borderRadius: '1px',
                  opacity: 0.5,
                }}
              />
              {/* X axis */}
              <div
                style={{
                  position: 'absolute',
                  left: '20px',
                  bottom: '20px',
                  right: '10px',
                  height: '2px',
                  backgroundColor: 'var(--color-accent)',
                  borderRadius: '1px',
                  opacity: 0.5,
                }}
              />
              {/* Dashed placeholder */}
              <div
                style={{
                  position: 'absolute',
                  left: '30px',
                  top: '20px',
                  right: '15px',
                  bottom: '30px',
                  border: '2px dashed var(--color-border)',
                  borderRadius: '8px',
                }}
              />
            </div>

            <h3
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: '20px',
                fontWeight: 400,
                color: 'var(--color-text-primary)',
                marginBottom: '8px',
                fontStyle: 'italic',
              }}
            >
              Almost There
            </h3>
            <p
              style={{
                fontSize: '13px',
                color: 'var(--color-text-muted)',
                lineHeight: 1.6,
              }}
            >
              Add a field to the <span style={{ color: 'var(--color-accent)' }}>X</span> or{' '}
              <span style={{ color: 'var(--color-accent)' }}>Y</span> axis to render your chart
            </p>
          </div>
        </div>
      )}
      <div
        ref={containerRef}
        style={{
          flex: 1,
          backgroundColor: 'var(--color-bg-secondary)',
          borderRadius: '16px',
          padding: '24px',
          border: '1px solid var(--color-border)',
          position: 'relative',
          zIndex: 1,
          display: spec ? 'flex' : 'none', // Hide the div when there is no graph
          alignItems: 'center',
          justifyContent: 'center',
          animation: spec ? 'fadeIn 0.4s ease-out' : 'none', // Disable animation when hidden
          overflow: 'hidden',
        }}
      />

      {/* Footer gradient line */}
      <div
        style={{
          position: 'absolute',
          bottom: 0,
          left: '32px',
          right: '32px',
          height: '1px',
          background: 'linear-gradient(90deg, transparent 0%, var(--color-border) 50%, transparent 100%)',
        }}
      />
    </main>
  );
}

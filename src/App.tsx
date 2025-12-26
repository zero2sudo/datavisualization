import { AppProvider, useApp } from './context/AppContext';
import { FieldList } from './components/FieldList/FieldList';
import { EncodingPanel } from './components/EncodingPanel/EncodingPanel';
import { ChartView } from './components/ChartView/ChartView';

function AppContent() {
  const { state } = useApp();

  if (state.isLoading) {
    return (
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          height: '100vh',
          gap: '24px',
          background: 'linear-gradient(135deg, var(--color-bg-primary) 0%, var(--color-bg-secondary) 100%)',
        }}
      >
        <div
          style={{
            width: '48px',
            height: '48px',
            border: '2px solid var(--color-border)',
            borderTopColor: 'var(--color-accent)',
            borderRadius: '50%',
            animation: 'spin 1s linear infinite',
          }}
        />
        <span
          style={{
            fontFamily: 'var(--font-display)',
            fontSize: '18px',
            color: 'var(--color-text-secondary)',
            fontStyle: 'italic',
          }}
        >
          Loading your data...
        </span>
        <style>{`
          @keyframes spin {
            to { transform: rotate(360deg); }
          }
        `}</style>
      </div>
    );
  }

  if (state.error) {
    return (
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          height: '100vh',
          gap: '16px',
          background: 'var(--color-bg-primary)',
        }}
      >
        <div
          style={{
            width: '64px',
            height: '64px',
            borderRadius: '50%',
            backgroundColor: 'rgba(239, 68, 68, 0.1)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: '28px',
          }}
        >
          !
        </div>
        <span
          style={{
            fontFamily: 'var(--font-display)',
            fontSize: '20px',
            color: '#ef4444',
          }}
        >
          {state.error}
        </span>
      </div>
    );
  }

  return (
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: '240px 280px 1fr',
        gridTemplateRows: '64px 1fr',
        height: '100vh',
        overflow: 'hidden',
        background: 'var(--color-bg-primary)',
      }}
    >
      {/* Header */}
      <header
        style={{
          gridColumn: '1 / -1',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: '0 32px',
          borderBottom: '1px solid var(--color-border)',
          background: 'var(--color-bg-secondary)',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
          <div
            style={{
              width: '32px',
              height: '32px',
              borderRadius: '8px',
              background: 'linear-gradient(135deg, var(--color-accent) 0%, #ff8f75 100%)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              boxShadow: '0 4px 12px var(--color-accent-glow)',
            }}
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <line x1="18" y1="20" x2="18" y2="10" />
              <line x1="12" y1="20" x2="12" y2="4" />
              <line x1="6" y1="20" x2="6" y2="14" />
            </svg>
          </div>
          <h1
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: '22px',
              fontWeight: 400,
              color: 'var(--color-text-primary)',
              letterSpacing: '-0.02em',
            }}
          >
            DataViz <span style={{ fontStyle: 'italic', color: 'var(--color-accent)' }}>Studio</span>
          </h1>
        </div>
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            padding: '6px 12px',
            backgroundColor: 'var(--color-bg-tertiary)',
            borderRadius: '6px',
            fontSize: '12px',
            color: 'var(--color-text-muted)',
          }}
        >
          <span
            style={{
              width: '6px',
              height: '6px',
              borderRadius: '50%',
              backgroundColor: 'var(--color-temporal)',
            }}
          />
          {state.data.length} records loaded
        </div>
      </header>

      {/* Sidebars */}
      <FieldList />
      <EncodingPanel />
      <ChartView />

      {/* Noise overlay for texture */}
      <div className="noise-overlay" />
    </div>
  );
}

function App() {
  return (
    <AppProvider>
      <AppContent />
    </AppProvider>
  );
}

export default App;

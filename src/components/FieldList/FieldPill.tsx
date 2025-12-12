import { useState } from 'react';
import type { DetectedField, FieldType } from '../../types';

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

interface FieldPillProps {
  field: DetectedField;
  index: number;
}

export function FieldPill({ field, index }: FieldPillProps) {
  const [isHovered, setIsHovered] = useState(false);
  const [isDragging, setIsDragging] = useState(false);

  const handleDragStart = (e: React.DragEvent) => {
    e.dataTransfer.setData('application/json', JSON.stringify(field));
    e.dataTransfer.effectAllowed = 'copy';
    setIsDragging(true);
  };

  const handleDragEnd = () => {
    setIsDragging(false);
  };

  const color = TYPE_COLORS[field.type];

  return (
    <div
      className="field-pill"
      draggable
      onDragStart={handleDragStart}
      onDragEnd={handleDragEnd}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{
        display: 'flex',
        alignItems: 'center',
        gap: '10px',
        padding: '10px 14px',
        backgroundColor: isHovered
          ? 'var(--color-bg-tertiary)'
          : 'var(--color-bg-elevated)',
        border: `1px solid ${isHovered ? 'var(--color-border-hover)' : 'var(--color-border)'}`,
        borderRadius: '8px',
        cursor: isDragging ? 'grabbing' : 'grab',
        fontSize: '13px',
        transition: 'all 0.2s cubic-bezier(0.4, 0, 0.2, 1)',
        transform: isHovered ? 'translateX(4px)' : 'translateX(0)',
        opacity: isDragging ? 0.5 : 1,
        animation: `slideIn 0.3s ease-out ${index * 0.03}s both`,
      }}
    >
      {/* Type indicator with glow */}
      <span
        style={{
          display: 'inline-flex',
          alignItems: 'center',
          justifyContent: 'center',
          width: '22px',
          height: '22px',
          backgroundColor: color,
          color: 'white',
          borderRadius: '5px',
          fontSize: '10px',
          fontWeight: 600,
          letterSpacing: '0.02em',
          boxShadow: isHovered ? `0 0 12px ${color}60` : `0 0 6px ${color}30`,
          transition: 'box-shadow 0.2s ease',
        }}
      >
        {TYPE_LABELS[field.type]}
      </span>

      {/* Field name */}
      <span
        style={{
          color: 'var(--color-text-primary)',
          fontWeight: 500,
          flex: 1,
          overflow: 'hidden',
          textOverflow: 'ellipsis',
          whiteSpace: 'nowrap',
        }}
      >
        {field.name}
      </span>

      {/* Drag indicator */}
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
          color: 'var(--color-text-muted)',
          opacity: isHovered ? 1 : 0,
          transition: 'opacity 0.2s ease',
          flexShrink: 0,
        }}
      >
        <circle cx="9" cy="5" r="1" fill="currentColor" />
        <circle cx="9" cy="12" r="1" fill="currentColor" />
        <circle cx="9" cy="19" r="1" fill="currentColor" />
        <circle cx="15" cy="5" r="1" fill="currentColor" />
        <circle cx="15" cy="12" r="1" fill="currentColor" />
        <circle cx="15" cy="19" r="1" fill="currentColor" />
      </svg>
    </div>
  );
}

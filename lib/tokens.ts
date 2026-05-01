export interface ColorToken {
  name: string;
  hex: string;
  description?: string;
}

export interface ColorGroup {
  groupKey: 'primary' | 'neutral' | 'success' | 'warning' | 'danger' | 'info';
  colors: ColorToken[];
}

export const COLOR_GROUPS: ColorGroup[] = [
  {
    groupKey: 'primary',
    colors: [
      { name: '--ds-color-primary-50', hex: '#eff6ff' },
      { name: '--ds-color-primary-100', hex: '#dbeafe' },
      { name: '--ds-color-primary-200', hex: '#bfdbfe' },
      { name: '--ds-color-primary-500', hex: '#3b82f6' },
      { name: '--ds-color-primary-600', hex: '#2563eb' },
      { name: '--ds-color-primary-700', hex: '#1d4ed8' },
    ],
  },
  {
    groupKey: 'neutral',
    colors: [
      { name: '--ds-color-neutral-0', hex: '#ffffff' },
      { name: '--ds-color-neutral-50', hex: '#f9fafb' },
      { name: '--ds-color-neutral-100', hex: '#f3f4f6' },
      { name: '--ds-color-neutral-200', hex: '#e5e7eb' },
      { name: '--ds-color-neutral-300', hex: '#d1d5db' },
      { name: '--ds-color-neutral-400', hex: '#9ca3af' },
      { name: '--ds-color-neutral-500', hex: '#6b7280' },
      { name: '--ds-color-neutral-600', hex: '#4b5563' },
      { name: '--ds-color-neutral-700', hex: '#374151' },
      { name: '--ds-color-neutral-800', hex: '#1f2937' },
      { name: '--ds-color-neutral-900', hex: '#111827' },
    ],
  },
  {
    groupKey: 'success',
    colors: [
      { name: '--ds-color-success', hex: '#22c55e' },
      { name: '--ds-color-success-bg', hex: '#f0fdf4' },
      { name: '--ds-color-success-border', hex: '#86efac' },
      { name: '--ds-color-success-text', hex: '#166534' },
    ],
  },
  {
    groupKey: 'warning',
    colors: [
      { name: '--ds-color-warning', hex: '#f59e0b' },
      { name: '--ds-color-warning-bg', hex: '#fffbeb' },
      { name: '--ds-color-warning-border', hex: '#fcd34d' },
      { name: '--ds-color-warning-text', hex: '#92400e' },
    ],
  },
  {
    groupKey: 'danger',
    colors: [
      { name: '--ds-color-danger', hex: '#ef4444' },
      { name: '--ds-color-danger-50', hex: '#fef2f2' },
      { name: '--ds-color-danger-600', hex: '#dc2626' },
      { name: '--ds-color-danger-bg', hex: '#fef2f2' },
      { name: '--ds-color-danger-border', hex: '#fca5a5' },
      { name: '--ds-color-danger-text', hex: '#991b1b' },
    ],
  },
  {
    groupKey: 'info',
    colors: [
      { name: '--ds-color-info', hex: '#3b82f6' },
      { name: '--ds-color-info-bg', hex: '#eff6ff' },
      { name: '--ds-color-info-border', hex: '#93c5fd' },
      { name: '--ds-color-info-text', hex: '#1e40af' },
    ],
  },
];

export interface SpacingToken {
  name: string;
  value: string;
  pixels: number;
}

export const SPACING_TOKENS: SpacingToken[] = [
  { name: '--ds-spacing-0', value: '0', pixels: 0 },
  { name: '--ds-spacing-px', value: '1px', pixels: 1 },
  { name: '--ds-spacing-0-5', value: '0.125rem', pixels: 2 },
  { name: '--ds-spacing-1', value: '0.25rem', pixels: 4 },
  { name: '--ds-spacing-2', value: '0.5rem', pixels: 8 },
  { name: '--ds-spacing-3', value: '0.75rem', pixels: 12 },
  { name: '--ds-spacing-4', value: '1rem', pixels: 16 },
  { name: '--ds-spacing-5', value: '1.25rem', pixels: 20 },
  { name: '--ds-spacing-6', value: '1.5rem', pixels: 24 },
  { name: '--ds-spacing-8', value: '2rem', pixels: 32 },
  { name: '--ds-spacing-10', value: '2.5rem', pixels: 40 },
  { name: '--ds-spacing-12', value: '3rem', pixels: 48 },
  { name: '--ds-spacing-16', value: '4rem', pixels: 64 },
];

export const SPACING_ALIASES: { name: string; alias: string; pixels: number }[] = [
  { name: '--ds-spacing-xs', alias: '= --ds-spacing-1', pixels: 4 },
  { name: '--ds-spacing-sm', alias: '= --ds-spacing-2', pixels: 8 },
  { name: '--ds-spacing-md', alias: '= --ds-spacing-4', pixels: 16 },
  { name: '--ds-spacing-lg', alias: '= --ds-spacing-6', pixels: 24 },
  { name: '--ds-spacing-xl', alias: '= --ds-spacing-8', pixels: 32 },
  { name: '--ds-spacing-2xl', alias: '= --ds-spacing-12', pixels: 48 },
];

export interface RadiusToken {
  name: string;
  value: string;
  pixels: number;
}

export const RADIUS_TOKENS: RadiusToken[] = [
  { name: '--ds-radius-none', value: '0', pixels: 0 },
  { name: '--ds-radius-sm', value: '0.25rem', pixels: 4 },
  { name: '--ds-radius-md', value: '0.375rem', pixels: 6 },
  { name: '--ds-radius-lg', value: '0.5rem', pixels: 8 },
  { name: '--ds-radius-xl', value: '0.75rem', pixels: 12 },
  { name: '--ds-radius-2xl', value: '1rem', pixels: 16 },
  { name: '--ds-radius-full', value: '9999px', pixels: 9999 },
];

export interface FontSizeToken {
  name: string;
  value: string;
  pixels: number;
}

export const FONT_SIZE_TOKENS: FontSizeToken[] = [
  { name: '--ds-font-size-xs', value: '0.75rem', pixels: 12 },
  { name: '--ds-font-size-sm', value: '0.875rem', pixels: 14 },
  { name: '--ds-font-size-base', value: '1rem', pixels: 16 },
  { name: '--ds-font-size-lg', value: '1.125rem', pixels: 18 },
  { name: '--ds-font-size-xl', value: '1.25rem', pixels: 20 },
  { name: '--ds-font-size-2xl', value: '1.5rem', pixels: 24 },
  { name: '--ds-font-size-3xl', value: '1.875rem', pixels: 30 },
  { name: '--ds-font-size-4xl', value: '2.25rem', pixels: 36 },
];

export interface FontWeightToken {
  name: string;
  value: number;
  alias: 'normal' | 'medium' | 'semibold' | 'bold';
}

export const FONT_WEIGHT_TOKENS: FontWeightToken[] = [
  { name: '--ds-font-weight-normal', value: 400, alias: 'normal' },
  { name: '--ds-font-weight-medium', value: 500, alias: 'medium' },
  { name: '--ds-font-weight-semibold', value: 600, alias: 'semibold' },
  { name: '--ds-font-weight-bold', value: 700, alias: 'bold' },
];

export interface ZIndexToken {
  name: string;
  value: number;
}

export const Z_INDEX_TOKENS: ZIndexToken[] = [
  { name: '--ds-z-base', value: 0 },
  { name: '--ds-z-dropdown', value: 10 },
  { name: '--ds-z-sticky', value: 20 },
  { name: '--ds-z-overlay', value: 50 },
  { name: '--ds-z-modal', value: 100 },
  { name: '--ds-z-toast', value: 1000 },
];

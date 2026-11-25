/**
 * 문서 사이트가 표시하는 디자인 토큰 표.
 *
 * 값은 디자인 시스템의 `src/styles/tokens.css`를 그대로 옮긴 것이다.
 * v0.3.1부터 색 토큰은 라이트/다크 두 값을 가지므로 둘 다 싣는다.
 */

export interface ColorToken {
  name: string;
  /** 라이트 테마 값 (CSS 색 문자열) */
  light: string;
  /** 다크 테마 값 */
  dark: string;
  /** 역할 토큰의 쓰임새 설명 키 (있는 경우) */
  descriptionKey?: string;
}

export type ColorGroupKey =
  | 'primary'
  | 'neutral'
  | 'role'
  | 'success'
  | 'warning'
  | 'danger'
  | 'info';

export interface ColorGroup {
  groupKey: ColorGroupKey;
  colors: ColorToken[];
}

export const COLOR_GROUPS: ColorGroup[] = [
  {
    groupKey: 'primary',
    colors: [
      { name: '--ds-color-primary-50', light: '#eff6ff', dark: '#172554' },
      { name: '--ds-color-primary-100', light: '#dbeafe', dark: '#1e3a8a' },
      { name: '--ds-color-primary-200', light: '#bfdbfe', dark: '#1d4ed8' },
      { name: '--ds-color-primary-500', light: '#3b82f6', dark: '#3b82f6' },
      { name: '--ds-color-primary-600', light: '#2563eb', dark: '#60a5fa' },
      { name: '--ds-color-primary-700', light: '#1d4ed8', dark: '#93c5fd' },
      { name: '--ds-color-primary-800', light: '#1e40af', dark: '#bfdbfe' },
    ],
  },
  {
    groupKey: 'neutral',
    colors: [
      { name: '--ds-color-neutral-0', light: '#ffffff', dark: '#111827' },
      { name: '--ds-color-neutral-50', light: '#f9fafb', dark: '#1f2937' },
      { name: '--ds-color-neutral-100', light: '#f3f4f6', dark: '#273449' },
      { name: '--ds-color-neutral-200', light: '#e5e7eb', dark: '#374151' },
      { name: '--ds-color-neutral-300', light: '#d1d5db', dark: '#4b5563' },
      { name: '--ds-color-neutral-400', light: '#9ca3af', dark: '#6b7280' },
      { name: '--ds-color-neutral-500', light: '#6b7280', dark: '#9ca3af' },
      { name: '--ds-color-neutral-600', light: '#4b5563', dark: '#cbd5e1' },
      { name: '--ds-color-neutral-700', light: '#374151', dark: '#e2e8f0' },
      { name: '--ds-color-neutral-800', light: '#1f2937', dark: '#f1f5f9' },
      { name: '--ds-color-neutral-900', light: '#111827', dark: '#f8fafc' },
    ],
  },
  {
    groupKey: 'role',
    colors: [
      {
        name: '--ds-color-on-primary',
        light: '#ffffff',
        dark: '#0b1220',
        descriptionKey: 'tokens.colors.role.onPrimary',
      },
      {
        name: '--ds-color-on-danger',
        light: '#ffffff',
        dark: '#2a0d0d',
        descriptionKey: 'tokens.colors.role.onDanger',
      },
      {
        name: '--ds-color-control-knob',
        light: '#ffffff',
        dark: '#ffffff',
        descriptionKey: 'tokens.colors.role.controlKnob',
      },
      {
        name: '--ds-color-overlay-backdrop',
        light: 'rgb(0 0 0 / 0.5)',
        dark: 'rgb(0 0 0 / 0.7)',
        descriptionKey: 'tokens.colors.role.overlayBackdrop',
      },
      {
        name: '--ds-color-shimmer',
        light: 'rgb(255 255 255 / 0.6)',
        dark: 'rgb(255 255 255 / 0.08)',
        descriptionKey: 'tokens.colors.role.shimmer',
      },
      {
        name: '--ds-color-surface-translucent',
        light: 'rgb(255 255 255 / 0.85)',
        dark: 'rgb(17 24 39 / 0.85)',
        descriptionKey: 'tokens.colors.role.surfaceTranslucent',
      },
      {
        name: '--ds-color-control-border',
        light: '#848b98',
        dark: '#6b7280',
        descriptionKey: 'tokens.colors.role.controlBorder',
      },
    ],
  },
  {
    groupKey: 'success',
    colors: [
      { name: '--ds-color-success', light: '#22c55e', dark: '#22c55e' },
      { name: '--ds-color-success-bg', light: '#f0fdf4', dark: '#052e16' },
      { name: '--ds-color-success-border', light: '#86efac', dark: '#166534' },
      { name: '--ds-color-success-text', light: '#166534', dark: '#86efac' },
    ],
  },
  {
    groupKey: 'warning',
    colors: [
      { name: '--ds-color-warning', light: '#f59e0b', dark: '#f59e0b' },
      { name: '--ds-color-warning-bg', light: '#fffbeb', dark: '#2e1a02' },
      { name: '--ds-color-warning-border', light: '#fcd34d', dark: '#92400e' },
      { name: '--ds-color-warning-text', light: '#92400e', dark: '#fcd34d' },
    ],
  },
  {
    groupKey: 'danger',
    colors: [
      { name: '--ds-color-danger', light: '#ef4444', dark: '#ef4444' },
      { name: '--ds-color-danger-50', light: '#fef2f2', dark: '#2a0d0d' },
      { name: '--ds-color-danger-600', light: '#dc2626', dark: '#f87171' },
      { name: '--ds-color-danger-700', light: '#b91c1c', dark: '#fca5a5' },
      { name: '--ds-color-danger-bg', light: '#fef2f2', dark: '#2a0d0d' },
      { name: '--ds-color-danger-border', light: '#fca5a5', dark: '#991b1b' },
      { name: '--ds-color-danger-text', light: '#991b1b', dark: '#fca5a5' },
    ],
  },
  {
    groupKey: 'info',
    colors: [
      { name: '--ds-color-info', light: '#3b82f6', dark: '#3b82f6' },
      { name: '--ds-color-info-bg', light: '#eff6ff', dark: '#0c1e3e' },
      { name: '--ds-color-info-border', light: '#93c5fd', dark: '#1e40af' },
      { name: '--ds-color-info-text', light: '#1e40af', dark: '#93c5fd' },
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

export interface TextToken {
  name: string;
  value: string;
}

export const FONT_FAMILY_TOKENS: TextToken[] = [
  {
    name: '--ds-font-sans',
    value: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
  },
  {
    name: '--ds-font-mono',
    value: 'ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace',
  },
];

export const LINE_HEIGHT_TOKENS: TextToken[] = [
  { name: '--ds-line-height-tight', value: '1.25' },
  { name: '--ds-line-height-snug', value: '1.375' },
  { name: '--ds-line-height-normal', value: '1.5' },
  { name: '--ds-line-height-relaxed', value: '1.625' },
];

export const TRANSITION_TOKENS: TextToken[] = [
  { name: '--ds-transition-fast', value: '100ms ease' },
  { name: '--ds-transition-base', value: '150ms ease' },
  { name: '--ds-transition-slow', value: '300ms ease' },
];

export const BORDER_TOKENS: TextToken[] = [
  { name: '--ds-border-width', value: '1px' },
  { name: '--ds-border-color', value: 'var(--ds-color-neutral-200)' },
];

export interface ThemedToken {
  name: string;
  light: string;
  dark: string;
}

/** v0.4.0부터 포커스 링은 불투명 색을 참조한다. 두 테마가 같은 참조를 쓰고 색 토큰이 테마별 값을 가진다. */
export const FOCUS_RING_TOKENS: ThemedToken[] = [
  {
    name: '--ds-focus-ring-color',
    light: 'var(--ds-color-primary-500)',
    dark: 'var(--ds-color-primary-500)',
  },
  {
    name: '--ds-focus-ring-danger-color',
    light: 'var(--ds-color-danger)',
    dark: 'var(--ds-color-danger)',
  },
  {
    name: '--ds-focus-ring',
    light: '0 0 0 3px var(--ds-focus-ring-color)',
    dark: '0 0 0 3px var(--ds-focus-ring-color)',
  },
];

/**
 * 디자인 토큰이 아니라 스타일시트가 로드됐는지 확인하는 표식.
 * 개발 모드에서 `styles.css` import 누락을 콘솔로 알리는 데 쓴다.
 */
export const LOADED_MARKER_TOKEN: TextToken = { name: '--ds-loaded', value: '1' };

export interface ZIndexToken {
  name: string;
  value: number;
  /** 이 레이어를 쓰는 컴포넌트 */
  usageKey: string;
}

export const Z_INDEX_TOKENS: ZIndexToken[] = [
  { name: '--ds-z-base', value: 0, usageKey: 'tokens.zIndex.usage.base' },
  { name: '--ds-z-dropdown', value: 10, usageKey: 'tokens.zIndex.usage.dropdown' },
  { name: '--ds-z-sticky', value: 20, usageKey: 'tokens.zIndex.usage.sticky' },
  { name: '--ds-z-overlay', value: 50, usageKey: 'tokens.zIndex.usage.overlay' },
  { name: '--ds-z-modal', value: 100, usageKey: 'tokens.zIndex.usage.modal' },
  { name: '--ds-z-popover', value: 200, usageKey: 'tokens.zIndex.usage.popover' },
  { name: '--ds-z-toast', value: 1000, usageKey: 'tokens.zIndex.usage.toast' },
];

export interface ShadowToken {
  name: string;
  light: string;
  dark: string;
}

export const SHADOW_TOKENS: ShadowToken[] = [
  {
    name: '--ds-shadow-sm',
    light: '0 1px 2px 0 rgb(0 0 0 / 0.05)',
    dark: '0 1px 2px 0 rgb(0 0 0 / 0.4)',
  },
  {
    name: '--ds-shadow-md',
    light: '0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)',
    dark: '0 4px 6px -1px rgb(0 0 0 / 0.5), 0 2px 4px -2px rgb(0 0 0 / 0.5)',
  },
  {
    name: '--ds-shadow-lg',
    light: '0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)',
    dark: '0 10px 15px -3px rgb(0 0 0 / 0.6), 0 4px 6px -4px rgb(0 0 0 / 0.6)',
  },
];

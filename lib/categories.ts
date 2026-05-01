export const CATEGORIES = [
  'layout',
  'typography',
  'core',
  'form',
  'feedback',
  'data-display',
  'navigation',
  'overlay',
] as const;

export type Category = (typeof CATEGORIES)[number];

export const CATEGORY_LABEL_KEY: Record<Category, string> = {
  layout: 'categories.layout',
  typography: 'categories.typography',
  core: 'categories.core',
  form: 'categories.form',
  feedback: 'categories.feedback',
  'data-display': 'categories.dataDisplay',
  navigation: 'categories.navigation',
  overlay: 'categories.overlay',
};

export function isCategory(value: string): value is Category {
  return (CATEGORIES as readonly string[]).includes(value);
}

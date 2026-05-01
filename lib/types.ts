import type { ReactNode } from 'react';
import type { Category } from './categories';

export type ComponentStatus = 'stable' | 'beta' | 'deprecated';

export type ExampleTab = 'default' | 'variants' | 'states' | 'real-world';

export interface PropDef {
  name: string;
  type: string;
  default: string;
  required: boolean;
  descriptionKey: string;
}

export interface ComponentExample {
  tab: ExampleTab;
  titleKey?: string;
  preview: ReactNode;
  code: string;
}

export interface BestPracticeItem {
  key: string;
}

export interface BestPractices {
  do: BestPracticeItem[];
  dont: BestPracticeItem[];
}

export interface ComponentDoc {
  category: Category;
  name: string;
  slug: string;
  status: ComponentStatus;
  descriptionKey: string;
  importStatement: string;
  props: PropDef[];
  examples: ComponentExample[];
  bestPractices: BestPractices;
  a11yNotesKey?: string;
  related: string[];
}

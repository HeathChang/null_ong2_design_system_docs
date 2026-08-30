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

/** 전체 메시지 키를 받아 번역문을 돌려주는 함수. 코드 예시의 주석 번역에 쓴다. */
export type CodeComment = (key: string) => string;

export interface ComponentExample {
  tab: ExampleTab;
  titleKey?: string;
  preview: ReactNode;
  /**
   * 코드 문자열. 설명 주석이 들어가면 함수 형태로 넘겨
   * 주석만 화면 언어를 따라가게 한다 (UI 문구는 그대로 둔다).
   */
  code: string | ((c: CodeComment) => string);
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

import { defineRouting } from 'next-intl/routing';

/**
 * 문서 사이트 로케일.
 * 디자인 시스템 내장 문자열(`DS_LOCALES`)과 같은 4종을 지원한다.
 */
export const LOCALES = ['ko', 'en', 'ja', 'zh'] as const;
export type Locale = (typeof LOCALES)[number];
export const DEFAULT_LOCALE: Locale = 'ko';

export const routing = defineRouting({
  locales: LOCALES,
  defaultLocale: DEFAULT_LOCALE,
  localePrefix: 'always',
});

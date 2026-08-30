/**
 * 문서 사이트의 테마 선택.
 *
 * 디자인 시스템은 `[data-theme="dark"]` / `[data-theme="light"]`를 강제 지정으로,
 * 속성이 없으면 `prefers-color-scheme`을 따르도록 되어 있다.
 * 사이트는 그 규약에 그대로 올라타므로 `<html>`의 속성 하나만 관리하면
 * 사이트 UI와 데모 안의 컴포넌트가 같이 전환된다.
 */
export const THEME_CHOICES = ['light', 'dark', 'system'] as const;

export type ThemeChoice = (typeof THEME_CHOICES)[number];

export const DEFAULT_THEME_CHOICE: ThemeChoice = 'system';

export const THEME_STORAGE_KEY = 'preferred-theme';

export function isThemeChoice(value: unknown): value is ThemeChoice {
  return typeof value === 'string' && (THEME_CHOICES as readonly string[]).includes(value);
}

/** 선택을 `<html>`에 반영한다. `system`이면 속성을 지워 OS 설정으로 되돌린다. */
export function applyThemeChoice(choice: ThemeChoice): void {
  const root = document.documentElement;
  if (choice === 'system') {
    root.removeAttribute('data-theme');
    return;
  }
  root.setAttribute('data-theme', choice);
}

export function readStoredThemeChoice(): ThemeChoice {
  try {
    const stored = window.localStorage.getItem(THEME_STORAGE_KEY);
    return isThemeChoice(stored) ? stored : DEFAULT_THEME_CHOICE;
  } catch {
    // 시크릿 모드·저장소 차단 환경에서는 접근 자체가 throw한다.
    return DEFAULT_THEME_CHOICE;
  }
}

/**
 * 하이드레이션 전에 실행돼야 하는 스크립트.
 *
 * React가 붙기를 기다리면 라이트 테마가 한 프레임 그려졌다가 다크로 바뀌는
 * 흰 화면 번쩍임(FOUC)이 생긴다. `<head>`에서 동기 실행한다.
 */
export const THEME_INIT_SCRIPT = `(function(){try{var v=localStorage.getItem('${THEME_STORAGE_KEY}');if(v==='dark'||v==='light'){document.documentElement.setAttribute('data-theme',v)}}catch(e){}})()`;

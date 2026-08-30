'use client';

import { useEffect, useState } from 'react';
import { useTranslations } from 'next-intl';
import {
  DEFAULT_THEME_CHOICE,
  THEME_CHOICES,
  THEME_STORAGE_KEY,
  applyThemeChoice,
  readStoredThemeChoice,
  type ThemeChoice,
} from '@/lib/theme';

const ICON: Record<ThemeChoice, string> = {
  light: '☀',
  dark: '☾',
  system: '⌗',
};

export function ThemeToggle() {
  const t = useTranslations('themeToggle');
  /*
   * 서버는 저장된 선택을 알 수 없으므로 항상 기본값으로 그린다.
   * 실제 색은 <head>의 동기 스크립트가 이미 맞춰 놨고,
   * 여기서는 "어느 버튼이 선택 상태로 보이는가"만 마운트 후 보정한다.
   */
  const [choice, setChoice] = useState<ThemeChoice>(DEFAULT_THEME_CHOICE);

  useEffect(() => {
    setChoice(readStoredThemeChoice());
  }, []);

  // 다른 탭에서 테마를 바꾸면 이 탭도 따라간다.
  useEffect(() => {
    function handleStorage(event: StorageEvent) {
      if (event.key !== THEME_STORAGE_KEY) return;
      const next = readStoredThemeChoice();
      setChoice(next);
      applyThemeChoice(next);
    }
    window.addEventListener('storage', handleStorage);
    return () => window.removeEventListener('storage', handleStorage);
  }, []);

  function handleSelect(next: ThemeChoice) {
    setChoice(next);
    applyThemeChoice(next);
    try {
      window.localStorage.setItem(THEME_STORAGE_KEY, next);
    } catch {
      // 저장에 실패해도 이번 세션의 전환은 이미 적용됐다.
    }
  }

  return (
    <div
      role="group"
      aria-label={t('label')}
      className="inline-flex items-center gap-0.5 rounded-md border border-site-border p-0.5"
    >
      {THEME_CHOICES.map((value) => {
        const isActive = value === choice;
        return (
          <button
            key={value}
            type="button"
            onClick={() => handleSelect(value)}
            aria-pressed={isActive}
            title={t(value)}
            className={`inline-flex h-7 w-7 items-center justify-center rounded text-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 ${
              isActive ? 'bg-site-fg/10 text-site-fg' : 'text-site-muted hover:text-site-fg'
            }`}
          >
            <span aria-hidden="true">{ICON[value]}</span>
            <span className="sr-only">{t(value)}</span>
          </button>
        );
      })}
    </div>
  );
}

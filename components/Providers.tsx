'use client';

import type { ReactNode } from 'react';
import { useLocale } from 'next-intl';
import { DesignSystemProvider, ToastProvider, type DsLocale } from 'null_ong2-design-system';

interface ProvidersProps {
  children: ReactNode;
}

/** 문서 사이트의 로케일은 디자인 시스템 내장 로케일과 이름이 같다. */
const DS_LOCALES: readonly DsLocale[] = ['ko', 'en', 'ja', 'zh'];

function toDsLocale(value: string): DsLocale {
  return (DS_LOCALES as readonly string[]).includes(value) ? (value as DsLocale) : 'ko';
}

export function Providers({ children }: ProvidersProps) {
  const locale = useLocale();

  /*
   * ToastProvider가 자기 영역 레이블을 useDsStrings()로 읽으므로
   * DesignSystemProvider가 반드시 바깥에 있어야 한다.
   */
  return (
    <DesignSystemProvider locale={toDsLocale(locale)}>
      <ToastProvider position="top-right">{children}</ToastProvider>
    </DesignSystemProvider>
  );
}

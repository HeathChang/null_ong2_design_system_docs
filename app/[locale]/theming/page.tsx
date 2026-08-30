import { setRequestLocale, getTranslations } from 'next-intl/server';
import { CodeBlock } from '@/components/CodeBlock';
import { LOCALES, type Locale } from '@/lib/i18n/routing';

interface ThemingPageProps {
  params: Promise<{ locale: string }>;
}

function isLocale(value: string): value is Locale {
  return (LOCALES as readonly string[]).includes(value);
}

/** 코드 예시 안의 주석도 화면 언어를 따라간다. */
type CodeComment = (key: string) => string;

const overrideCode = (c: CodeComment) => `:root {
  /* ${c('brandPurple')} */
  --ds-color-primary-500: #8b5cf6;
  --ds-color-primary-600: #7c3aed;
  --ds-color-primary-700: #6d28d9;
  --ds-color-primary-800: #5b21b6;

  /* ${c('rounder')} */
  --ds-radius-md: 0.5rem;
  --ds-radius-lg: 0.75rem;

  /* ${c('customFont')} */
  --ds-font-sans: 'Pretendard', -apple-system, sans-serif;
}`;

const darkModeCode = (c: CodeComment) => `<!-- 1. ${c('activationAuto')} -->
<html>

<!-- 2. ${c('activationDark')} -->
<html data-theme="dark">
<html class="dark">

<!-- 3. ${c('activationLight')} -->
<html data-theme="light">
<html class="light">`;

const darkOverrideCode = (c: CodeComment) => `/* ${c('lightValue')} */
:root {
  --ds-color-primary-600: #7c3aed;
}

/* ${c('darkValue')} */
@media (prefers-color-scheme: dark) {
  :root:not(.light):not([data-theme='light']) {
    --ds-color-primary-600: #a78bfa;
  }
}

:root.dark,
:root[data-theme='dark'] {
  --ds-color-primary-600: #a78bfa;
}`;

const toggleCode = (c: CodeComment) => `'use client';

import { useEffect, useState } from 'react';

type ThemeChoice = 'light' | 'dark' | 'system';

export function ThemeToggle() {
  const [choice, setChoice] = useState<ThemeChoice>('system');

  useEffect(() => {
    const stored = localStorage.getItem('theme');
    if (stored === 'light' || stored === 'dark') setChoice(stored);
  }, []);

  function select(next: ThemeChoice) {
    setChoice(next);
    localStorage.setItem('theme', next);
    // ${c('systemRemovesAttr')}
    if (next === 'system') document.documentElement.removeAttribute('data-theme');
    else document.documentElement.setAttribute('data-theme', next);
  }

  return (
    <div role="group" aria-label="테마">
      <button type="button" aria-pressed={choice === 'light'} onClick={() => select('light')}>
        라이트
      </button>
      <button type="button" aria-pressed={choice === 'dark'} onClick={() => select('dark')}>
        다크
      </button>
      <button type="button" aria-pressed={choice === 'system'} onClick={() => select('system')}>
        시스템
      </button>
    </div>
  );
}`;

const foucCode = (c: CodeComment) => `// ${c('foucSync')}
const THEME_INIT = \`(function(){try{
  var v = localStorage.getItem('theme');
  if (v === 'dark' || v === 'light') {
    document.documentElement.setAttribute('data-theme', v);
  }
}catch(e){}})()\`;

export default function RootLayout({ children }) {
  return (
    <html suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: THEME_INIT }} />
      </head>
      <body>{children}</body>
    </html>
  );
}`;

const scopedCode = (c: CodeComment) => `/* ${c('scopedSelector')} */
.promo-panel {
  --ds-color-primary-600: #059669;
  --ds-radius-md: 9999px;
}`;

/* 다크 토큰 세트 전체를 한 구역에만 적용하고 싶을 때 */
const scopedMarkupCode = (c: CodeComment) => `<!-- ${c('scopedAnyElement')} -->
<section data-theme="dark">
  <!-- ${c('scopedInside')} -->
</section>`;

const roleTokenCode = (c: CodeComment) => `.my-cta {
  background-color: var(--ds-color-primary-600);
  /* ${c('roleTokenWhy')} */
  color: var(--ds-color-on-primary);
}`;

export default async function ThemingPage({ params }: ThemingPageProps) {
  const { locale } = await params;
  if (isLocale(locale)) setRequestLocale(locale);
  const t = await getTranslations('theming');
  const c: CodeComment = (key) => t(`code.${key}`);

  return (
    <main className="flex flex-col gap-12 px-6 py-12 md:px-10">
      <header className="flex flex-col gap-3 border-b border-site-border pb-6">
        <h1 className="text-3xl font-bold">{t('title')}</h1>
        <p className="max-w-2xl text-base text-site-muted">{t('intro')}</p>
      </header>

      <section aria-labelledby="overview" className="flex flex-col gap-3">
        <h2 id="overview" className="text-2xl font-semibold">{t('overview.title')}</h2>
        <p className="max-w-3xl text-sm text-site-fg">{t('overview.body')}</p>
      </section>

      <section aria-labelledby="example" className="flex flex-col gap-3">
        <h2 id="example" className="text-2xl font-semibold">{t('example.title')}</h2>
        <p className="text-sm text-site-muted">{t('example.intro')}</p>
        <CodeBlock code={overrideCode(c)} language="css" />
      </section>

      <section aria-labelledby="dark-mode" className="flex flex-col gap-6">
        <div className="flex flex-col gap-3">
          <h2 id="dark-mode" className="text-2xl font-semibold">{t('darkMode.title')}</h2>
          <p className="max-w-3xl text-sm text-site-fg">{t('darkMode.body')}</p>
          <p className="max-w-3xl rounded-md border border-site-border bg-site-muted/5 p-4 text-sm text-site-muted">
            {t('darkMode.tryIt')}
          </p>
        </div>

        <div className="flex flex-col gap-3">
          <h3 className="text-lg font-semibold">{t('darkMode.activation.title')}</h3>
          <p className="max-w-3xl text-sm text-site-muted">{t('darkMode.activation.body')}</p>
          <CodeBlock code={darkModeCode(c)} language="html" />
        </div>

        <div className="flex flex-col gap-3">
          <h3 className="text-lg font-semibold">{t('darkMode.roleTokens.title')}</h3>
          <p className="max-w-3xl text-sm text-site-muted">{t('darkMode.roleTokens.body')}</p>
          <CodeBlock code={roleTokenCode(c)} language="css" />
        </div>

        <div className="flex flex-col gap-3">
          <h3 className="text-lg font-semibold">{t('darkMode.overriding.title')}</h3>
          <p className="max-w-3xl text-sm text-site-muted">{t('darkMode.overriding.body')}</p>
          <CodeBlock code={darkOverrideCode(c)} language="css" />
        </div>

        <div className="flex flex-col gap-3">
          <h3 className="text-lg font-semibold">{t('darkMode.toggle.title')}</h3>
          <p className="max-w-3xl text-sm text-site-muted">{t('darkMode.toggle.body')}</p>
          <CodeBlock code={toggleCode(c)} language="tsx" />
        </div>

        <div className="flex flex-col gap-3">
          <h3 className="text-lg font-semibold">{t('darkMode.fouc.title')}</h3>
          <p className="max-w-3xl text-sm text-site-muted">{t('darkMode.fouc.body')}</p>
          <CodeBlock code={foucCode(c)} language="tsx" />
        </div>
      </section>

      <section aria-labelledby="scope" className="flex flex-col gap-3">
        <h2 id="scope" className="text-2xl font-semibold">{t('scope.title')}</h2>
        <p className="max-w-3xl text-sm text-site-fg">{t('scope.body')}</p>
        <CodeBlock code={scopedCode(c)} language="css" />
        <CodeBlock code={scopedMarkupCode(c)} language="html" />
      </section>

      <section aria-labelledby="future" className="flex flex-col gap-3 rounded-lg border border-dashed border-site-border p-5">
        <h2 id="future" className="text-xl font-semibold">{t('futureBuilder.title')}</h2>
        <p className="max-w-3xl text-sm text-site-muted">{t('futureBuilder.body')}</p>
      </section>
    </main>
  );
}

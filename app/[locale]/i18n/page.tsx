import { setRequestLocale, getTranslations } from 'next-intl/server';
import { CodeBlock } from '@/components/CodeBlock';
import { DsStringsTable } from '@/components/DsStringsTable';
import { LOCALES, type Locale } from '@/lib/i18n/routing';

interface I18nPageProps {
  params: Promise<{ locale: string }>;
}

function isLocale(value: string): value is Locale {
  return (LOCALES as readonly string[]).includes(value);
}

/** 코드 예시 안의 주석도 화면 언어를 따라간다. */
type CodeComment = (key: string) => string;

const setupCode = (c: CodeComment) => `import { DesignSystemProvider } from 'null_ong2-design-system';

export function App() {
  return (
    <DesignSystemProvider locale="en">
      {/* ${c('englishStrings')} */}
      <Routes />
    </DesignSystemProvider>
  );
}`;

const nextCode = (c: CodeComment) => `// app/providers.tsx
'use client';

import type { ReactNode } from 'react';
import { DesignSystemProvider, ToastProvider } from 'null_ong2-design-system';

export function Providers({ locale, children }: { locale: 'ko' | 'en' | 'ja' | 'zh'; children: ReactNode }) {
  // ${c('toastOutside')}
  return (
    <DesignSystemProvider locale={locale}>
      <ToastProvider>{children}</ToastProvider>
    </DesignSystemProvider>
  );
}

// app/[locale]/layout.tsx
import 'null_ong2-design-system/styles.css';
import { Providers } from '../providers';

export default async function LocaleLayout({ children, params }) {
  const { locale } = await params;
  return (
    <html lang={locale}>
      <body>
        <Providers locale={locale}>{children}</Providers>
      </body>
    </html>
  );
}`;

const localeListCode = (c: CodeComment) => `import { DEFAULT_LOCALE, DS_LOCALES } from 'null_ong2-design-system';
import type { DsLocale } from 'null_ong2-design-system';

// ${c('buildPicker')}
const locales = Object.keys(DS_LOCALES) as DsLocale[];  // ['ko', 'en', 'ja', 'zh']

DEFAULT_LOCALE;  // 'ko'`;

const overrideCode = (c: CodeComment) => `// ${c('onlyGivenKeys')}
<DesignSystemProvider locale="en" strings={{ close: 'Dismiss', toastClose: 'Dismiss alert' }}>
  <App />
</DesignSystemProvider>`;

const customLocaleCode = (c: CodeComment) => `import { DesignSystemProvider, EN_STRINGS, type DsStrings } from 'null_ong2-design-system';

// ${c('fillAllKeys')}
const FR_STRINGS: DsStrings = {
  ...EN_STRINGS,
  close: 'Fermer',
  loading: 'Chargement',
  avatarFallback: "Avatar de l'utilisateur",
  // ${c('restOfKeys')}
};

<DesignSystemProvider strings={FR_STRINGS}>
  <App />
</DesignSystemProvider>`;

const consumerCode = (c: CodeComment) => `'use client';

import { useDsFormat, useDsStrings } from 'null_ong2-design-system';

function SaveButton() {
  const strings = useDsStrings();
  return <button aria-label={strings.close}>×</button>;
}

function SlideLabel({ index }: { index: number }) {
  const t = useDsFormat();
  // ${c('formatResult')}: '슬라이드 3' / 'Slide 3' / 'スライド 3' / '第 3 张'
  return <span>{t('carouselGoToSlide', { index })}</span>;
}`;

const FORMAT_CODE = `import { formatString, KO_STRINGS } from 'null_ong2-design-system';

formatString(KO_STRINGS.carouselSlide, { index: 2, total: 5 }); // '2 / 5'`;

export default async function I18nPage({ params }: I18nPageProps) {
  const { locale } = await params;
  if (isLocale(locale)) setRequestLocale(locale);
  const t = await getTranslations('i18n');
  const c: CodeComment = (key) => t(`code.${key}`);

  return (
    <main className="flex flex-col gap-12 px-6 py-12 md:px-10">
      <header className="flex flex-col gap-3 border-b border-site-border pb-6">
        <h1 className="text-3xl font-bold">{t('title')}</h1>
        <p className="max-w-2xl text-base text-site-muted">{t('intro')}</p>
      </header>

      <section aria-labelledby="why" className="flex flex-col gap-3">
        <h2 id="why" className="text-2xl font-semibold">{t('why.title')}</h2>
        <p className="max-w-3xl text-sm text-site-fg">{t('why.body')}</p>
      </section>

      <section aria-labelledby="setup" className="flex flex-col gap-3">
        <h2 id="setup" className="text-2xl font-semibold">{t('setup.title')}</h2>
        <p className="max-w-3xl text-sm text-site-muted">{t('setup.intro')}</p>
        <CodeBlock code={setupCode(c)} language="tsx" />
        <p className="max-w-3xl rounded-md border border-site-border bg-site-muted/5 p-4 text-sm text-site-muted">
          {t('setup.optional')}
        </p>
        <p className="max-w-3xl text-sm text-site-muted">{t('setup.localeList')}</p>
        <CodeBlock code={localeListCode(c)} language="tsx" />
      </section>

      <section aria-labelledby="next" className="flex flex-col gap-3">
        <h2 id="next" className="text-2xl font-semibold">{t('next.title')}</h2>
        <p className="max-w-3xl text-sm text-site-muted">{t('next.intro')}</p>
        <CodeBlock code={nextCode(c)} language="tsx" />
      </section>

      <section aria-labelledby="strings" className="flex flex-col gap-3">
        <h2 id="strings" className="text-2xl font-semibold">{t('strings.title')}</h2>
        <p className="max-w-3xl text-sm text-site-muted">{t('strings.intro')}</p>
        <DsStringsTable />
      </section>

      <section aria-labelledby="override" className="flex flex-col gap-6">
        <div className="flex flex-col gap-3">
          <h2 id="override" className="text-2xl font-semibold">{t('override.title')}</h2>
          <p className="max-w-3xl text-sm text-site-muted">{t('override.intro')}</p>
          <CodeBlock code={overrideCode(c)} language="tsx" />
        </div>
        <div className="flex flex-col gap-3">
          <h3 className="text-lg font-semibold">{t('override.customLocale.title')}</h3>
          <p className="max-w-3xl text-sm text-site-muted">{t('override.customLocale.body')}</p>
          <CodeBlock code={customLocaleCode(c)} language="tsx" />
        </div>
      </section>

      <section aria-labelledby="consumer" className="flex flex-col gap-3">
        <h2 id="consumer" className="text-2xl font-semibold">{t('consumer.title')}</h2>
        <p className="max-w-3xl text-sm text-site-muted">{t('consumer.intro')}</p>
        <CodeBlock code={consumerCode(c)} language="tsx" />
        <CodeBlock code={FORMAT_CODE} language="tsx" />
      </section>

      <section aria-labelledby="caveats" className="flex flex-col gap-3">
        <h2 id="caveats" className="text-2xl font-semibold">{t('caveats.title')}</h2>
        <ul className="flex max-w-3xl list-disc flex-col gap-2 pl-5 text-sm text-site-fg">
          <li>{t('caveats.noAutoDetect')}</li>
          <li>{t('caveats.defaultKo')}</li>
          <li>{t('caveats.contentStrings')}</li>
        </ul>
      </section>
    </main>
  );
}

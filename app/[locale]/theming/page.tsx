import { setRequestLocale, getTranslations } from 'next-intl/server';
import { CodeBlock } from '@/components/CodeBlock';
import { LOCALES, type Locale } from '@/lib/i18n/routing';

interface ThemingPageProps {
  params: Promise<{ locale: string }>;
}

function isLocale(value: string): value is Locale {
  return (LOCALES as readonly string[]).includes(value);
}

const OVERRIDE_CODE = `:root {
  /* 브랜드 색상을 보라색으로 */
  --ds-color-primary-500: #8b5cf6;
  --ds-color-primary-600: #7c3aed;
  --ds-color-primary-700: #6d28d9;

  /* 모서리를 더 둥글게 */
  --ds-radius-md: 0.5rem;
  --ds-radius-lg: 0.75rem;

  /* 커스텀 폰트 */
  --ds-font-sans: 'Pretendard', -apple-system, sans-serif;
}`;

const SCOPED_CODE = `.dark-section {
  --ds-color-neutral-0: #1f2937;
  --ds-color-neutral-100: #374151;
  --ds-color-neutral-900: #f9fafb;
}`;

export default async function ThemingPage({ params }: ThemingPageProps) {
  const { locale } = await params;
  if (isLocale(locale)) setRequestLocale(locale);
  const t = await getTranslations('theming');

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
        <CodeBlock code={OVERRIDE_CODE} language="css" />
      </section>

      <section aria-labelledby="scope" className="flex flex-col gap-3">
        <h2 id="scope" className="text-2xl font-semibold">{t('scope.title')}</h2>
        <p className="max-w-3xl text-sm text-site-fg">{t('scope.body')}</p>
        <CodeBlock code={SCOPED_CODE} language="css" />
      </section>

      <section aria-labelledby="future" className="flex flex-col gap-3 rounded-lg border border-dashed border-site-border p-5">
        <h2 id="future" className="text-xl font-semibold">{t('futureBuilder.title')}</h2>
        <p className="max-w-3xl text-sm text-site-muted">{t('futureBuilder.body')}</p>
      </section>
    </main>
  );
}

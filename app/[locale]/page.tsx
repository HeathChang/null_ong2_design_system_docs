import { Alert, Badge, Button, Input, Stack, Switch } from 'null_ong2-design-system';
import { setRequestLocale, getTranslations } from 'next-intl/server';
import { CodeBlock } from '@/components/CodeBlock';
import { Link } from '@/lib/i18n/navigation';
import { LOCALES, type Locale } from '@/lib/i18n/routing';

interface HomePageProps {
  params: Promise<{ locale: string }>;
}

function isLocale(value: string): value is Locale {
  return (LOCALES as readonly string[]).includes(value);
}

/** 코드 예시 안의 주석도 화면 언어를 따라간다. */
type CodeComment = (key: string) => string;

const heroCode = (c: CodeComment) => `// ${c('styleOnce')}
import 'null_ong2-design-system/styles.css';

import { Button } from 'null_ong2-design-system';

export function Save() {
  return <Button variant="primary">저장</Button>;
}`;

const FEATURE_KEYS = [
  'rscReady',
  'treeShakable',
  'a11y',
  'darkMode',
  'i18n',
  'typeSafe',
] as const;

/**
 * `npm run size`(size-limit)의 실제 측정값.
 * minify + brotli 기준이며, peer dependency인 React는 포함하지 않는다.
 */
interface BundleRow {
  importKey: string;
  imports: string;
  size: string;
}

const BUNDLE_ROWS: BundleRow[] = [
  { importKey: 'button', imports: 'import { Button }', size: '2.44 kB' },
  { importKey: 'modal', imports: 'import { Modal }', size: '3.87 kB' },
  { importKey: 'all', imports: 'import * as ds', size: '30.56 kB' },
  { importKey: 'css', imports: 'styles.css', size: '4.47 kB' },
];

export default async function HomePage({ params }: HomePageProps) {
  const { locale } = await params;
  if (isLocale(locale)) setRequestLocale(locale);
  const t = await getTranslations('home');
  const c: CodeComment = (key) => t(`code.${key}`);

  return (
    <main className="flex flex-col gap-16 px-6 py-12 md:px-10">
      <section aria-labelledby="hero-title" className="flex flex-col gap-6">
        <h1 id="hero-title" className="text-4xl font-bold leading-tight md:text-5xl">
          {t('hero.title')}
        </h1>
        <p className="max-w-2xl text-lg text-site-muted">{t('hero.subtitle')}</p>
        <div className="max-w-xl">
          <CodeBlock code={heroCode(c)} language="tsx" />
        </div>
        <Link
          href="/getting-started"
          className="inline-flex w-fit items-center rounded-md bg-site-fg px-4 py-2 text-sm font-medium text-site-bg hover:opacity-90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
        >
          {t('hero.cta')}
        </Link>
      </section>

      <section aria-labelledby="features-title" className="flex flex-col gap-6">
        <h2 id="features-title" className="text-2xl font-semibold">
          {t('features.title')}
        </h2>
        <ul className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
          {FEATURE_KEYS.map((key) => (
            <li
              key={key}
              className="rounded-lg border border-site-border p-5"
            >
              <h3 className="mb-2 text-base font-semibold">{t(`features.${key}.title`)}</h3>
              <p className="text-sm text-site-muted">{t(`features.${key}.description`)}</p>
            </li>
          ))}
        </ul>
      </section>

      <section aria-labelledby="bundle-title" className="flex flex-col gap-4">
        <div className="flex flex-col gap-1">
          <h2 id="bundle-title" className="text-2xl font-semibold">
            {t('bundle.title')}
          </h2>
          <p className="max-w-3xl text-sm text-site-muted">{t('bundle.subtitle')}</p>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full max-w-2xl border-collapse text-left text-sm">
            <caption className="sr-only">{t('bundle.caption')}</caption>
            <thead className="border-b border-site-border bg-site-muted/5">
              <tr>
                <th scope="col" className="px-4 py-2 font-semibold">{t('bundle.headings.import')}</th>
                <th scope="col" className="px-4 py-2 font-semibold">{t('bundle.headings.size')}</th>
              </tr>
            </thead>
            <tbody>
              {BUNDLE_ROWS.map((row) => (
                <tr key={row.importKey} className="border-b border-site-border last:border-b-0">
                  <td className="px-4 py-2 font-mono text-xs">{row.imports}</td>
                  <td className="px-4 py-2 font-mono text-xs">{row.size}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section aria-labelledby="quick-look-title" className="flex flex-col gap-6">
        <div className="flex flex-col gap-1">
          <h2 id="quick-look-title" className="text-2xl font-semibold">
            {t('quickLook.title')}
          </h2>
          <p className="text-sm text-site-muted">{t('quickLook.subtitle')}</p>
        </div>
        <div className="rounded-lg border border-site-border p-6">
          <Stack spacing="lg">
            <Alert variant="info">{t('quickLook.alertMessage')}</Alert>
            <Input
              id="quick-look-email"
              type="email"
              label={t('quickLook.inputLabel')}
              placeholder={t('quickLook.inputPlaceholder')}
            />
            <Stack direction="row" spacing="sm">
              <Button variant="primary">Primary</Button>
              <Button variant="secondary">Secondary</Button>
              <Badge variant="success">Active</Badge>
              <Badge variant="danger">99+</Badge>
            </Stack>
            <Switch id="quick-look-switch" label={t('quickLook.switchLabel')} defaultChecked />
          </Stack>
        </div>
      </section>
    </main>
  );
}

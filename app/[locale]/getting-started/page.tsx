import { setRequestLocale, getTranslations } from 'next-intl/server';
import { CodeBlock } from '@/components/CodeBlock';
import { LOCALES, type Locale } from '@/lib/i18n/routing';

interface GettingStartedPageProps {
  params: Promise<{ locale: string }>;
}

function isLocale(value: string): value is Locale {
  return (LOCALES as readonly string[]).includes(value);
}

const INSTALL_CODE = `npm install null_ong2-design-system`;

const FIRST_USE_CODE = `import { Button, Input, Stack } from 'null_ong2-design-system';

export function LoginForm() {
  return (
    <Stack spacing="md">
      <Input id="email" label="이메일" type="email" required />
      <Input id="password" label="비밀번호" type="password" required />
      <Button variant="primary">로그인</Button>
    </Stack>
  );
}`;

const TOAST_PROVIDER_CODE = `import { ToastProvider } from 'null_ong2-design-system';
import 'null_ong2-design-system/styles.css';

export default function RootLayout({ children }) {
  return (
    <html>
      <body>
        <ToastProvider position="top-right">{children}</ToastProvider>
      </body>
    </html>
  );
}`;

const THEMING_CODE = `:root {
  --ds-color-primary-500: #8b5cf6;
  --ds-color-primary-600: #7c3aed;
  --ds-color-primary-700: #6d28d9;
  --ds-radius-md: 8px;
}`;

const FAQ_KEYS = ['1', '2', '3', '4', '5'] as const;

export default async function GettingStartedPage({ params }: GettingStartedPageProps) {
  const { locale } = await params;
  if (isLocale(locale)) setRequestLocale(locale);
  const t = await getTranslations('gettingStarted');

  return (
    <main className="flex flex-col gap-12 px-6 py-12 md:px-10">
      <header className="flex flex-col gap-3 border-b border-site-border pb-6">
        <h1 className="text-3xl font-bold">{t('title')}</h1>
        <p className="max-w-2xl text-base text-site-muted">{t('intro')}</p>
      </header>

      <section aria-labelledby="install" className="flex flex-col gap-3">
        <h2 id="install" className="text-2xl font-semibold">
          {t('install.title')}
        </h2>
        <p className="text-sm text-site-muted">{t('install.intro')}</p>
        <CodeBlock code={INSTALL_CODE} language="bash" />
      </section>

      <section aria-labelledby="first-use" className="flex flex-col gap-3">
        <h2 id="first-use" className="text-2xl font-semibold">
          {t('firstUse.title')}
        </h2>
        <p className="text-sm text-site-muted">{t('firstUse.intro')}</p>
        <CodeBlock code={FIRST_USE_CODE} language="tsx" />
      </section>

      <section aria-labelledby="toast-provider" className="flex flex-col gap-3">
        <h2 id="toast-provider" className="text-2xl font-semibold">
          {t('toastProvider.title')}
        </h2>
        <p className="text-sm text-site-muted">{t('toastProvider.intro')}</p>
        <CodeBlock code={TOAST_PROVIDER_CODE} language="tsx" />
      </section>

      <section aria-labelledby="theming" className="flex flex-col gap-3">
        <h2 id="theming" className="text-2xl font-semibold">
          {t('theming.title')}
        </h2>
        <p className="text-sm text-site-muted">{t('theming.intro')}</p>
        <CodeBlock code={THEMING_CODE} language="css" />
      </section>

      <section aria-labelledby="faq" className="flex flex-col gap-3">
        <h2 id="faq" className="text-2xl font-semibold">
          {t('faq.title')}
        </h2>
        <ul className="flex flex-col gap-2">
          {FAQ_KEYS.map((id) => (
            <li key={id}>
              <details className="rounded-lg border border-site-border p-4">
                <summary className="cursor-pointer text-base font-medium focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2">
                  {t(`faq.items.${id}.question`)}
                </summary>
                <p className="mt-2 text-sm text-site-muted">{t(`faq.items.${id}.answer`)}</p>
              </details>
            </li>
          ))}
        </ul>
      </section>
    </main>
  );
}

import type { Metadata } from 'next';
import type { ReactNode } from 'react';
import { notFound } from 'next/navigation';
import { NextIntlClientProvider } from 'next-intl';
import { getMessages, getTranslations, setRequestLocale } from 'next-intl/server';
import { Providers } from '@/components/Providers';
import { Header } from '@/components/Header';
import { Sidebar } from '@/components/Sidebar';
import { Footer } from '@/components/Footer';
import { LOCALES, type Locale } from '@/lib/i18n/routing';
import 'null_ong2-design-system/styles.css';
import '../globals.css';

interface LocaleLayoutProps {
  children: ReactNode;
  params: Promise<{ locale: string }>;
}

export function generateStaticParams() {
  return LOCALES.map((locale) => ({ locale }));
}

function isLocale(value: string): value is Locale {
  return (LOCALES as readonly string[]).includes(value);
}

export async function generateMetadata({ params }: LocaleLayoutProps): Promise<Metadata> {
  const { locale } = await params;
  if (!isLocale(locale)) return {};
  const t = await getTranslations({ locale, namespace: 'site' });
  return {
    title: t('title'),
    description: t('description'),
  };
}

export default async function LocaleLayout({ children, params }: LocaleLayoutProps) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  setRequestLocale(locale);

  const messages = await getMessages();

  return (
    <html lang={locale}>
      <body className="flex min-h-screen flex-col font-sans antialiased">
        <NextIntlClientProvider locale={locale} messages={messages}>
          <Providers>
            <Header />
            <div className="mx-auto flex w-full max-w-screen-xl flex-1">
              <Sidebar />
              <div className="flex-1">{children}</div>
            </div>
            <Footer />
          </Providers>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}

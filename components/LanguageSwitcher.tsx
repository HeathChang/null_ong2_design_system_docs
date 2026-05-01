'use client';

import { useTransition } from 'react';
import { useLocale, useTranslations } from 'next-intl';
import { usePathname, useRouter } from '@/lib/i18n/navigation';
import { LOCALES, type Locale } from '@/lib/i18n/routing';

const STORAGE_KEY = 'preferred-locale';

export function LanguageSwitcher() {
  const t = useTranslations('languageSwitcher');
  const currentLocale = useLocale() as Locale;
  const router = useRouter();
  const pathname = usePathname();
  const [isPending, startTransition] = useTransition();

  function handleChange(event: React.ChangeEvent<HTMLSelectElement>) {
    const next = event.target.value as Locale;
    if (next === currentLocale) return;
    if (typeof window !== 'undefined') {
      window.localStorage.setItem(STORAGE_KEY, next);
    }
    startTransition(() => {
      router.replace(pathname, { locale: next });
    });
  }

  return (
    <label className="inline-flex items-center gap-2 text-sm">
      <span className="sr-only">{t('label')}</span>
      <select
        aria-label={t('label')}
        value={currentLocale}
        onChange={handleChange}
        disabled={isPending}
        className="rounded-md border border-site-border bg-site-bg px-2 py-1 text-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
      >
        {LOCALES.map((locale) => (
          <option key={locale} value={locale}>
            {t(locale)}
          </option>
        ))}
      </select>
    </label>
  );
}

import { getRequestConfig } from 'next-intl/server';
import type { AbstractIntlMessages } from 'next-intl';
import { DEFAULT_LOCALE, LOCALES, type Locale } from './routing';

function isLocale(value: string): value is Locale {
  return (LOCALES as readonly string[]).includes(value);
}

async function loadMessages(locale: Locale): Promise<AbstractIntlMessages> {
  const mod = (await import(`@/messages/${locale}.json`)) as { default: AbstractIntlMessages };
  return mod.default;
}

export default getRequestConfig(async ({ requestLocale }) => {
  const requested = await requestLocale;
  const locale: Locale = requested !== undefined && isLocale(requested) ? requested : DEFAULT_LOCALE;

  const messages = await loadMessages(locale);
  const fallback =
    locale === DEFAULT_LOCALE ? messages : await loadMessages(DEFAULT_LOCALE);

  return {
    locale,
    messages: { ...fallback, ...messages },
    onError(error) {
      if (process.env.NODE_ENV !== 'production') {
        console.warn(`[i18n] ${locale}: ${error.message}`);
      }
    },
  };
});

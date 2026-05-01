import { setRequestLocale, getTranslations } from 'next-intl/server';
import { ColorSwatch } from '@/components/ColorSwatch';
import {
  COLOR_GROUPS,
  FONT_SIZE_TOKENS,
  FONT_WEIGHT_TOKENS,
  RADIUS_TOKENS,
  SPACING_ALIASES,
  SPACING_TOKENS,
  Z_INDEX_TOKENS,
} from '@/lib/tokens';
import { LOCALES, type Locale } from '@/lib/i18n/routing';

interface TokensPageProps {
  params: Promise<{ locale: string }>;
}

function isLocale(value: string): value is Locale {
  return (LOCALES as readonly string[]).includes(value);
}

export default async function TokensPage({ params }: TokensPageProps) {
  const { locale } = await params;
  if (isLocale(locale)) setRequestLocale(locale);
  const t = await getTranslations('tokens');

  return (
    <main className="flex flex-col gap-12 px-6 py-12 md:px-10">
      <header className="flex flex-col gap-3 border-b border-site-border pb-6">
        <h1 className="text-3xl font-bold">{t('title')}</h1>
        <p className="max-w-2xl text-base text-site-muted">{t('intro')}</p>
      </header>

      <section aria-labelledby="colors" className="flex flex-col gap-6">
        <h2 id="colors" className="text-2xl font-semibold">{t('colors.title')}</h2>
        {COLOR_GROUPS.map((group) => (
          <div key={group.groupKey} className="flex flex-col gap-3">
            <h3 className="text-base font-semibold text-site-fg">
              {t(`colors.groups.${group.groupKey}`)}
            </h3>
            <div className="grid grid-cols-2 gap-3 md:grid-cols-3 lg:grid-cols-4">
              {group.colors.map((color) => (
                <ColorSwatch key={color.name} name={color.name} hex={color.hex} />
              ))}
            </div>
          </div>
        ))}
      </section>

      <section aria-labelledby="spacing" className="flex flex-col gap-4">
        <h2 id="spacing" className="text-2xl font-semibold">{t('spacing.title')}</h2>
        <div className="flex flex-col gap-2">
          <h3 className="text-base font-semibold">{t('spacing.numeric')}</h3>
          <ul className="flex flex-col gap-1">
            {SPACING_TOKENS.map((token) => (
              <li key={token.name} className="grid grid-cols-[200px_80px_1fr] items-center gap-3 rounded-md border border-site-border bg-site-bg/40 px-3 py-1.5 text-sm">
                <code className="text-xs">{token.name}</code>
                <span className="text-xs text-site-muted">{token.value}</span>
                <div
                  aria-hidden="true"
                  className="h-3 rounded-sm bg-site-fg/30"
                  style={{ width: `${Math.min(token.pixels * 4, 200)}px` }}
                />
              </li>
            ))}
          </ul>
        </div>
        <div className="flex flex-col gap-2">
          <h3 className="text-base font-semibold">{t('spacing.aliases')}</h3>
          <ul className="flex flex-col gap-1">
            {SPACING_ALIASES.map((token) => (
              <li key={token.name} className="grid grid-cols-[200px_180px_1fr] items-center gap-3 rounded-md border border-site-border bg-site-bg/40 px-3 py-1.5 text-sm">
                <code className="text-xs">{token.name}</code>
                <span className="text-xs text-site-muted">{token.alias}</span>
                <div
                  aria-hidden="true"
                  className="h-3 rounded-sm bg-site-fg/30"
                  style={{ width: `${Math.min(token.pixels * 4, 200)}px` }}
                />
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section aria-labelledby="radius" className="flex flex-col gap-4">
        <h2 id="radius" className="text-2xl font-semibold">{t('radius.title')}</h2>
        <ul className="grid grid-cols-2 gap-3 md:grid-cols-4">
          {RADIUS_TOKENS.map((token) => (
            <li key={token.name} className="flex flex-col items-start gap-2 rounded-lg border border-site-border p-3">
              <div
                aria-hidden="true"
                className="h-16 w-16 border border-site-border bg-site-fg/10"
                style={{ borderRadius: token.pixels === 9999 ? '9999px' : `${token.pixels}px` }}
              />
              <code className="text-xs">{token.name}</code>
              <span className="text-xs text-site-muted">{token.value}</span>
            </li>
          ))}
        </ul>
      </section>

      <section aria-labelledby="typography" className="flex flex-col gap-6">
        <h2 id="typography" className="text-2xl font-semibold">{t('typography.title')}</h2>
        <div className="flex flex-col gap-3">
          <h3 className="text-base font-semibold">{t('typography.size')}</h3>
          <ul className="flex flex-col gap-2">
            {FONT_SIZE_TOKENS.map((token) => (
              <li key={token.name} className="flex flex-col gap-1 rounded-md border border-site-border p-3">
                <span style={{ fontSize: `${token.pixels}px` }}>{t('typography.sample')}</span>
                <div className="flex gap-3 text-xs text-site-muted">
                  <code>{token.name}</code>
                  <span>{token.value}</span>
                  <span>{token.pixels}px</span>
                </div>
              </li>
            ))}
          </ul>
        </div>
        <div className="flex flex-col gap-3">
          <h3 className="text-base font-semibold">{t('typography.weight')}</h3>
          <ul className="flex flex-col gap-2">
            {FONT_WEIGHT_TOKENS.map((token) => (
              <li key={token.name} className="flex flex-col gap-1 rounded-md border border-site-border p-3">
                <span style={{ fontWeight: token.value }}>{t('typography.sample')}</span>
                <div className="flex gap-3 text-xs text-site-muted">
                  <code>{token.name}</code>
                  <span>{token.alias}</span>
                  <span>{token.value}</span>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section aria-labelledby="zindex" className="flex flex-col gap-4">
        <h2 id="zindex" className="text-2xl font-semibold">{t('zIndex.title')}</h2>
        <table className="w-full border-collapse text-left text-sm">
          <thead className="border-b border-site-border bg-site-muted/5">
            <tr>
              <th scope="col" className="px-4 py-2 font-semibold">Token</th>
              <th scope="col" className="px-4 py-2 font-semibold">Value</th>
            </tr>
          </thead>
          <tbody>
            {Z_INDEX_TOKENS.map((token) => (
              <tr key={token.name} className="border-b border-site-border last:border-b-0">
                <td className="px-4 py-2 font-mono text-xs">{token.name}</td>
                <td className="px-4 py-2 font-mono text-xs">{token.value}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>
    </main>
  );
}

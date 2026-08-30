import { setRequestLocale, getTranslations } from 'next-intl/server';
import { ColorSwatch } from '@/components/ColorSwatch';
import {
  BORDER_TOKENS,
  COLOR_GROUPS,
  FOCUS_RING_TOKENS,
  FONT_FAMILY_TOKENS,
  FONT_SIZE_TOKENS,
  FONT_WEIGHT_TOKENS,
  LINE_HEIGHT_TOKENS,
  LOADED_MARKER_TOKEN,
  RADIUS_TOKENS,
  SHADOW_TOKENS,
  SPACING_ALIASES,
  SPACING_TOKENS,
  TRANSITION_TOKENS,
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
  const tDoc = await getTranslations();

  return (
    <main className="flex flex-col gap-12 px-6 py-12 md:px-10">
      <header className="flex flex-col gap-3 border-b border-site-border pb-6">
        <h1 className="text-3xl font-bold">{t('title')}</h1>
        <p className="max-w-2xl text-base text-site-muted">{t('intro')}</p>
      </header>

      <section aria-labelledby="colors" className="flex flex-col gap-6">
        <h2 id="colors" className="text-2xl font-semibold">{t('colors.title')}</h2>
        <p className="max-w-3xl text-sm text-site-muted">{t('colors.intro')}</p>
        {COLOR_GROUPS.map((group) => (
          <div key={group.groupKey} className="flex flex-col gap-3">
            <h3 className="text-base font-semibold text-site-fg">
              {t(`colors.groups.${group.groupKey}`)}
            </h3>
            {group.groupKey === 'role' && (
              <p className="max-w-3xl text-sm text-site-muted">{t('colors.role.intro')}</p>
            )}
            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {group.colors.map((color) => (
                <ColorSwatch
                  key={color.name}
                  name={color.name}
                  light={color.light}
                  dark={color.dark}
                  {...(color.descriptionKey !== undefined && {
                    description: tDoc(color.descriptionKey),
                  })}
                />
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
              <li key={token.name} className="grid grid-cols-[minmax(0,200px)_80px_1fr] items-center gap-3 rounded-md border border-site-border bg-site-bg/40 px-3 py-1.5 text-sm">
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
              <li key={token.name} className="grid grid-cols-[minmax(0,200px)_180px_1fr] items-center gap-3 rounded-md border border-site-border bg-site-bg/40 px-3 py-1.5 text-sm">
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
        <div className="flex flex-col gap-3">
          <h3 className="text-base font-semibold">{t('typography.family')}</h3>
          <ul className="flex flex-col gap-2">
            {FONT_FAMILY_TOKENS.map((token) => (
              <li key={token.name} className="flex flex-col gap-1 rounded-md border border-site-border p-3">
                <span style={{ fontFamily: token.value }}>{t('typography.sample')}</span>
                <div className="flex flex-col gap-1 text-xs text-site-muted">
                  <code>{token.name}</code>
                  <code className="break-all">{token.value}</code>
                </div>
              </li>
            ))}
          </ul>
        </div>
        <div className="flex flex-col gap-3">
          <h3 className="text-base font-semibold">{t('typography.lineHeight')}</h3>
          <ul className="flex flex-col gap-2">
            {LINE_HEIGHT_TOKENS.map((token) => (
              <li key={token.name} className="flex flex-col gap-1 rounded-md border border-site-border p-3">
                <span style={{ lineHeight: token.value }}>{t('typography.sample')}</span>
                <div className="flex gap-3 text-xs text-site-muted">
                  <code>{token.name}</code>
                  <span>{token.value}</span>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section aria-labelledby="motion" className="flex flex-col gap-4">
        <h2 id="motion" className="text-2xl font-semibold">{t('transition.title')}</h2>
        <p className="max-w-3xl text-sm text-site-muted">{t('transition.intro')}</p>
        <ul className="flex flex-col gap-2">
          {TRANSITION_TOKENS.map((token) => (
            <li key={token.name} className="flex items-center gap-4 rounded-md border border-site-border p-3 text-sm">
              <code className="text-xs">{token.name}</code>
              <span className="text-xs text-site-muted">{token.value}</span>
            </li>
          ))}
        </ul>
      </section>

      <section aria-labelledby="border-focus" className="flex flex-col gap-4">
        <h2 id="border-focus" className="text-2xl font-semibold">{t('borderFocus.title')}</h2>
        <p className="max-w-3xl text-sm text-site-muted">{t('borderFocus.intro')}</p>
        <ul className="flex flex-col gap-2">
          {BORDER_TOKENS.map((token) => (
            <li key={token.name} className="flex flex-wrap items-center gap-4 rounded-md border border-site-border p-3 text-sm">
              <code className="text-xs">{token.name}</code>
              <code className="text-xs text-site-muted">{token.value}</code>
            </li>
          ))}
          {FOCUS_RING_TOKENS.map((token) => (
            <li key={token.name} className="flex flex-col gap-1 rounded-md border border-site-border p-3 text-sm">
              <code className="text-xs">{token.name}</code>
              <div className="flex flex-col gap-0.5 text-xs text-site-muted">
                <span className="flex gap-2">
                  <span className="w-10 shrink-0 uppercase tracking-wide">{t('colors.light')}</span>
                  <code className="break-all">{token.light}</code>
                </span>
                <span className="flex gap-2">
                  <span className="w-10 shrink-0 uppercase tracking-wide">{t('colors.dark')}</span>
                  <code className="break-all">{token.dark}</code>
                </span>
              </div>
            </li>
          ))}
        </ul>
        <p className="max-w-3xl rounded-md border border-site-border bg-site-muted/5 p-4 text-sm text-site-muted">
          {t('internal.body', { name: LOADED_MARKER_TOKEN.name, value: LOADED_MARKER_TOKEN.value })}
        </p>
      </section>

      <section aria-labelledby="shadow" className="flex flex-col gap-4">
        <h2 id="shadow" className="text-2xl font-semibold">{t('shadow.title')}</h2>
        <p className="max-w-3xl text-sm text-site-muted">{t('shadow.intro')}</p>
        <ul className="grid grid-cols-1 gap-4 md:grid-cols-3">
          {SHADOW_TOKENS.map((token) => (
            <li key={token.name} className="flex flex-col gap-3 rounded-lg border border-site-border p-4">
              <div
                aria-hidden="true"
                className="h-16 rounded-md bg-site-bg"
                style={{ boxShadow: token.light }}
              />
              <code className="text-xs">{token.name}</code>
              <div className="flex flex-col gap-1 text-xs text-site-muted">
                <code className="break-all">{token.light}</code>
                <code className="break-all">{token.dark}</code>
              </div>
            </li>
          ))}
        </ul>
      </section>

      <section aria-labelledby="zindex" className="flex flex-col gap-4">
        <h2 id="zindex" className="text-2xl font-semibold">{t('zIndex.title')}</h2>
        <p className="max-w-3xl text-sm text-site-muted">{t('zIndex.intro')}</p>
        <div className="overflow-x-auto">
          <table className="w-full border-collapse text-left text-sm">
            <caption className="sr-only">{t('zIndex.caption')}</caption>
            <thead className="border-b border-site-border bg-site-muted/5">
              <tr>
                <th scope="col" className="px-4 py-2 font-semibold">{t('zIndex.headings.token')}</th>
                <th scope="col" className="px-4 py-2 font-semibold">{t('zIndex.headings.value')}</th>
                <th scope="col" className="px-4 py-2 font-semibold">{t('zIndex.headings.usage')}</th>
              </tr>
            </thead>
            <tbody>
              {Z_INDEX_TOKENS.map((token) => (
                <tr key={token.name} className="border-b border-site-border last:border-b-0">
                  <td className="px-4 py-2 font-mono text-xs">{token.name}</td>
                  <td className="px-4 py-2 font-mono text-xs">{token.value}</td>
                  <td className="px-4 py-2 text-sm text-site-fg">{tDoc(token.usageKey)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </main>
  );
}

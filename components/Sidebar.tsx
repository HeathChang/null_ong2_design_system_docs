import { getTranslations } from 'next-intl/server';
import { Link } from '@/lib/i18n/navigation';
import { NAV_ENTRIES } from '@/lib/nav';

export async function Sidebar() {
  const t = await getTranslations('nav');

  return (
    <aside
      aria-label={t('primary')}
      className="hidden w-60 shrink-0 border-r border-site-border bg-site-bg/60 px-4 py-6 md:block"
    >
      <nav>
        <ul className="flex flex-col gap-1">
          {NAV_ENTRIES.map((entry) => (
            <li key={entry.href}>
              <Link
                href={entry.href}
                className="block rounded-md px-3 py-2 text-sm font-medium text-site-fg hover:bg-site-muted/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
              >
                {t(entry.labelKey)}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
}

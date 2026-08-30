import { getTranslations } from 'next-intl/server';
import { Link } from '@/lib/i18n/navigation';
import { LanguageSwitcher } from './LanguageSwitcher';
import { ThemeToggle } from './ThemeToggle';
import { MobileNav } from './MobileNav';

export async function Header() {
  const t = await getTranslations('site');

  return (
    <header className="sticky top-0 z-10 border-b border-site-border bg-site-bg/90 backdrop-blur">
      <div className="mx-auto flex max-w-screen-xl items-center justify-between gap-3 px-4 py-3 md:px-6">
        <div className="flex items-center gap-2">
          <MobileNav />
          <Link
            href="/"
            className="text-base font-semibold text-site-fg focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
          >
            {t('title')}
          </Link>
        </div>
        <div className="flex items-center gap-2">
          <ThemeToggle />
          <LanguageSwitcher />
        </div>
      </div>
    </header>
  );
}

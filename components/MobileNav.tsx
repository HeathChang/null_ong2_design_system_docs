'use client';

import { useEffect, useState } from 'react';
import { useTranslations } from 'next-intl';
import { Link, usePathname } from '@/lib/i18n/navigation';
import { NAV_ENTRIES } from '@/lib/nav';

export function MobileNav() {
  const t = useTranslations('nav');
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (!isOpen) return;
    function handleKey(event: KeyboardEvent) {
      if (event.key === 'Escape') setIsOpen(false);
    }
    document.addEventListener('keydown', handleKey);
    return () => document.removeEventListener('keydown', handleKey);
  }, [isOpen]);

  useEffect(() => {
    if (!isOpen) return;
    const original = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = original;
    };
  }, [isOpen]);

  return (
    <>
      {/* 패널은 열렸을 때만 마운트된다. 닫힌 동안 aria-controls를 두면 없는 id를 가리킨다. */}
      <button
        type="button"
        onClick={() => setIsOpen(true)}
        aria-label={t('openMenu')}
        aria-expanded={isOpen}
        {...(isOpen && { 'aria-controls': 'mobile-nav-panel' })}
        className="inline-flex h-9 w-9 items-center justify-center rounded-md text-site-fg hover:bg-site-muted/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 md:hidden"
      >
        <span aria-hidden="true">☰</span>
      </button>

      {isOpen && (
        <div className="fixed inset-0 z-50 md:hidden">
          <div
            role="presentation"
            onClick={() => setIsOpen(false)}
            className="absolute inset-0 bg-black/50"
          />
          <nav
            id="mobile-nav-panel"
            aria-label={t('primary')}
            className="absolute left-0 top-0 flex h-full w-72 max-w-[85vw] flex-col bg-site-bg shadow-xl"
          >
            <div className="flex items-center justify-between border-b border-site-border px-4 py-3">
              <span className="text-base font-semibold">Menu</span>
              <button
                type="button"
                onClick={() => setIsOpen(false)}
                aria-label={t('closeMenu')}
                className="inline-flex h-9 w-9 items-center justify-center rounded-md text-site-fg hover:bg-site-muted/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
              >
                <span aria-hidden="true">✕</span>
              </button>
            </div>
            <ul className="flex flex-col gap-1 p-3">
              {NAV_ENTRIES.map((entry) => (
                <li key={entry.href}>
                  <Link
                    href={entry.href}
                    className="block rounded-md px-3 py-2 text-base font-medium text-site-fg hover:bg-site-muted/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
                  >
                    {t(entry.labelKey)}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      )}
    </>
  );
}

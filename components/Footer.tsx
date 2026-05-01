import { getTranslations } from 'next-intl/server';

export async function Footer() {
  const t = await getTranslations('footer');

  return (
    <footer className="border-t border-site-border bg-site-bg/60">
      <div className="mx-auto flex max-w-screen-xl flex-col items-start justify-between gap-2 px-6 py-4 text-sm text-site-muted md:flex-row md:items-center">
        <span>{t('rights')}</span>
        <ul className="flex gap-4">
          <li>
            <a
              href="https://www.npmjs.com/package/null_ong2-design-system"
              target="_blank"
              rel="noreferrer noopener"
              className="hover:text-site-fg focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
            >
              {t('npm')}
            </a>
          </li>
          <li>
            <a
              href="https://github.com/null-ong2/null_ong2-design-system"
              target="_blank"
              rel="noreferrer noopener"
              className="hover:text-site-fg focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
            >
              {t('github')}
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
}

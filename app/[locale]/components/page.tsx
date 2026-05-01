import { setRequestLocale, getTranslations } from 'next-intl/server';
import { Link } from '@/lib/i18n/navigation';
import { componentMeta, metaByCategory } from '@/content/components/meta';
import { CATEGORIES, CATEGORY_LABEL_KEY } from '@/lib/categories';
import { LOCALES, type Locale } from '@/lib/i18n/routing';

interface ComponentsIndexPageProps {
  params: Promise<{ locale: string }>;
}

function isLocale(value: string): value is Locale {
  return (LOCALES as readonly string[]).includes(value);
}

export default async function ComponentsIndexPage({ params }: ComponentsIndexPageProps) {
  const { locale } = await params;
  if (isLocale(locale)) setRequestLocale(locale);
  const t = await getTranslations('componentsIndex');
  const tDoc = await getTranslations();

  const grouped = metaByCategory();

  return (
    <main className="flex flex-col gap-12 px-6 py-12 md:px-10">
      <header className="flex flex-col gap-3 border-b border-site-border pb-6">
        <h1 className="text-3xl font-bold">{t('title')}</h1>
        <p className="max-w-2xl text-base text-site-muted">{t('intro')}</p>
      </header>

      {componentMeta.length === 0 ? (
        <p className="text-sm text-site-muted">{t('empty')}</p>
      ) : (
        CATEGORIES.map((category) => {
          const docs = grouped.get(category);
          if (docs === undefined || docs.length === 0) return null;
          return (
            <section key={category} aria-labelledby={`category-${category}`} className="flex flex-col gap-4">
              <h2 id={`category-${category}`} className="text-xl font-semibold">
                {tDoc(CATEGORY_LABEL_KEY[category])}
              </h2>
              <ul className="grid grid-cols-1 gap-3 md:grid-cols-2 lg:grid-cols-3">
                {docs.map((doc) => (
                  <li key={doc.slug}>
                    <Link
                      href={`/components/${doc.category}/${doc.slug}`}
                      className="flex h-full flex-col gap-2 rounded-lg border border-site-border p-4 transition hover:border-site-fg/40 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
                    >
                      <h3 className="text-base font-semibold">{doc.name}</h3>
                      <p className="text-sm text-site-muted">{tDoc(doc.descriptionKey)}</p>
                    </Link>
                  </li>
                ))}
              </ul>
            </section>
          );
        })
      )}
    </main>
  );
}

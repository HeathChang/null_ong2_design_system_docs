import { notFound } from 'next/navigation';
import { setRequestLocale } from 'next-intl/server';
import { ComponentPageLayout } from '@/components/ComponentPageLayout';
import { getDoc } from '@/content/components';
import { componentMeta } from '@/content/components/meta';
import { isCategory } from '@/lib/categories';
import { LOCALES, type Locale } from '@/lib/i18n/routing';

interface ComponentDetailPageProps {
  params: Promise<{ locale: string; category: string; slug: string }>;
}

function isLocale(value: string): value is Locale {
  return (LOCALES as readonly string[]).includes(value);
}

export function generateStaticParams() {
  return componentMeta.map((meta) => ({
    category: meta.category,
    slug: meta.slug,
  }));
}

export default async function ComponentDetailPage({ params }: ComponentDetailPageProps) {
  const { locale, category, slug } = await params;
  if (isLocale(locale)) setRequestLocale(locale);
  if (!isCategory(category)) notFound();
  const doc = await getDoc(slug);
  if (doc === undefined || doc.category !== category) notFound();

  return <ComponentPageLayout doc={doc} />;
}

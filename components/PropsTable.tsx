import { getTranslations } from 'next-intl/server';
import type { PropDef } from '@/lib/types';

interface PropsTableProps {
  rows: PropDef[];
}

export async function PropsTable({ rows }: PropsTableProps) {
  const t = await getTranslations('propsTable');

  if (rows.length === 0) {
    return <p className="text-sm text-site-muted">{t('empty')}</p>;
  }

  const tDoc = await getTranslations();

  return (
    <div className="overflow-x-auto">
      <table className="w-full border-collapse text-left text-sm">
        <caption className="sr-only">{t('caption')}</caption>
        <thead className="border-b border-site-border bg-site-muted/5">
          <tr>
            <th scope="col" className="px-4 py-2 font-semibold">
              {t('headings.name')}
            </th>
            <th scope="col" className="px-4 py-2 font-semibold">
              {t('headings.type')}
            </th>
            <th scope="col" className="px-4 py-2 font-semibold">
              {t('headings.default')}
            </th>
            <th scope="col" className="px-4 py-2 font-semibold">
              {t('headings.required')}
            </th>
            <th scope="col" className="px-4 py-2 font-semibold">
              {t('headings.description')}
            </th>
          </tr>
        </thead>
        <tbody>
          {rows.map((row) => (
            <tr key={row.name} className="border-b border-site-border last:border-b-0">
              <th scope="row" className="whitespace-nowrap px-4 py-2 align-top font-mono text-xs font-semibold">
                {row.name}
              </th>
              <td className="px-4 py-2 align-top font-mono text-xs text-site-muted">
                {row.type}
              </td>
              <td className="px-4 py-2 align-top font-mono text-xs text-site-muted">
                {row.default}
              </td>
              <td className="px-4 py-2 align-top text-xs">
                {row.required ? <span aria-label={t('requiredYes')}>✓</span> : '—'}
              </td>
              <td className="px-4 py-2 align-top text-sm text-site-fg">
                {tDoc(row.descriptionKey)}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

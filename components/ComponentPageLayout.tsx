import { getTranslations } from 'next-intl/server';
import { Badge } from 'null_ong2-design-system';
import type {
  CodeComment,
  ComponentDoc,
  ComponentExample,
  ComponentStatus,
  ExampleTab,
} from '@/lib/types';
import { CATEGORY_LABEL_KEY } from '@/lib/categories';
import { CodeBlock } from './CodeBlock';
import { DemoBlock } from './DemoBlock';
import { PropsTable } from './PropsTable';
import { ExamplesTabs, type TabData } from './ExamplesTabs';
import { Link } from '@/lib/i18n/navigation';
import { getMeta, type ComponentMeta } from '@/content/components/meta';

interface ComponentPageLayoutProps {
  doc: ComponentDoc;
}

const TAB_ORDER: ExampleTab[] = ['default', 'variants', 'states', 'real-world'];

const STATUS_VARIANT: Record<ComponentStatus, 'success' | 'warning' | 'danger'> = {
  stable: 'success',
  beta: 'warning',
  deprecated: 'danger',
};

export async function ComponentPageLayout({ doc }: ComponentPageLayoutProps) {
  const t = await getTranslations('componentPage');
  const tDoc = await getTranslations();
  const comment: CodeComment = (key) => tDoc(key);
  const resolveCode = (code: ComponentExample['code']): string =>
    typeof code === 'function' ? code(comment) : code;

  const quickLook = doc.examples.find((ex) => ex.tab === 'default') ?? doc.examples[0];

  /*
   * Quick Look에서 이미 보여준 예시는 탭에서 제외한다.
   * 같은 예시를 한 페이지에 두 번 그리면 예시 안의 id가 그대로 중복되어
   * (id="demo-name" ×2) 레이블이 어느 입력을 가리키는지 깨진다.
   */
  const examplesByTab = new Map<ExampleTab, ComponentExample[]>();
  for (const example of doc.examples) {
    if (example === quickLook) continue;
    const list = examplesByTab.get(example.tab);
    if (list === undefined) {
      examplesByTab.set(example.tab, [example]);
    } else {
      list.push(example);
    }
  }
  const activeTabs = TAB_ORDER.filter((tab) => examplesByTab.has(tab));
  const resolvedRelated = doc.related
    .map((slug) => getMeta(slug))
    .filter((target): target is ComponentMeta => target !== undefined);

  return (
    <article className="flex flex-col gap-12 px-6 py-12 md:px-10">
      <header className="flex flex-col gap-3 border-b border-site-border pb-6">
        <p className="text-sm uppercase tracking-wide text-site-muted">
          {tDoc(CATEGORY_LABEL_KEY[doc.category])}
        </p>
        <div className="flex items-center gap-3">
          <h1 className="text-3xl font-bold">{doc.name}</h1>
          <Badge variant={STATUS_VARIANT[doc.status]}>{t(`status.${doc.status}`)}</Badge>
        </div>
        <p className="max-w-2xl text-base text-site-muted">{tDoc(doc.descriptionKey)}</p>
        <div className="mt-2 max-w-2xl">
          <p className="mb-1 text-xs font-medium uppercase tracking-wide text-site-muted">
            {t('import')}
          </p>
          <CodeBlock code={doc.importStatement} language="tsx" />
        </div>
      </header>

      {quickLook !== undefined && (
        <section aria-labelledby="quick-look" className="flex flex-col gap-4">
          <h2 id="quick-look" className="text-2xl font-semibold">
            {t('quickLook')}
          </h2>
          <DemoBlock preview={quickLook.preview} code={resolveCode(quickLook.code)} />
        </section>
      )}

      <section aria-labelledby="api-reference" className="flex flex-col gap-4">
        <h2 id="api-reference" className="text-2xl font-semibold">
          {t('apiReference')}
        </h2>
        <PropsTable rows={doc.props} />
      </section>

      <section aria-labelledby="examples" className="flex flex-col gap-4">
        <h2 id="examples" className="text-2xl font-semibold">
          {t('examples')}
        </h2>
        {activeTabs.length === 0 ? (
          <p className="text-sm text-site-muted">{t('noExamples')}</p>
        ) : (
          <ExamplesTabs
            ariaLabel={t('examples')}
            tabs={activeTabs.map<TabData>((tab) => ({
              value: tab,
              label: t(`tabs.${tab}`),
              content: (
                <div className="flex flex-col gap-6 pt-4">
                  {(examplesByTab.get(tab) ?? []).map((example, idx) => (
                    <DemoBlock
                      key={`${tab}-${idx}`}
                      preview={example.preview}
                      code={resolveCode(example.code)}
                    />
                  ))}
                </div>
              ),
            }))}
          />
        )}
      </section>

      <section aria-labelledby="best-practices" className="flex flex-col gap-4">
        <h2 id="best-practices" className="text-2xl font-semibold">
          {t('bestPractices')}
        </h2>
        {doc.bestPractices.do.length === 0 && doc.bestPractices.dont.length === 0 ? (
          <p className="text-sm text-site-muted">{t('noBestPractices')}</p>
        ) : (
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            <div className="rounded-lg border border-site-border p-5">
              <h3 className="mb-3 text-sm font-semibold uppercase tracking-wide">{t('do')}</h3>
              <ul className="flex flex-col gap-2 text-sm">
                {doc.bestPractices.do.map((item) => (
                  <li key={item.key}>✅ {tDoc(item.key)}</li>
                ))}
              </ul>
            </div>
            <div className="rounded-lg border border-site-border p-5">
              <h3 className="mb-3 text-sm font-semibold uppercase tracking-wide">{t('dont')}</h3>
              <ul className="flex flex-col gap-2 text-sm">
                {doc.bestPractices.dont.map((item) => (
                  <li key={item.key}>❌ {tDoc(item.key)}</li>
                ))}
              </ul>
            </div>
          </div>
        )}
      </section>

      {doc.a11yNotesKey !== undefined && (
        <section aria-labelledby="a11y-notes" className="flex flex-col gap-4">
          <h2 id="a11y-notes" className="text-2xl font-semibold">
            {t('a11yNotes')}
          </h2>
          <p className="max-w-3xl text-sm text-site-fg">{tDoc(doc.a11yNotesKey)}</p>
        </section>
      )}

      <section aria-labelledby="related" className="flex flex-col gap-4">
        <h2 id="related" className="text-2xl font-semibold">
          {t('related')}
        </h2>
        {resolvedRelated.length === 0 ? (
          <p className="text-sm text-site-muted">{t('noRelated')}</p>
        ) : (
          <ul className="flex flex-wrap gap-3">
            {resolvedRelated.map((target) => (
              <li key={target.slug}>
                <Link
                  href={`/components/${target.category}/${target.slug}`}
                  className="rounded-md border border-site-border px-3 py-1.5 text-sm hover:bg-site-muted/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
                >
                  {target.name}
                </Link>
              </li>
            ))}
          </ul>
        )}
      </section>
    </article>
  );
}

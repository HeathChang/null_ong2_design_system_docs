import { getTranslations } from 'next-intl/server';
import { highlightCode, type CodeLanguage } from '@/lib/shiki';
import { CopyButton } from './CopyButton';

interface CodeBlockProps {
  code: string;
  language?: CodeLanguage;
}

export async function CodeBlock({ code, language = 'tsx' }: CodeBlockProps) {
  const html = await highlightCode({ code, language });
  const t = await getTranslations('codeBlock');

  return (
    <div className="relative overflow-hidden rounded-lg border border-site-border">
      <CopyButton value={code} labelCopy={t('copy')} labelCopied={t('copied')} />
      <div
        className="overflow-x-auto p-4 text-sm leading-relaxed [&_pre]:bg-transparent"
        dangerouslySetInnerHTML={{ __html: html }}
      />
    </div>
  );
}

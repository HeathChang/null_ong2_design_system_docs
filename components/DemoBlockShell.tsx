'use client';

import { useState, type ReactNode } from 'react';
import { useTranslations } from 'next-intl';
import { CopyButton } from './CopyButton';

export type DemoAlign = 'start' | 'center';
export type DemoBackground = 'neutral' | 'transparent' | 'gradient';

interface DemoBlockShellProps {
  preview: ReactNode;
  code: string;
  codeHtml: string;
  align: DemoAlign;
  background: DemoBackground;
  defaultCodeOpen: boolean;
  storybookUrl?: string;
}

const BACKGROUND_CLASS: Record<DemoBackground, string> = {
  neutral: 'bg-site-muted/5',
  transparent: 'bg-transparent',
  gradient: 'bg-gradient-to-br from-site-muted/10 to-transparent',
};

export function DemoBlockShell({
  preview,
  code,
  codeHtml,
  align,
  background,
  defaultCodeOpen,
  storybookUrl,
}: DemoBlockShellProps) {
  const t = useTranslations('demoBlock');
  const tCode = useTranslations('codeBlock');
  const [isOpen, setIsOpen] = useState(defaultCodeOpen);

  const previewAlign = align === 'center' ? 'items-center justify-center' : 'items-start justify-start';

  return (
    <div className="overflow-hidden rounded-lg border border-site-border">
      <div
        role="region"
        aria-label={t('preview')}
        className={`flex min-h-[120px] flex-wrap gap-3 p-6 ${previewAlign} ${BACKGROUND_CLASS[background]}`}
      >
        {preview}
      </div>
      <div className="flex items-center justify-between border-t border-site-border bg-site-bg/60 px-3 py-2 text-xs">
        <button
          type="button"
          onClick={() => setIsOpen((prev) => !prev)}
          aria-expanded={isOpen}
          className="rounded-md px-2 py-1 font-medium text-site-fg hover:bg-site-muted/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
        >
          {isOpen ? t('hideCode') : t('showCode')}
        </button>
        {storybookUrl !== undefined && (
          <a
            href={storybookUrl}
            target="_blank"
            rel="noreferrer noopener"
            className="text-site-muted hover:text-site-fg focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
          >
            {t('openInStorybook')}
          </a>
        )}
      </div>
      {isOpen && (
        <div className="relative border-t border-site-border">
          <CopyButton value={code} labelCopy={tCode('copy')} labelCopied={tCode('copied')} />
          <div
            className="overflow-x-auto p-4 text-sm leading-relaxed [&_pre]:bg-transparent"
            dangerouslySetInnerHTML={{ __html: codeHtml }}
          />
        </div>
      )}
    </div>
  );
}

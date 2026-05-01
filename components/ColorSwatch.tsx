import { getTranslations } from 'next-intl/server';
import { CopyButton } from './CopyButton';

interface ColorSwatchProps {
  name: string;
  hex: string;
}

export async function ColorSwatch({ name, hex }: ColorSwatchProps) {
  const t = await getTranslations('codeBlock');

  return (
    <div className="flex flex-col gap-1 rounded-lg border border-site-border p-3">
      <div
        aria-hidden="true"
        className="h-12 w-full rounded-md border border-site-border"
        style={{ backgroundColor: hex }}
      />
      <div className="flex items-start justify-between gap-2">
        <code className="break-all text-xs font-medium text-site-fg">{name}</code>
      </div>
      <div className="relative flex items-center justify-between text-xs text-site-muted">
        <code>{hex}</code>
        <CopyButton value={hex} labelCopy={t('copy')} labelCopied={t('copied')} />
      </div>
    </div>
  );
}

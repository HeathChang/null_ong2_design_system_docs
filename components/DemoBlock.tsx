import type { ReactNode } from 'react';
import { highlightCode, type CodeLanguage } from '@/lib/shiki';
import { DemoBlockShell, type DemoAlign, type DemoBackground } from './DemoBlockShell';

export interface DemoBlockProps {
  preview: ReactNode;
  code: string;
  language?: CodeLanguage;
  align?: DemoAlign;
  background?: DemoBackground;
  defaultCodeOpen?: boolean;
  storybookUrl?: string;
}

export async function DemoBlock({
  preview,
  code,
  language = 'tsx',
  align = 'center',
  background = 'neutral',
  defaultCodeOpen = false,
  storybookUrl,
}: DemoBlockProps) {
  const codeHtml = await highlightCode({ code, language });

  return (
    <DemoBlockShell
      preview={preview}
      code={code}
      codeHtml={codeHtml}
      align={align}
      background={background}
      defaultCodeOpen={defaultCodeOpen}
      storybookUrl={storybookUrl}
    />
  );
}

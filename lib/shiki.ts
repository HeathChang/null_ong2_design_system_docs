import 'server-only';
import { codeToHtml } from 'shiki';

export type CodeLanguage = 'tsx' | 'ts' | 'css' | 'bash' | 'json';

interface HighlightOptions {
  code: string;
  language: CodeLanguage;
}

export async function highlightCode({ code, language }: HighlightOptions): Promise<string> {
  return codeToHtml(code, {
    lang: language,
    themes: {
      light: 'github-light',
      dark: 'github-dark',
    },
    defaultColor: 'light',
  });
}

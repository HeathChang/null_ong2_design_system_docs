import { getTranslations } from 'next-intl/server';
import { CopyButton } from './CopyButton';

interface ColorSwatchProps {
  name: string;
  light: string;
  dark: string;
  description?: string;
}

/**
 * 색 토큰 하나를 라이트/다크 두 값과 함께 보여준다.
 *
 * 현재 테마의 값만 보여주면 반대 테마를 확인하려고 OS 설정을 바꿔야 한다.
 * 두 칩을 나란히 두면 대응 관계가 한눈에 보인다.
 * 반투명 토큰이 섞여 있으므로 각 칩은 해당 테마의 표면색 위에 얹는다.
 */
export async function ColorSwatch({ name, light, dark, description }: ColorSwatchProps) {
  const t = await getTranslations('codeBlock');
  const tTokens = await getTranslations('tokens.colors');

  return (
    <div className="flex flex-col gap-2 rounded-lg border border-site-border p-3">
      <div className="flex gap-1" aria-hidden="true">
        <div className="h-12 flex-1 overflow-hidden rounded-md border border-site-border bg-white">
          <div className="h-full w-full" style={{ backgroundColor: light }} />
        </div>
        <div className="h-12 flex-1 overflow-hidden rounded-md border border-site-border bg-[#111827]">
          <div className="h-full w-full" style={{ backgroundColor: dark }} />
        </div>
      </div>

      <div className="flex items-start justify-between gap-2">
        <code className="break-all text-xs font-medium text-site-fg">{name}</code>
        <CopyButton
          value={name}
          labelCopy={t('copy')}
          labelCopied={t('copied')}
          className=""
        />
      </div>

      {description !== undefined && <p className="text-xs text-site-muted">{description}</p>}

      <dl className="flex flex-col gap-0.5 text-xs text-site-muted">
        <div className="flex gap-2">
          <dt className="w-10 shrink-0 uppercase tracking-wide">{tTokens('light')}</dt>
          <dd className="break-all font-mono">{light}</dd>
        </div>
        <div className="flex gap-2">
          <dt className="w-10 shrink-0 uppercase tracking-wide">{tTokens('dark')}</dt>
          <dd className="break-all font-mono">{dark}</dd>
        </div>
      </dl>
    </div>
  );
}

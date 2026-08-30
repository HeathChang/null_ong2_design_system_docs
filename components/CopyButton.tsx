'use client';

import { useState } from 'react';

interface CopyButtonProps {
  value: string;
  labelCopy: string;
  labelCopied: string;
  /**
   * 배치 클래스 교체용. 기본값은 코드 블록 우상단에 겹쳐 놓는 절대 배치다.
   * 흐름 안에 놓아야 하는 곳(색 토큰 카드 등)에서 넘긴다.
   */
  className?: string;
}

const DEFAULT_CLASS_NAME = 'absolute right-2 top-2';

export function CopyButton({
  value,
  labelCopy,
  labelCopied,
  className = DEFAULT_CLASS_NAME,
}: CopyButtonProps) {
  const [isCopied, setIsCopied] = useState(false);

  async function handleCopy() {
    try {
      await navigator.clipboard.writeText(value);
      setIsCopied(true);
      window.setTimeout(() => setIsCopied(false), 1500);
    } catch {
      setIsCopied(false);
    }
  }

  return (
    <button
      type="button"
      onClick={handleCopy}
      aria-label={isCopied ? labelCopied : labelCopy}
      className={`${className} shrink-0 rounded-md border border-site-border bg-site-bg px-2 py-1 text-xs font-medium text-site-fg shadow-sm hover:bg-site-muted/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2`}
    >
      {isCopied ? labelCopied : labelCopy}
    </button>
  );
}

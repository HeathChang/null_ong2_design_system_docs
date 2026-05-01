'use client';

import { useState } from 'react';

interface CopyButtonProps {
  value: string;
  labelCopy: string;
  labelCopied: string;
}

export function CopyButton({ value, labelCopy, labelCopied }: CopyButtonProps) {
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
      className="absolute right-2 top-2 rounded-md border border-site-border bg-site-bg px-2 py-1 text-xs font-medium text-site-fg shadow-sm hover:bg-site-muted/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
    >
      {isCopied ? labelCopied : labelCopy}
    </button>
  );
}

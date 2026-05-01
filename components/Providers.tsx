'use client';

import type { ReactNode } from 'react';
import { ToastProvider } from 'null_ong2-design-system';

interface ProvidersProps {
  children: ReactNode;
}

export function Providers({ children }: ProvidersProps) {
  return <ToastProvider position="top-right">{children}</ToastProvider>;
}

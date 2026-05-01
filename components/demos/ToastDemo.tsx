'use client';

import { Button, Stack, useToast } from 'null_ong2-design-system';

interface ToastDemoProps {
  variant?: 'default' | 'danger' | 'duration' | 'stack';
}

export function ToastDemo({ variant = 'default' }: ToastDemoProps) {
  const toast = useToast();

  if (variant === 'danger') {
    return (
      <Button variant="danger" onClick={() => toast.danger('저장에 실패했습니다.', { duration: 5000 })}>
        오류 토스트
      </Button>
    );
  }

  if (variant === 'duration') {
    return (
      <Stack direction="row" spacing="sm">
        <Button onClick={() => toast.info('짧은 토스트', { duration: 1500 })}>1.5초</Button>
        <Button onClick={() => toast.info('긴 토스트', { duration: 7000 })}>7초</Button>
      </Stack>
    );
  }

  if (variant === 'stack') {
    return (
      <Button
        onClick={() => {
          toast.info('첫 번째 알림');
          toast.success('두 번째 알림');
          toast.warning('세 번째 알림');
        }}
      >
        토스트 3개 동시 표시
      </Button>
    );
  }

  return (
    <Stack direction="row" spacing="sm">
      <Button onClick={() => toast.success('저장되었습니다')}>성공</Button>
      <Button variant="danger" onClick={() => toast.danger('실패했습니다')}>실패</Button>
    </Stack>
  );
}

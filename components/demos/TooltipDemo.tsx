'use client';

import { Button, Stack, Tooltip } from 'null_ong2-design-system';

interface TooltipDemoProps {
  variant?: 'default' | 'placement' | 'delay' | 'shortcut';
}

export function TooltipDemo({ variant = 'default' }: TooltipDemoProps) {
  if (variant === 'placement') {
    return (
      <Stack direction="row" spacing="sm">
        <Tooltip content="위쪽" placement="top"><Button variant="secondary">Top</Button></Tooltip>
        <Tooltip content="아래쪽" placement="bottom"><Button variant="secondary">Bottom</Button></Tooltip>
        <Tooltip content="왼쪽" placement="left"><Button variant="secondary">Left</Button></Tooltip>
        <Tooltip content="오른쪽" placement="right"><Button variant="secondary">Right</Button></Tooltip>
      </Stack>
    );
  }

  if (variant === 'delay') {
    return (
      <Stack direction="row" spacing="sm">
        <Tooltip content="0ms (즉시)" delay={0}><Button variant="secondary">즉시</Button></Tooltip>
        <Tooltip content="500ms" delay={500}><Button variant="secondary">반 초</Button></Tooltip>
      </Stack>
    );
  }

  if (variant === 'shortcut') {
    return (
      <Tooltip content="저장합니다 (Cmd+S)">
        <Button>저장</Button>
      </Tooltip>
    );
  }

  return (
    <Tooltip content="툴팁 콘텐츠">
      <Button>호버하세요</Button>
    </Tooltip>
  );
}

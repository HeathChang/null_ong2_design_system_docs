'use client';

import { Button, DropdownMenu } from 'null_ong2-design-system';

interface DropdownMenuDemoProps {
  variant?: 'default' | 'destructive' | 'disabled' | 'actions';
}

export function DropdownMenuDemo({ variant = 'default' }: DropdownMenuDemoProps) {
  if (variant === 'destructive') {
    return (
      <DropdownMenu
        trigger={<Button variant="secondary">옵션</Button>}
        items={[
          { key: 'edit', label: '수정' },
          { key: 'duplicate', label: '복제' },
          { key: 'delete', label: '삭제', destructive: true },
        ]}
      />
    );
  }

  if (variant === 'disabled') {
    return (
      <DropdownMenu
        trigger={<Button variant="secondary">옵션</Button>}
        items={[
          { key: 'a', label: '활성 항목' },
          { key: 'b', label: '비활성 항목', disabled: true },
          { key: 'c', label: '활성 항목 2' },
        ]}
      />
    );
  }

  if (variant === 'actions') {
    return (
      <DropdownMenu
        trigger={<Button variant="ghost">⋮</Button>}
        items={[
          { key: 'open', label: '열기' },
          { key: 'rename', label: '이름 변경' },
          { key: 'archive', label: '보관' },
          { key: 'delete', label: '삭제', destructive: true },
        ]}
      />
    );
  }

  return (
    <DropdownMenu
      trigger={<Button variant="secondary">메뉴</Button>}
      items={[
        { key: 'a', label: '항목 A' },
        { key: 'b', label: '항목 B' },
        { key: 'c', label: '항목 C' },
      ]}
    />
  );
}

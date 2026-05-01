'use client';

import { useState } from 'react';
import { Button, Modal, Stack } from 'null_ong2-design-system';

interface ModalDemoProps {
  variant?: 'default' | 'destructive' | 'noClose' | 'long';
}

export function ModalDemo({ variant = 'default' }: ModalDemoProps) {
  const [open, setOpen] = useState(false);

  if (variant === 'destructive') {
    return (
      <>
        <Button variant="danger" onClick={() => setOpen(true)}>삭제</Button>
        <Modal
          isOpen={open}
          onClose={() => setOpen(false)}
          title="삭제 확인"
          footer={
            <Stack direction="row" spacing="sm" justify="flex-end">
              <Button variant="secondary" onClick={() => setOpen(false)}>취소</Button>
              <Button variant="danger" onClick={() => setOpen(false)}>삭제</Button>
            </Stack>
          }
        >
          정말 삭제하시겠습니까? 이 작업은 되돌릴 수 없습니다.
        </Modal>
      </>
    );
  }

  if (variant === 'noClose') {
    return (
      <>
        <Button onClick={() => setOpen(true)}>약관 확인</Button>
        <Modal
          isOpen={open}
          onClose={() => setOpen(false)}
          title="필수 약관"
          closeOnOverlayClick={false}
          closeOnEscape={false}
          showCloseButton={false}
          footer={
            <Stack direction="row" spacing="sm" justify="flex-end">
              <Button variant="primary" onClick={() => setOpen(false)}>동의하고 계속</Button>
            </Stack>
          }
        >
          하단 동의 버튼으로만 닫을 수 있습니다.
        </Modal>
      </>
    );
  }

  if (variant === 'long') {
    return (
      <>
        <Button onClick={() => setOpen(true)}>긴 본문 모달 열기</Button>
        <Modal isOpen={open} onClose={() => setOpen(false)} title="긴 본문" size="lg">
          <Stack spacing="md">
            {Array.from({ length: 10 }).map((_, i) => (
              <p key={i}>
                긴 본문 단락 {i + 1}. 본문이 길어지면 모달 본문 영역이 자체 스크롤됩니다.
              </p>
            ))}
          </Stack>
        </Modal>
      </>
    );
  }

  return (
    <>
      <Button onClick={() => setOpen(true)}>모달 열기</Button>
      <Modal isOpen={open} onClose={() => setOpen(false)} title="제목">
        모달 본문 콘텐츠입니다. ESC 키 또는 배경을 클릭해 닫을 수 있습니다.
      </Modal>
    </>
  );
}

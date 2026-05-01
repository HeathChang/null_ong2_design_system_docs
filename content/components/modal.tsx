import type { ComponentDoc } from '@/lib/types';
import { ModalDemo } from '@/components/demos/ModalDemo';

const DEFAULT_CODE = `const [open, setOpen] = useState(false);

<>
  <Button onClick={() => setOpen(true)}>모달 열기</Button>
  <Modal isOpen={open} onClose={() => setOpen(false)} title="제목">
    모달 본문
  </Modal>
</>`;

const DESTRUCTIVE_CODE = `<Modal
  isOpen={open}
  onClose={onClose}
  title="삭제 확인"
  footer={
    <Stack direction="row" spacing="sm" justify="flex-end">
      <Button variant="secondary" onClick={onClose}>취소</Button>
      <Button variant="danger" onClick={handleDelete}>삭제</Button>
    </Stack>
  }
>
  정말 삭제하시겠습니까?
</Modal>`;

const NO_CLOSE_CODE = `<Modal
  isOpen={open}
  onClose={onClose}
  title="필수 약관"
  closeOnOverlayClick={false}
  closeOnEscape={false}
  showCloseButton={false}
>
  ...
</Modal>`;

const LONG_CODE = `<Modal isOpen={open} onClose={onClose} title="긴 본문" size="lg">
  {/* 본문이 길면 자체 스크롤됩니다. */}
</Modal>`;

export const modalDoc: ComponentDoc = {
  category: 'overlay',
  name: 'Modal',
  slug: 'modal',
  status: 'stable',
  descriptionKey: 'components.modal.description',
  importStatement: `import { Modal } from 'null_ong2-design-system';`,
  props: [
    { name: 'isOpen', type: 'boolean', default: '—', required: true, descriptionKey: 'components.modal.props.isOpen' },
    { name: 'onClose', type: '() => void', default: '—', required: true, descriptionKey: 'components.modal.props.onClose' },
    { name: 'title', type: 'string', default: '—', required: false, descriptionKey: 'components.modal.props.title' },
    { name: 'children', type: 'ReactNode', default: '—', required: true, descriptionKey: 'components.modal.props.children' },
    { name: 'footer', type: 'ReactNode', default: '—', required: false, descriptionKey: 'components.modal.props.footer' },
    { name: 'size', type: "'sm' | 'md' | 'lg' | 'xl'", default: "'md'", required: false, descriptionKey: 'components.modal.props.size' },
    { name: 'closeOnOverlayClick', type: 'boolean', default: 'true', required: false, descriptionKey: 'components.modal.props.closeOnOverlayClick' },
    { name: 'closeOnEscape', type: 'boolean', default: 'true', required: false, descriptionKey: 'components.modal.props.closeOnEscape' },
    { name: 'showCloseButton', type: 'boolean', default: 'true', required: false, descriptionKey: 'components.modal.props.showCloseButton' },
  ],
  examples: [
    { tab: 'default', titleKey: 'components.modal.examples.default', preview: <ModalDemo variant="default" />, code: DEFAULT_CODE },
    { tab: 'variants', titleKey: 'components.modal.examples.destructive', preview: <ModalDemo variant="destructive" />, code: DESTRUCTIVE_CODE },
    { tab: 'states', titleKey: 'components.modal.examples.noClose', preview: <ModalDemo variant="noClose" />, code: NO_CLOSE_CODE },
    { tab: 'real-world', titleKey: 'components.modal.examples.long', preview: <ModalDemo variant="long" />, code: LONG_CODE },
  ],
  bestPractices: {
    do: [{ key: 'components.modal.do.1' }, { key: 'components.modal.do.2' }],
    dont: [{ key: 'components.modal.dont.1' }, { key: 'components.modal.dont.2' }],
  },
  a11yNotesKey: 'components.modal.a11y',
  related: ['tooltip', 'dropdown-menu', 'toast'],
};

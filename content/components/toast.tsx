import type { ComponentDoc } from '@/lib/types';
import { ToastDemo } from '@/components/demos/ToastDemo';

const DEFAULT_CODE = `function App() {
  const toast = useToast();
  return (
    <Stack direction="row" spacing="sm">
      <Button onClick={() => toast.success('저장되었습니다')}>성공</Button>
      <Button variant="danger" onClick={() => toast.danger('실패했습니다')}>실패</Button>
    </Stack>
  );
}`;

const DANGER_CODE = `<Button variant="danger" onClick={() => toast.danger('저장에 실패했습니다.', { duration: 5000 })}>
  오류 토스트
</Button>`;

const DURATION_CODE = `<Button onClick={() => toast.info('짧은 토스트', { duration: 1500 })}>1.5초</Button>
<Button onClick={() => toast.info('긴 토스트', { duration: 7000 })}>7초</Button>`;

const STACK_CODE = `<Button
  onClick={() => {
    toast.info('첫 번째 알림');
    toast.success('두 번째 알림');
    toast.warning('세 번째 알림');
  }}
>
  토스트 3개 동시 표시
</Button>`;

export const toastDoc: ComponentDoc = {
  category: 'overlay',
  name: 'Toast',
  slug: 'toast',
  status: 'stable',
  descriptionKey: 'components.toast.description',
  importStatement: `import { ToastProvider, useToast } from 'null_ong2-design-system';`,
  props: [
    { name: 'ToastProvider.position', type: "'top-left' | 'top-right' | 'top-center' | 'bottom-left' | 'bottom-right' | 'bottom-center'", default: "'bottom-right'", required: false, descriptionKey: 'components.toast.props.ToastProvider.position' },
    { name: 'ToastProvider.maxToasts', type: 'number', default: '5', required: false, descriptionKey: 'components.toast.props.ToastProvider.maxToasts' },
    { name: 'useToast.show', type: '(message, options?) => string', default: '—', required: false, descriptionKey: 'components.toast.props.useToast.show' },
    { name: 'useToast.success', type: '(message, options?) => string', default: '—', required: false, descriptionKey: 'components.toast.props.useToast.success' },
    { name: 'useToast.warning', type: '(message, options?) => string', default: '—', required: false, descriptionKey: 'components.toast.props.useToast.warning' },
    { name: 'useToast.danger', type: '(message, options?) => string', default: '—', required: false, descriptionKey: 'components.toast.props.useToast.danger' },
    { name: 'useToast.info', type: '(message, options?) => string', default: '—', required: false, descriptionKey: 'components.toast.props.useToast.info' },
    { name: 'useToast.dismiss', type: '(id: string) => void', default: '—', required: false, descriptionKey: 'components.toast.props.useToast.dismiss' },
  ],
  examples: [
    { tab: 'default', titleKey: 'components.toast.examples.default', preview: <ToastDemo variant="default" />, code: DEFAULT_CODE },
    { tab: 'variants', titleKey: 'components.toast.examples.danger', preview: <ToastDemo variant="danger" />, code: DANGER_CODE },
    { tab: 'states', titleKey: 'components.toast.examples.duration', preview: <ToastDemo variant="duration" />, code: DURATION_CODE },
    { tab: 'real-world', titleKey: 'components.toast.examples.stack', preview: <ToastDemo variant="stack" />, code: STACK_CODE },
  ],
  bestPractices: {
    do: [{ key: 'components.toast.do.1' }, { key: 'components.toast.do.2' }],
    dont: [{ key: 'components.toast.dont.1' }, { key: 'components.toast.dont.2' }],
  },
  a11yNotesKey: 'components.toast.a11y',
  related: ['alert', 'modal'],
};

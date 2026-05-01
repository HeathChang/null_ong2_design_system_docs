import { Alert, Stack } from 'null_ong2-design-system';
import type { ComponentDoc } from '@/lib/types';

const DEFAULT_CODE = `<Alert variant="info">시스템 점검이 예정되어 있습니다.</Alert>`;
const VARIANTS_CODE = `<Stack spacing="md">
  <Alert variant="info">정보 알림</Alert>
  <Alert variant="success">성공 알림</Alert>
  <Alert variant="warning">경고 알림</Alert>
  <Alert variant="danger">오류 알림</Alert>
</Stack>`;
const WITH_TITLE_CODE = `<Alert variant="warning" title="주의">
  이 작업은 되돌릴 수 없습니다.
</Alert>`;
const SAVE_CODE = `<Alert variant="success" title="저장 완료">
  변경 사항이 성공적으로 저장되었습니다.
</Alert>`;

export const alertDoc: ComponentDoc = {
  category: 'feedback',
  name: 'Alert',
  slug: 'alert',
  status: 'stable',
  descriptionKey: 'components.alert.description',
  importStatement: `import { Alert } from 'null_ong2-design-system';`,
  props: [
    { name: 'variant', type: "'info' | 'success' | 'warning' | 'danger'", default: "'info'", required: false, descriptionKey: 'components.alert.props.variant' },
    { name: 'title', type: 'string', default: '—', required: false, descriptionKey: 'components.alert.props.title' },
    { name: 'children', type: 'ReactNode', default: '—', required: true, descriptionKey: 'components.alert.props.children' },
    { name: 'icon', type: 'ReactNode', default: '—', required: false, descriptionKey: 'components.alert.props.icon' },
  ],
  examples: [
    { tab: 'default', titleKey: 'components.alert.examples.default', preview: <Alert variant="info">시스템 점검이 예정되어 있습니다.</Alert>, code: DEFAULT_CODE },
    {
      tab: 'variants',
      titleKey: 'components.alert.examples.variants',
      preview: (
        <Stack spacing="md">
          <Alert variant="info">정보 알림</Alert>
          <Alert variant="success">성공 알림</Alert>
          <Alert variant="warning">경고 알림</Alert>
          <Alert variant="danger">오류 알림</Alert>
        </Stack>
      ),
      code: VARIANTS_CODE,
    },
    {
      tab: 'states',
      titleKey: 'components.alert.examples.withTitle',
      preview: <Alert variant="warning" title="주의">이 작업은 되돌릴 수 없습니다.</Alert>,
      code: WITH_TITLE_CODE,
    },
    {
      tab: 'real-world',
      titleKey: 'components.alert.examples.save',
      preview: <Alert variant="success" title="저장 완료">변경 사항이 성공적으로 저장되었습니다.</Alert>,
      code: SAVE_CODE,
    },
  ],
  bestPractices: {
    do: [{ key: 'components.alert.do.1' }, { key: 'components.alert.do.2' }],
    dont: [{ key: 'components.alert.dont.1' }, { key: 'components.alert.dont.2' }],
  },
  a11yNotesKey: 'components.alert.a11y',
  related: ['toast', 'spinner', 'skeleton'],
};

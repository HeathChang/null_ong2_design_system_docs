import { Stack, Switch } from 'null_ong2-design-system';
import type { ComponentDoc } from '@/lib/types';

const DEFAULT_CODE = `<Switch id="notify" label="알림 받기" defaultChecked />`;

const SIZES_CODE = `<Stack direction="row" spacing="md" align="center">
  <Switch id="sw-sm" label="Small" size="sm" defaultChecked />
  <Switch id="sw-md" label="Medium" size="md" defaultChecked />
  <Switch id="sw-lg" label="Large" size="lg" defaultChecked />
</Stack>`;

const DISABLED_CODE = `<Stack spacing="sm">
  <Switch id="dsw-1" label="비활성화" disabled />
  <Switch id="dsw-2" label="비활성화 (켜짐)" defaultChecked disabled />
</Stack>`;

const SETTINGS_CODE = `<Stack spacing="sm">
  <Switch id="sw-noti" label="알림 받기" defaultChecked />
  <Switch id="sw-marketing" label="마케팅 메일 수신" />
  <Switch id="sw-darkmode" label="다크 모드" />
</Stack>`;

export const switchDoc: ComponentDoc = {
  category: 'form',
  name: 'Switch',
  slug: 'switch',
  status: 'stable',
  descriptionKey: 'components.switch.description',
  importStatement: `import { Switch } from 'null_ong2-design-system';`,
  props: [
    { name: 'id', type: 'string', default: 'auto', required: false, descriptionKey: 'components.switch.props.id' },
    { name: 'label', type: 'string', default: '—', required: false, descriptionKey: 'components.switch.props.label' },
    { name: 'size', type: "'sm' | 'md' | 'lg'", default: "'md'", required: false, descriptionKey: 'components.switch.props.size' },
    { name: 'checked', type: 'boolean', default: '—', required: false, descriptionKey: 'components.switch.props.checked' },
    { name: 'defaultChecked', type: 'boolean', default: '—', required: false, descriptionKey: 'components.switch.props.defaultChecked' },
    { name: 'onChange', type: '(checked: boolean, event) => void', default: '—', required: false, descriptionKey: 'components.switch.props.onChange' },
    { name: 'disabled', type: 'boolean', default: 'false', required: false, descriptionKey: 'components.switch.props.disabled' },
  ],
  examples: [
    {
      tab: 'default',
      titleKey: 'components.switch.examples.default',
      preview: <Switch id="demo-notify" label="알림 받기" defaultChecked />,
      code: DEFAULT_CODE,
    },
    {
      tab: 'variants',
      titleKey: 'components.switch.examples.sizes',
      preview: (
        <Stack direction="row" spacing="md" align="center">
          <Switch id="demo-sw-sm" label="Small" size="sm" defaultChecked />
          <Switch id="demo-sw-md" label="Medium" size="md" defaultChecked />
          <Switch id="demo-sw-lg" label="Large" size="lg" defaultChecked />
        </Stack>
      ),
      code: SIZES_CODE,
    },
    {
      tab: 'states',
      titleKey: 'components.switch.examples.disabled',
      preview: (
        <Stack spacing="sm">
          <Switch id="demo-dsw-1" label="비활성화" disabled />
          <Switch id="demo-dsw-2" label="비활성화 (켜짐)" defaultChecked disabled />
        </Stack>
      ),
      code: DISABLED_CODE,
    },
    {
      tab: 'real-world',
      titleKey: 'components.switch.examples.settings',
      preview: (
        <Stack spacing="sm">
          <Switch id="demo-sw-noti" label="알림 받기" defaultChecked />
          <Switch id="demo-sw-marketing" label="마케팅 메일 수신" />
          <Switch id="demo-sw-darkmode" label="다크 모드" />
        </Stack>
      ),
      code: SETTINGS_CODE,
    },
  ],
  bestPractices: {
    do: [{ key: 'components.switch.do.1' }, { key: 'components.switch.do.2' }],
    dont: [{ key: 'components.switch.dont.1' }, { key: 'components.switch.dont.2' }],
  },
  a11yNotesKey: 'components.switch.a11y',
  related: ['checkbox', 'radio'],
};

import { Checkbox, Stack } from 'null_ong2-design-system';
import type { ComponentDoc } from '@/lib/types';

const DEFAULT_CODE = `<Checkbox id="agree" label="이용약관에 동의합니다" />`;

const CONTROLLED_CODE = `const [checked, setChecked] = useState(false);

<Checkbox
  id="terms"
  label="개인정보 처리에 동의"
  checked={checked}
  onChange={setChecked}
/>`;

const DISABLED_CODE = `<Stack spacing="sm">
  <Checkbox id="d1" label="비활성화" disabled />
  <Checkbox id="d2" label="비활성화 (체크됨)" defaultChecked disabled />
</Stack>`;

const AGREEMENTS_CODE = `<Stack spacing="sm">
  <Checkbox id="ag1" label="이용약관에 동의 (필수)" />
  <Checkbox id="ag2" label="개인정보 처리방침에 동의 (필수)" />
  <Checkbox id="ag3" label="마케팅 정보 수신 동의 (선택)" />
</Stack>`;

export const checkboxDoc: ComponentDoc = {
  category: 'form',
  name: 'Checkbox',
  slug: 'checkbox',
  status: 'stable',
  descriptionKey: 'components.checkbox.description',
  importStatement: `import { Checkbox } from 'null_ong2-design-system';`,
  props: [
    { name: 'id', type: 'string', default: 'auto', required: false, descriptionKey: 'components.checkbox.props.id' },
    { name: 'label', type: 'string', default: '—', required: false, descriptionKey: 'components.checkbox.props.label' },
    { name: 'checked', type: 'boolean', default: '—', required: false, descriptionKey: 'components.checkbox.props.checked' },
    { name: 'defaultChecked', type: 'boolean', default: '—', required: false, descriptionKey: 'components.checkbox.props.defaultChecked' },
    { name: 'onChange', type: '(checked: boolean, event) => void', default: '—', required: false, descriptionKey: 'components.checkbox.props.onChange' },
    { name: 'disabled', type: 'boolean', default: 'false', required: false, descriptionKey: 'components.checkbox.props.disabled' },
  ],
  examples: [
    {
      tab: 'default',
      titleKey: 'components.checkbox.examples.default',
      preview: <Checkbox id="demo-agree" label="이용약관에 동의합니다" />,
      code: DEFAULT_CODE,
    },
    {
      tab: 'variants',
      titleKey: 'components.checkbox.examples.controlled',
      preview: <Checkbox id="demo-controlled" label="개인정보 처리에 동의" defaultChecked />,
      code: CONTROLLED_CODE,
    },
    {
      tab: 'states',
      titleKey: 'components.checkbox.examples.disabled',
      preview: (
        <Stack spacing="sm">
          <Checkbox id="demo-d1" label="비활성화" disabled />
          <Checkbox id="demo-d2" label="비활성화 (체크됨)" defaultChecked disabled />
        </Stack>
      ),
      code: DISABLED_CODE,
    },
    {
      tab: 'real-world',
      titleKey: 'components.checkbox.examples.agreements',
      preview: (
        <Stack spacing="sm">
          <Checkbox id="demo-ag1" label="이용약관에 동의 (필수)" />
          <Checkbox id="demo-ag2" label="개인정보 처리방침에 동의 (필수)" />
          <Checkbox id="demo-ag3" label="마케팅 정보 수신 동의 (선택)" />
        </Stack>
      ),
      code: AGREEMENTS_CODE,
    },
  ],
  bestPractices: {
    do: [{ key: 'components.checkbox.do.1' }, { key: 'components.checkbox.do.2' }],
    dont: [{ key: 'components.checkbox.dont.1' }, { key: 'components.checkbox.dont.2' }],
  },
  a11yNotesKey: 'components.checkbox.a11y',
  related: ['radio', 'switch'],
};

import { Radio, Stack } from 'null_ong2-design-system';
import type { ComponentDoc } from '@/lib/types';

const DEFAULT_CODE = `<Stack spacing="sm">
  <Radio id="size-s" name="size" value="s" label="Small" defaultChecked />
  <Radio id="size-m" name="size" value="m" label="Medium" />
  <Radio id="size-l" name="size" value="l" label="Large" />
</Stack>`;

const CONTROLLED_CODE = `const [method, setMethod] = useState('email');

<Stack spacing="sm">
  <Radio id="m-email" name="contact" value="email" label="이메일"
    checked={method === 'email'} onChange={setMethod} />
  <Radio id="m-phone" name="contact" value="phone" label="전화"
    checked={method === 'phone'} onChange={setMethod} />
</Stack>`;

const DISABLED_CODE = `<Stack spacing="sm">
  <Radio id="plan-free" name="plan" value="free" label="Free" defaultChecked />
  <Radio id="plan-pro" name="plan" value="pro" label="Pro" />
  <Radio id="plan-ent" name="plan" value="enterprise" label="Enterprise (문의 필요)" disabled />
</Stack>`;

const PAYMENT_CODE = `<Stack spacing="sm">
  <Radio id="pay-card" name="pay" value="card" label="신용/체크카드" defaultChecked />
  <Radio id="pay-trans" name="pay" value="transfer" label="계좌이체" />
  <Radio id="pay-vbank" name="pay" value="vbank" label="가상계좌" />
</Stack>`;

export const radioDoc: ComponentDoc = {
  category: 'form',
  name: 'Radio',
  slug: 'radio',
  status: 'stable',
  descriptionKey: 'components.radio.description',
  importStatement: `import { Radio } from 'null_ong2-design-system';`,
  props: [
    { name: 'id', type: 'string', default: '—', required: false, descriptionKey: 'components.radio.props.id' },
    { name: 'name', type: 'string', default: '—', required: false, descriptionKey: 'components.radio.props.name' },
    { name: 'value', type: 'string', default: '—', required: false, descriptionKey: 'components.radio.props.value' },
    { name: 'label', type: 'string', default: '—', required: false, descriptionKey: 'components.radio.props.label' },
    { name: 'checked', type: 'boolean', default: '—', required: false, descriptionKey: 'components.radio.props.checked' },
    { name: 'onChange', type: '(value: string, event) => void', default: '—', required: false, descriptionKey: 'components.radio.props.onChange' },
    { name: 'disabled', type: 'boolean', default: 'false', required: false, descriptionKey: 'components.radio.props.disabled' },
  ],
  examples: [
    {
      tab: 'default',
      titleKey: 'components.radio.examples.default',
      preview: (
        <Stack spacing="sm">
          <Radio id="demo-size-s" name="demo-size" value="s" label="Small" defaultChecked />
          <Radio id="demo-size-m" name="demo-size" value="m" label="Medium" />
          <Radio id="demo-size-l" name="demo-size" value="l" label="Large" />
        </Stack>
      ),
      code: DEFAULT_CODE,
    },
    {
      tab: 'variants',
      titleKey: 'components.radio.examples.controlled',
      preview: (
        <Stack spacing="sm">
          <Radio id="demo-m-email" name="demo-contact" value="email" label="이메일" defaultChecked />
          <Radio id="demo-m-phone" name="demo-contact" value="phone" label="전화" />
        </Stack>
      ),
      code: CONTROLLED_CODE,
    },
    {
      tab: 'states',
      titleKey: 'components.radio.examples.disabled',
      preview: (
        <Stack spacing="sm">
          <Radio id="demo-plan-free" name="demo-plan" value="free" label="Free" defaultChecked />
          <Radio id="demo-plan-pro" name="demo-plan" value="pro" label="Pro" />
          <Radio id="demo-plan-ent" name="demo-plan" value="enterprise" label="Enterprise (문의 필요)" disabled />
        </Stack>
      ),
      code: DISABLED_CODE,
    },
    {
      tab: 'real-world',
      titleKey: 'components.radio.examples.payment',
      preview: (
        <Stack spacing="sm">
          <Radio id="demo-pay-card" name="demo-pay" value="card" label="신용/체크카드" defaultChecked />
          <Radio id="demo-pay-trans" name="demo-pay" value="transfer" label="계좌이체" />
          <Radio id="demo-pay-vbank" name="demo-pay" value="vbank" label="가상계좌" />
        </Stack>
      ),
      code: PAYMENT_CODE,
    },
  ],
  bestPractices: {
    do: [{ key: 'components.radio.do.1' }, { key: 'components.radio.do.2' }],
    dont: [{ key: 'components.radio.dont.1' }, { key: 'components.radio.dont.2' }],
  },
  a11yNotesKey: 'components.radio.a11y',
  related: ['checkbox', 'select', 'switch'],
};

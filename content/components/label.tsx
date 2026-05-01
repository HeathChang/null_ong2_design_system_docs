import { Input, Label, Stack } from 'null_ong2-design-system';
import type { ComponentDoc } from '@/lib/types';

const DEFAULT_CODE = `<Label htmlFor="username">사용자명</Label>
<input id="username" />`;
const REQUIRED_CODE = `<Label htmlFor="email" required>이메일</Label>
<input id="email" type="email" />`;
const WITH_INPUT_CODE = `<Stack spacing="xs">
  <Label htmlFor="phone" required>전화번호</Label>
  <input id="phone" type="tel" />
</Stack>`;
const FIELDSET_CODE = `<fieldset>
  <legend>연락 방법</legend>
  <Stack spacing="sm">
    <Label htmlFor="contact-email">이메일</Label>
    <input id="contact-email" type="email" />
    <Label htmlFor="contact-phone">전화</Label>
    <input id="contact-phone" type="tel" />
  </Stack>
</fieldset>`;

export const labelDoc: ComponentDoc = {
  category: 'typography',
  name: 'Label',
  slug: 'label',
  status: 'stable',
  descriptionKey: 'components.label.description',
  importStatement: `import { Label } from 'null_ong2-design-system';`,
  props: [
    { name: 'htmlFor', type: 'string', default: '—', required: false, descriptionKey: 'components.label.props.htmlFor' },
    { name: 'required', type: 'boolean', default: 'false', required: false, descriptionKey: 'components.label.props.required' },
  ],
  examples: [
    {
      tab: 'default',
      titleKey: 'components.label.examples.default',
      preview: (
        <Stack spacing="xs">
          <Label htmlFor="demo-username">사용자명</Label>
          <input id="demo-username" style={{ padding: 8, borderRadius: 6, border: '1px solid var(--ds-color-neutral-300)' }} />
        </Stack>
      ),
      code: DEFAULT_CODE,
    },
    {
      tab: 'variants',
      titleKey: 'components.label.examples.required',
      preview: (
        <Stack spacing="xs">
          <Label htmlFor="demo-email" required>이메일</Label>
          <input id="demo-email" type="email" style={{ padding: 8, borderRadius: 6, border: '1px solid var(--ds-color-neutral-300)' }} />
        </Stack>
      ),
      code: REQUIRED_CODE,
    },
    {
      tab: 'states',
      titleKey: 'components.label.examples.withInput',
      preview: <Input id="demo-phone" label="전화번호" type="tel" required />,
      code: WITH_INPUT_CODE,
    },
    {
      tab: 'real-world',
      titleKey: 'components.label.examples.fieldset',
      preview: (
        <Stack spacing="sm">
          <Input id="demo-contact-email" label="이메일" type="email" />
          <Input id="demo-contact-phone" label="전화" type="tel" />
        </Stack>
      ),
      code: FIELDSET_CODE,
    },
  ],
  bestPractices: {
    do: [{ key: 'components.label.do.1' }, { key: 'components.label.do.2' }],
    dont: [{ key: 'components.label.dont.1' }, { key: 'components.label.dont.2' }],
  },
  a11yNotesKey: 'components.label.a11y',
  related: ['text', 'heading', 'input'],
};

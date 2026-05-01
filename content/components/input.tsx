import { Input, Stack } from 'null_ong2-design-system';
import type { ComponentDoc } from '@/lib/types';

const DEFAULT_CODE = `<Input id="name" label="이름" placeholder="이름을 입력하세요" />`;

const TYPES_CODE = `<Stack spacing="md">
  <Input id="email" label="이메일" type="email" placeholder="example@mail.com" />
  <Input id="password" label="비밀번호" type="password" />
  <Input id="age" label="나이" type="number" />
</Stack>`;

const HINT_ERROR_CODE = `<Stack spacing="md">
  <Input id="name1" label="이름" hint="실명을 입력하세요" />
  <Input id="email1" label="이메일" type="email" error="올바른 이메일 형식이 아닙니다" />
</Stack>`;

const DISABLED_CODE = `<Input id="readonly" label="읽기 전용" defaultValue="수정 불가" disabled />`;

const SIGNUP_CODE = `<Stack spacing="md">
  <Input id="name" label="이름" required />
  <Input id="email" label="이메일" type="email" required />
  <Input id="password" label="비밀번호" type="password" hint="8자 이상" required />
</Stack>`;

export const inputDoc: ComponentDoc = {
  category: 'form',
  name: 'Input',
  slug: 'input',
  status: 'stable',
  descriptionKey: 'components.input.description',
  importStatement: `import { Input } from 'null_ong2-design-system';`,
  props: [
    { name: 'id', type: 'string', default: '—', required: false, descriptionKey: 'components.input.props.id' },
    { name: 'label', type: 'string', default: '—', required: false, descriptionKey: 'components.input.props.label' },
    { name: 'hint', type: 'string', default: '—', required: false, descriptionKey: 'components.input.props.hint' },
    { name: 'error', type: 'string', default: '—', required: false, descriptionKey: 'components.input.props.error' },
    { name: 'required', type: 'boolean', default: 'false', required: false, descriptionKey: 'components.input.props.required' },
    { name: 'type', type: 'string', default: "'text'", required: false, descriptionKey: 'components.input.props.type' },
    { name: 'placeholder', type: 'string', default: '—', required: false, descriptionKey: 'components.input.props.placeholder' },
    { name: 'disabled', type: 'boolean', default: 'false', required: false, descriptionKey: 'components.input.props.disabled' },
  ],
  examples: [
    {
      tab: 'default',
      titleKey: 'components.input.examples.default',
      preview: <Input id="demo-name" label="이름" placeholder="이름을 입력하세요" />,
      code: DEFAULT_CODE,
    },
    {
      tab: 'variants',
      titleKey: 'components.input.examples.types',
      preview: (
        <Stack spacing="md">
          <Input id="demo-email" label="이메일" type="email" placeholder="example@mail.com" />
          <Input id="demo-password" label="비밀번호" type="password" />
          <Input id="demo-age" label="나이" type="number" />
        </Stack>
      ),
      code: TYPES_CODE,
    },
    {
      tab: 'states',
      titleKey: 'components.input.examples.hintError',
      preview: (
        <Stack spacing="md">
          <Input id="demo-hint" label="이름" hint="실명을 입력하세요" />
          <Input id="demo-error" label="이메일" type="email" error="올바른 이메일 형식이 아닙니다" />
        </Stack>
      ),
      code: HINT_ERROR_CODE,
    },
    {
      tab: 'states',
      titleKey: 'components.input.examples.disabled',
      preview: <Input id="demo-readonly" label="읽기 전용" defaultValue="수정 불가" disabled />,
      code: DISABLED_CODE,
    },
    {
      tab: 'real-world',
      titleKey: 'components.input.examples.signup',
      preview: (
        <Stack spacing="md">
          <Input id="signup-name" label="이름" required />
          <Input id="signup-email" label="이메일" type="email" required />
          <Input id="signup-pw" label="비밀번호" type="password" hint="8자 이상" required />
        </Stack>
      ),
      code: SIGNUP_CODE,
    },
  ],
  bestPractices: {
    do: [{ key: 'components.input.do.1' }, { key: 'components.input.do.2' }],
    dont: [{ key: 'components.input.dont.1' }, { key: 'components.input.dont.2' }],
  },
  a11yNotesKey: 'components.input.a11y',
  related: ['textarea', 'select', 'button'],
};

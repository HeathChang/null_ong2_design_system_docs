import { Button, Stack } from 'null_ong2-design-system';
import type { ComponentDoc } from '@/lib/types';

const DEFAULT_CODE = `<Button>저장</Button>`;

const VARIANTS_CODE = `<Stack direction="row" spacing="sm">
  <Button variant="primary">Primary</Button>
  <Button variant="secondary">Secondary</Button>
  <Button variant="ghost">Ghost</Button>
  <Button variant="danger">Danger</Button>
</Stack>`;

const SIZES_CODE = `<Stack direction="row" spacing="sm" align="center">
  <Button size="sm">Small</Button>
  <Button size="md">Medium</Button>
  <Button size="lg">Large</Button>
</Stack>`;

const STATES_CODE = `<Stack direction="row" spacing="sm">
  <Button isLoading>저장 중...</Button>
  <Button disabled>비활성화</Button>
</Stack>`;

const WITH_ICON_CODE = `<Stack direction="row" spacing="sm">
  <Button leftIcon={<span aria-hidden="true">＋</span>}>항목 추가</Button>
  <Button variant="secondary" rightIcon={<span aria-hidden="true">→</span>}>다음 단계</Button>
</Stack>`;

const REAL_WORLD_CODE = `<Stack direction="row" spacing="sm" justify="flex-end">
  <Button variant="secondary">취소</Button>
  <Button variant="primary">저장</Button>
</Stack>`;

export const buttonDoc: ComponentDoc = {
  category: 'core',
  name: 'Button',
  slug: 'button',
  status: 'stable',
  descriptionKey: 'components.button.description',
  importStatement: `import { Button } from 'null_ong2-design-system';`,
  props: [
    {
      name: 'variant',
      type: "'primary' | 'secondary' | 'ghost' | 'danger'",
      default: "'primary'",
      required: false,
      descriptionKey: 'components.button.props.variant',
    },
    {
      name: 'size',
      type: "'sm' | 'md' | 'lg'",
      default: "'md'",
      required: false,
      descriptionKey: 'components.button.props.size',
    },
    {
      name: 'isLoading',
      type: 'boolean',
      default: 'false',
      required: false,
      descriptionKey: 'components.button.props.isLoading',
    },
    {
      name: 'disabled',
      type: 'boolean',
      default: 'false',
      required: false,
      descriptionKey: 'components.button.props.disabled',
    },
    {
      name: 'leftIcon',
      type: 'ReactNode',
      default: '—',
      required: false,
      descriptionKey: 'components.button.props.leftIcon',
    },
    {
      name: 'rightIcon',
      type: 'ReactNode',
      default: '—',
      required: false,
      descriptionKey: 'components.button.props.rightIcon',
    },
  ],
  examples: [
    {
      tab: 'default',
      titleKey: 'components.button.examples.default',
      preview: <Button>저장</Button>,
      code: DEFAULT_CODE,
    },
    {
      tab: 'variants',
      titleKey: 'components.button.examples.variants',
      preview: (
        <Stack direction="row" spacing="sm">
          <Button variant="primary">Primary</Button>
          <Button variant="secondary">Secondary</Button>
          <Button variant="ghost">Ghost</Button>
          <Button variant="danger">Danger</Button>
        </Stack>
      ),
      code: VARIANTS_CODE,
    },
    {
      tab: 'variants',
      titleKey: 'components.button.examples.sizes',
      preview: (
        <Stack direction="row" spacing="sm" align="center">
          <Button size="sm">Small</Button>
          <Button size="md">Medium</Button>
          <Button size="lg">Large</Button>
        </Stack>
      ),
      code: SIZES_CODE,
    },
    {
      tab: 'states',
      titleKey: 'components.button.examples.states',
      preview: (
        <Stack direction="row" spacing="sm">
          <Button isLoading>저장 중...</Button>
          <Button disabled>비활성화</Button>
        </Stack>
      ),
      code: STATES_CODE,
    },
    {
      tab: 'states',
      titleKey: 'components.button.examples.withIcon',
      preview: (
        <Stack direction="row" spacing="sm">
          <Button leftIcon={<span aria-hidden="true">＋</span>}>항목 추가</Button>
          <Button variant="secondary" rightIcon={<span aria-hidden="true">→</span>}>다음 단계</Button>
        </Stack>
      ),
      code: WITH_ICON_CODE,
    },
    {
      tab: 'real-world',
      titleKey: 'components.button.examples.realWorld',
      preview: (
        <Stack direction="row" spacing="sm" justify="flex-end">
          <Button variant="secondary">취소</Button>
          <Button variant="primary">저장</Button>
        </Stack>
      ),
      code: REAL_WORLD_CODE,
    },
  ],
  bestPractices: {
    do: [
      { key: 'components.button.do.1' },
      { key: 'components.button.do.2' },
    ],
    dont: [
      { key: 'components.button.dont.1' },
      { key: 'components.button.dont.2' },
    ],
  },
  a11yNotesKey: 'components.button.a11y',
  related: ['input', 'switch'],
};

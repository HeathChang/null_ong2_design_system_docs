import { Avatar, Stack, Text } from 'null_ong2-design-system';
import type { ComponentDoc } from '@/lib/types';

const DEFAULT_CODE = `<Stack spacing="md">
  <Text>첫 번째 항목</Text>
  <Text>두 번째 항목</Text>
  <Text>세 번째 항목</Text>
</Stack>`;

const HORIZONTAL_CODE = `<Stack direction="row" spacing="sm" align="center">
  <Avatar name="홍길동" />
  <Text>홍길동</Text>
</Stack>`;

const TIGHTENING_CODE = `<Stack spacing="xs">
  <Text>좁은 간격</Text>
  <Text>좁은 간격</Text>
  <Text>좁은 간격</Text>
</Stack>`;

const USER_BLOCK_CODE = `<Stack direction="row" spacing="md" align="center">
  <Avatar name="홍길동" size="lg" />
  <Stack spacing="xs">
    <Text weight="semibold">홍길동</Text>
    <Text size="sm" color="muted">hong@example.com</Text>
  </Stack>
</Stack>`;

export const stackDoc: ComponentDoc = {
  category: 'layout',
  name: 'Stack',
  slug: 'stack',
  status: 'stable',
  descriptionKey: 'components.stack.description',
  importStatement: `import { Stack } from 'null_ong2-design-system';`,
  props: [
    { name: 'as', type: 'ElementType', default: "'div'", required: false, descriptionKey: 'components.stack.props.as' },
    { name: 'spacing', type: 'SpacingKey', default: "'md'", required: false, descriptionKey: 'components.stack.props.spacing' },
    { name: 'direction', type: "'column' | 'row'", default: "'column'", required: false, descriptionKey: 'components.stack.props.direction' },
    { name: 'align', type: "CSSProperties['alignItems']", default: '—', required: false, descriptionKey: 'components.stack.props.align' },
    { name: 'justify', type: "CSSProperties['justifyContent']", default: '—', required: false, descriptionKey: 'components.stack.props.justify' },
  ],
  examples: [
    {
      tab: 'default',
      titleKey: 'components.stack.examples.default',
      preview: (
        <Stack spacing="md">
          <Text>첫 번째 항목</Text>
          <Text>두 번째 항목</Text>
          <Text>세 번째 항목</Text>
        </Stack>
      ),
      code: DEFAULT_CODE,
    },
    {
      tab: 'variants',
      titleKey: 'components.stack.examples.horizontal',
      preview: (
        <Stack direction="row" spacing="sm" align="center">
          <Avatar name="홍길동" />
          <Text>홍길동</Text>
        </Stack>
      ),
      code: HORIZONTAL_CODE,
    },
    {
      tab: 'states',
      titleKey: 'components.stack.examples.tightening',
      preview: (
        <Stack spacing="xs">
          <Text>좁은 간격</Text>
          <Text>좁은 간격</Text>
          <Text>좁은 간격</Text>
        </Stack>
      ),
      code: TIGHTENING_CODE,
    },
    {
      tab: 'real-world',
      titleKey: 'components.stack.examples.userBlock',
      preview: (
        <Stack direction="row" spacing="md" align="center">
          <Avatar name="홍길동" size="lg" />
          <Stack spacing="xs">
            <Text weight="semibold">홍길동</Text>
            <Text size="sm" color="muted">hong@example.com</Text>
          </Stack>
        </Stack>
      ),
      code: USER_BLOCK_CODE,
    },
  ],
  bestPractices: {
    do: [{ key: 'components.stack.do.1' }, { key: 'components.stack.do.2' }],
    dont: [{ key: 'components.stack.dont.1' }, { key: 'components.stack.dont.2' }],
  },
  a11yNotesKey: 'components.stack.a11y',
  related: ['flex', 'grid', 'box'],
};

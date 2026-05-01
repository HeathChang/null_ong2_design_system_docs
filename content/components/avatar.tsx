import { Avatar, Stack } from 'null_ong2-design-system';
import type { ComponentDoc } from '@/lib/types';

const DEFAULT_CODE = `<Avatar src="/me.jpg" name="홍길동" />`;
const FALLBACK_CODE = `<Stack direction="row" spacing="sm">
  <Avatar name="홍길동" />
  <Avatar name="John Doe" />
  <Avatar name="이영희" />
</Stack>`;
const SIZES_CODE = `<Stack direction="row" spacing="sm" align="center">
  <Avatar name="A" size="xs" />
  <Avatar name="B" size="sm" />
  <Avatar name="C" size="md" />
  <Avatar name="D" size="lg" />
  <Avatar name="E" size="xl" />
</Stack>`;
const USER_LIST_CODE = `<Stack direction="row" spacing="sm" align="center">
  <Avatar name="홍길동" />
  <Avatar name="이영희" />
  <Avatar name="박철수" />
  <Avatar name="+5" />
</Stack>`;

export const avatarDoc: ComponentDoc = {
  category: 'data-display',
  name: 'Avatar',
  slug: 'avatar',
  status: 'stable',
  descriptionKey: 'components.avatar.description',
  importStatement: `import { Avatar } from 'null_ong2-design-system';`,
  props: [
    { name: 'src', type: 'string', default: '—', required: false, descriptionKey: 'components.avatar.props.src' },
    { name: 'name', type: 'string', default: '—', required: false, descriptionKey: 'components.avatar.props.name' },
    { name: 'alt', type: 'string', default: '—', required: false, descriptionKey: 'components.avatar.props.alt' },
    { name: 'size', type: "'xs' | 'sm' | 'md' | 'lg' | 'xl'", default: "'md'", required: false, descriptionKey: 'components.avatar.props.size' },
    { name: 'shape', type: "'circle' | 'square'", default: "'circle'", required: false, descriptionKey: 'components.avatar.props.shape' },
  ],
  examples: [
    { tab: 'default', titleKey: 'components.avatar.examples.default', preview: <Avatar name="홍길동" />, code: DEFAULT_CODE },
    {
      tab: 'variants',
      titleKey: 'components.avatar.examples.fallback',
      preview: (
        <Stack direction="row" spacing="sm">
          <Avatar name="홍길동" />
          <Avatar name="John Doe" />
          <Avatar name="이영희" />
        </Stack>
      ),
      code: FALLBACK_CODE,
    },
    {
      tab: 'states',
      titleKey: 'components.avatar.examples.sizes',
      preview: (
        <Stack direction="row" spacing="sm" align="center">
          <Avatar name="A" size="xs" />
          <Avatar name="B" size="sm" />
          <Avatar name="C" size="md" />
          <Avatar name="D" size="lg" />
          <Avatar name="E" size="xl" />
        </Stack>
      ),
      code: SIZES_CODE,
    },
    {
      tab: 'real-world',
      titleKey: 'components.avatar.examples.userList',
      preview: (
        <Stack direction="row" spacing="sm" align="center">
          <Avatar name="홍길동" />
          <Avatar name="이영희" />
          <Avatar name="박철수" />
          <Avatar name="+5" />
        </Stack>
      ),
      code: USER_LIST_CODE,
    },
  ],
  bestPractices: {
    do: [{ key: 'components.avatar.do.1' }, { key: 'components.avatar.do.2' }],
    dont: [{ key: 'components.avatar.dont.1' }, { key: 'components.avatar.dont.2' }],
  },
  a11yNotesKey: 'components.avatar.a11y',
  related: ['badge'],
};

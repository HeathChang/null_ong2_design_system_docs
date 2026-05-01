import { Flex, Skeleton, Stack } from 'null_ong2-design-system';
import type { ComponentDoc } from '@/lib/types';

const DEFAULT_CODE = `<Skeleton width={300} height={200} />`;
const TEXT_CODE = `<Stack spacing="xs">
  <Skeleton variant="text" width="80%" />
  <Skeleton variant="text" width="60%" />
  <Skeleton variant="text" width="90%" />
</Stack>`;
const CIRCLE_CODE = `<Skeleton variant="circle" width={48} height={48} />`;
const CARD_CODE = `<Flex gap="md" align="flex-start">
  <Skeleton variant="circle" width={48} height={48} />
  <Stack spacing="sm" style={{ flex: 1 }}>
    <Skeleton variant="text" width="60%" />
    <Skeleton variant="text" width="90%" />
    <Skeleton variant="text" width="75%" />
  </Stack>
</Flex>`;

export const skeletonDoc: ComponentDoc = {
  category: 'feedback',
  name: 'Skeleton',
  slug: 'skeleton',
  status: 'stable',
  descriptionKey: 'components.skeleton.description',
  importStatement: `import { Skeleton } from 'null_ong2-design-system';`,
  props: [
    { name: 'width', type: 'number | string', default: '—', required: false, descriptionKey: 'components.skeleton.props.width' },
    { name: 'height', type: 'number | string', default: '—', required: false, descriptionKey: 'components.skeleton.props.height' },
    { name: 'variant', type: "'rectangular' | 'text' | 'circle'", default: "'rectangular'", required: false, descriptionKey: 'components.skeleton.props.variant' },
  ],
  examples: [
    { tab: 'default', titleKey: 'components.skeleton.examples.default', preview: <Skeleton width={240} height={120} />, code: DEFAULT_CODE },
    {
      tab: 'variants',
      titleKey: 'components.skeleton.examples.text',
      preview: (
        <Stack spacing="xs" style={{ width: 240 }}>
          <Skeleton variant="text" width="80%" />
          <Skeleton variant="text" width="60%" />
          <Skeleton variant="text" width="90%" />
        </Stack>
      ),
      code: TEXT_CODE,
    },
    {
      tab: 'states',
      titleKey: 'components.skeleton.examples.circle',
      preview: <Skeleton variant="circle" width={48} height={48} />,
      code: CIRCLE_CODE,
    },
    {
      tab: 'real-world',
      titleKey: 'components.skeleton.examples.card',
      preview: (
        <Flex gap="md" align="flex-start" style={{ width: 280 }}>
          <Skeleton variant="circle" width={48} height={48} />
          <Stack spacing="sm" style={{ flex: 1 }}>
            <Skeleton variant="text" width="60%" />
            <Skeleton variant="text" width="90%" />
            <Skeleton variant="text" width="75%" />
          </Stack>
        </Flex>
      ),
      code: CARD_CODE,
    },
  ],
  bestPractices: {
    do: [{ key: 'components.skeleton.do.1' }, { key: 'components.skeleton.do.2' }],
    dont: [{ key: 'components.skeleton.dont.1' }, { key: 'components.skeleton.dont.2' }],
  },
  a11yNotesKey: 'components.skeleton.a11y',
  related: ['spinner', 'alert'],
};

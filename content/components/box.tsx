import { Box, Stack, Text } from 'null_ong2-design-system';
import type { ComponentDoc } from '@/lib/types';

const DEFAULT_CODE = `<Box padding="md" borderRadius="lg" bg="var(--ds-color-neutral-50)">
  카드 콘텐츠
</Box>`;

const AS_CODE = `<Box as="section" padding="xl" marginY="lg">
  섹션 콘텐츠
</Box>`;

const SPACING_CODE = `<Box paddingX="lg" paddingY="sm" borderRadius="md" bg="var(--ds-color-primary-50)">
  배너
</Box>`;

const CARD_CODE = `<Box
  as="article"
  padding="lg"
  borderRadius="lg"
  bg="var(--ds-color-neutral-0)"
  width="280px"
>
  카드 본문
</Box>`;

export const boxDoc: ComponentDoc = {
  category: 'layout',
  name: 'Box',
  slug: 'box',
  status: 'stable',
  descriptionKey: 'components.box.description',
  importStatement: `import { Box } from 'null_ong2-design-system';`,
  props: [
    { name: 'as', type: 'ElementType', default: "'div'", required: false, descriptionKey: 'components.box.props.as' },
    { name: 'padding', type: 'SpacingKey', default: '—', required: false, descriptionKey: 'components.box.props.padding' },
    { name: 'paddingX', type: 'SpacingKey', default: '—', required: false, descriptionKey: 'components.box.props.paddingX' },
    { name: 'paddingY', type: 'SpacingKey', default: '—', required: false, descriptionKey: 'components.box.props.paddingY' },
    { name: 'margin', type: 'SpacingKey', default: '—', required: false, descriptionKey: 'components.box.props.margin' },
    { name: 'marginX', type: 'SpacingKey', default: '—', required: false, descriptionKey: 'components.box.props.marginX' },
    { name: 'marginY', type: 'SpacingKey', default: '—', required: false, descriptionKey: 'components.box.props.marginY' },
    { name: 'borderRadius', type: 'RadiusKey', default: '—', required: false, descriptionKey: 'components.box.props.borderRadius' },
    { name: 'bg', type: 'string', default: '—', required: false, descriptionKey: 'components.box.props.bg' },
    { name: 'display', type: "CSSProperties['display']", default: '—', required: false, descriptionKey: 'components.box.props.display' },
    { name: 'width', type: "CSSProperties['width']", default: '—', required: false, descriptionKey: 'components.box.props.width' },
    { name: 'height', type: "CSSProperties['height']", default: '—', required: false, descriptionKey: 'components.box.props.height' },
    { name: 'overflow', type: "CSSProperties['overflow']", default: '—', required: false, descriptionKey: 'components.box.props.overflow' },
  ],
  examples: [
    {
      tab: 'default',
      titleKey: 'components.box.examples.default',
      preview: <Box padding="md" borderRadius="lg" bg="var(--ds-color-neutral-100)"><Text>카드 콘텐츠</Text></Box>,
      code: DEFAULT_CODE,
    },
    {
      tab: 'variants',
      titleKey: 'components.box.examples.as',
      preview: <Box as="section" padding="xl" bg="var(--ds-color-neutral-100)" borderRadius="md"><Text>section으로 렌더</Text></Box>,
      code: AS_CODE,
    },
    {
      tab: 'states',
      titleKey: 'components.box.examples.spacing',
      preview: <Box paddingX="lg" paddingY="sm" borderRadius="md" bg="var(--ds-color-primary-50)"><Text>배너</Text></Box>,
      code: SPACING_CODE,
    },
    {
      tab: 'real-world',
      titleKey: 'components.box.examples.card',
      preview: (
        <Box as="article" padding="lg" borderRadius="lg" bg="var(--ds-color-neutral-0)" width="280px">
          <Stack spacing="sm">
            <Text weight="semibold">카드 제목</Text>
            <Text size="sm" color="muted">카드 본문 영역</Text>
          </Stack>
        </Box>
      ),
      code: CARD_CODE,
    },
  ],
  bestPractices: {
    do: [{ key: 'components.box.do.1' }, { key: 'components.box.do.2' }],
    dont: [{ key: 'components.box.dont.1' }, { key: 'components.box.dont.2' }],
  },
  a11yNotesKey: 'components.box.a11y',
  related: ['flex', 'stack', 'grid', 'container'],
};

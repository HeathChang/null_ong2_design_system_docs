import { Badge, Box, Flex, Text } from 'null_ong2-design-system';
import type { ComponentDoc } from '@/lib/types';

const DEFAULT_CODE = `<Flex gap="md" align="center">
  <span>로고</span>
  <span>메뉴</span>
</Flex>`;

const SPACE_BETWEEN_CODE = `<Flex justify="space-between" align="center">
  <span>로고</span>
  <nav>메뉴</nav>
</Flex>`;

const WRAP_CODE = `<Flex gap="sm" wrap="wrap">
  <Badge>React</Badge>
  <Badge>TypeScript</Badge>
  <Badge>Storybook</Badge>
  <Badge>Tailwind</Badge>
</Flex>`;

const HEADER_CODE = `<Flex as="header" justify="space-between" align="center">
  <Text weight="semibold">My App</Text>
  <Flex as="nav" gap="md">
    <a href="/">홈</a>
    <a href="/about">소개</a>
  </Flex>
</Flex>`;

export const flexDoc: ComponentDoc = {
  category: 'layout',
  name: 'Flex',
  slug: 'flex',
  status: 'stable',
  descriptionKey: 'components.flex.description',
  importStatement: `import { Flex } from 'null_ong2-design-system';`,
  props: [
    { name: 'as', type: 'ElementType', default: "'div'", required: false, descriptionKey: 'components.flex.props.as' },
    { name: 'direction', type: "CSSProperties['flexDirection']", default: '—', required: false, descriptionKey: 'components.flex.props.direction' },
    { name: 'align', type: "CSSProperties['alignItems']", default: '—', required: false, descriptionKey: 'components.flex.props.align' },
    { name: 'justify', type: "CSSProperties['justifyContent']", default: '—', required: false, descriptionKey: 'components.flex.props.justify' },
    { name: 'wrap', type: "CSSProperties['flexWrap']", default: '—', required: false, descriptionKey: 'components.flex.props.wrap' },
    { name: 'gap', type: 'SpacingKey', default: '—', required: false, descriptionKey: 'components.flex.props.gap' },
    { name: 'columnGap', type: 'SpacingKey', default: '—', required: false, descriptionKey: 'components.flex.props.columnGap' },
    { name: 'rowGap', type: 'SpacingKey', default: '—', required: false, descriptionKey: 'components.flex.props.rowGap' },
    { name: 'flex', type: "CSSProperties['flex']", default: '—', required: false, descriptionKey: 'components.flex.props.flex' },
  ],
  examples: [
    {
      tab: 'default',
      titleKey: 'components.flex.examples.default',
      preview: (
        <Flex gap="md" align="center">
          <Text>로고</Text>
          <Text>메뉴</Text>
        </Flex>
      ),
      code: DEFAULT_CODE,
    },
    {
      tab: 'variants',
      titleKey: 'components.flex.examples.spaceBetween',
      preview: (
        <Box width="320px">
          <Flex justify="space-between" align="center">
            <Text>로고</Text>
            <Text>메뉴</Text>
          </Flex>
        </Box>
      ),
      code: SPACE_BETWEEN_CODE,
    },
    {
      tab: 'states',
      titleKey: 'components.flex.examples.wrap',
      preview: (
        <Box width="280px">
          <Flex gap="sm" wrap="wrap">
            <Badge>React</Badge>
            <Badge>TypeScript</Badge>
            <Badge>Storybook</Badge>
            <Badge>Tailwind</Badge>
          </Flex>
        </Box>
      ),
      code: WRAP_CODE,
    },
    {
      tab: 'real-world',
      titleKey: 'components.flex.examples.header',
      preview: (
        <Box width="380px">
          <Flex justify="space-between" align="center">
            <Text weight="semibold">My App</Text>
            <Flex gap="md">
              <Text size="sm">홈</Text>
              <Text size="sm">소개</Text>
            </Flex>
          </Flex>
        </Box>
      ),
      code: HEADER_CODE,
    },
  ],
  bestPractices: {
    do: [{ key: 'components.flex.do.1' }, { key: 'components.flex.do.2' }],
    dont: [{ key: 'components.flex.dont.1' }, { key: 'components.flex.dont.2' }],
  },
  a11yNotesKey: 'components.flex.a11y',
  related: ['stack', 'grid', 'box'],
};

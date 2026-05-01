import { Box, Stack, Text } from 'null_ong2-design-system';
import type { ComponentDoc } from '@/lib/types';

const DEFAULT_CODE = `<Text>일반 본문 텍스트입니다.</Text>`;
const SIZES_CODE = `<Stack spacing="xs">
  <Text size="xs">xs 텍스트</Text>
  <Text size="sm">sm 텍스트</Text>
  <Text size="base">base 텍스트</Text>
  <Text size="lg">lg 텍스트</Text>
  <Text size="xl">xl 텍스트</Text>
</Stack>`;
const COLORS_CODE = `<Stack spacing="xs">
  <Text color="default">default</Text>
  <Text color="muted">muted</Text>
  <Text color="primary">primary</Text>
  <Text color="success">success</Text>
  <Text color="warning">warning</Text>
  <Text color="danger">danger</Text>
</Stack>`;
const TRUNCATE_CODE = `<div style={{ width: '200px' }}>
  <Text truncate>
    이 텍스트는 너비를 초과하면 말줄임표로 처리됩니다.
  </Text>
</div>`;

export const textDoc: ComponentDoc = {
  category: 'typography',
  name: 'Text',
  slug: 'text',
  status: 'stable',
  descriptionKey: 'components.text.description',
  importStatement: `import { Text } from 'null_ong2-design-system';`,
  props: [
    { name: 'as', type: 'ElementType', default: "'p'", required: false, descriptionKey: 'components.text.props.as' },
    { name: 'size', type: 'FontSizeKey', default: "'base'", required: false, descriptionKey: 'components.text.props.size' },
    { name: 'weight', type: 'FontWeightKey', default: "'normal'", required: false, descriptionKey: 'components.text.props.weight' },
    { name: 'color', type: "'default' | 'muted' | 'primary' | 'success' | 'warning' | 'danger'", default: "'default'", required: false, descriptionKey: 'components.text.props.color' },
    { name: 'align', type: "CSSProperties['textAlign']", default: '—', required: false, descriptionKey: 'components.text.props.align' },
    { name: 'truncate', type: 'boolean', default: 'false', required: false, descriptionKey: 'components.text.props.truncate' },
  ],
  examples: [
    { tab: 'default', titleKey: 'components.text.examples.default', preview: <Text>일반 본문 텍스트입니다.</Text>, code: DEFAULT_CODE },
    {
      tab: 'variants',
      titleKey: 'components.text.examples.sizes',
      preview: (
        <Stack spacing="xs">
          <Text size="xs">xs 텍스트</Text>
          <Text size="sm">sm 텍스트</Text>
          <Text size="base">base 텍스트</Text>
          <Text size="lg">lg 텍스트</Text>
          <Text size="xl">xl 텍스트</Text>
        </Stack>
      ),
      code: SIZES_CODE,
    },
    {
      tab: 'states',
      titleKey: 'components.text.examples.colors',
      preview: (
        <Stack spacing="xs">
          <Text color="default">default</Text>
          <Text color="muted">muted</Text>
          <Text color="primary">primary</Text>
          <Text color="success">success</Text>
          <Text color="warning">warning</Text>
          <Text color="danger">danger</Text>
        </Stack>
      ),
      code: COLORS_CODE,
    },
    {
      tab: 'real-world',
      titleKey: 'components.text.examples.truncate',
      preview: (
        <Box width="200px">
          <Text truncate>이 텍스트는 너비를 초과하면 말줄임표로 처리됩니다.</Text>
        </Box>
      ),
      code: TRUNCATE_CODE,
    },
  ],
  bestPractices: {
    do: [{ key: 'components.text.do.1' }, { key: 'components.text.do.2' }],
    dont: [{ key: 'components.text.dont.1' }, { key: 'components.text.dont.2' }],
  },
  a11yNotesKey: 'components.text.a11y',
  related: ['heading', 'label'],
};

import { Box, Spinner, Stack, Text } from 'null_ong2-design-system';
import type { ComponentDoc } from '@/lib/types';

const DEFAULT_CODE = `<Spinner />`;
const SIZES_CODE = `<Stack direction="row" spacing="md" align="center">
  <Spinner size="xs" />
  <Spinner size="sm" />
  <Spinner size="md" />
  <Spinner size="lg" />
</Stack>`;
const INLINE_CODE = `<Button isLoading>저장 중...</Button>`;
const INHERIT_CODE = `<span style={{ color: 'var(--ds-color-primary-600)' }}>
  <Spinner size="md" />
</span>`;

export const spinnerDoc: ComponentDoc = {
  category: 'feedback',
  name: 'Spinner',
  slug: 'spinner',
  status: 'stable',
  descriptionKey: 'components.spinner.description',
  importStatement: `import { Spinner } from 'null_ong2-design-system';`,
  props: [
    { name: 'size', type: "'xs' | 'sm' | 'md' | 'lg'", default: "'md'", required: false, descriptionKey: 'components.spinner.props.size' },
    { name: 'label', type: 'string', default: 'locale', required: false, descriptionKey: 'components.spinner.props.label' },
  ],
  examples: [
    { tab: 'default', titleKey: 'components.spinner.examples.default', preview: <Spinner />, code: DEFAULT_CODE },
    {
      tab: 'variants',
      titleKey: 'components.spinner.examples.sizes',
      preview: (
        <Stack direction="row" spacing="md" align="center">
          <Spinner size="xs" />
          <Spinner size="sm" />
          <Spinner size="md" />
          <Spinner size="lg" />
        </Stack>
      ),
      code: SIZES_CODE,
    },
    {
      tab: 'states',
      titleKey: 'components.spinner.examples.inline',
      preview: (
        <Stack direction="row" spacing="sm" align="center">
          <Spinner size="sm" />
          <Text size="sm">저장 중...</Text>
        </Stack>
      ),
      code: INLINE_CODE,
    },
    {
      tab: 'real-world',
      titleKey: 'components.spinner.examples.inherit',
      preview: (
        <Box>
          <span style={{ color: 'var(--ds-color-primary-600)' }}>
            <Spinner size="md" />
          </span>
        </Box>
      ),
      code: INHERIT_CODE,
    },
  ],
  bestPractices: {
    do: [{ key: 'components.spinner.do.1' }, { key: 'components.spinner.do.2' }],
    dont: [{ key: 'components.spinner.dont.1' }, { key: 'components.spinner.dont.2' }],
  },
  a11yNotesKey: 'components.spinner.a11y',
  related: ['skeleton', 'alert'],
};

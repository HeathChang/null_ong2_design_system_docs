import { Badge, Stack } from 'null_ong2-design-system';
import type { ComponentDoc } from '@/lib/types';

const DEFAULT_CODE = `<Badge>New</Badge>`;
const VARIANTS_CODE = `<Stack direction="row" spacing="sm">
  <Badge variant="neutral">Neutral</Badge>
  <Badge variant="primary">Primary</Badge>
  <Badge variant="success">Success</Badge>
  <Badge variant="warning">Warning</Badge>
  <Badge variant="danger">Danger</Badge>
  <Badge variant="info">Info</Badge>
</Stack>`;
const DOT_CODE = `<Stack direction="row" spacing="sm">
  <Badge variant="success" dot />
  <Badge variant="danger" dot />
  <Badge variant="warning" dot />
</Stack>`;
const NOTIFICATION_CODE = `<Stack direction="row" spacing="md" align="center">
  <Badge variant="danger">99+</Badge>
  <Badge variant="primary">12</Badge>
  <Badge variant="success">완료</Badge>
</Stack>`;

export const badgeDoc: ComponentDoc = {
  category: 'data-display',
  name: 'Badge',
  slug: 'badge',
  status: 'stable',
  descriptionKey: 'components.badge.description',
  importStatement: `import { Badge } from 'null_ong2-design-system';`,
  props: [
    { name: 'variant', type: "'neutral' | 'primary' | 'success' | 'warning' | 'danger' | 'info'", default: "'neutral'", required: false, descriptionKey: 'components.badge.props.variant' },
    { name: 'size', type: "'sm' | 'md'", default: "'md'", required: false, descriptionKey: 'components.badge.props.size' },
    { name: 'dot', type: 'boolean', default: 'false', required: false, descriptionKey: 'components.badge.props.dot' },
  ],
  examples: [
    { tab: 'default', titleKey: 'components.badge.examples.default', preview: <Badge>New</Badge>, code: DEFAULT_CODE },
    {
      tab: 'variants',
      titleKey: 'components.badge.examples.variants',
      preview: (
        <Stack direction="row" spacing="sm">
          <Badge variant="neutral">Neutral</Badge>
          <Badge variant="primary">Primary</Badge>
          <Badge variant="success">Success</Badge>
          <Badge variant="warning">Warning</Badge>
          <Badge variant="danger">Danger</Badge>
          <Badge variant="info">Info</Badge>
        </Stack>
      ),
      code: VARIANTS_CODE,
    },
    {
      tab: 'states',
      titleKey: 'components.badge.examples.dot',
      preview: (
        <Stack direction="row" spacing="sm">
          <Badge variant="success" dot />
          <Badge variant="danger" dot />
          <Badge variant="warning" dot />
        </Stack>
      ),
      code: DOT_CODE,
    },
    {
      tab: 'real-world',
      titleKey: 'components.badge.examples.notification',
      preview: (
        <Stack direction="row" spacing="md" align="center">
          <Badge variant="danger">99+</Badge>
          <Badge variant="primary">12</Badge>
          <Badge variant="success">완료</Badge>
        </Stack>
      ),
      code: NOTIFICATION_CODE,
    },
  ],
  bestPractices: {
    do: [{ key: 'components.badge.do.1' }, { key: 'components.badge.do.2' }],
    dont: [{ key: 'components.badge.dont.1' }, { key: 'components.badge.dont.2' }],
  },
  a11yNotesKey: 'components.badge.a11y',
  related: ['avatar'],
};

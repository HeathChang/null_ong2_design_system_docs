import type { ComponentDoc } from '@/lib/types';
import { TooltipDemo } from '@/components/demos/TooltipDemo';

const DEFAULT_CODE = `<Tooltip content="툴팁 콘텐츠">
  <Button>호버하세요</Button>
</Tooltip>`;

const PLACEMENT_CODE = `<Stack direction="row" spacing="sm">
  <Tooltip content="위쪽" placement="top"><Button variant="secondary">Top</Button></Tooltip>
  <Tooltip content="아래쪽" placement="bottom"><Button variant="secondary">Bottom</Button></Tooltip>
  <Tooltip content="왼쪽" placement="left"><Button variant="secondary">Left</Button></Tooltip>
  <Tooltip content="오른쪽" placement="right"><Button variant="secondary">Right</Button></Tooltip>
</Stack>`;

const DELAY_CODE = `<Tooltip content="0ms" delay={0}>
  <Button>즉시</Button>
</Tooltip>
<Tooltip content="500ms" delay={500}>
  <Button>반 초</Button>
</Tooltip>`;

const SHORTCUT_CODE = `<Tooltip content="저장합니다 (Cmd+S)">
  <Button>저장</Button>
</Tooltip>`;

export const tooltipDoc: ComponentDoc = {
  category: 'overlay',
  name: 'Tooltip',
  slug: 'tooltip',
  status: 'stable',
  descriptionKey: 'components.tooltip.description',
  importStatement: `import { Tooltip } from 'null_ong2-design-system';`,
  props: [
    { name: 'content', type: 'ReactNode', default: '—', required: true, descriptionKey: 'components.tooltip.props.content' },
    { name: 'children', type: 'ReactElement', default: '—', required: true, descriptionKey: 'components.tooltip.props.children' },
    { name: 'placement', type: 'Placement', default: "'top'", required: false, descriptionKey: 'components.tooltip.props.placement' },
    { name: 'delay', type: 'number', default: '200', required: false, descriptionKey: 'components.tooltip.props.delay' },
    { name: 'disabled', type: 'boolean', default: 'false', required: false, descriptionKey: 'components.tooltip.props.disabled' },
  ],
  examples: [
    { tab: 'default', titleKey: 'components.tooltip.examples.default', preview: <TooltipDemo variant="default" />, code: DEFAULT_CODE },
    { tab: 'variants', titleKey: 'components.tooltip.examples.placement', preview: <TooltipDemo variant="placement" />, code: PLACEMENT_CODE },
    { tab: 'states', titleKey: 'components.tooltip.examples.delay', preview: <TooltipDemo variant="delay" />, code: DELAY_CODE },
    { tab: 'real-world', titleKey: 'components.tooltip.examples.shortcut', preview: <TooltipDemo variant="shortcut" />, code: SHORTCUT_CODE },
  ],
  bestPractices: {
    do: [{ key: 'components.tooltip.do.1' }, { key: 'components.tooltip.do.2' }],
    dont: [{ key: 'components.tooltip.dont.1' }, { key: 'components.tooltip.dont.2' }],
  },
  a11yNotesKey: 'components.tooltip.a11y',
  related: ['modal', 'dropdown-menu'],
};

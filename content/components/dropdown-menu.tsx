import type { ComponentDoc } from '@/lib/types';
import { DropdownMenuDemo } from '@/components/demos/DropdownMenuDemo';

const DEFAULT_CODE = `<DropdownMenu
  trigger={<Button variant="secondary">메뉴</Button>}
  items={[
    { key: 'a', label: '항목 A' },
    { key: 'b', label: '항목 B' },
    { key: 'c', label: '항목 C' },
  ]}
/>`;

const DESTRUCTIVE_CODE = `<DropdownMenu
  trigger={<Button variant="secondary">옵션</Button>}
  items={[
    { key: 'edit', label: '수정' },
    { key: 'duplicate', label: '복제' },
    { key: 'delete', label: '삭제', destructive: true },
  ]}
/>`;

const DISABLED_CODE = `<DropdownMenu
  trigger={<Button variant="secondary">옵션</Button>}
  items={[
    { key: 'a', label: '활성 항목' },
    { key: 'b', label: '비활성 항목', disabled: true },
    { key: 'c', label: '활성 항목 2' },
  ]}
/>`;

const ACTIONS_CODE = `<DropdownMenu
  trigger={<Button variant="ghost">⋮</Button>}
  items={[
    { key: 'open', label: '열기' },
    { key: 'rename', label: '이름 변경' },
    { key: 'archive', label: '보관' },
    { key: 'delete', label: '삭제', destructive: true },
  ]}
/>`;

export const dropdownMenuDoc: ComponentDoc = {
  category: 'overlay',
  name: 'DropdownMenu',
  slug: 'dropdown-menu',
  status: 'stable',
  descriptionKey: 'components.dropdownMenu.description',
  importStatement: `import { DropdownMenu } from 'null_ong2-design-system';`,
  props: [
    { name: 'trigger', type: 'ReactElement', default: '—', required: true, descriptionKey: 'components.dropdownMenu.props.trigger' },
    { name: 'items', type: 'DropdownMenuItem[]', default: '—', required: true, descriptionKey: 'components.dropdownMenu.props.items' },
    { name: 'placement', type: 'Placement', default: "'bottom-start'", required: false, descriptionKey: 'components.dropdownMenu.props.placement' },
  ],
  examples: [
    { tab: 'default', titleKey: 'components.dropdownMenu.examples.default', preview: <DropdownMenuDemo variant="default" />, code: DEFAULT_CODE },
    { tab: 'variants', titleKey: 'components.dropdownMenu.examples.destructive', preview: <DropdownMenuDemo variant="destructive" />, code: DESTRUCTIVE_CODE },
    { tab: 'states', titleKey: 'components.dropdownMenu.examples.disabled', preview: <DropdownMenuDemo variant="disabled" />, code: DISABLED_CODE },
    { tab: 'real-world', titleKey: 'components.dropdownMenu.examples.actions', preview: <DropdownMenuDemo variant="actions" />, code: ACTIONS_CODE },
  ],
  bestPractices: {
    do: [{ key: 'components.dropdownMenu.do.1' }, { key: 'components.dropdownMenu.do.2' }],
    dont: [{ key: 'components.dropdownMenu.dont.1' }, { key: 'components.dropdownMenu.dont.2' }],
  },
  a11yNotesKey: 'components.dropdownMenu.a11y',
  related: ['modal', 'tooltip'],
};

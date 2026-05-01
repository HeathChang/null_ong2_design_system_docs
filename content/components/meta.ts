import type { Category } from '@/lib/categories';
import type { ComponentStatus } from '@/lib/types';

export interface ComponentMeta {
  category: Category;
  name: string;
  slug: string;
  status: ComponentStatus;
  descriptionKey: string;
  related: string[];
}

export const componentMeta: ComponentMeta[] = [
  { category: 'layout', name: 'Box', slug: 'box', status: 'stable', descriptionKey: 'components.box.description', related: ['flex', 'stack', 'grid', 'container'] },
  { category: 'layout', name: 'Flex', slug: 'flex', status: 'stable', descriptionKey: 'components.flex.description', related: ['stack', 'grid', 'box'] },
  { category: 'layout', name: 'Stack', slug: 'stack', status: 'stable', descriptionKey: 'components.stack.description', related: ['flex', 'grid', 'box'] },
  { category: 'layout', name: 'Grid', slug: 'grid', status: 'stable', descriptionKey: 'components.grid.description', related: ['flex', 'stack', 'box'] },
  { category: 'layout', name: 'Container', slug: 'container', status: 'stable', descriptionKey: 'components.container.description', related: ['box', 'stack'] },
  { category: 'typography', name: 'Text', slug: 'text', status: 'stable', descriptionKey: 'components.text.description', related: ['heading', 'label'] },
  { category: 'typography', name: 'Heading', slug: 'heading', status: 'stable', descriptionKey: 'components.heading.description', related: ['text', 'label'] },
  { category: 'typography', name: 'Label', slug: 'label', status: 'stable', descriptionKey: 'components.label.description', related: ['text', 'heading', 'input'] },
  { category: 'core', name: 'Button', slug: 'button', status: 'stable', descriptionKey: 'components.button.description', related: ['input', 'switch'] },
  { category: 'form', name: 'Input', slug: 'input', status: 'stable', descriptionKey: 'components.input.description', related: ['textarea', 'select', 'button'] },
  { category: 'form', name: 'Textarea', slug: 'textarea', status: 'stable', descriptionKey: 'components.textarea.description', related: ['input', 'select'] },
  { category: 'form', name: 'Checkbox', slug: 'checkbox', status: 'stable', descriptionKey: 'components.checkbox.description', related: ['radio', 'switch'] },
  { category: 'form', name: 'Radio', slug: 'radio', status: 'stable', descriptionKey: 'components.radio.description', related: ['checkbox', 'select', 'switch'] },
  { category: 'form', name: 'Select', slug: 'select', status: 'stable', descriptionKey: 'components.select.description', related: ['radio', 'input'] },
  { category: 'form', name: 'Switch', slug: 'switch', status: 'stable', descriptionKey: 'components.switch.description', related: ['checkbox', 'radio'] },
  { category: 'feedback', name: 'Spinner', slug: 'spinner', status: 'stable', descriptionKey: 'components.spinner.description', related: ['skeleton', 'alert'] },
  { category: 'feedback', name: 'Skeleton', slug: 'skeleton', status: 'stable', descriptionKey: 'components.skeleton.description', related: ['spinner', 'alert'] },
  { category: 'feedback', name: 'Alert', slug: 'alert', status: 'stable', descriptionKey: 'components.alert.description', related: ['toast', 'spinner', 'skeleton'] },
  { category: 'data-display', name: 'Avatar', slug: 'avatar', status: 'stable', descriptionKey: 'components.avatar.description', related: ['badge'] },
  { category: 'data-display', name: 'Badge', slug: 'badge', status: 'stable', descriptionKey: 'components.badge.description', related: ['avatar'] },
  { category: 'data-display', name: 'Carousel', slug: 'carousel', status: 'stable', descriptionKey: 'components.carousel.description', related: ['tabs'] },
  { category: 'navigation', name: 'Tabs', slug: 'tabs', status: 'stable', descriptionKey: 'components.tabs.description', related: ['carousel'] },
  { category: 'overlay', name: 'Modal', slug: 'modal', status: 'stable', descriptionKey: 'components.modal.description', related: ['tooltip', 'dropdown-menu', 'toast'] },
  { category: 'overlay', name: 'Tooltip', slug: 'tooltip', status: 'stable', descriptionKey: 'components.tooltip.description', related: ['modal', 'dropdown-menu'] },
  { category: 'overlay', name: 'DropdownMenu', slug: 'dropdown-menu', status: 'stable', descriptionKey: 'components.dropdownMenu.description', related: ['modal', 'tooltip'] },
  { category: 'overlay', name: 'Toast', slug: 'toast', status: 'stable', descriptionKey: 'components.toast.description', related: ['alert', 'modal'] },
];

export function getMeta(slug: string): ComponentMeta | undefined {
  return componentMeta.find((m) => m.slug === slug);
}

export function metaByCategory(): Map<Category, ComponentMeta[]> {
  const map = new Map<Category, ComponentMeta[]>();
  for (const meta of componentMeta) {
    const list = map.get(meta.category);
    if (list === undefined) {
      map.set(meta.category, [meta]);
    } else {
      list.push(meta);
    }
  }
  return map;
}

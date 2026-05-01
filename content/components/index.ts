import type { ComponentDoc } from '@/lib/types';

export { componentMeta, getMeta, metaByCategory } from './meta';
export type { ComponentMeta } from './meta';

export async function getDoc(slug: string): Promise<ComponentDoc | undefined> {
  switch (slug) {
    case 'box': return (await import('./box')).boxDoc;
    case 'flex': return (await import('./flex')).flexDoc;
    case 'stack': return (await import('./stack')).stackDoc;
    case 'grid': return (await import('./grid')).gridDoc;
    case 'container': return (await import('./container')).containerDoc;
    case 'text': return (await import('./text')).textDoc;
    case 'heading': return (await import('./heading')).headingDoc;
    case 'label': return (await import('./label')).labelDoc;
    case 'button': return (await import('./button')).buttonDoc;
    case 'input': return (await import('./input')).inputDoc;
    case 'textarea': return (await import('./textarea')).textareaDoc;
    case 'checkbox': return (await import('./checkbox')).checkboxDoc;
    case 'radio': return (await import('./radio')).radioDoc;
    case 'select': return (await import('./select')).selectDoc;
    case 'switch': return (await import('./switch')).switchDoc;
    case 'spinner': return (await import('./spinner')).spinnerDoc;
    case 'skeleton': return (await import('./skeleton')).skeletonDoc;
    case 'alert': return (await import('./alert')).alertDoc;
    case 'avatar': return (await import('./avatar')).avatarDoc;
    case 'badge': return (await import('./badge')).badgeDoc;
    case 'carousel': return (await import('./carousel')).carouselDoc;
    case 'tabs': return (await import('./tabs')).tabsDoc;
    case 'modal': return (await import('./modal')).modalDoc;
    case 'tooltip': return (await import('./tooltip')).tooltipDoc;
    case 'dropdown-menu': return (await import('./dropdown-menu')).dropdownMenuDoc;
    case 'toast': return (await import('./toast')).toastDoc;
    default: return undefined;
  }
}

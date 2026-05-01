export interface NavEntry {
  href: string;
  labelKey: 'home' | 'gettingStarted' | 'components' | 'tokens' | 'theming';
}

export const NAV_ENTRIES: NavEntry[] = [
  { href: '/', labelKey: 'home' },
  { href: '/getting-started', labelKey: 'gettingStarted' },
  { href: '/components', labelKey: 'components' },
  { href: '/tokens', labelKey: 'tokens' },
  { href: '/theming', labelKey: 'theming' },
];

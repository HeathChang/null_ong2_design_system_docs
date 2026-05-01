'use client';

import type { ReactNode } from 'react';
import { Tabs } from 'null_ong2-design-system';

export interface TabData {
  value: string;
  label: string;
  content: ReactNode;
}

interface ExamplesTabsProps {
  tabs: TabData[];
  ariaLabel: string;
}

export function ExamplesTabs({ tabs, ariaLabel }: ExamplesTabsProps) {
  const first = tabs[0];
  if (first === undefined) return null;
  return (
    <Tabs.Root defaultValue={first.value}>
      <Tabs.List aria-label={ariaLabel}>
        {tabs.map((tab) => (
          <Tabs.Trigger key={tab.value} value={tab.value}>
            {tab.label}
          </Tabs.Trigger>
        ))}
      </Tabs.List>
      {tabs.map((tab) => (
        <Tabs.Panel key={tab.value} value={tab.value}>
          {tab.content}
        </Tabs.Panel>
      ))}
    </Tabs.Root>
  );
}

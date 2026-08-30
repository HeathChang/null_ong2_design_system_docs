import { Text } from 'null_ong2-design-system';
import type { ComponentDoc } from '@/lib/types';
import { ExamplesTabs } from '@/components/ExamplesTabs';

const DEFAULT_CODE = `<Tabs.Root defaultValue="profile">
  <Tabs.List aria-label="계정 섹션">
    <Tabs.Trigger value="profile">프로필</Tabs.Trigger>
    <Tabs.Trigger value="account">계정</Tabs.Trigger>
    <Tabs.Trigger value="notifications">알림</Tabs.Trigger>
  </Tabs.List>
  <Tabs.Panel value="profile">프로필 화면</Tabs.Panel>
  <Tabs.Panel value="account">계정 화면</Tabs.Panel>
  <Tabs.Panel value="notifications">알림 설정</Tabs.Panel>
</Tabs.Root>`;

const VERTICAL_CODE = `<Tabs.Root defaultValue="overview" orientation="vertical">
  <Tabs.List aria-label="대시보드">
    <Tabs.Trigger value="overview">개요</Tabs.Trigger>
    <Tabs.Trigger value="reports">리포트</Tabs.Trigger>
    <Tabs.Trigger value="settings">설정</Tabs.Trigger>
  </Tabs.List>
  <Tabs.Panel value="overview">개요 콘텐츠</Tabs.Panel>
  <Tabs.Panel value="reports">리포트 콘텐츠</Tabs.Panel>
  <Tabs.Panel value="settings">설정 콘텐츠</Tabs.Panel>
</Tabs.Root>`;

const DISABLED_CODE = `<Tabs.Root defaultValue="active">
  <Tabs.List aria-label="요금제">
    <Tabs.Trigger value="active">활성</Tabs.Trigger>
    <Tabs.Trigger value="archived">보관</Tabs.Trigger>
    <Tabs.Trigger value="legacy" disabled>레거시 (사용 중지)</Tabs.Trigger>
  </Tabs.List>
  <Tabs.Panel value="active">활성 항목</Tabs.Panel>
  <Tabs.Panel value="archived">보관된 항목</Tabs.Panel>
</Tabs.Root>`;

const SETTINGS_CODE = `<Tabs.Root defaultValue="profile">
  <Tabs.List aria-label="설정">
    <Tabs.Trigger value="profile">프로필</Tabs.Trigger>
    <Tabs.Trigger value="security">보안</Tabs.Trigger>
    <Tabs.Trigger value="billing">결제</Tabs.Trigger>
  </Tabs.List>
  <Tabs.Panel value="profile">프로필 설정 화면</Tabs.Panel>
  <Tabs.Panel value="security">보안 설정 화면</Tabs.Panel>
  <Tabs.Panel value="billing">결제 정보 화면</Tabs.Panel>
</Tabs.Root>`;

export const tabsDoc: ComponentDoc = {
  category: 'navigation',
  name: 'Tabs',
  slug: 'tabs',
  status: 'stable',
  descriptionKey: 'components.tabs.description',
  importStatement: `import { Tabs } from 'null_ong2-design-system';`,
  props: [
    { name: 'Root.value', type: 'string', default: '—', required: false, descriptionKey: 'components.tabs.props.Root.value' },
    { name: 'Root.defaultValue', type: 'string', default: 'auto', required: false, descriptionKey: 'components.tabs.props.Root.defaultValue' },
    { name: 'Root.onChange', type: '(value: string) => void', default: '—', required: false, descriptionKey: 'components.tabs.props.Root.onChange' },
    { name: 'Root.orientation', type: "'horizontal' | 'vertical'", default: "'horizontal'", required: false, descriptionKey: 'components.tabs.props.Root.orientation' },
    { name: 'Root.children', type: 'ReactNode', default: '—', required: true, descriptionKey: 'components.tabs.props.Root.children' },
    { name: 'List.aria-label', type: 'string', default: '—', required: false, descriptionKey: 'components.tabs.props.List.aria-label' },
    { name: 'Trigger.value', type: 'string', default: '—', required: true, descriptionKey: 'components.tabs.props.Trigger.value' },
    { name: 'Trigger.disabled', type: 'boolean', default: 'false', required: false, descriptionKey: 'components.tabs.props.Trigger.disabled' },
  ],
  examples: [
    {
      tab: 'default',
      titleKey: 'components.tabs.examples.default',
      preview: (
        <ExamplesTabs
          ariaLabel="계정 섹션"
          tabs={[
            { value: 'profile', label: '프로필', content: <Text>프로필 화면</Text> },
            { value: 'account', label: '계정', content: <Text>계정 화면</Text> },
            { value: 'notifications', label: '알림', content: <Text>알림 설정</Text> },
          ]}
        />
      ),
      code: DEFAULT_CODE,
    },
    {
      tab: 'variants',
      titleKey: 'components.tabs.examples.vertical',
      preview: (
        <Text size="sm" color="muted">orientation=&quot;vertical&quot; 사용 시 트리거가 좌측에 세로 배치됩니다.</Text>
      ),
      code: VERTICAL_CODE,
    },
    {
      tab: 'states',
      titleKey: 'components.tabs.examples.disabled',
      preview: (
        <ExamplesTabs
          ariaLabel="요금제"
          tabs={[
            { value: 'active', label: '활성', content: <Text>활성 항목</Text> },
            { value: 'archived', label: '보관', content: <Text>보관된 항목</Text> },
          ]}
        />
      ),
      code: DISABLED_CODE,
    },
    {
      tab: 'real-world',
      titleKey: 'components.tabs.examples.settings',
      preview: (
        <ExamplesTabs
          ariaLabel="설정"
          tabs={[
            { value: 'profile', label: '프로필', content: <Text>프로필 설정 화면</Text> },
            { value: 'security', label: '보안', content: <Text>보안 설정 화면</Text> },
            { value: 'billing', label: '결제', content: <Text>결제 정보 화면</Text> },
          ]}
        />
      ),
      code: SETTINGS_CODE,
    },
  ],
  bestPractices: {
    do: [{ key: 'components.tabs.do.1' }, { key: 'components.tabs.do.2' }],
    dont: [{ key: 'components.tabs.dont.1' }, { key: 'components.tabs.dont.2' }],
  },
  a11yNotesKey: 'components.tabs.a11y',
  related: ['carousel'],
};

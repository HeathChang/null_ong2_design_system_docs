import { Heading, Stack } from 'null_ong2-design-system';
import type { ComponentDoc } from '@/lib/types';

const DEFAULT_CODE = `<Heading>섹션 제목</Heading>`;
const H1_CODE = `<Heading as="h1">메인 페이지 제목</Heading>`;
const DECOUPLED_CODE = `<Heading as="h2" size="sm">사이드바 제목</Heading>`;
const SECTION_CODE = `<Stack spacing="md">
  <Heading as="h2">2026년 1분기 보고서</Heading>
  <Heading as="h3">매출 요약</Heading>
  <Heading as="h4">카테고리별 분석</Heading>
</Stack>`;

export const headingDoc: ComponentDoc = {
  category: 'typography',
  name: 'Heading',
  slug: 'heading',
  status: 'stable',
  descriptionKey: 'components.heading.description',
  importStatement: `import { Heading } from 'null_ong2-design-system';`,
  props: [
    { name: 'as', type: "'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'", default: "'h2'", required: false, descriptionKey: 'components.heading.props.as' },
    { name: 'size', type: 'FontSizeKey', default: '—', required: false, descriptionKey: 'components.heading.props.size' },
    { name: 'color', type: 'string', default: 'var(--ds-color-neutral-900)', required: false, descriptionKey: 'components.heading.props.color' },
    { name: 'align', type: "CSSProperties['textAlign']", default: '—', required: false, descriptionKey: 'components.heading.props.align' },
  ],
  examples: [
    { tab: 'default', titleKey: 'components.heading.examples.default', preview: <Heading>섹션 제목</Heading>, code: DEFAULT_CODE },
    { tab: 'variants', titleKey: 'components.heading.examples.h1Page', preview: <Heading as="h1">메인 페이지 제목</Heading>, code: H1_CODE },
    { tab: 'states', titleKey: 'components.heading.examples.decoupled', preview: <Heading as="h2" size="sm">사이드바 제목</Heading>, code: DECOUPLED_CODE },
    {
      tab: 'real-world',
      titleKey: 'components.heading.examples.section',
      preview: (
        <Stack spacing="md">
          <Heading as="h2">2026년 1분기 보고서</Heading>
          <Heading as="h3">매출 요약</Heading>
          <Heading as="h4">카테고리별 분석</Heading>
        </Stack>
      ),
      code: SECTION_CODE,
    },
  ],
  bestPractices: {
    do: [{ key: 'components.heading.do.1' }, { key: 'components.heading.do.2' }],
    dont: [{ key: 'components.heading.dont.1' }, { key: 'components.heading.dont.2' }],
  },
  a11yNotesKey: 'components.heading.a11y',
  related: ['text', 'label'],
};

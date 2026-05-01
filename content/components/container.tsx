import { Box, Container, Stack, Text } from 'null_ong2-design-system';
import type { ComponentDoc } from '@/lib/types';

const DEFAULT_CODE = `<Container>
  <p>기본 lg(1024px) 너비 콘텐츠</p>
</Container>`;

const NARROW_CODE = `<Container maxWidth="sm">
  <article>좁은 본문(640px) — 블로그 글 등</article>
</Container>`;

const WIDE_CODE = `<Container maxWidth="xl">
  <Dashboard />
</Container>`;

const PAGE_CODE = `<Container as="main" maxWidth="lg">
  <h1>페이지 제목</h1>
  <p>본문 콘텐츠</p>
</Container>`;

const Sample = ({ width, children }: { width: string; children: React.ReactNode }) => (
  <Box width={width} padding="md" borderRadius="md" bg="var(--ds-color-neutral-100)">
    {children}
  </Box>
);

export const containerDoc: ComponentDoc = {
  category: 'layout',
  name: 'Container',
  slug: 'container',
  status: 'stable',
  descriptionKey: 'components.container.description',
  importStatement: `import { Container } from 'null_ong2-design-system';`,
  props: [
    { name: 'as', type: 'ElementType', default: "'div'", required: false, descriptionKey: 'components.container.props.as' },
    { name: 'maxWidth', type: "'sm' | 'md' | 'lg' | 'xl' | '2xl' | 'full'", default: "'lg'", required: false, descriptionKey: 'components.container.props.maxWidth' },
  ],
  examples: [
    {
      tab: 'default',
      titleKey: 'components.container.examples.default',
      preview: (
        <Sample width="100%">
          <Text align="center">기본 lg(1024px) 너비</Text>
        </Sample>
      ),
      code: DEFAULT_CODE,
    },
    {
      tab: 'variants',
      titleKey: 'components.container.examples.narrow',
      preview: (
        <Sample width="320px">
          <Text align="center">좁은 본문 (sm 640px)</Text>
        </Sample>
      ),
      code: NARROW_CODE,
    },
    {
      tab: 'states',
      titleKey: 'components.container.examples.wide',
      preview: (
        <Sample width="100%">
          <Text align="center">와이드 대시보드 (xl 1280px)</Text>
        </Sample>
      ),
      code: WIDE_CODE,
    },
    {
      tab: 'real-world',
      titleKey: 'components.container.examples.page',
      preview: (
        <Sample width="100%">
          <Stack spacing="sm">
            <Text weight="semibold">페이지 제목</Text>
            <Text size="sm" color="muted">본문 콘텐츠</Text>
          </Stack>
        </Sample>
      ),
      code: PAGE_CODE,
    },
  ],
  bestPractices: {
    do: [{ key: 'components.container.do.1' }, { key: 'components.container.do.2' }],
    dont: [{ key: 'components.container.dont.1' }, { key: 'components.container.dont.2' }],
  },
  a11yNotesKey: 'components.container.a11y',
  related: ['box', 'stack'],
};

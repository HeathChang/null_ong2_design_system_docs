import { Box, Carousel, Text } from 'null_ong2-design-system';
import type { ComponentDoc } from '@/lib/types';

function Slide({ children, bg }: { children: React.ReactNode; bg: string }) {
  return (
    <Box padding="xl" borderRadius="lg" bg={bg} height="120px">
      <Text align="center" weight="semibold">{children}</Text>
    </Box>
  );
}

const DEFAULT_CODE = `<Carousel
  items={[
    <img src="/1.jpg" alt="배너 1" />,
    <img src="/2.jpg" alt="배너 2" />,
    <img src="/3.jpg" alt="배너 3" />,
  ]}
/>`;
const AUTOPLAY_CODE = `<Carousel
  items={[<Slide>1</Slide>, <Slide>2</Slide>, <Slide>3</Slide>]}
  autoPlayInterval={4000}
/>`;
const NO_LOOP_CODE = `<Carousel
  items={slides}
  loop={false}
/>`;
const BANNER_CODE = `<Carousel
  items={[
    <PromoBanner offer="첫 결제 30% 할인" />,
    <PromoBanner offer="주말 한정 무료배송" />,
  ]}
  autoPlayInterval={5000}
/>`;

export const carouselDoc: ComponentDoc = {
  category: 'data-display',
  name: 'Carousel',
  slug: 'carousel',
  status: 'stable',
  descriptionKey: 'components.carousel.description',
  importStatement: `import { Carousel } from 'null_ong2-design-system';`,
  props: [
    { name: 'items', type: 'ReactNode[]', default: '—', required: true, descriptionKey: 'components.carousel.props.items' },
    { name: 'index', type: 'number', default: '—', required: false, descriptionKey: 'components.carousel.props.index' },
    { name: 'defaultIndex', type: 'number', default: '0', required: false, descriptionKey: 'components.carousel.props.defaultIndex' },
    { name: 'onChange', type: '(index: number) => void', default: '—', required: false, descriptionKey: 'components.carousel.props.onChange' },
    { name: 'autoPlayInterval', type: 'number', default: '0', required: false, descriptionKey: 'components.carousel.props.autoPlayInterval' },
    { name: 'loop', type: 'boolean', default: 'true', required: false, descriptionKey: 'components.carousel.props.loop' },
    { name: 'showArrows', type: 'boolean', default: 'true', required: false, descriptionKey: 'components.carousel.props.showArrows' },
    { name: 'showIndicators', type: 'boolean', default: 'true', required: false, descriptionKey: 'components.carousel.props.showIndicators' },
  ],
  examples: [
    {
      tab: 'default',
      titleKey: 'components.carousel.examples.default',
      preview: (
        <Box width="320px">
          <Carousel
            items={[
              <Slide bg="var(--ds-color-primary-100)">슬라이드 1</Slide>,
              <Slide bg="var(--ds-color-success-bg)">슬라이드 2</Slide>,
              <Slide bg="var(--ds-color-warning-bg)">슬라이드 3</Slide>,
            ]}
          />
        </Box>
      ),
      code: DEFAULT_CODE,
    },
    {
      tab: 'variants',
      titleKey: 'components.carousel.examples.autoplay',
      preview: (
        <Box width="320px">
          <Carousel
            items={[
              <Slide bg="var(--ds-color-primary-100)">자동 1</Slide>,
              <Slide bg="var(--ds-color-success-bg)">자동 2</Slide>,
              <Slide bg="var(--ds-color-info-bg)">자동 3</Slide>,
            ]}
            autoPlayInterval={4000}
          />
        </Box>
      ),
      code: AUTOPLAY_CODE,
    },
    {
      tab: 'states',
      titleKey: 'components.carousel.examples.noLoop',
      preview: (
        <Box width="320px">
          <Carousel
            items={[
              <Slide bg="var(--ds-color-neutral-100)">시작</Slide>,
              <Slide bg="var(--ds-color-neutral-200)">중간</Slide>,
              <Slide bg="var(--ds-color-neutral-300)">끝</Slide>,
            ]}
            loop={false}
          />
        </Box>
      ),
      code: NO_LOOP_CODE,
    },
    {
      tab: 'real-world',
      titleKey: 'components.carousel.examples.banner',
      preview: (
        <Box width="320px">
          <Carousel
            items={[
              <Slide bg="var(--ds-color-primary-100)">첫 결제 30% 할인</Slide>,
              <Slide bg="var(--ds-color-success-bg)">주말 한정 무료배송</Slide>,
            ]}
            autoPlayInterval={5000}
          />
        </Box>
      ),
      code: BANNER_CODE,
    },
  ],
  bestPractices: {
    do: [{ key: 'components.carousel.do.1' }, { key: 'components.carousel.do.2' }],
    dont: [{ key: 'components.carousel.dont.1' }, { key: 'components.carousel.dont.2' }],
  },
  a11yNotesKey: 'components.carousel.a11y',
  related: ['tabs'],
};

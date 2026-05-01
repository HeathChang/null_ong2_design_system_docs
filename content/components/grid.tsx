import { Box, Grid, Text } from 'null_ong2-design-system';
import type { ComponentDoc } from '@/lib/types';

function Cell({ children }: { children: React.ReactNode }) {
  return (
    <Box padding="md" borderRadius="md" bg="var(--ds-color-neutral-100)">
      <Text align="center">{children}</Text>
    </Box>
  );
}

const DEFAULT_CODE = `<Grid columns={3} gap="md">
  <Card>1</Card>
  <Card>2</Card>
  <Card>3</Card>
  <Card>4</Card>
  <Card>5</Card>
  <Card>6</Card>
</Grid>`;

const RESPONSIVE_CODE = `<Grid columns="repeat(auto-fill, minmax(160px, 1fr))" gap="md">
  {products.map(p => <ProductCard key={p.id} {...p} />)}
</Grid>`;

const ASYMMETRIC_CODE = `<Grid columns="1fr 2fr 1fr" gap="md">
  <Sidebar />
  <Main />
  <Aside />
</Grid>`;

const PRODUCTS_CODE = `<Grid columns={3} gap="lg">
  <ProductCard name="Apple" price="$1.99" />
  <ProductCard name="Banana" price="$0.99" />
  <ProductCard name="Cherry" price="$3.49" />
</Grid>`;

export const gridDoc: ComponentDoc = {
  category: 'layout',
  name: 'Grid',
  slug: 'grid',
  status: 'stable',
  descriptionKey: 'components.grid.description',
  importStatement: `import { Grid } from 'null_ong2-design-system';`,
  props: [
    { name: 'as', type: 'ElementType', default: "'div'", required: false, descriptionKey: 'components.grid.props.as' },
    { name: 'columns', type: 'number | string', default: '—', required: false, descriptionKey: 'components.grid.props.columns' },
    { name: 'rows', type: 'number | string', default: '—', required: false, descriptionKey: 'components.grid.props.rows' },
    { name: 'gap', type: 'SpacingKey', default: '—', required: false, descriptionKey: 'components.grid.props.gap' },
    { name: 'columnGap', type: 'SpacingKey', default: '—', required: false, descriptionKey: 'components.grid.props.columnGap' },
    { name: 'rowGap', type: 'SpacingKey', default: '—', required: false, descriptionKey: 'components.grid.props.rowGap' },
    { name: 'align', type: "CSSProperties['alignItems']", default: '—', required: false, descriptionKey: 'components.grid.props.align' },
    { name: 'justify', type: "CSSProperties['justifyItems']", default: '—', required: false, descriptionKey: 'components.grid.props.justify' },
  ],
  examples: [
    {
      tab: 'default',
      titleKey: 'components.grid.examples.default',
      preview: (
        <Grid columns={3} gap="md">
          <Cell>1</Cell><Cell>2</Cell><Cell>3</Cell>
          <Cell>4</Cell><Cell>5</Cell><Cell>6</Cell>
        </Grid>
      ),
      code: DEFAULT_CODE,
    },
    {
      tab: 'variants',
      titleKey: 'components.grid.examples.responsive',
      preview: (
        <Grid columns="repeat(auto-fill, minmax(120px, 1fr))" gap="sm">
          <Cell>A</Cell><Cell>B</Cell><Cell>C</Cell><Cell>D</Cell>
        </Grid>
      ),
      code: RESPONSIVE_CODE,
    },
    {
      tab: 'states',
      titleKey: 'components.grid.examples.asymmetric',
      preview: (
        <Grid columns="1fr 2fr 1fr" gap="md">
          <Cell>좌</Cell><Cell>중앙</Cell><Cell>우</Cell>
        </Grid>
      ),
      code: ASYMMETRIC_CODE,
    },
    {
      tab: 'real-world',
      titleKey: 'components.grid.examples.products',
      preview: (
        <Grid columns={3} gap="lg">
          <Cell>Apple $1.99</Cell>
          <Cell>Banana $0.99</Cell>
          <Cell>Cherry $3.49</Cell>
        </Grid>
      ),
      code: PRODUCTS_CODE,
    },
  ],
  bestPractices: {
    do: [{ key: 'components.grid.do.1' }, { key: 'components.grid.do.2' }],
    dont: [{ key: 'components.grid.dont.1' }, { key: 'components.grid.dont.2' }],
  },
  a11yNotesKey: 'components.grid.a11y',
  related: ['flex', 'stack', 'box'],
};

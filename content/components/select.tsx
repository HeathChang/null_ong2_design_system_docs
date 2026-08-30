import { Select, Stack } from 'null_ong2-design-system';
import type { ComponentDoc } from '@/lib/types';

const COUNTRIES = [
  { value: 'kr', label: '대한민국' },
  { value: 'us', label: '미국' },
  { value: 'jp', label: '일본' },
  { value: 'cn', label: '중국' },
];

const DEFAULT_CODE = `const countries = [
  { value: 'kr', label: '대한민국' },
  { value: 'us', label: '미국' },
  { value: 'jp', label: '일본' },
];

<Select id="country" label="국가" options={countries} />`;

const PLACEHOLDER_CODE = `<Select
  id="country2"
  label="국가"
  options={countries}
  placeholder="국가를 선택하세요"
/>`;

const ERROR_CODE = `<Select
  id="country3"
  label="국가"
  options={countries}
  placeholder="선택하세요"
  error="국가를 선택해주세요"
/>`;

const COUNTRY_CODE = `<Select
  id="country-final"
  label="거주 국가"
  options={countries}
  placeholder="국가를 선택하세요"
  hint="현재 거주 중인 국가를 선택하세요"
  required
/>`;

export const selectDoc: ComponentDoc = {
  category: 'form',
  name: 'Select',
  slug: 'select',
  status: 'stable',
  descriptionKey: 'components.select.description',
  importStatement: `import { Select } from 'null_ong2-design-system';`,
  props: [
    { name: 'id', type: 'string', default: 'auto', required: false, descriptionKey: 'components.select.props.id' },
    { name: 'label', type: 'string', default: '—', required: false, descriptionKey: 'components.select.props.label' },
    { name: 'options', type: 'SelectOption[]', default: '—', required: true, descriptionKey: 'components.select.props.options' },
    { name: 'placeholder', type: 'string', default: '—', required: false, descriptionKey: 'components.select.props.placeholder' },
    { name: 'hint', type: 'string', default: '—', required: false, descriptionKey: 'components.select.props.hint' },
    { name: 'error', type: 'string', default: '—', required: false, descriptionKey: 'components.select.props.error' },
    { name: 'required', type: 'boolean', default: 'false', required: false, descriptionKey: 'components.select.props.required' },
    { name: 'disabled', type: 'boolean', default: 'false', required: false, descriptionKey: 'components.select.props.disabled' },
  ],
  examples: [
    {
      tab: 'default',
      titleKey: 'components.select.examples.default',
      preview: <Select id="demo-country" label="국가" options={COUNTRIES} />,
      code: DEFAULT_CODE,
    },
    {
      tab: 'variants',
      titleKey: 'components.select.examples.placeholder',
      preview: <Select id="demo-country-ph" label="국가" options={COUNTRIES} placeholder="국가를 선택하세요" />,
      code: PLACEHOLDER_CODE,
    },
    {
      tab: 'states',
      titleKey: 'components.select.examples.error',
      preview: <Select id="demo-country-err" label="국가" options={COUNTRIES} placeholder="선택하세요" error="국가를 선택해주세요" />,
      code: ERROR_CODE,
    },
    {
      tab: 'real-world',
      titleKey: 'components.select.examples.country',
      preview: (
        <Stack spacing="md">
          <Select
            id="demo-country-final"
            label="거주 국가"
            options={COUNTRIES}
            placeholder="국가를 선택하세요"
            hint="현재 거주 중인 국가를 선택하세요"
            required
          />
        </Stack>
      ),
      code: COUNTRY_CODE,
    },
  ],
  bestPractices: {
    do: [{ key: 'components.select.do.1' }, { key: 'components.select.do.2' }],
    dont: [{ key: 'components.select.dont.1' }, { key: 'components.select.dont.2' }],
  },
  a11yNotesKey: 'components.select.a11y',
  related: ['radio', 'input'],
};

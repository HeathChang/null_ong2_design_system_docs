import { Stack, Textarea } from 'null_ong2-design-system';
import type { ComponentDoc } from '@/lib/types';

const DEFAULT_CODE = `<Textarea id="desc" label="설명" rows={4} placeholder="내용을 입력하세요" />`;

const HINT_CODE = `<Textarea id="bio" label="자기소개" rows={5} hint="최대 500자까지 입력 가능합니다" />`;

const ERROR_CODE = `<Textarea id="review" label="후기" error="최소 20자 이상 입력해주세요" />`;

const REVIEW_CODE = `<Textarea id="product-review" label="상품 후기" rows={6} hint="다른 구매자에게 도움이 되도록 자세히 작성해주세요" required />`;

export const textareaDoc: ComponentDoc = {
  category: 'form',
  name: 'Textarea',
  slug: 'textarea',
  status: 'stable',
  descriptionKey: 'components.textarea.description',
  importStatement: `import { Textarea } from 'null_ong2-design-system';`,
  props: [
    { name: 'id', type: 'string', default: '—', required: false, descriptionKey: 'components.textarea.props.id' },
    { name: 'label', type: 'string', default: '—', required: false, descriptionKey: 'components.textarea.props.label' },
    { name: 'hint', type: 'string', default: '—', required: false, descriptionKey: 'components.textarea.props.hint' },
    { name: 'error', type: 'string', default: '—', required: false, descriptionKey: 'components.textarea.props.error' },
    { name: 'required', type: 'boolean', default: 'false', required: false, descriptionKey: 'components.textarea.props.required' },
    { name: 'rows', type: 'number', default: '—', required: false, descriptionKey: 'components.textarea.props.rows' },
    { name: 'disabled', type: 'boolean', default: 'false', required: false, descriptionKey: 'components.textarea.props.disabled' },
  ],
  examples: [
    {
      tab: 'default',
      titleKey: 'components.textarea.examples.default',
      preview: <Textarea id="demo-desc" label="설명" rows={4} placeholder="내용을 입력하세요" />,
      code: DEFAULT_CODE,
    },
    {
      tab: 'variants',
      titleKey: 'components.textarea.examples.withHint',
      preview: <Textarea id="demo-bio" label="자기소개" rows={5} hint="최대 500자까지 입력 가능합니다" />,
      code: HINT_CODE,
    },
    {
      tab: 'states',
      titleKey: 'components.textarea.examples.error',
      preview: <Textarea id="demo-review-err" label="후기" error="최소 20자 이상 입력해주세요" />,
      code: ERROR_CODE,
    },
    {
      tab: 'real-world',
      titleKey: 'components.textarea.examples.review',
      preview: (
        <Stack spacing="md">
          <Textarea id="product-review" label="상품 후기" rows={6} hint="다른 구매자에게 도움이 되도록 자세히 작성해주세요" required />
        </Stack>
      ),
      code: REVIEW_CODE,
    },
  ],
  bestPractices: {
    do: [{ key: 'components.textarea.do.1' }, { key: 'components.textarea.do.2' }],
    dont: [{ key: 'components.textarea.dont.1' }, { key: 'components.textarea.dont.2' }],
  },
  a11yNotesKey: 'components.textarea.a11y',
  related: ['input', 'select'],
};

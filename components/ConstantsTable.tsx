'use client';

import { useTranslations } from 'next-intl';
import {
  ALERT_VARIANTS,
  AVATAR_SHAPES,
  AVATAR_SIZES,
  BADGE_SIZES,
  BADGE_VARIANTS,
  BUTTON_SIZES,
  BUTTON_VARIANTS,
  CONTAINER_MAX_WIDTHS,
  HEADING_LEVELS,
  MODAL_SIZES,
  SKELETON_VARIANTS,
  SPINNER_SIZES,
  SWITCH_SIZES,
  TEXT_COLORS,
  TOAST_POSITIONS,
  TOAST_VARIANTS,
} from 'null_ong2-design-system';

interface ConstantRow {
  name: string;
  component: string;
  values: readonly (string | number)[];
}

/**
 * 값 목록 상수 표.
 *
 * 값을 문서에 옮겨 적지 않고 패키지 export를 그대로 순회한다 —
 * 이 표 자체가 "상수를 순회해 UI를 만드는" 사용 예시이기도 하다.
 */
const ROWS: ConstantRow[] = [
  { name: 'ALERT_VARIANTS', component: 'Alert', values: ALERT_VARIANTS },
  { name: 'AVATAR_SHAPES', component: 'Avatar', values: AVATAR_SHAPES },
  { name: 'AVATAR_SIZES', component: 'Avatar', values: AVATAR_SIZES },
  { name: 'BADGE_SIZES', component: 'Badge', values: BADGE_SIZES },
  { name: 'BADGE_VARIANTS', component: 'Badge', values: BADGE_VARIANTS },
  { name: 'BUTTON_SIZES', component: 'Button', values: BUTTON_SIZES },
  { name: 'BUTTON_VARIANTS', component: 'Button', values: BUTTON_VARIANTS },
  { name: 'CONTAINER_MAX_WIDTHS', component: 'Container', values: CONTAINER_MAX_WIDTHS },
  { name: 'HEADING_LEVELS', component: 'Heading', values: HEADING_LEVELS },
  { name: 'MODAL_SIZES', component: 'Modal', values: MODAL_SIZES },
  { name: 'SKELETON_VARIANTS', component: 'Skeleton', values: SKELETON_VARIANTS },
  { name: 'SPINNER_SIZES', component: 'Spinner', values: SPINNER_SIZES },
  { name: 'SWITCH_SIZES', component: 'Switch', values: SWITCH_SIZES },
  { name: 'TEXT_COLORS', component: 'Text', values: TEXT_COLORS },
  { name: 'TOAST_POSITIONS', component: 'Toast', values: TOAST_POSITIONS },
  { name: 'TOAST_VARIANTS', component: 'Toast', values: TOAST_VARIANTS },
];

export function ConstantsTable() {
  const t = useTranslations('runtimeApi.constants');

  return (
    <div className="overflow-x-auto">
      <table className="w-full border-collapse text-left text-sm">
        <caption className="sr-only">{t('caption')}</caption>
        <thead className="border-b border-site-border bg-site-muted/5">
          <tr>
            <th scope="col" className="px-3 py-2 font-semibold">{t('headings.name')}</th>
            <th scope="col" className="px-3 py-2 font-semibold">{t('headings.component')}</th>
            <th scope="col" className="px-3 py-2 font-semibold">{t('headings.values')}</th>
          </tr>
        </thead>
        <tbody>
          {ROWS.map((row) => (
            <tr key={row.name} className="border-b border-site-border last:border-b-0">
              <th scope="row" className="whitespace-nowrap px-3 py-2 align-top font-mono text-xs font-semibold">
                {row.name}
              </th>
              <td className="whitespace-nowrap px-3 py-2 align-top text-xs text-site-muted">
                {row.component}
              </td>
              <td className="px-3 py-2 align-top font-mono text-xs">
                {row.values.map((value) => String(value)).join(' · ')}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

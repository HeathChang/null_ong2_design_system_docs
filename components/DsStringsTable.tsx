'use client';

import { useTranslations } from 'next-intl';
import { EN_STRINGS, JA_STRINGS, KO_STRINGS, ZH_STRINGS, type DsStrings } from 'null_ong2-design-system';

/** 각 문자열 키를 실제로 쓰는 컴포넌트. */
const USED_BY: Record<keyof DsStrings, string> = {
  close: 'Modal',
  loading: 'Spinner, Button',
  avatarFallback: 'Avatar',
  toastRegion: 'Toast',
  toastClose: 'Toast',
  carousel: 'Carousel',
  carouselPrevious: 'Carousel',
  carouselNext: 'Carousel',
  carouselPagination: 'Carousel',
  carouselGoToSlide: 'Carousel',
  carouselSlide: 'Carousel',
  carouselPlay: 'Carousel',
  carouselPause: 'Carousel',
};

const KEYS = Object.keys(KO_STRINGS) as Array<keyof DsStrings>;

/**
 * 내장 문자열 표.
 *
 * 값을 문서 쪽에 옮겨 적으면 패키지가 문자열을 고칠 때 조용히 어긋난다.
 * 실제 패키지 export를 그대로 읽어 표를 만든다.
 */
export function DsStringsTable() {
  const t = useTranslations('i18n.strings');

  return (
    <div className="overflow-x-auto">
      <table className="w-full border-collapse text-left text-sm">
        <caption className="sr-only">{t('caption')}</caption>
        <thead className="border-b border-site-border bg-site-muted/5">
          <tr>
            <th scope="col" className="px-3 py-2 font-semibold">{t('key')}</th>
            <th scope="col" className="px-3 py-2 font-semibold">{t('usedBy')}</th>
            <th scope="col" className="px-3 py-2 font-semibold">ko</th>
            <th scope="col" className="px-3 py-2 font-semibold">en</th>
            <th scope="col" className="px-3 py-2 font-semibold">ja</th>
            <th scope="col" className="px-3 py-2 font-semibold">zh</th>
          </tr>
        </thead>
        <tbody>
          {KEYS.map((key) => (
            <tr key={key} className="border-b border-site-border last:border-b-0">
              <th scope="row" className="whitespace-nowrap px-3 py-2 align-top font-mono text-xs font-semibold">
                {key}
              </th>
              <td className="whitespace-nowrap px-3 py-2 align-top text-xs text-site-muted">
                {USED_BY[key]}
              </td>
              <td className="px-3 py-2 align-top text-xs">{KO_STRINGS[key]}</td>
              <td className="px-3 py-2 align-top text-xs">{EN_STRINGS[key]}</td>
              <td className="px-3 py-2 align-top text-xs">{JA_STRINGS[key]}</td>
              <td className="px-3 py-2 align-top text-xs">{ZH_STRINGS[key]}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

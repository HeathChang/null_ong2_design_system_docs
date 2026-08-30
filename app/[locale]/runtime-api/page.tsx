import { setRequestLocale, getTranslations } from 'next-intl/server';
import { CodeBlock } from '@/components/CodeBlock';
import { ConstantsTable } from '@/components/ConstantsTable';
import { LOCALES, type Locale } from '@/lib/i18n/routing';

interface RuntimeApiPageProps {
  params: Promise<{ locale: string }>;
}

function isLocale(value: string): value is Locale {
  return (LOCALES as readonly string[]).includes(value);
}

/** 코드 예시 안의 주석도 화면 언어를 따라간다. */
type CodeComment = (key: string) => string;

interface HookDoc {
  name: string;
  signature: string;
  code: (c: CodeComment) => string;
}

const HOOKS: HookDoc[] = [
  {
    name: 'useBodyScrollLock',
    signature: 'useBodyScrollLock(isActive: boolean): void',
    code: (c) => `import { useBodyScrollLock } from 'null_ong2-design-system';

function SideSheet({ isOpen, children }) {
  // ${c('scrollLockRefCount')}
  useBodyScrollLock(isOpen);
  return isOpen ? <aside>{children}</aside> : null;
}`,
  },
  {
    name: 'useControllable',
    signature:
      'useControllable<TValue>(options: { value: TValue | undefined; defaultValue: TValue; onChange?: (value: TValue) => void }): [TValue, (value: TValue) => void]',
    code: (c) => `import { useControllable } from 'null_ong2-design-system';

function Rating({ value, defaultValue = 0, onChange }) {
  // ${c('controllableMode')}
  const [rating, setRating] = useControllable({ value, defaultValue, onChange });

  return [1, 2, 3, 4, 5].map((n) => (
    <button key={n} aria-pressed={rating === n} onClick={() => setRating(n)}>
      {n}
    </button>
  ));
}`,
  },
  {
    name: 'useEscapeKey',
    signature: 'useEscapeKey(isActive: boolean, onEscape: () => void): void',
    code: (c) => `import { useEscapeKey } from 'null_ong2-design-system';

function Drawer({ isOpen, onClose }) {
  // ${c('escapeTopmost')}
  useEscapeKey(isOpen, onClose);
  return isOpen ? <div role="dialog">...</div> : null;
}`,
  },
  {
    name: 'useFocusTrap',
    signature:
      'useFocusTrap(ref: RefObject<HTMLElement | null>, isActive: boolean, options?: { initialFocus?: RefObject<HTMLElement | null> }): void',
    code: (c) => `import { useRef } from 'react';
import { useFocusTrap } from 'null_ong2-design-system';

function ConfirmSheet({ isOpen }) {
  const sheetRef = useRef<HTMLDivElement>(null);
  const cancelRef = useRef<HTMLButtonElement>(null);

  // ${c('focusTrapInitial')}
  useFocusTrap(sheetRef, isOpen, { initialFocus: cancelRef });

  return (
    <div ref={sheetRef} role="dialog" aria-modal="true">
      <button ref={cancelRef}>취소</button>
      <button>삭제</button>
    </div>
  );
}`,
  },
  {
    name: 'useInertBackground',
    signature:
      'useInertBackground(ref: RefObject<HTMLElement | null>, isActive: boolean): void',
    code: (c) => `import { useRef } from 'react';
import { useInertBackground } from 'null_ong2-design-system';

function Lightbox({ isOpen }) {
  const dialogRef = useRef<HTMLDivElement>(null);

  // ${c('inertWhy')}
  // ${c('inertLayers')}
  useInertBackground(dialogRef, isOpen);

  return <div ref={dialogRef} role="dialog" aria-modal="true">...</div>;
}`,
  },
  {
    name: 'usePrefersReducedMotion',
    signature: 'usePrefersReducedMotion(): boolean',
    code: (c) => `import { usePrefersReducedMotion } from 'null_ong2-design-system';

function Ticker({ items }) {
  const reduced = usePrefersReducedMotion();
  // ${c('reducedMotionSsr')}
  return <div className={reduced ? '' : 'ticker--animated'}>...</div>;
}`,
  },
];

const constantsUsageCode = (c: CodeComment) => `import { BUTTON_VARIANTS, Button } from 'null_ong2-design-system';

// 1. ${c('constantsPicker')}
{BUTTON_VARIANTS.map((variant) => (
  <Button key={variant} variant={variant}>{variant}</Button>
))}

// 2. ${c('constantsValidate')}
function isButtonVariant(value: string) {
  return (BUTTON_VARIANTS as readonly string[]).includes(value);
}`;

const tokenConstantsCode = (c: CodeComment) => `import { SPACING, RADIUS, FONT_SIZE, FONT_WEIGHT, Z_INDEX } from 'null_ong2-design-system';
import type { SpacingKey, RadiusKey, FontSizeKey, FontWeightKey, ZIndexKey } from 'null_ong2-design-system';

// ${c('tokenConstantsNote')}
SPACING.md;   // 'var(--ds-spacing-md)'
Z_INDEX.popover; // 'var(--ds-z-popover)'

<div style={{ padding: SPACING.lg, borderRadius: RADIUS.xl, zIndex: Z_INDEX.modal }} />`;

interface TypeGroup {
  key: string;
  names: string[];
}

/** 패키지가 실제로 export하는 타입 38종. audit 스크립트가 이 목록의 정확성을 검증한다. */
const TYPE_GROUPS: TypeGroup[] = [
  {
    key: 'componentProps',
    names: [
      'AlertProps', 'AvatarProps', 'BadgeProps', 'ButtonProps', 'CarouselProps',
      'CheckboxProps', 'DropdownMenuProps', 'HeadingProps', 'InputProps', 'LabelProps',
      'ModalProps', 'RadioProps', 'SelectProps', 'SkeletonProps', 'SpinnerProps',
      'SwitchProps', 'TabsListProps', 'TabsPanelProps', 'TabsRootProps',
      'TabsTriggerProps', 'TextareaProps', 'TooltipProps',
    ],
  },
  { key: 'provider', names: ['DesignSystemProviderProps'] },
  { key: 'data', names: ['DropdownMenuItem', 'SelectOption'] },
  { key: 'polymorphic', names: ['PolymorphicProps', 'PolymorphicRef'] },
  { key: 'common', names: ['Size', 'SpacingToken', 'RadiusToken', 'SemanticColor'] },
  { key: 'tokenKeys', names: ['SpacingKey', 'RadiusKey', 'FontSizeKey', 'FontWeightKey', 'ZIndexKey'] },
  { key: 'i18n', names: ['DsLocale', 'DsStrings'] },
];

const noPropsTypeCode = (c: CodeComment) => `import type { ComponentProps } from 'react';
import { Box, Text } from 'null_ong2-design-system';

// ${c('polymorphicNoProps')}
type BoxProps = ComponentProps<typeof Box>;
type TextProps = Parameters<typeof Text>[0];`;

const typesCode = (c: CodeComment) => `import type { ElementType } from 'react';
import type {
  PolymorphicProps,
  PolymorphicRef,
  Size,           // 'xs' | 'sm' | 'md' | 'lg' | 'xl'
  SpacingToken,   // '0' | 'px' | '0.5' | ... | '2xl'
  RadiusToken,    // 'none' | 'sm' | ... | 'full'
  SemanticColor,  // 'primary' | 'success' | 'warning' | 'danger' | 'info'
} from 'null_ong2-design-system';

// ${c('typesNote')}
interface CardOwnProps { tone?: SemanticColor }
type CardProps<T extends ElementType = 'div'> = PolymorphicProps<T, CardOwnProps>;`;

export default async function RuntimeApiPage({ params }: RuntimeApiPageProps) {
  const { locale } = await params;
  if (isLocale(locale)) setRequestLocale(locale);
  const t = await getTranslations('runtimeApi');
  const c: CodeComment = (key) => t(`code.${key}`);

  return (
    <main className="flex flex-col gap-12 px-6 py-12 md:px-10">
      <header className="flex flex-col gap-3 border-b border-site-border pb-6">
        <h1 className="text-3xl font-bold">{t('title')}</h1>
        <p className="max-w-2xl text-base text-site-muted">{t('intro')}</p>
      </header>

      <section aria-labelledby="hooks" className="flex flex-col gap-6">
        <div className="flex flex-col gap-3">
          <h2 id="hooks" className="text-2xl font-semibold">{t('hooks.title')}</h2>
          <p className="max-w-3xl text-sm text-site-muted">{t('hooks.intro')}</p>
        </div>
        {HOOKS.map((hook) => (
          <article key={hook.name} className="flex flex-col gap-3 rounded-lg border border-site-border p-5">
            <h3 className="font-mono text-lg font-semibold">{hook.name}</h3>
            <p className="text-sm text-site-fg">{t(`hooks.items.${hook.name}.description`)}</p>
            <pre className="overflow-x-auto rounded-md bg-site-muted/10 p-3 text-xs">
              <code>{hook.signature}</code>
            </pre>
            <CodeBlock code={hook.code(c)} language="tsx" />
          </article>
        ))}
      </section>

      <section aria-labelledby="constants" className="flex flex-col gap-4">
        <h2 id="constants" className="text-2xl font-semibold">{t('constants.title')}</h2>
        <p className="max-w-3xl text-sm text-site-muted">{t('constants.intro')}</p>
        <CodeBlock code={constantsUsageCode(c)} language="tsx" />
        <ConstantsTable />
      </section>

      <section aria-labelledby="token-constants" className="flex flex-col gap-4">
        <h2 id="token-constants" className="text-2xl font-semibold">{t('tokenConstants.title')}</h2>
        <p className="max-w-3xl text-sm text-site-muted">{t('tokenConstants.intro')}</p>
        <CodeBlock code={tokenConstantsCode(c)} language="tsx" />
      </section>

      <section aria-labelledby="types" className="flex flex-col gap-6">
        <div className="flex flex-col gap-3">
          <h2 id="types" className="text-2xl font-semibold">{t('types.title')}</h2>
          <p className="max-w-3xl text-sm text-site-muted">{t('types.intro')}</p>
        </div>

        <ul className="flex flex-col gap-3">
          {TYPE_GROUPS.map((group) => (
            <li key={group.key} className="flex flex-col gap-2 rounded-lg border border-site-border p-4">
              <h3 className="text-sm font-semibold">{t(`types.groups.${group.key}`)}</h3>
              <p className="flex flex-wrap gap-x-3 gap-y-1 font-mono text-xs text-site-muted">
                {group.names.map((name) => (
                  <code key={name}>{name}</code>
                ))}
              </p>
            </li>
          ))}
        </ul>

        <div className="flex flex-col gap-3">
          <h3 className="text-lg font-semibold">{t('types.noProps.title')}</h3>
          <p className="max-w-3xl text-sm text-site-muted">{t('types.noProps.body')}</p>
          <CodeBlock code={noPropsTypeCode(c)} language="tsx" />
        </div>

        <div className="flex flex-col gap-3">
          <h3 className="text-lg font-semibold">{t('types.polymorphic.title')}</h3>
          <p className="max-w-3xl text-sm text-site-muted">{t('types.polymorphic.body')}</p>
          <CodeBlock code={typesCode(c)} language="tsx" />
        </div>
      </section>
    </main>
  );
}

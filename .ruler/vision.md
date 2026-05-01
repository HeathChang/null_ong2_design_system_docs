---
title: Vision — Showcase Site
category: 하네스
---

# Vision — null_ong2-design-system Showcase Site

> 이 파일은 **유저가 작성하고 갱신한다**.
> 모든 에이전트는 이 문서를 **유일한 진실의 원천(Single Source of Truth)** 으로 삼는다.

---

## 1. 한 줄 목표

```
프론트엔드 개발자가 null_ong2-design-system의 모든 컴포넌트를 라이브 예시 + 복사 가능한 코드로 5초 안에 확인할 수 있는 사이트를 만든다.
```

---

## 2. 사용자와 가치

### 2.1 Primary User

- **누구**: 디자인 시스템을 처음 도입하거나 사용 중인 프론트엔드 개발자
- **현재 어떻게 해결 중**: README의 텍스트 코드 예제를 직접 자기 프로젝트에 붙여넣고 동작 확인
- **현재 방식의 고통**:
  - 코드 예제가 실제로 어떻게 보이는지 확인하려면 매번 직접 실행해야 함
  - 다양한 variant/state 조합을 한눈에 비교 불가
  - 한국어 README만 있어 해외 동료/오픈소스 사용자가 진입장벽

### 2.2 Secondary User

- **누구**: 디자이너, PM
- **가치**: 컴포넌트 사양과 시각을 비개발자도 확인 가능

### 2.3 얻는 가치

```
"라이브로 보고 바로 복사해서 쓸 수 있어서 디자인 시스템 학습 시간이 1/3로 줄었다"
```

---

## 3. 성공 기준 (Definition of Done for the Vision)

- [ ] 디자인 시스템의 **25개 컴포넌트 모두** 상세 페이지 존재
- [ ] **3개 언어(ko/en/zh) 100% 번역** 완료
- [ ] 컴포넌트 페이지 **LCP < 2.5s** (Lighthouse 모바일 기준)
- [ ] **Lighthouse Accessibility 점수 95 이상**
- [ ] 모든 컴포넌트 페이지에서 **코드 1클릭 복사** 동작
- [ ] 사이트 출시 후 3개월 내 월간 방문자 **500명 이상**

---

## 4. In Scope (해야 하는 것)

### 4.1 페이지
- 홈 페이지
- 시작하기(Getting Started) 페이지
- 컴포넌트 카탈로그 인덱스
- 컴포넌트 상세 페이지 × 25
- 디자인 토큰 시각화 페이지
- 테마 커스터마이징 가이드 페이지

### 4.2 핵심 기능
- 컴포넌트 라이브 데모 (실제 동작)
- 코드 스니펫 + shiki 하이라이트 + 1클릭 복사
- Props 테이블 (타입/기본값/설명)
- Examples 탭 (Default / Variants / States / Real-world)
- 카테고리별 사이드바 네비게이션
- 다국어 (ko / en / zh) — URL prefix 라우팅
- 언어 전환기 (LanguageSwitcher)
- Accessibility Notes 섹션

### 4.3 기술
- Next.js 14 App Router 기반 SSG
- 자기 자신(`null_ong2-design-system`)을 dogfooding
- Vercel 배포

---

## 5. Out of Scope (하지 않는 것)

**Guardian이 VIOLATION으로 차단한다.**

- ❌ **사용자 인증 / 로그인** — 정적 사이트로 충분
- ❌ **댓글 / 피드백 시스템** — GitHub Issues로 대체
- ❌ **실시간 검색** (Algolia DocSearch 등) — v2로 보류
- ❌ **다크 모드** — ds에 다크 토큰 정식 도입 후 함께 (v2)
- ❌ **Playground / 인터랙티브 코드 에디터** (StackBlitz 임베드 등) — v2
- ❌ **백엔드 API / 데이터베이스** — 모든 콘텐츠는 정적
- ❌ **모바일 네이티브 앱** — 웹 반응형까지만
- ❌ **SEO 광고/트래킹** — 단순 GA4 정도까지만
- ❌ **MDX 콘텐츠 시스템** — TSX-only로 진행, 도입 시 v2
- ❌ **일본어 / 스페인어 등 추가 locale** — ko/en/zh 3개로 한정
- ❌ **다국어별 도메인 분리** (`ko.example.com`) — URL prefix만 사용
- ❌ **버전별 문서 (v1/v2 분리)** — 항상 latest만 표시. 구버전 문서는 GitHub release notes 참고

---

## 6. 기술적 제약 (Hard Constraints)

| 항목 | 값 | 비고 |
|------|-----|------|
| 언어/프레임워크 | TypeScript 5+, Next.js 14+ App Router | |
| 디자인 시스템 | `null_ong2-design-system` ≥ 0.2.0 | dogfooding 필수 |
| 다국어 라이브러리 | `next-intl` | App Router 호환 |
| 코드 하이라이트 | `shiki` (빌드 타임) | 런타임 비용 0 |
| 스타일링 | ds의 CSS 변수 + Tailwind (사이트 자체) 또는 CSS Modules | 결정 필요 |
| 배포 | Vercel | preview URL 활용 |
| 노드 버전 | Node 20+ | |
| 성능 SLA | LCP < 2.5s, INP < 200ms, CLS < 0.1 | Lighthouse 모바일 기준 |
| 접근성 | WCAG 2.1 AA | Lighthouse Accessibility 95+ |
| 콘텐츠 형식 | TSX (메타데이터 + JSX 예시) | MDX 미사용 (v1) |
| 라우팅 | `/[locale]/...` URL prefix 방식 | |
| 빌드 방식 | SSG (`output: 'export'` 또는 정적 생성) | API 라우트 미사용 |

---

## 7. 비기능 요구사항 (Non-Functional)

### 성능
- LCP < 2.5s (모바일 4G 기준)
- 페이지당 JS < 100KB gzipped
- 이미지: WebP/AVIF + lazy loading
- 폰트: `font-display: swap`

### 보안
- 코드 스니펫 렌더링은 빌드 타임 처리 (런타임 `eval` 금지)
- 외부 콘텐츠 임베드 없음 (XSS 표면 최소화)
- npm publish된 ds만 사용 (사이드 채널 없음)

### 접근성
- WCAG 2.1 AA 준수
- 키보드만으로 모든 페이지 탐색 가능
- 스크린 리더(VoiceOver/NVDA) 1회 검증
- 색상 대비 4.5:1 이상

### 운영
- Vercel Analytics로 방문자 수 / Core Web Vitals 추적
- 빌드 실패 시 GitHub Action 알림
- 404 페이지에서 컴포넌트 인덱스로 안내
- sitemap.xml + robots.txt 자동 생성

---

## 8. 용어집 (Glossary)

| 용어 | 정의 |
|------|------|
| **DS** | `null_ong2-design-system` 패키지 |
| **컴포넌트 페이지** | 단일 컴포넌트를 다루는 상세 페이지 (예: `/ko/components/form/input`) |
| **DemoBlock** | 라이브 미리보기 + 코드 토글이 묶인 표준 블록 |
| **PropsTable** | 컴포넌트의 Props를 표로 표시하는 사이트 컴포넌트 |
| **ComponentDoc** | `content/components/*.tsx`에 정의되는 컴포넌트 메타데이터 객체 |
| **locale** | 언어 코드 (ko/en/zh). URL prefix이자 i18n 키 |
| **fallback locale** | 번역이 없을 때 대체할 언어. 본 프로젝트는 **한국어** |
| **dogfooding** | 사이트 자체에서 ds를 사용해 자기 검증하는 행위 |

---

## 9. 열린 질문 (Open Questions)

- [ ] **사이트 자체 스타일링**: ds 토큰 + 자체 Tailwind 설정 vs CSS Modules — 어느 쪽?
- [ ] **MDX 도입 시점**: 콘텐츠 작성자가 비개발자가 될 가능성이 있는가?
- [ ] **검색 도입 우선순위**: 컴포넌트 25개 정도면 Sidebar로 충분한가, 아니면 검색이 필수인가?
- [ ] **GitHub Issues 연동**: 컴포넌트 페이지에서 "이 컴포넌트에 이슈 보고" 버튼 자동 생성 여부
- [ ] **버전 표시 정책**: 사이트 헤더에 ds 버전 표시할지, 페이지마다 표시할지
- [ ] **중국어**: 간체(zh-CN)만 / 번체(zh-TW)도? — 현재 간체 가정

---

## 10. 변경 이력

| 날짜 | 변경 | 사유 |
|------|------|------|
| 2026-05-01 | 최초 작성 | 사이트 프로젝트 시작 |

---

## AI 에이전트에게

- 이 문서가 **유일한 진실의 원천**이다.
- 여기 적히지 않은 결정은 유저에게 **반드시 질문**한다.
- §5 Out of Scope 항목은 VIOLATION 차단의 근거가 된다.
- 이 문서를 수정해야 한다고 판단되면 Guardian을 통해 유저에게 승인 요청한다. **직접 편집 금지.**

### 작업 시 참고
- 컴포넌트 페이지 작성은 `SPEC.md §6, §10` 표준 템플릿 + 체크리스트를 따른다.
- DS 패키지의 컴포넌트 Props는 `dist/index.d.ts` 또는 `null_ong2-design-system` 소스에서 직접 확인한다 (추측 금지).
- i18n 누락은 빌드 시 경고로 표면화한다 (조용히 통과 금지).

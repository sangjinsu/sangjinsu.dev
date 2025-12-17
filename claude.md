# CLAUDE.md - 상진수 셀프 브랜드 사이트

## 📋 프로젝트 개요

서버 개발자 상진수의 셀프 브랜드 사이트입니다.
미니멀하고 모던한 디자인에 **위트있는 카피**와 **마이크로 인터랙션**으로 개발자로서의 정체성을 담습니다.

---

## 🎨 Hero 섹션 디자인 (3가지 콘셉트)

> 복잡한 애니메이션 대신 **CSS 기반 마이크로 인터랙션 + 재치있는 카피**

### 콘셉트 1: 🏴‍☠️ 해적선 (심플 버전)

```
┌─────────────────────────────────────────┐
│                                         │
│              ⛵                         │
│        (호버하면 흔들흔들)              │
│                                         │
│      "버그의 바다를 항해 중..."         │
│                                         │
│            상진수                       │
│        Server Developer                 │
│                                         │
│      ～～～～～～～～～～～～           │
│                                         │
└─────────────────────────────────────────┘

구현:
├─ 이모지 또는 SVG 해적선 (⛵ 🏴‍☠️)
├─ CSS hover: 배 흔들림 (transform: rotate)
├─ 파도 라인: ~ 문자 또는 SVG
└─ 재치있는 한 줄 카피
```

**카피 후보:**

- "버그의 바다를 항해 중... 🏴‍☠️"
- "폭풍우 속에서도 배포는 계속된다 ⛵"
- "3년간 침몰 0회 🚢"

---

### 콘셉트 2: 💻 터미널 스타일

```
┌─────────────────────────────────────────┐
│ ● ● ●  terminal                         │
├─────────────────────────────────────────┤
│                                         │
│  $ whoami                               │
│  > 상진수                               │
│                                         │
│  $ cat job.txt                          │
│  > Server Developer @ Trinode           │
│                                         │
│  $ grep -r "버그" ./production          │
│  > 0 results found ✨                   │
│                                         │
│  █ (커서 깜빡)                          │
│                                         │
└─────────────────────────────────────────┘

구현:
├─ 터미널 윈도우 UI (macOS 스타일)
├─ 타이핑 효과 (CSS animation, 선택적)
├─ 커서 깜빡임 (blink animation)
└─ 개발자 유머 명령어들
```

**명령어 후보:**

- `$ ping life` → `Request timed out` 😴
- `$ make coffee` → `coffee is ready ☕`
- `$ git blame bug` → `Not me, I swear 🙈`
- `$ rm -rf bugs/*` → `Permission denied`

---

### 콘셉트 3: ✨ 미니멀 타이포

```
┌─────────────────────────────────────────┐
│                                         │
│                                         │
│              상진수                     │
│                                         │
│       서버 개발자, 가끔 DevOps          │
│                                         │
│       ───────────────────               │
│                                         │
│     "코드는 짧게, 장애는 더 짧게"       │
│                                         │
│                                         │
│              ↓ 스크롤                   │
│                                         │
└─────────────────────────────────────────┘

구현:
├─ 큰 타이포그래피 (이름)
├─ 서브텍스트 (직업)
├─ 한 줄 위트
├─ 호버 시 미세한 움직임
└─ 심플한 구분선
```

**카피 후보:**

- "코드는 짧게, 장애는 더 짧게"
- "우크라이나에서 개발자가 되기로 했다"
- "DAU 10만, 버그 리포트 0건 (오늘 기준)"

---

### 🎯 공통 마이크로 인터랙션

```css
/* 호버 시 살짝 위로 */
.hover-lift:hover {
  transform: translateY(-4px);
  transition: 0.2s ease;
}

/* 호버 시 흔들림 (배 전용) */
@keyframes shake {
  0%,
  100% {
    transform: rotate(0deg);
  }
  25% {
    transform: rotate(-5deg);
  }
  75% {
    transform: rotate(5deg);
  }
}

/* 커서 깜빡임 (터미널 전용) */
@keyframes blink {
  0%,
  50% {
    opacity: 1;
  }
  51%,
  100% {
    opacity: 0;
  }
}
```

---

### 🗳️ 구현 계획

Phase 2에서 세 가지 프로토타입 모두 구현:

1. `/demo/pirate` - 해적선 콘셉트
2. `/demo/terminal` - 터미널 콘셉트
3. `/demo/minimal` - 미니멀 콘셉트

→ 세 가지 비교 후 최종 선택 또는 조합

---

## 🛠 기술 스택

```
Runtime: Bun 1.x
Framework: Next.js 16 (App Router + Turbopack)
Language: TypeScript
Styling: Tailwind CSS v4
UI Components: shadcn/ui
Animation: CSS + Framer Motion (간단한 마이크로 인터랙션)
Icons: Lucide React
Deployment: Vercel (Bun Runtime)
Domain: 가비아 (커스텀 도메인)
```

### Bun 사용 이유

- **패키지 설치**: npm 대비 10배 빠름
- **런타임 성능**: Node.js 대비 28% 빠른 지연시간 (Vercel 공식 벤치마크)
- **올인원 도구**: 런타임 + 패키지 매니저 + 번들러 + 테스트 러너
- **TypeScript 네이티브 지원**: 별도 설정 없이 바로 사용

### shadcn/ui 사용 이유

- **커스터마이징**: 복사-붙여넣기 방식으로 완전한 제어
- **Radix UI 기반**: 접근성(a11y) 내장
- **Tailwind 통합**: 일관된 스타일링
- **다크/라이트 모드**: next-themes와 완벽 호환

### Next.js 16 주요 특징

- **Turbopack (stable)**: 기본 번들러, 2-5배 빠른 빌드, 10배 빠른 Fast Refresh
- **Cache Components**: PPR + `use cache`로 명시적 캐싱
- **proxy.ts**: middleware.ts 대체 (네트워크 경계 명확화)
- **React Compiler**: 자동 메모이제이션 내장
- **DevTools MCP**: AI 디버깅 지원

---

## 📁 프로젝트 구조

```
sangjinsu-brand/
├── app/
│   ├── layout.tsx          # 루트 레이아웃, 폰트, 메타데이터
│   ├── page.tsx            # 메인 페이지
│   └── globals.css         # 글로벌 스타일, CSS 변수 (shadcn)
├── components/
│   ├── layout/
│   │   ├── Navigation.tsx  # 네비게이션 바
│   │   └── Footer.tsx      # 푸터
│   ├── sections/
│   │   ├── Hero.tsx        # 히어로 섹션 + 3D
│   │   ├── About.tsx       # 자기소개, 스토리
│   │   ├── Skills.tsx      # 기술 스택
│   │   ├── Projects.tsx    # 프로젝트
│   │   └── Contact.tsx     # 연락처
│   ├── hero/
│   │   ├── HeroPirate.tsx      # 해적선 콘셉트
│   │   ├── HeroTerminal.tsx    # 터미널 콘셉트
│   │   └── HeroMinimal.tsx     # 미니멀 콘셉트
│   └── ui/                 # shadcn/ui 컴포넌트
│       ├── button.tsx
│       ├── card.tsx
│       ├── badge.tsx
│       ├── dialog.tsx
│       ├── dropdown-menu.tsx
│       ├── tooltip.tsx
│       ├── tabs.tsx
│       ├── scroll-area.tsx
│       └── theme-toggle.tsx # 커스텀 테마 토글
├── lib/
│   └── utils.ts            # cn() 유틸리티 함수
├── hooks/
│   ├── useTheme.ts         # 테마 훅
│   └── useScrollProgress.ts # 스크롤 진행도 훅
├── public/
│   └── fonts/              # 로컬 폰트 (선택)
├── CLAUDE.md
├── package.json
├── bun.lockb               # Bun 락파일
├── vercel.json             # Vercel Bun Runtime 설정
├── components.json         # shadcn/ui 설정
├── tailwind.config.ts
├── tsconfig.json
└── next.config.ts
```

---

## 📄 페이지 섹션

### 1. Hero

- CORE 3D 애니메이션 (화면 우측 또는 중앙 배경)
- 인트로 텍스트: "안녕하세요, 서버 개발자 상진수입니다"
- 간단한 한 줄 소개
- CTA 버튼: "프로젝트 보기", "연락하기"

### 2. About

- 비전공자(우크라이나어) → 개발자 전환 스토리
- 우크라이나 어학연수 & IT 스타트업 인턴 경험
- SSAFY 6기 수료
- 개발을 좋아하는 이유, 일하는 방식

### 3. Skills

- 역량 수준별 분류 (상/중/하)
- **Backend**: Go, MySQL, Redis, CouchBase, Node.js
- **Infrastructure**: Kubernetes, Docker, Terraform, Helm, ArgoCD, AWS
- **Frontend**: SvelteKit, Next.js
- 시각적으로 깔끔하게 표현 (바 차트 또는 태그)

### 4. Projects

#### 프로젝트 1: 포코팡타운 서버 운영

- DAU 10만 규모 모바일 퍼즐 게임
- 서버 파트 리더 (2022.04 - 2025.10)
- 신규 콘텐츠 설계, 라이브 운영, 아키텍처 개선

#### 프로젝트 2: AWS EKS 마이그레이션

- EC2 → EKS 전환
- Terraform, Helm, ArgoCD 기반 GitOps
- **결과: 인프라 비용 30% 절감**

#### 프로젝트 3: 패치 파일 생성 툴 재구축

- Bash + 레거시 Node.js → Go + SvelteKit
- RESTful API 서버 설계
- 반응형 어드민 대시보드

#### 프로젝트 4: 글로벌 서비스 운영

- 라인 게임즈 퍼블리셔 협업
- 대만, 일본 지역 이벤트 동시 운영

### 5. Contact

- 이메일: climbplant39@kakao.com
- 전화: +82 10-5472-8634
- 위치: 부산 수영구 / 인천 남동구
- 소셜 링크 (아이콘)

---

## 🔗 소셜 링크

```
GitHub: https://github.com/sangjinsu
Blog: https://velog.io/@sangjinsu/posts
LinkedIn: https://www.linkedin.com/in/sangjinsu/
Email: climbplant39@kakao.com
```

---

## 🎯 SEO 메타데이터

```typescript
// app/layout.tsx
export const metadata: Metadata = {
  title: "상진수 | Server Developer & DevOps Engineer",
  description:
    "게임 서버와 DevOps 인프라를 함께 다루는 서버 개발자 상진수입니다. DAU 10만 규모 모바일 게임 서버 개발 및 라이브 운영 경험.",
  keywords: [
    "서버 개발자",
    "백엔드",
    "DevOps",
    "Go",
    "Kubernetes",
    "게임 서버",
    "상진수",
  ],
  authors: [{ name: "상진수" }],
  openGraph: {
    title: "상진수 | Server Developer",
    description: "게임 서버와 DevOps 인프라를 함께 다루는 서버 개발자",
    url: "https://sangjinsu.dev", // 도메인 확정 후 수정
    siteName: "상진수 포트폴리오",
    locale: "ko_KR",
    type: "website",
  },
};
```

---

## 🚀 배포 가이드

### 0. 프로젝트 초기화 (Claude Code에서)

```bash
# Bun 설치 (없는 경우)
curl -fsSL https://bun.sh/install | bash

# 프로젝트 폴더 생성
mkdir sangjinsu-brand && cd sangjinsu-brand

# CLAUDE.md 파일 복사 (다운로드한 파일)

# Next.js 16 프로젝트 생성 (Bun)
bun create next-app . --typescript --tailwind --eslint --app --turbopack

# 추가 패키지 설치 (Bun)
bun add framer-motion next-themes
bun add lucide-react clsx tailwind-merge class-variance-authority
bun add @radix-ui/react-slot @radix-ui/react-dialog @radix-ui/react-dropdown-menu
bun add @radix-ui/react-tooltip @radix-ui/react-tabs @radix-ui/react-scroll-area

# shadcn/ui 초기화
bunx shadcn@latest init

# shadcn/ui 컴포넌트 설치
bunx shadcn@latest add button card badge separator dialog dropdown-menu tooltip tabs scroll-area
```

### 1. Vercel 배포 (Bun Runtime)

```bash
# Vercel CLI 설치
bun add -g vercel

# 로그인
vercel login

# 배포
vercel

# 프로덕션 배포
vercel --prod
```

### 2. Vercel Bun Runtime 설정

프로젝트 루트에 `vercel.json` 파일 생성:

```json
{
  "bunVersion": "1.x"
}
```

### 3. 가비아 도메인 연결

1. 가비아에서 도메인 구매 (예: sangjinsu.dev)
2. DNS 설정에서 다음 레코드 추가:
   ```
   A 레코드: @ → 76.76.21.21
   CNAME 레코드: www → cname.vercel-dns.com
   ```
3. Vercel 대시보드 → Settings → Domains → 도메인 추가
4. SSL 인증서 자동 발급 대기 (몇 분 소요)

---

## 💻 개발 명령어

```bash
# 의존성 설치
bun install

# 개발 서버 실행 (Bun + Turbopack)
bun --bun run dev

# 개발 서버 (webpack 사용 시)
bun --bun run dev -- --webpack

# 빌드 (Bun + Turbopack)
bun --bun run build

# 프로덕션 실행
bun --bun run start

# 린트
bun run lint

# 테스트
bun test
```

### package.json scripts 설정

```json
{
  "scripts": {
    "dev": "next dev --turbopack",
    "build": "next build",
    "start": "next start",
    "lint": "next lint"
  }
}
```

> 💡 `bun --bun` 접두사를 사용하면 Bun 런타임으로 실행됩니다.

---

## 📦 주요 패키지

```json
{
  "name": "sangjinsu-brand",
  "version": "0.1.0",
  "private": true,
  "scripts": {
    "dev": "next dev --turbopack",
    "build": "next build",
    "start": "next start",
    "lint": "next lint"
  },
  "dependencies": {
    "next": "^16.0.10",
    "react": "^19.0.0",
    "react-dom": "^19.0.0",
    "framer-motion": "^12.0.0",
    "next-themes": "^0.4.0",
    "lucide-react": "^0.468.0",
    "clsx": "^2.1.0",
    "tailwind-merge": "^2.6.0",
    "class-variance-authority": "^0.7.0",
    "@radix-ui/react-slot": "^1.1.0",
    "@radix-ui/react-dialog": "^1.1.0",
    "@radix-ui/react-dropdown-menu": "^2.1.0",
    "@radix-ui/react-tooltip": "^1.1.0",
    "@radix-ui/react-tabs": "^1.1.0",
    "@radix-ui/react-scroll-area": "^1.2.0"
  },
  "devDependencies": {
    "@types/node": "^22.0.0",
    "@types/react": "^19.0.0",
    "@types/react-dom": "^19.0.0",
    "typescript": "^5.6.0",
    "tailwindcss": "^4.0.0",
    "eslint": "^9.0.0",
    "eslint-config-next": "^15.1.0",
    "postcss": "^8.4.0"
  }
}
```

### Bun 버전 요구사항

- **Bun**: 1.x 이상
- **Node.js**: 20.9.0 이상 (fallback용)

---

## 🎨 shadcn/ui 설정

### 초기화 명령어

```bash
bunx shadcn@latest init
```

### 설정 옵션 (권장)

```
✔ Which style would you like to use? › New York
✔ Which color would you like to use as base color? › Slate
✔ Would you like to use CSS variables for colors? › yes
```

### components.json

```json
{
  "$schema": "https://ui.shadcn.com/schema.json",
  "style": "new-york",
  "rsc": true,
  "tsx": true,
  "tailwind": {
    "config": "tailwind.config.ts",
    "css": "app/globals.css",
    "baseColor": "slate",
    "cssVariables": true
  },
  "aliases": {
    "components": "@/components",
    "utils": "@/lib/utils",
    "ui": "@/components/ui",
    "lib": "@/lib",
    "hooks": "@/hooks"
  }
}
```

### 자주 사용할 컴포넌트 설치

```bash
# 기본 컴포넌트
bunx shadcn@latest add button card badge separator

# 인터랙션
bunx shadcn@latest add dialog dropdown-menu tooltip tabs

# 레이아웃
bunx shadcn@latest add scroll-area sheet navigation-menu
```

### lib/utils.ts

```typescript
import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
```

---

## ✅ 체크리스트

### Phase 1: 초기 설정 (`phase/1-setup`)

- [ ] Bun 설치
- [ ] Next.js 16 프로젝트 생성
- [ ] shadcn/ui 초기화 (`bunx shadcn@latest init`)
- [ ] 기본 컴포넌트 설치 (button, card, badge 등)
- [ ] lib/utils.ts 생성 (cn 함수)
- [ ] globals.css CSS 변수 설정
- [ ] vercel.json 생성 (Bun Runtime)

### Phase 2: Hero 섹션 프로토타입 (`phase/2-hero`)

- [ ] 콘셉트 1: 해적선 (HeroPirate.tsx)
  - [ ] 이모지/SVG 해적선
  - [ ] 호버 흔들림 애니메이션
  - [ ] 위트있는 카피
- [ ] 콘셉트 2: 터미널 (HeroTerminal.tsx)
  - [ ] macOS 터미널 UI
  - [ ] 커서 깜빡임
  - [ ] 개발자 유머 명령어
- [ ] 콘셉트 3: 미니멀 (HeroMinimal.tsx)
  - [ ] 큰 타이포그래피
  - [ ] 심플한 구분선
  - [ ] 한 줄 위트
- [ ] 데모 페이지 (/demo/pirate, /demo/terminal, /demo/minimal)
- [ ] 최종 콘셉트 선택

### Phase 3: 페이지 섹션 (`phase/3-sections`)

- [ ] Hero 섹션
- [ ] About 섹션
- [ ] Skills 섹션
- [ ] Projects 섹션
- [ ] Contact 섹션
- [ ] Navigation 컴포넌트
- [ ] Footer 컴포넌트

### Phase 4: 테마 시스템 (`phase/4-theme`)

- [ ] 다크/라이트 모드 토글
- [ ] next-themes 설정
- [ ] CSS 변수 전환 애니메이션
- [ ] 시스템 테마 감지

### Phase 5: 애니메이션 (`phase/5-animation`)

- [ ] 스크롤 애니메이션 (Framer Motion)
- [ ] 페이지 진입 애니메이션
- [ ] 섹션별 페이드인/슬라이드 효과
- [ ] 호버 인터랙션
- [ ] 스무스 스크롤

### Phase 6: 배포 및 최적화 (`phase/6-deploy`)

- [ ] SEO 메타태그
- [ ] OG 이미지 생성
- [ ] 성능 최적화
- [ ] Vercel 배포
- [ ] 커스텀 도메인 연결 (가비아)
- [ ] 최종 테스트

---

## ⚠️ Next.js 16 Breaking Changes

### 필수 변경사항

1. **런타임 요구사항**

   ```bash
   bun -v   # Bun 1.x 이상
   node -v  # Node.js 20.9.0 이상 (fallback)
   ```

2. **middleware.ts → proxy.ts 변경**

   ```typescript
   // 기존: middleware.ts
   export function middleware(request) { ... }

   // 변경: proxy.ts
   export function proxy(request) { ... }
   ```

3. **params/searchParams가 async로 변경**

   ```typescript
   // Next.js 16
   export default async function Page({
     params,
     searchParams,
   }: {
     params: Promise<{ slug: string }>;
     searchParams: Promise<{ query: string }>;
   }) {
     const { slug } = await params;
     const { query } = await searchParams;
   }
   ```

4. **legacyBehavior 제거됨 (next/link)**

   ```tsx
   // ❌ 더 이상 지원 안 함
   <Link href="/about" legacyBehavior><a>About</a></Link>

   // ✅ 올바른 방법
   <Link href="/about">About</Link>
   ```

5. **Cache Components 사용 (권장)**

   ```typescript
   "use cache";

   export default async function Page() {
     // 캐시되는 컴포넌트
   }
   ```

---

## 🎨 디자인 원칙

1. **미니멀**: 불필요한 요소 제거, 여백 활용
2. **모던**: 깔끔한 타이포그래피, 블루 계열 액센트
3. **인터랙티브**: 3D 애니메이션으로 몰입감
4. **스토리텔링**: 단순 이력서가 아닌 인생 여정

---

## 🌿 Git 브랜치 전략

### 브랜치 구조

```
main                     # 프로덕션 배포
├── phase/1-setup        # Phase 1: 프로젝트 초기 설정
├── phase/2-hero         # Phase 2: Hero 섹션 (3가지 콘셉트)
├── phase/3-sections     # Phase 3: 페이지 섹션 개발
├── phase/4-theme        # Phase 4: 다크/라이트 모드
├── phase/5-animation    # Phase 5: 스크롤 애니메이션
└── phase/6-deploy       # Phase 6: 배포 및 최적화
```

### 브랜치 작업 흐름

```bash
# 새 phase 시작
git checkout main
git pull origin main
git checkout -b phase/1-setup

# 작업 완료 후
git checkout main
git merge phase/1-setup
git push origin main
```

---

## 📝 Git 커밋 규칙 (Gitmoji + 한국어)

### 커밋 메시지 형식

```
<gitmoji> <제목>

<본문 (선택)>
```

### 자주 사용하는 Gitmoji

| Gitmoji | 코드                          | 용도                |
| ------- | ----------------------------- | ------------------- |
| 🎉      | `:tada:`                      | 프로젝트 시작       |
| ✨      | `:sparkles:`                  | 새 기능 추가        |
| 🐛      | `:bug:`                       | 버그 수정           |
| 💄      | `:lipstick:`                  | UI/스타일 수정      |
| ♻️      | `:recycle:`                   | 코드 리팩토링       |
| 📝      | `:memo:`                      | 문서 추가/수정      |
| 🔧      | `:wrench:`                    | 설정 파일 수정      |
| ➕      | `:heavy_plus_sign:`           | 의존성 추가         |
| ➖      | `:heavy_minus_sign:`          | 의존성 제거         |
| 🚀      | `:rocket:`                    | 배포                |
| 🎨      | `:art:`                       | 코드 구조/포맷 개선 |
| ⚡      | `:zap:`                       | 성능 개선           |
| 🔥      | `:fire:`                      | 코드/파일 삭제      |
| 🚚      | `:truck:`                     | 파일/경로 이동      |
| 💬      | `:speech_balloon:`            | 텍스트/문자열 수정  |
| 🏷️      | `:label:`                     | 타입 정의/수정      |
| 🔀      | `:twisted_rightwards_arrows:` | 브랜치 병합         |

### 커밋 메시지 예시

```bash
# 프로젝트 시작
git commit -m "🎉 프로젝트 초기 설정"

# 새 기능
git commit -m "✨ Hero 섹션 3D 애니메이션 추가"

# UI 수정
git commit -m "💄 네비게이션 바 스타일 수정"

# 버그 수정
git commit -m "🐛 다크모드 토글 버그 수정"

# 설정 변경
git commit -m "🔧 tailwind.config.ts 색상 팔레트 추가"

# 패키지 추가
git commit -m "➕ framer-motion 의존성 추가"

# 리팩토링
git commit -m "♻️ 3D 컴포넌트 구조 개선"

# 배포
git commit -m "🚀 v1.0.0 프로덕션 배포"
```

### Phase별 첫 커밋 예시

```bash
# Phase 1
git commit -m "🎉 Phase 1: 프로젝트 초기 설정 시작"

# Phase 2
git commit -m "✨ Phase 2: CORE 3D 오브젝트 구현 시작"

# Phase 3
git commit -m "✨ Phase 3: 페이지 섹션 개발 시작"
```

---

## 📝 참고 사항

- 프로필 사진 사용하지 않음
- 토스 스타일의 3D 애니메이션 참고
- 폰트: Pretendard (한글) + JetBrains Mono (코드)
- 개발을 좋아하는 개발자의 열정을 담을 것

# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

**Ready, GSM** — A registration service for program experience and admission info sessions at 광주소프트웨어마이스터고등학교 (Gwangju Software Meister High School).

## Commands

```bash
pnpm dev          # Start development server
pnpm build        # Production build
pnpm lint         # Run ESLint
pnpm lint:fix     # Run ESLint with auto-fix
pnpm format       # Run Prettier
pnpm format:check # Check formatting without writing
```

Pre-commit hooks (Husky + lint-staged) run ESLint and Prettier automatically on `*.ts` and `*.tsx` files.

## Architecture: Feature-Sliced Design (FSD)

The project strictly follows [Feature-Sliced Design](https://feature-sliced.design/). Layers must only import from layers below them — cross-layer imports at the same level are forbidden.

```
src/
├── app/       # Next.js routing, layouts, metadata, providers
├── views/     # Page-level components (compose widgets)
├── widgets/   # Standalone composite UI blocks
├── features/  # Feature-scoped logic (auth, forms, etc.)
├── entities/  # Business entities: types, schemas, API hooks, UI
└── shared/    # Shared utilities, hooks, styles, base components
```

**Import direction (strict):** `app` → `views` → `widgets` → `features` → `entities` → `shared`

Each layer folder uses barrel exports via `index.ts`.

## Tech Stack

| Category      | Library                                                                        |
| ------------- | ------------------------------------------------------------------------------ |
| Framework     | Next.js (React 19, TypeScript 5)                                               |
| Data fetching | TanStack React Query 5                                                         |
| HTTP          | Axios (wrapped — use `get`, `post`, `patch`, `put`, `del` from `@/shared/api`) |
| Forms         | React Hook Form + Zod                                                          |
| Styling       | Tailwind CSS 4, `cn()` utility (`clsx` + `tailwind-merge`)                     |
| Font          | Pretendard (local WOFF2, loaded via Next.js font loader)                       |

API requests are proxied: the Next.js config rewrites `/api/*` to `NEXT_PUBLIC_API_BASE_URL`.

## Code Conventions

### Components

- Arrow functions, `default export`
- Props via destructured `interface` (use `interface` for objects, `type` for unions)
- Internal ordering: hooks/variables → handlers → `useEffect` → `return`
- Type suffix: `Type` (e.g., `StatusType`); Schema suffix: `Schema` (e.g., `ExampleFormSchema`)

```tsx
interface ExampleProps {
  data: ExampleType[];
  isLoading: boolean;
}

const Example = ({ data, isLoading }: ExampleProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => setIsOpen(true);

  useEffect(() => {
    /* ... */
  }, []);

  return <div />;
};

export default Example;
```

### File/Folder Naming

- FSD 슬라이스 내 UI 컴포넌트: `{layer}/{slice}/ui/{Component}.tsx` (e.g., `widgets/header/ui/Header.tsx`)
  - `{slice}` 폴더명: `camelCase` (e.g., `header`, `homeProgramSection`)
  - `{Component}` 파일명: `PascalCase` (e.g., `Header.tsx`, `HomeProgramSection.tsx`)
  - UI 컴포넌트 파일은 `index.tsx`가 아닌 컴포넌트 이름으로 생성하세요.
- Hooks/utils/constants/types: `camelCase` (e.g., `useDebounce.ts`, `cookies.ts`)
- Asset components: `PascalCase.tsx` (e.g., `Logo.tsx`)
- 배럴 export: 각 슬라이스 루트에 `index.ts` 생성

### Styling

- Tailwind CSS only; 모든 `className`에 예외 없이 `cn()`을 사용하세요 (조건부 클래스 없이도 포함).
- Use CVA (`class-variance-authority`) for components with multiple variants
- Tailwind arbitrary value에서 `px` 단위를 사용하지 마세요 — Tailwind spacing scale 또는 `rem`/`em` 사용.
- 색상은 `src/shared/styles/globals.css`에 선언된 CSS 변수를 우선 사용하세요. 해당 변수가 없는 경우에만 hex 값 사용 허용.
  - 예: `text-brand-primary`, `bg-surface-container`, `border-border-variant`
  - 주요 변수: `brand-primary`, `brand-accent`, `neutral-dark`, `deep-black`, `neutral-slate`, `cool-neutral`, `secondary-slate`, `soft-gray`, `base-fill`, `surface-container`, `pure-white`, `error-red` 등

### API Hooks (in `entities/` or `features/`)

Hook naming: `useGet<Resource>`, `usePost<Resource>`, `usePatch<Resource>`, `usePut<Resource>`, `useDelete<Resource>`

```ts
// Query keys — object with as const
export const exampleQueryKeys = {
  getExamples: (page?: number) => ['examples', 'list', { page }] as const,
  getExampleById: (id: number) => ['examples', 'detail', id] as const,
} as const;

// URL controller — object with functions
export const exampleUrl = {
  getExamples: () => '/api/v1/examples',
  getExampleById: (id: number) => `/api/v1/examples/${id}`,
} as const;
```

### Import Order (auto-sorted by Prettier plugin)

1. React imports
2. Next.js imports
3. External libraries
4. Internal (`@/`) imports
5. Relative imports

## Claude 행동 규칙

- 작업 완료 후 자동으로 변경사항을 커밋하세요.
- 커밋 메시지는 `type: 설명` 형식을 따르세요 (scope 괄호 없음). 자세한 type 목록은 `.claude/commands/commit/references/scope-guide.md` 참고.
- **커밋은 반드시 Bash 도구로 git 명령어를 직접 실행하세요.** `/commit` Skill은 사용자가 명시적으로 `/commit`을 입력할 때만 사용합니다. 일반 작업 후 자동 커밋 시 Skill 도구를 호출하지 마세요.
- `git add .` 대신 변경된 파일을 명시적으로 스테이징하세요. `.env`, `.env.local` 등 환경변수 파일은 절대 포함하지 마세요.
- PR 제목은 `[type] 설명` 형식으로 작성하세요 (예: `[feat] 로그인 폼 추가`). `feat(scope): ...` 형식은 사용하지 않습니다.
- PR 리뷰 코멘트 처리는 `/fix-review` 커맨드를 사용하세요.

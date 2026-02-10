---
mode: agent
description: "Create a new page component and register it in the router and header navigation."
---

# Add a New Page

Create a new page in an existing React application that follows the project conventions defined in `.github/agents/react-app.agent.md`.

## Variables (ask the user if not provided)

- **Page name** — the PascalCase component name (e.g., `TjenesterPage`, `OmOssPage`).
- **Route path** — the URL path (e.g., `/tjenester`, `/om-oss`).
- **Nav label** — the text shown in the header menu (e.g., `Tjenester`, `Om oss`).
- **Description** — a one-sentence summary of what the page should contain.

## Steps

Perform all of the following in order:

### 1. Create the page component

Create `src/pages/<PageName>.tsx` with:

- A named export: `export function <PageName>() { … }`.
- At least one `<Section>` wrapper from `../components/Section`.
- A heading (`<h1>`) and introductory paragraph as placeholder content.
- Use the design tokens from `index.css` (e.g., `text-[var(--color-primary-green)]`).
- Follow all conventions from section 7 of the agent (functional component, named export, Tailwind-first, TypeScript strict, proper import grouping).

### 2. Create a page-scoped hook file

Create `src/pages/use<PageName>.ts` with:

- A named export: `export function use<PageName>() { … }`.
- Import and use the typed Redux hooks from `../store/hooks` (`useAppSelector`, `useAppDispatch`).
- Return an object with any state and handlers the page needs (can start with an empty/minimal implementation).

### 3. Add a route in `App.tsx`

- Import the new page component at the top of `src/App.tsx`.
- Add a `<Route path="<route-path>" element={<PageName />} />` inside the `<Route element={<RootLayout />}>` group, below the existing routes.

### 4. Add the page to the header navigation

- Open `src/components/Header.tsx`.
- Add `{ label: '<Nav label>', href: '<route-path>' }` to the `defaultNavLinks` array, in the correct menu position.

### 5. Verify

- Run `npx tsc --noEmit` to confirm there are no type errors.
- Run `npx vite build` to confirm the production build succeeds.

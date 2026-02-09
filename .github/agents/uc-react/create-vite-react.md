# Create Vite React App Agent

You are a scaffolding agent that creates a new Vite + React + TypeScript application in the current workspace.

## Instructions

Follow these steps in order:

1. **Scaffold the project** — Run the following command in the terminal to create a Vite React TypeScript project in the current workspace directory:

   ```
   npm create vite@latest . -- --template react-ts
   ```

   If the directory is not empty, the command may prompt for confirmation — proceed with it.

2. **Install dependencies** — Run:

   ```
   npm install
   ```

3. **Verify the setup** — Start the dev server to confirm everything works:

   ```
   npm run dev
   ```

   Confirm the dev server starts successfully, then stop it.

## Additional Dependencies

After scaffolding and installing the base dependencies, also install the following packages:

- `@reduxjs/toolkit`
- `react-redux`
- `react-router-dom`

Install them with:

```
npm install <package1> <package2> ...
```

If any packages include TypeScript types as a separate package (e.g. `@types/...`), install those as dev dependencies:

```
npm install -D <@types/package1> ...
```

Also install the following as dev dependencies for linting and formatting:

- `eslint`
- `prettier`
- `eslint-config-prettier`
- `eslint-plugin-react`
- `eslint-plugin-react-hooks`
- `@typescript-eslint/eslint-plugin`
- `@typescript-eslint/parser`

```
npm install -D eslint prettier eslint-config-prettier eslint-plugin-react eslint-plugin-react-hooks @typescript-eslint/eslint-plugin @typescript-eslint/parser
```

## Page Layout & Styling

See [uc-layout.md](uc-layout.md) for all layout and styling specifications.

## Template Assets

The `images/` folder next to this agent file contains all required site assets (SVGs, photos, logo). After scaffolding the project, copy **every file** from this folder into the project's `public/images/` directory:

```
mkdir public/images
cp .github/agents/uc-react/images/* public/images/
```

These assets are referenced by components in the layout spec and must be present for the site to render correctly. The key files are:

| File | Purpose |
|------|---------|
| `ulriken-logo.svg` | Brand logo (SVG, rendered in header) |
| `Illustrasjonseksempel.svg` | Hero section illustration |
| `Group-9741.svg` | Service icon — BI & maskinlæring |
| `Group-9742.svg` | Service icon — Fullstack utvikling |
| `Group-9750.svg` | Service icon — Apputvikling |
| `Frame-9745.svg` | Service icon — Skybasert arkitektur |
| `Group-9748.svg` | Service icon — Prosjektledelse |
| `*.webp` | Employee photos (contact section) |

## Constraints

- Do **not** add any dependencies beyond what the Vite template provides and what is listed in the **Additional Dependencies** section above.
- Do **not** modify the generated configuration files (`vite.config.ts`, `tsconfig.json`, etc.).
- Keep the default Vite project structure as-is.
- Use `npm` as the package manager (not yarn or pnpm).
- Target the current workspace root directory (`.`), do not create a nested subfolder.

## Output

After completing the steps, briefly confirm:

- The project was scaffolded with Vite + React + TypeScript
- Dependencies were installed
- How to start the dev server (`npm run dev`)

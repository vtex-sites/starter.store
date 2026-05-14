# AGENTS.md — starter.store

A FastStore + VTEX e-commerce storefront starter. Built on Next.js, React, TypeScript, and GraphQL, deployed through VTEX WebOps.

---

## Architecture — two-layer model

FastStore uses a **merge architecture** managed by `@faststore/cli`.

| Layer | Location | Purpose |
|---|---|---|
| **Framework (read-only)** | `.faststore/` | Source code from `@faststore/core`. Auto-generated and overwritten on upgrades.
| **Store customizations** | `src/` | Your store's overrides and extensions. All edits go here. |

The CLI merges both layers at build time. When upgrading FastStore, `.faststore/` is replaced entirely — only `src/` is preserved.

### Customization entry points in `src/`

```
src/
  themes/custom-theme.scss   # CSS design tokens (primary theming surface)
  fonts/WebFonts.tsx         # Custom web font loading
```

Component and section overrides (if added) go in:
```
src/customizations/src/components/   # Component overrides
src/customizations/src/sections/     # Section overrides
src/customizations/src/styles/       # Global style overrides
```

Section overrides must also be registered in:
```
src/components/index.tsx   # Section override registration (default export only)
```

---

## Store configuration

All environment-level config lives in **`discovery.config.js`** at the root.

Key values:
- **Platform**: VTEX (`storeId: "newstore"`, `workspace: "master"`)
- **Store URL**: `https://www.fast.store`
- **CMS contentSource**: VTEX Headless CMS (`CP`, `CMS`)

Feature flags also added here.

Environment variables are in `vtex.env`. Do not commit secrets from this file.

---

## Theming

Theming is done entirely through **CSS custom properties (design tokens)** in `src/themes/custom-theme.scss`.

Rules:
- All tokens follow the `--fs-*` naming convention (e.g. `--fs-color-main-2`, `--fs-text-weight-bold`).
- Overrides must be inside the `.theme {}` selector.
- Do not use hardcoded values where a `--fs-*` token exists — always prefer the token.

```scss
// ✅ correct
.theme {
  --fs-color-main-2: #0366dd;
}

// ❌ wrong — editing outside .theme or without the @use import
.my-component {
  color: #0366dd;
}
```

---

## Dev commands

Use **Yarn**

Node version:
- **Required locally**: `>=20`
- **WebOps build/deploy**: Node `24`, set via `experimental.nodeVersion` in `discovery.config.js`.

```bash
yarn dev        # Start local dev server (http://localhost:3000)
yarn build      # Production build
yarn start      # Start production server locally
yarn cms-sync   # Sync CMS content type definitions to VTEX Headless CMS
yarn test       # Run Cypress E2E tests
```

---

## GraphQL & API extensions

FastStore provides a GraphQL API that connects to VTEX's Headless Commerce API. To add data not in the native schema, use API extensions — do **not** make direct calls to external APIs or VTEX REST endpoints from components.

Rules from the official docs:
- Extend the schema via `src/customizations/src/graphql/` — never modify `.faststore/api/` directly.
- **Do not make direct requests to external APIs** from the frontend — use API extensions instead to avoid `504` timeouts.
- **Do not add custom Next.js API Routes** (`/pages/api/`) beyond the ones already built into FastStore.
- When calling VTEX APIs from resolvers, use your store's own domain (`https://www.fast.store/...`) — never call `vtexcommercestable` directly, as it degrades performance and scalability.
- GraphQL type generation runs automatically on `yarn dev` and `yarn build` — schema changes (adding/removing fields) are only reflected after that.

---

## Headless CMS

The store `contentSource` is set in `discovery.config.js`.

Content types available out of the box:

| Content Type | Scope | Purpose |
|---|---|---|
| `globalSections` | global | Reusable sections shown across all pages |
| `globalHeaderSections` | global | Global header |
| `globalFooterSections` | global | Global footer |
| `home` | home | Homepage structure and SEO |
| `pdp` | pdp | Product Detail Page template |
| `plp` | plp | Product Listing Page template |
| `search` | plp, search | Search results page |
| `landingPage` | landing, custom | Custom landing pages |

Run `yarn cms-sync` to push local content type definitions to the VTEX Admin. This requires the VTEX IO CLI to be installed and logged in (`vtex login {accountName}`).

---

## What NOT to do

- **Never edit `.faststore/`** — changes will be lost on the next `@faststore/cli` upgrade.
- **Do not add pages or components directly in `.faststore/src/pages/` or `.faststore/src/components/`** — use the override pattern in `src/customizations/`.
- **Do not make direct API calls** to external services or VTEX REST APIs from components — use API extensions.
- **Do not add custom Next.js API Routes** beyond FastStore's built-in ones.
- **Do not call `vtexcommercestable`** directly from resolvers — use the store domain.
- **Do not commit `vtex.env` changes** that include real credentials or store-specific secrets.

---

## Relevant docs

- [FastStore overview](https://developers.vtex.com/docs/guides/faststore)
- [FastStore CLI](https://developers.vtex.com/docs/guides/faststore/getting-started-requirements)
- [Theming](https://developers.vtex.com/docs/guides/faststore/using-themes-overview)
- [Component overrides](https://developers.vtex.com/docs/guides/faststore/building-sections-component-customization-overview)
- [Extending the API](https://developers.vtex.com/docs/guides/faststore/api-extensions-overview)


## Available Skills
- [FastStore Storefront — Coding Rules](https://github.com/vtex/skills/blob/main/skills/faststore-storefront/SKILL.md)

> Only use this skill after check if `contentSource` type in `discovery.config.js` is CP.
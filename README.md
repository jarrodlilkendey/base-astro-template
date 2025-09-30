# My Base Astro Template for Business Websites

## Summary

- Initialised with `pnpm create astro@latest`
- Uses `pnpm`
- Includes:
  - `Astro`
  - `Typescript`
  - `React`
  - `Astro Sitemap`
  - `Astro MDX`
  - `TailwindCSS v4`
  - `eslint`
  - `Astro Partytown`

## Instructions

### How to use this Template

```sh
pnpm create astro@latest --template jarrodlilkendey/base-astro-template
```

### Consume Astro Shared Components

#### Populate .npmrc

```.npmrc
@jarrodlilkendey:registry=https://npm.pkg.github.com
//npm.pkg.github.com/:_authToken=${NODE_AUTH_TOKEN}
```

#### Create a Token in GitHub

- Give it permission to read public GitHub packages
- Set the NODE_AUTH_TOKEN environvent variable to this token

#### Add Packages

```
pnpm add @jarrodlilkendey/astro-ui @jarrodlilkendey/tokens
```

#### Update Packages

```
pnpm update @jarrodlilkendey/astro-ui @jarrodlilkendey/tokens
```

### Commands

All commands are run from the root of the project, from a terminal:

| Command                | Action                                           |
| :--------------------- | :----------------------------------------------- |
| `pnpm install`         | Installs dependencies                            |
| `pnpm dev`             | Starts local dev server at `localhost:4321`      |
| `pnpm build`           | Build your production site to `./dist/`          |
| `pnpm preview`         | Preview your build locally, before deploying     |
| `pnpm astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `pnpm astro -- --help` | Get help using the Astro CLI                     |

## 👀 Want to learn more?

- [Astro Docs](https://docs.astro.build)

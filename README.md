# lgf_loading

![](https://img.shields.io/github/downloads/Legacy-Framework/lgf_loading/total?logo=github)
![](https://img.shields.io/github/v/release/Legacy-Framework/lgf_loading?logo=github)

A loading screen for FiveM built with TypeScript and React.

![](https://img.shields.io/github/v/release/Legacy-Framework/lgf_loading?logo=github)

## Getting Started

### Node.js v18+

Install any LTS release of [`Node.js`](https://nodejs.org/) from v18.

### pnpm

Install the [`pnpm`](https://pnpm.io/installation) package manager globally.

```
npm install -g pnpm
```

### Setup

Navigate to your new directory and execute the following command to install dependencies.

```
pnpm install
```
Use `pnpm build` to build all project files in production mode.

## Development

Use `pnpm watch` to actively rebuild modified files while developing the resource.

During web development, use `pnpm web:dev` to start vite's webserver and watch for changes.

## Layout

- [/dist/](dist)
  - Compiled project files.
- [/locales/](locales)
  - JSON files used for translations with [ox_lib](https://overextended.dev/ox_lib/Modules/Locale/Shared).
- [/scripts/](scripts)
  - Scripts used in the development process, but not part of the compiled resource.
- [/src/](src)
  - Project source code.
- [/static/](static)
  - Files to include with the resource that aren't compiled or loaded (e.g. config).

## Thanks to

- Overextended: [fivem-typescript-boilerplate](https://github.com/overextended/fivem-typescript-boilerplate)
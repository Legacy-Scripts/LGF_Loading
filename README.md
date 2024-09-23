# lgf_loading

![](https://img.shields.io/github/downloads/Legacy-Framework/lgf_loading/total?logo=github)
![](https://img.shields.io/github/v/release/Legacy-Framework/lgf_loading?logo=github)

Modern loading screen for FiveM built with TypeScript and React.

![](https://i.imgur.com/6x6Rfa5.png)

## Getting Started

### Prerequisites

- **Node.js v18+**: Install any LTS version of [Node.js](https://nodejs.org/).

### Installation

1. **Install pnpm:**: Install the [`pnpm`](https://pnpm.io/installation) package manager globally:

```
npm install -g pnpm
```

2. **Set Up the Project**: Navigate to your project directory and install the dependencies:

```
pnpm install
```

3. **Build the Project**: To build the project files in production mode, run:

```
pnpm build
```

### Development

- **Watch for Changes**: Use the following command to actively rebuild modified files during development:

```
pnpm watch
```

- **Web Development**: To start Vite's web server and watch for changes, run:

```
pnpm web:dev
```

### Project Structure

- **`/dist/`**: Compiled project files.
- **`/locales/`**: JSON files for translations using [ox_lib](https://overextended.dev/ox_lib/Modules/Locale/Shared).
- **`/scripts/`**: Development scripts not included in the compiled resource.
- **`/src/`**: Project source code.
- **`/static/`**: Non-compiled files to be included with the resource (e.g., config).

### Acknowledgments

- Overextended: [fivem-typescript-boilerplate](https://github.com/overextended/fivem-typescript-boilerplate)

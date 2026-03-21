# tfl-cli-ui

Landing page for [tfl-cli](https://github.com/shan8851/tfl-cli) — London transport in your terminal.

**Live at [tfl-cli.xyz](https://tfl-cli.xyz)**

![Hero section — roundel, headline, and animated terminal demo](docs/hero.png)

## Sections

### Features

Six commands covering tube status, journey planning, disruptions, arrivals, bike docks, and stop search — each with a tube-line-colored accent.

![Feature grid with tube line colored borders](docs/features.png)

### Examples

Real CLI output rendered in terminal chrome with color-coded line names and status indicators.

![Terminal examples showing tfl status and route output](docs/examples.png)

### Agent Integration

Stable JSON envelope (schema v1), auto-detected piped output, structured errors — built for Claude Desktop, OpenClaw, or any shell-capable agent.

![Agent section with JSON output example](docs/agent.png)

## Tech Stack

- **Vite** + **React 19** + **TypeScript** (strict)
- **Tailwind CSS v4**
- **DM Mono** + **Instrument Sans** (Google Fonts)
- Dark theme only — terminal aesthetic
- CSS-only animations (typewriter, staggered line reveal, scroll-triggered fade-in)
- Static SPA — deploy anywhere

## Development

```bash
pnpm install
pnpm dev
```

## Build

```bash
pnpm build
```

Output goes to `dist/`.

## License

MIT

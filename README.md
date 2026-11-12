# Bad Network Mode

A one-page, low-bandwidth guide that shows people exactly what to tap on their phone when the internet is slow, congested, or unreliable.

## Purpose

Most phones waste bandwidth in the background and perform poorly when networks are under stress.

This page provides step-by-step instructions to:
- Stop background data usage
- Prevent large automatic downloads
- Reduce media bandwidth
- Disable cloud syncing

The goal is simple: make devices usable when networks are not.

## Design Principles

- One page only
- No scripts
- No images
- No tracking
- Works on slow or unstable connections
- No interpretation required (step-by-step instructions only)

## Standard

This page follows the SLIM (Structured Low-bandwidth Information Markup) v1.0 profile.

- SLIM specification: https://github.com/cqueern/slim-spec

## File

- `index.html` — the entire site

## Usage

Host this page anywhere. It is designed to:
- Load quickly on weak networks
- Be shared as a direct link or QR code
- Be printable if needed

## Contributing

If you update instructions:
- Keep steps explicit and tap-by-tap
- Avoid adding complexity
- Prioritize reliability across devices and OS versions

## Build and deployment

Keep editing the readable `index.html`; it remains the complete, standalone page.
The build tools run only during development and deployment. No JavaScript or
external CSS is added to the published page.

With Node.js 24 installed:

```sh
npm ci
npm run build
```

The generated `dist/index.html` minifies HTML whitespace and inline CSS. CSS
minification uses level 0 (whitespace only), preserving print declarations and
rule order. HTML whitespace collapse preserves spaces around inline links.
Generated files and dependencies are ignored by Git.

The Pages workflow checks builds on pull requests and deploys only `dist/` on
pushes to `main` or a manual run on `main`.

For the one-time migration from branch publishing, select **Settings → Pages →
Build and deployment → Source → GitHub Actions**. After merging this workflow,
run **Build and deploy Pages** from the Actions tab if it has not already run.
Check that its deployment succeeds before considering the migration complete.

To undo the migration, switch the Pages source back to the `main` branch, `/`
(root). The original readable page remains directly publishable.

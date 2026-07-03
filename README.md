# Truong-Son Van

This site is built with [Zola](https://www.getzola.org/) and deployed to GitHub Pages.

## Edit content

- Publications: `data/publications.bib`
- Profile, current position, address, interests, positions, education: `data/profile.toml`
- Teaching history: `data/teaching.toml`
- Useful links: `data/useful.toml`

## Run locally

```sh
zola serve
```

## Build

```sh
zola build
```

The generated static site is written to `public/`.

## Deployment

Pushing to `master` or `main` runs `.github/workflows/deploy.yml`, builds the Zola site, and deploys `public/` to GitHub Pages.

The custom domain is stored in `static/CNAME`, so it is copied into the generated site. **Never delete every copy of this file** — `static/CNAME` must always exist. (GitHub Pages actually ignores CNAME files when deploying via Actions, as this repo does, but keep it in place as the source of record for the domain and in case the Pages source setting is ever switched back to a branch, where it's required.)

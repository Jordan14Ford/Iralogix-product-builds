# Onboarding

The identity step that starts account onboarding. This screen matches the Figma frame **Verify Account**: a progress header, the identity form, and the workspace overview.

## Run locally

```bash
npm install
npm run dev -- --hostname 0.0.0.0 --port 43123
```

Open [http://127.0.0.1:43123](http://127.0.0.1:43123) for the identity step. Get Started opens [http://127.0.0.1:43123/create-login](http://127.0.0.1:43123/create-login). Continue then walks through contribution, bank connection, connected banks, strategy, beneficiaries, signature, and review:

- [http://127.0.0.1:43123/contribution](http://127.0.0.1:43123/contribution)
- [http://127.0.0.1:43123/bank](http://127.0.0.1:43123/bank)
- [http://127.0.0.1:43123/banks-connected](http://127.0.0.1:43123/banks-connected)
- [http://127.0.0.1:43123/strategy](http://127.0.0.1:43123/strategy)
- [http://127.0.0.1:43123/beneficiaries](http://127.0.0.1:43123/beneficiaries)
- [http://127.0.0.1:43123/signature](http://127.0.0.1:43123/signature)
- [http://127.0.0.1:43123/review](http://127.0.0.1:43123/review)

## GitHub Pages

The public site is a static export served from the `gh-pages` branch at [https://jordan14ford.github.io/Iralogix-product-builds/](https://jordan14ford.github.io/Iralogix-product-builds/).

```bash
NEXT_PUBLIC_BASE_PATH=/Iralogix-product-builds npm run build
```

That writes `out/`. Publish the contents of `out/` to `gh-pages` (include `.nojekyll` so `/_next` assets are served). Do not force-push `main`.

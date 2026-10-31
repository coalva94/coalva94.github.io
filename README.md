# Carlos Alva Casana

Web personal de Carlos Alva Casana: IA aplicada a negocio en entorno industrial, con SAP S/4HANA, SharePoint Online, Copilot y Power Automate.

Stack: Astro 4, Tailwind CSS 4 y pnpm.

## Arranque

```sh
pnpm install
pnpm run dev
pnpm run build
```

`pnpm run dev` abre la vista previa en http://localhost:4321. `pnpm run build` genera el sitio estático en `dist/`.

## Despliegue

El sitio se publica en GitHub Pages con GitHub Actions (`.github/workflows/deploy.yml`) en cada push a `main`.

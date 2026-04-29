# pezeshkpour-docs

Technische Dokumentation für die Projekte von Amir Houshang Pezeshkpour
([pezeshkpour.eu](https://pezeshkpour.eu)) — gehostet unter
**docs.pezeshkpour.eu**.

Aktuell dokumentiert:

- **MailGate** — selfhosted E-Mail-Plattform mit Plugins
- **PoolX** — Online-Pool-Plattform

## Tech-Stack

- [Astro](https://astro.build) + [Starlight](https://starlight.astro.build)
- DE (default) + EN
- Statisch gebaut, deployed via GitHub Actions + rsync

## Lokal entwickeln

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # baut nach dist/
npm run preview  # serviert dist/ lokal
```

## Inhalts-Struktur

```
src/content/docs/
├── intro.md            # DE-Startseite
├── mailgate/           # DE: Übersicht, Architektur, Installation, Bedienung
├── poolx/              # DE: dito
└── en/
    ├── intro.md        # EN-Startseite
    ├── mailgate/       # EN-Mirror
    └── poolx/          # EN-Mirror
```

Sidebar-Reihenfolge wird in `astro.config.mjs` gesteuert. Locale-Switcher
oben rechts wechselt zwischen DE und EN. Der Pfad-Slug muss zwischen
beiden Sprachen identisch sein — Starlight erwartet ein paralleles
Datei-Tree.

## Deploy

Push auf `main` triggert die GitHub Action `.github/workflows/deploy.yml`,
die das gebaute `dist/` per rsync nach `docs.pezeshkpour.eu` kopiert.

## Migration zu Per-Project-Docs

Falls eine Doku später näher am Code leben soll (z.B.
`MailGate-Backend/docs/`), reicht ein `git mv` und ein Pfad-Update
in der Starlight-Config — der Lock-in ist minimal.

## Lizenzen

Dieses Repo ist dual-lizenziert:

- **Inhalte** (Markdown/MDX-Dateien unter `src/content/`) — [Creative
  Commons Attribution 4.0 International](LICENSE) (CC BY 4.0).
  Wiederverwendung erlaubt, solange der Urheber genannt wird.
- **Code** (Astro-Konfiguration, Workflows, Build-Scripts) —
  [MIT](LICENSE-CODE).

Bei Übernahme der Inhalte bitte verlinken auf
`https://docs.pezeshkpour.eu` oder dieses Repo.

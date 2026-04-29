---
title: PoolX — Übersicht
description: PoolX ist eine Online-Plattform für Pool-Veranstaltungen — Mit-Spielende organisieren, Pools verwalten, Bezahlung integriert.
---

PoolX ist eine Web-App für die Organisation von Pool-/Billard-
und Lotterie-Pools. Veranstalter erstellen Pools, Teilnehmer
treten bei, Bezahlung läuft integriert über die Plattform.

## Was PoolX liefert

- **Pool-Verwaltung** — Veranstalter legen Pools mit Regeln,
  Einstiegspreis und Teilnehmerlimit an
- **Teilnehmer-Onboarding** — Beitritt per Link, Stripe/PayPal-Bezahlung
- **Live-Status** — Pool-Stand, Auszahlungs-Logik, Ergebnis-Reporting
- **Notification** — E-Mail + Telegram bei Status-Änderungen

## Tech-Stack

- **Frontend** — Next.js 16, deployed unter `/poolx/` als
  Reverse-Proxy auf `localhost:3000`
- **Backend** — FastAPI (Python), PostgreSQL, Redis für Sessions

## Status

PoolX läuft im Beta-Betrieb. Die Doku hier ist
work-in-progress — die meisten Inhalte folgen, sobald der
MVP-Scope eingefroren ist.

## Nächster Schritt

→ [Architektur](/poolx/architecture/) (in Arbeit)

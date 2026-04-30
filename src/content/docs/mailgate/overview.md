---
title: MailGate — Übersicht
description: MailGate ist eine universelle E-Mail-Plattform mit Plugin-Architektur, Multi-Tenancy und integrierten Sidecars für Passwörter und Kalender.
---

MailGate ist ein selbstgehosteter Mailserver-Stack — eine einzige
`.deb` enthält SMTP-Inbound, SMTP-Outbound, IMAP, Storage,
Authentifizierung, Webmail-UI und Admin-Dashboard. Multi-Tenant von
Grund auf: jeder Tenant hat eigene Domain(s), eigene User, eigene
DB-Files.

## Was MailGate liefert

- **Mailserver** — SMTP + IMAP, eigene User-Tabellen, Argon2-Hashes
- **Webmail** — Next.js-Frontend mit Compose, Inbox, Suche, Kalender, Kontakte, Cloud-Drive
- **Admin-Dashboard** — Tenant-, User-, Domain- und DKIM-Verwaltung
- **2FA** — Telegram-basiert, Webhook statt Polling
- **API-Tokens** — externe Apps (z.B. PoolX) authentifizieren sich mit `mgs_…`-Tokens statt Passwörtern, scope-gated (mail:send, contacts:read, …)
- **Mailbox-Sharing** — System-Mailboxen (`info@`, `postmaster@`) lassen sich an einzelne Mitarbeiter delegieren, ohne das Mailbox-Passwort zu teilen
- **Plugins** — Telegram-Bot, AI-Auto-Reply, Custom-Hooks
- **Sidecars** — Vaultwarden für Passwörter, Radicale für CardDAV/CalDAV

## Für wen

- Solo-Operator oder kleine Teams, die einen kompletten
  Mail-Stack ohne Docker-Compose-Stress wollen
- Gemischte Setups: einige User mit eigener Domain, andere als
  „Hub-Mode" nur für Gmail/Outlook/GMX-Aggregation
- Unternehmen, die Mail + Passwort-Manager + Kalender als ein
  System ausrollen wollen

## Status

MailGate ist **MailGate-Standalone** als Default-Driver — der
ältere DMS-Driver (Postfix/Dovecot/Docker) bleibt als Option,
wird aber nicht mehr aktiv ausgebaut.

## Nächster Schritt

→ [Architektur](/mailgate/architecture/) erklärt Komponenten und
Datenfluss.

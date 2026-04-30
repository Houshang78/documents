---
title: MailGate — Architektur
description: Komponenten, Datenflüsse und Sidecar-Pattern von MailGate.
---

MailGate besteht aus zwei Haupt-Repos und mehreren optionalen
Sidecars. Alle Komponenten kommunizieren über Loopback (kein
externes Netzwerk zwischen den Services).

## Komponenten

### Backend (`MailGate-Backend`)

- **Express.js + TypeScript** — REST-API unter `/api/`
- **Prisma + LibSQL** — `control.db` (Sessions, Tenants, Plugins)
  und `tenant.db` (User-Daten pro Tenant)
- **Standalone-Driver** — eigener SMTP-Server (`smtp-server`),
  IMAP-Client (`imapflow`), Mail-Storage als Maildir
- **CLI** — `mailgate-server` Binary für Owner-Login,
  Backup/Restore, Setup-Wizard, Provider-Test

### Frontend (`MailGate-Frontend`)

- **Next.js 16** — Server Components wo möglich, Client
  Components nur für Interaktion
- **Tailwind 4** — eigenes Design-System mit Dark/Light-Theme
- **Zustand** — globaler State (Auth, Selected Account)
- **TipTap** — Rich-Text-Editor im Compose-View

### Plugins

Plugins liegen in `plugins/<name>/` und werden zur Laufzeit aus
der `PluginConfig`-Tabelle aktiviert. Aktuell:

- **telegram** — 2FA-Push und Bot-Befehle
- **ai-autoreply** — Claude-Haiku-basierte Antwort-Vorschläge

### Sidecars

Sidecars sind separate systemd-Services, die MailGate optional
nutzen kann:

- **Vaultwarden** — Bitwarden-kompatibler Passwort-Manager auf
  `vault.<host>`. SSO-Brücke aus MailGate via PBKDF2 +
  Vaultwarden-Identity-API.
- **Radicale** — CardDAV/CalDAV-Server für native iOS/Android-Sync.

## Datenfluss am Beispiel: Eingehende Mail

1. Externer SMTP-Sender kontaktiert MailGate-SMTP (Port 25)
2. MailGate-Standalone-Driver akzeptiert, parst via `mailparser`
3. Mail wird verschlüsselt im Maildir abgelegt (Pro-User-Verzeichnis)
4. WebSocket-Push an aktive Webmail-Sessions
5. Plugin-Hooks feuern (z.B. AI-Auto-Reply, Push-Notification)

## ID-Range-Trennung

User-IDs sind nach Rolle aufgeteilt — **kritischer Punkt**:

| Range       | Rolle           | Login-Pfad           |
|-------------|-----------------|----------------------|
| 1–9         | Owner           | nur CLI              |
| 10–19       | Owner-Admin     | CLI + Frontend       |
| 20–99       | regulärer Admin+| Frontend             |
| 100–999     | System          | nur intern           |
| 1000–9999   | Admin           | Frontend             |
| 10000+      | User            | Frontend             |

Der Owner ist im Frontend tabu — Web-Login akzeptiert nur ID ≥ 10.

## Zugriffsmodell für Mailboxen

System-Mailboxen wie `info@`, `postmaster@`, `noreply@`, `support@`
können **nicht direkt im Frontend angemeldet werden** (seit v2.0.1).
Stattdessen gibt es zwei kontrollierte Zugriffspfade:

- **API-Tokens** (`mgs_<base64>`, seit v2.0.0) — externe Apps wie
  PoolX oder Skripte zur Passwort-Wiederherstellung authentifizieren
  sich mit einem scope-eingeschränkten Token statt mit
  Mailbox-Passwort. Der Klartext wird genau einmal beim Erzeugen
  angezeigt; die DB speichert nur den SHA-256-Hash. Verwaltung im
  Admin-Frontend unter **Admin → Access → API-Tokens**.
- **Mailbox-Sharing** (seit v2.1.0) — Admin+ delegiert einer
  konkreten Person Lese-/Sende-/Verwaltungs-Rechte auf eine
  System-Mailbox. Die Person sieht die Mailbox als zusätzliche Box
  in ihrer eigenen Webmail-Sidebar. Pro Person, signiert, einzeln
  widerrufbar. Verwaltung unter **Admin → Access → Mailbox-Sharing**.

Das Modell ersetzt das alte „drei Leute teilen sich das info@
Passwort"-Anti-Pattern — Passwort-Rotation entfällt, Audit ist
durchgängig, einzelne Berechtigungen können ohne Mailbox-Touchen
widerrufen werden.

## Nächster Schritt

→ [Installation](/mailgate/installation/) führt durch das Aufsetzen.

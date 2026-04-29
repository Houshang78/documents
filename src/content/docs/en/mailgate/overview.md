---
title: MailGate — Overview
description: MailGate is a universal email platform with a plugin architecture, multi-tenancy, and integrated sidecars for passwords and calendars.
---

MailGate is a self-hosted mail server stack — a single `.deb`
contains SMTP-inbound, SMTP-outbound, IMAP, storage,
authentication, webmail UI and admin dashboard. Multi-tenant
from the ground up: each tenant gets its own domain(s), users
and DB files.

## What MailGate ships

- **Mail server** — SMTP + IMAP, own user tables, Argon2 hashes
- **Webmail** — Next.js frontend with compose, inbox, search, calendar, contacts, cloud drive
- **Admin dashboard** — tenant, user, domain and DKIM management
- **2FA** — Telegram-based, webhook (not polling)
- **Plugins** — Telegram bot, AI auto-reply, custom hooks
- **Sidecars** — Vaultwarden for passwords, Radicale for CardDAV/CalDAV

## Who it's for

- Solo operators or small teams who want a complete mail stack
  without docker-compose stress
- Mixed setups: some users with their own domain, others in
  "hub mode" only for Gmail/Outlook/GMX aggregation
- Companies who want to ship mail + password manager + calendar
  as a single system

## Status

MailGate now uses **MailGate-Standalone** as the default driver.
The older DMS driver (Postfix/Dovecot/Docker) remains as an
option but is not actively developed further.

## Next step

→ [Architecture](/en/mailgate/architecture/) explains components
and data flow.

# Documentation Roadmap

Internal planning doc — tracks features that need full documentation
pages on docs.pezeshkpour.eu. Not deployed (excluded from Astro build
because top-level `.md` files outside `src/content/docs/` are
ignored). Update this file when a feature lands or gets documented.

Priority key:
- **P1** — user-facing, must-have before public launch
- **P2** — operator-facing, nice-to-have for self-hosters
- **P3** — internal / advanced, not needed for happy-path users

Status:
- 📝 stub — page exists, content thin
- 📚 written — content covers the feature
- ⏳ todo — no page yet

---

## MailGate

### User-facing (webmail)
| Topic | Status | Priority | Notes |
|---|---|---|---|
| Inbox + Unified Mail | ⏳ todo | P1 | List view, threading, screening |
| Compose + Rich Text (TipTap) | ⏳ todo | P1 | Drafts, attachments, signatures |
| Cloud-Drive Picker | ⏳ todo | P2 | Gmail Drive + Outlook OneDrive + own MailGate Cloud |
| MailGate Cloud (own file storage) | ⏳ todo | P2 | /cloud page, share-links with password+expiry |
| Calendar (CalDAV via Radicale + native UI) | ⏳ todo | P2 | Month + Week + Agenda views, import/export |
| Contacts (CardDAV) | ⏳ todo | P2 | List, dedup with two-editor merge |
| AI Assistant (Claude) | ⏳ todo | P2 | Chat, tool-use, per-tenant token caps |
| Vaultwarden Tresor (/passwords iframe) | ⏳ todo | P2 | ZK + Auto-Login modes |
| Warmup Campaigns | ⏳ todo | P3 | AI-varied daily sends |
| Sieve Filters | ⏳ todo | P3 | ManageSieve, in-frontend editor |
| Auto-Reply | ⏳ todo | P2 | Cross-provider via plugin hooks |
| 2FA (Telegram + WebAuthn) | ⏳ todo | P1 | Setup, recovery, --code-2fa CLI |
| Hub-Mode (no-domain users) | ⏳ todo | P2 | Sign up with @gmail.com, attach external accounts |

### Admin-facing
| Topic | Status | Priority | Notes |
|---|---|---|---|
| /admin/setup wizard | ⏳ todo | P1 | Driver picker + first-domain |
| /admin/db (Tenant manager) | ⏳ todo | P1 | Users, Domains, DKIM, Audit, Plugins, Quota |
| /admin/ops (Self-Test + Backup + Telegram + Workers + Security) | ⏳ todo | P1 | Operator tools |
| **/admin/access (API Tokens + Mailbox-Sharing)** | ⏳ todo | P1 | NEW Phase 2/3, v0.46.0 |
| /admin/admins (AdminPlus management) | ⏳ todo | P2 | Owner-only |
| /admin/deletions (DSGVO approval queue) | ⏳ todo | P2 | Hard-delete approvals |

### CLI commands
| Command | Status | Priority | Notes |
|---|---|---|---|
| --owner (interactive setup wizard) | ⏳ todo | P1 | Legal-kind, tenant, first Admin+, system mailboxes |
| --login (with --code-2fa, --skip-2fa) | ⏳ todo | P1 | Production recovery via OTP |
| Login shell (interactive subcommands) | ⏳ todo | P1 | accounts, admins, dkim, plugins, sessions, telegram |
| --backup (--include-mail, --include-vault) | ⏳ todo | P1 | scrypt+AES-256-GCM envelope |
| --restore | ⏳ todo | P1 | Decrypt to staging, manual copy step |
| **--reset-factory (--include-mail, --include-vault)** | ⏳ todo | P2 | NEW v2.2.0, two-step confirmation |
| --selftest | ⏳ todo | P2 | Read-only env + DB + driver checks |
| --provider-test --account-id | ⏳ todo | P2 | End-to-end Gmail/Outlook probe |
| --setup-status / --setup-apply / --setup-reload | ⏳ todo | P2 | Headless wizard parity |
| --set-workers | ⏳ todo | P3 | HTTP worker count override |
| --set-telegram-token / --set-telegram-chat | ⏳ todo | P3 | Paste-friendly setters |
| --dkim-generate / --dkim-import / --dkim-list | ⏳ todo | P2 | Key management + DMS migration |
| Cleanup CLI (clean-duplicate-emails) | ⏳ todo | P3 | Cross-table de-dup tool |

### REST API
| Topic | Status | Priority | Notes |
|---|---|---|---|
| Auth (login, signup-hub, accept-invite, forgot-password) | ⏳ todo | P1 | Including Telegram-2FA challenge flow |
| /api/me/* (user-self surfaces) | ⏳ todo | P1 | Mail, compose, devices, signatures, etc. |
| /api/admin/db (tenant management) | ⏳ todo | P2 | Cross-tenant ops |
| /api/admin/ops (operator tools) | ⏳ todo | P2 | HTTP twin of CLI |
| **/api/admin/tokens (API tokens)** | ⏳ todo | P1 | NEW v2.0.0 — mint/list/revoke |
| **/api/admin/mailbox-access (sharing)** | ⏳ todo | P1 | NEW v2.1.0 — grant/revoke |
| **API token auth (Bearer mgs_…)** | ⏳ todo | P1 | NEW v2.0.0 — scope-gated, polymorphic principal |
| OpenAPI spec (`/api/openapi.json`) | ⏳ todo | P2 | Generated, drives the frontend types |

### Architecture / Internals
| Topic | Status | Priority | Notes |
|---|---|---|---|
| ID-range separation (1-9 / 10-99 / 100-999 / 1000-9999 / 10000+) | 📝 stub | P1 | Mentioned in architecture.md, needs full table |
| Owner is CLI-only (Frontend-Tabu) | 📝 stub | P1 | Mentioned, needs the WHY explained |
| **System-mailbox login block** | ⏳ todo | P1 | NEW v2.0.1 — login refused, token + sharing only |
| Multi-tenancy (TenantDomain, alias, primary) | ⏳ todo | P2 | Phase B per-tenant DB |
| Standalone driver (SMTP + IMAP + Maildir + DKIM) | ⏳ todo | P1 | Replaces DMS, default since v2.0.0 ish |
| DMS driver (legacy option) | ⏳ todo | P3 | Postfix/Dovecot/Docker — kept for backwards-compat |
| Encryption-at-rest (ENCRYPTION_KEY, /var/lib/mailgate/keys/) | ⏳ todo | P2 | Persistent across .deb purges |
| Plugin architecture (telegram, ai-autoreply) | ⏳ todo | P2 | PluginConfig table, runtime enable/disable |
| Schema bootstrap (ensureSchemas, prisma db push) | ⏳ todo | P3 | Runs on every boot |

### Sidecars
| Topic | Status | Priority | Notes |
|---|---|---|---|
| Vaultwarden Sidecar (Phase A→E) | ⏳ todo | P2 | install.sh, nginx-vault.conf, hybrid SSO, backup integration |
| Radicale Sidecar (CardDAV + CalDAV) | ⏳ todo | P2 | iOS/Android native sync |

### Operations
| Topic | Status | Priority | Notes |
|---|---|---|---|
| Deploy via .deb (build.sh + dpkg -i) | ⏳ todo | P1 | Server target builds with plugins integrated |
| systemd unit (mailgate.service) | ⏳ todo | P2 | Restart=on-failure, drop-in overrides |
| Nginx vhost (mailgate.conf, vault.conf) | ⏳ todo | P2 | TLS, rate-limit, CSP frame-ancestors |
| Upgrade path (v1.99 → v2.x JIT-pitfall) | ⏳ todo | P2 | User-row JIT only fires on creation, repair via reset or DELETE row |
| Upstream-Watcher (GitHub releases + advisories → email) | ⏳ todo | P3 | NEW v1.96-ish, Owner+Admin+ alert |
| Health-Monitoring + Bot watchdog | ⏳ todo | P3 | Auto-recovery, owner alerts |

---

## PoolX

Doku-Stand: Skeleton-Pages existieren mit „in Arbeit"-Hinweis. Kein
Inhalt, weil der MVP-Scope noch nicht eingefroren ist.

| Topic | Status | Priority |
|---|---|---|
| Architektur (Frontend / Backend / Payment) | ⏳ todo | P1 |
| Installation (PostgreSQL + FastAPI + Next.js + Stripe/PayPal) | ⏳ todo | P1 |
| Veranstalter-Workflow (Pool anlegen, Regeln, Einladen) | ⏳ todo | P1 |
| Teilnehmer-Workflow (Beitritt, Bezahlung, Status) | ⏳ todo | P1 |
| Auszahlungs-Logik | ⏳ todo | P2 |
| Notification (E-Mail + Telegram) | ⏳ todo | P2 |
| Integration mit pezeshkpour.eu-Hub | ⏳ todo | P3 |

---

## Cross-cutting

| Topic | Status | Priority | Notes |
|---|---|---|---|
| Multilingualism (DE primary, EN secondary) | 📚 written | — | Starlight handles it; remember parallel file tree |
| Migration to per-project docs | ⏳ todo | P3 | Documented in README; not yet exercised |
| Search (Pagefind) | 📚 working | — | Built into Starlight, no config needed |
| Style guide (tone, code blocks, callouts) | ⏳ todo | P3 | Decide before bulk-writing |

---

## Order of attack (recommendation)

1. **MailGate Architecture** — fill in the stubbed page properly:
   ID ranges, Owner-Tabu, system-mailbox policy, standalone vs DMS,
   sidecar pattern. ~2 hours.
2. **MailGate Installation** — already has solid bones, needs the
   real DNS-record screenshot and the Vaultwarden + Radicale steps.
   ~1 hour.
3. **NEW: API Tokens guide** — concrete walkthrough: "I want PoolX
   to send mail through MailGate". ~1 hour.
4. **NEW: Mailbox-Sharing guide** — "I want my support staffer to
   read info@". ~30 min.
5. **MailGate Bedienung** — fill in the existing CLI commands page
   with `--reset-factory`, the new --include-vault, OAuth-attach
   flow, etc. ~1 hour.
6. **Vaultwarden Sidecar guide** — install + activate + share-pattern.
   ~1 hour.

Total estimate to bring MailGate docs to "complete enough for
public launch": ~8-10 hours, broken into ~5 sittings.

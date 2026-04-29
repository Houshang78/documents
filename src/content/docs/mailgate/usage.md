---
title: MailGate — Bedienung
description: Typische Admin- und User-Workflows nach der Installation.
---

Nach erfolgreicher Installation hast du Webmail unter
`https://<domain>/`, Admin-Dashboard unter `/admin/`, Vaultwarden
unter `https://vault.<domain>/` (falls aktiviert).

## Admin-Workflows

### User anlegen

**Admin → DB → Users → Neuer User**. Wähle Tenant, vergib
Username + initiales Passwort (User muss es beim ersten Login
ändern). Ab ID 10000 sind reguläre User.

### Domain hinzufügen

**Admin → DB → Domains → Domain hinzufügen**. Im Anschluss
DKIM-Generate, DNS-Hints prüfen, publishen, dann
**Admin → Ops → Self-Test** zur Verifikation.

### Backup erstellen

**Admin → Ops → Backups → Backup erstellen**. Drei Optionen:

- **Nur DBs** — schnelles Tarball mit `control.db` + `tenant.db`
- **+ Mail** — inklusive `DMS_MAIL_PATH`-Verzeichnis (kann mehrere GB sein)
- **+ Vault** — inklusive Vaultwarden-Daten (Passwort-Tresor)

Backup ist scrypt+AES-256-GCM-verschlüsselt. Restore extrahiert
in ein Staging-Verzeichnis — Live-DBs werden nie überschrieben.

## User-Workflows

### Mail-Account anbinden

Bei MailGate-eigener Domain ist der Account beim Anlegen
verbunden. Externe Konten (Gmail, Outlook, GMX) hinzufügen via
**Einstellungen → Mail-Konten → Konto hinzufügen** — OAuth-Flow
oder IMAP-Credentials.

### Compose mit Anhängen

Im Compose-View können Anhänge entweder lokal hochgeladen oder
aus der Cloud (eigene MailGate-Cloud / Google Drive / OneDrive)
gepickt werden. Drive-Picker setzt OAuth-Re-Auth voraus, falls
das Konto vor v1.61 angebunden wurde.

### Passwort-Tresor nutzen

**Tab Passwords** (Schlüssel-Icon in der Sidebar). Zwei Modi:

- **Zero-Knowledge** — Master-Passwort wird im Browser eingegeben,
  Server kennt es nicht
- **Auto-Login** — Master-Passwort verschlüsselt im Server
  hinterlegt, „Login-Token holen" liefert kurzlebigen Access-Token

## CLI-Workflows

```bash
# Login als Owner (Telegram-2FA)
sudo mailgate-server --login houshang -p

# Login mit OTP (production recovery, wenn Bot tot)
sudo mailgate-server --login houshang -p --code-2fa

# Backup
sudo mailgate-server --backup --include-mail --include-vault

# Self-Test (read-only)
sudo mailgate-server --selftest

# Provider-Test gegen Gmail/Outlook
sudo mailgate-server --provider-test --account-id 42
```

## Weiterführend

- Code: [github.com/Houshang78/MailGate-Backend](https://github.com/Houshang78/MailGate-Backend)
- Frontend: [github.com/Houshang78/MailGate-Frontend](https://github.com/Houshang78/MailGate-Frontend)
- Issues: [github.com/Houshang78/MailGate-Backend/issues](https://github.com/Houshang78/MailGate-Backend/issues)

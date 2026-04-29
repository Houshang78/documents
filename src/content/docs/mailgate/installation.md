---
title: MailGate — Installation
description: Schritt-für-Schritt-Anleitung von leerem Ubuntu-Server zu lauffähigem MailGate.
---

Diese Anleitung setzt einen leeren Ubuntu-22.04/24.04-Server
voraus. Du brauchst Root-Zugriff, eine Domain mit DNS-Kontrolle
und einen Telegram-Bot-Token (für 2FA).

## 1. Pakete installieren

```bash
sudo apt update
sudo apt install -y nginx certbot python3-certbot-nginx \
  build-essential curl
curl -fsSL https://deb.nodesource.com/setup_22.x | sudo -E bash -
sudo apt install -y nodejs
```

## 2. MailGate `.deb` einspielen

```bash
sudo dpkg -i mailgate-server_<version>_amd64.deb
sudo dpkg -i mailgate-frontend_<version>_amd64.deb
```

Beide Pakete legen `mailgate.service` (Backend) und
`mailgate-frontend.service` (Frontend) an.

## 3. Owner anlegen

```bash
sudo mailgate-server --owner <username> -p
```

Es startet ein interaktiver Wizard, der nach Passwort,
Telegram-Chat-ID und Tenant-Typ (Privat / Person+Gewerbe / Firma)
fragt.

## 4. Setup-Wizard ausführen

Im selben CLI-Aufruf folgt automatisch der Wizard, der:

- die erste Domain registriert
- DKIM-Schlüssel generiert (oder importiert, falls von DMS migriert)
- Owner-Mailbox + System-Mailboxen anlegt
- den ersten Admin+ erstellt (ID ≥ 10)

## 5. DNS-Records publizieren

Im Admin-Dashboard unter **Admin → Domains → DNS-Hints** stehen
die nötigen Einträge (MX, A, SPF, DKIM, DMARC). Veröffentliche
diese bei deinem DNS-Provider.

## 6. TLS-Zertifikat

```bash
sudo certbot --nginx -d mail.<domain> -d <domain>
```

## 7. Optional: Vaultwarden-Sidecar

```bash
sudo /usr/share/mailgate-server/vaultwarden/install.sh install
```

Danach in `/etc/mailgate/server.conf`:

```env
VAULTWARDEN_BASE_URL=https://vault.<domain>
VAULTWARDEN_ADMIN_TOKEN=<aus /etc/mailgate/vaultwarden.env>
```

Service neustarten — der Vaultwarden-Tab erscheint im Frontend
unter **Einstellungen → Passwort-Manager**.

## 8. Erster Login

`https://<domain>/login` → username (z.B. `houshang`) oder
E-Mail des Admin+-Users (ID 10), Passwort, Telegram-2FA-Code.

## Nächster Schritt

→ [Bedienung](/mailgate/usage/) erklärt typische Admin- und
User-Workflows.

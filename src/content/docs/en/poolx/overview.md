---
title: PoolX — Overview
description: PoolX is an online platform for pool events — organise participants, manage pools, integrated payment.
---

PoolX is a web app for organising pool / billiards and lottery
pools. Operators create pools, participants join, payment is
integrated through the platform.

## What PoolX ships

- **Pool management** — operators create pools with rules, entry
  fee and participant cap
- **Participant onboarding** — join via link, Stripe/PayPal
  payment
- **Live status** — pool standing, payout logic, result reporting
- **Notification** — email + Telegram on status changes

## Tech stack

- **Frontend** — Next.js 16, deployed under `/poolx/` as a
  reverse proxy to `localhost:3000`
- **Backend** — FastAPI (Python), PostgreSQL, Redis for sessions

## Status

PoolX is in beta. Documentation here is work-in-progress — most
content arrives once the MVP scope is frozen.

## Next step

→ [Architecture](/en/poolx/architecture/) (in progress)

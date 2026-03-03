---
layout: project
title: "SecProxy Toolkit"
date: 2026-03-10
tags: [Security, Pentest, ARM, Kali, macOS]
excerpt: "Eine modulare Open-Source-Alternative zu Burp Suite, entwickelt für ARM-basierte Kali Linux VMs unter macOS (UTM). Das Toolkit nutzt mitmproxy als zentrale Proxy-Komponente und orchestriert"
---

## SecProxy Toolkit Überblick

Eine modulare Open-Source-Alternative zu Burp Suite, entwickelt für ARM-basierte Kali Linux VMs unter macOS (UTM). Das Toolkit nutzt **mitmproxy** als zentrale Proxy-Komponente und orchestriert
spezialisierte Security-Scanner über eine einheitliche CLI.

## Problem

Burp Suite läuft nicht performant in Kali Linux VMs unter UTM/macOS ARM. Kommerzielle Alternativen sind teuer, und einzelne CLI-Tools zu koordinieren ist zeitaufwendig und fehleranfällig.

## Lösung

Ein zweiteiliges System mit klarer Architektur:

- **secproxy-toolkit** (Kali VM / Angreifer) – mitmproxy als Proxy-Zentrale mit Custom Addons für passives Scanning, Request-Export und automatisierte Multi-Tool-Scans
- **secproxy-target-lab** (PC1 / Ziel) – Podman-basiertes Lab mit verwundbaren Webapps (DVWA, Juice Shop) und optionalem Caddy HTTPS-Reverse-Proxy

## Architektur

```markdown
┌─────────────────────────────────────────────┐
│              mitmproxy (Zentrale)           │
│         Proxy · Intercept · Replay          │
├──────────┬──────────┬───────────┬───────────┤
│  nuclei  │  sqlmap  │   ffuf    │   nikto   │
│  Scanner │  SQLi    │  Fuzzer   │  WebScan  │
├──────────┴──────────┴───────────┴───────────┤
│            Report Generator                 │
│         JSON → Markdown → HTML              │
└─────────────────────────────────────────────┘
```

## Workflow

```markdown
PC1 (Target):                     Kali VM (Angreifer):
─────────────                     ────────────────────
./lab.sh
  → Juice Shop :3000              ./scan.sh http://<PC1-IP>:3000
  → DVWA       :8081              ./intercept.sh http://<PC1-IP>:8081
  → Eigene App :3001              ./scan.sh http://<PC1-IP>:3001
```

## Tech-Stack

- **Proxy:** mitmproxy (Python Addons: Passive Scanner, Request Exporter)
- **Scanner:** nuclei, sqlmap, ffuf, dalfox, nikto
- **Container:** Podman (isolierte Netzwerke)
- **HTTPS:** Caddy Reverse Proxy mit Self-Signed Certs
- **Reporting:** Python – HTML/Markdown/JSON mit Severity-Sortierung
- **Plattform:** Kali Linux ARM (UTM/macOS), Arch Linux (Geekom)

## Features

- Automatisierter Multi-Tool-Scan mit einem Befehl (`scan.sh`)
- Interaktiver Proxy-Modus mit Live-Passive-Scanning (`intercept.sh`)
- Request-Export für gezielte Nacharbeit mit sqlmap/nuclei
- HTML-Reports mit Dark-Theme, sortiert nach Severity
- HTTPS-fähiges Lab für realistische Tests (HSTS, Secure Cookies)
- Eigene Next.js Apps testbar via Containerfile

## Ergebnis

Ein vollständiges Pentest-Toolkit, das ohne kommerzielle Lizenzen auskommt und auf ARM-Hardware performant läuft. Der modulare Aufbau erlaubt einfache Erweiterung um neue Scanner oder Reporting-Formate.

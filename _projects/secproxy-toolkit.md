---
layout: project
title: "SecProxy Toolkit"
date: 2026-03-10
image: /assets/images/projects/secproxy-toolkit.svg
tags: [Security, Pentest, ARM, Kali, Proxy]
excerpt: "Eine modulare Open-Source-Alternative zu Burp Suite für ARM-basierte Kali Linux Umgebungen. Das Toolkit nutzt mitmproxy als zentrale Proxy-Komponente und orchestriert spezialisierte Security-Scanner über eine einheitliche CLI."
---

## SecProxy Toolkit Überblick

Eine modulare Open-Source-Alternative zu Burp Suite für ARM-basierte Linux-Umgebungen. Das Toolkit nutzt **mitmproxy** als zentrale Proxy-Komponente und orchestriert spezialisierte Security-Scanner
über eine einheitliche CLI.

## Problem

Kommerzielle Proxy-Tools haben Performance-Probleme in virtualisierten ARM-Umgebungen. Alternativen sind teuer, und einzelne CLI-Tools zu koordinieren ist zeitaufwendig und fehleranfällig.

## Lösung

Ein zweiteiliges System mit klarer Architektur:

- **secproxy-toolkit** (Angreifer-Seite) – mitmproxy als Proxy-Zentrale mit Custom Addons für passives Scanning, Request-Export und automatisierte Multi-Tool-Scans
- **secproxy-target-lab** (Ziel-Seite) – Podman-basiertes Lab mit verwundbaren Webapps (DVWA, Juice Shop) und optionalem Caddy HTTPS-Reverse-Proxy

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
Target-System:                    Scanner-System:
──────────────                    ──────────────
./lab.sh
  → Juice Shop                    ./scan.sh http://<target-ip>:port
  → DVWA                          ./intercept.sh http://<target-ip>:port
  → Vulnerable App                ./scan.sh http://<target-ip>:port
```

## Tech-Stack

- **Proxy:** mitmproxy (Python Addons: Passive Scanner, Request Exporter)
- **Scanner:** nuclei, sqlmap, ffuf, dalfox, nikto
- **Container:** Podman (isolierte Netzwerke)
- **HTTPS:** Caddy Reverse Proxy mit Self-Signed Certs
- **Reporting:** Python – HTML/Markdown/JSON mit Severity-Sortierung
- **Plattform:** Kali Linux ARM, Alpine Linux, Arch Linux

## Features

- Automatisierter Multi-Tool-Scan mit einem Befehl (`scan.sh`)
- Interaktiver Proxy-Modus mit Live-Passive-Scanning (`intercept.sh`)
- Request-Export für gezielte Nacharbeit mit sqlmap/nuclei
- HTML-Reports mit Dark-Theme, sortiert nach Severity
- HTTPS-fähiges Lab für realistische Tests (HSTS, Secure Cookies)
- Eigene Apps testbar via Containerfile

## Ergebnis

Ein vollständiges Pentest-Toolkit, das ohne kommerzielle Lizenzen auskommt und auf ARM-Hardware performant läuft. Der modulare Aufbau erlaubt einfache Erweiterung um neue Scanner oder Reporting-Formate.

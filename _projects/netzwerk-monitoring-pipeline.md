---
layout: project
title: "Netzwerk-Monitoring Pipeline"
date: 2026-03-01
tags: [NetzwerkMonitoring, LLM, Heimnetzwerk]
excerpt: "Eine 5-stufige Monitoring-Pipeline für WLAN-Netzwerke, die Traffic automatisiert erfasst, verarbeitet und mittels lokalem LLM auf Anomalien analysiert. Der Operator behält volle Kontrolle – passive Beobachtung, keine Auto-Interventionen."
---
## Netzwerk-Monitoring Pipeline Überblick

Eine modulare 5-stufige Pipeline zur Erfassung und Analyse von Netzwerk-Traffic mittels regelbasierter Erkennung und lokalem LLM – ohne Cloud-Abhängigkeit.

## Problem

Heimnetzwerke werden komplexer (IoT, Smart Home, Remote Work), aber Standard-Logging ist unzureichend. Anomalien bleiben unbemerkt, bis Schaden entsteht.

## Lösung

Modulare Pipeline mit 5 Verarbeitungsstufen – von Paketerfassung über regelbasierte Filterung bis zur LLM-gestützten Schweregrad-Bewertung.

## Pipeline-Architektur

```markdown
Phase 1: CAPTURE
  Netzwerk-Paketmitschnitt → raw .pcap-Dateien
       │
       ▼
Phase 2: PROCESS
  Paketanalyse → strukturierte Logs
  (DNS, Ports, Protokolle, pro-Gerät Traffic)
       │
       ▼
Phase 3: DETECT
  Regelbasierte Anomalie-Erkennung
  (Unerwartete Verbindungen, ungewöhnliche Muster)
       │
       ▼
Phase 4: ANALYZE
  Lokales LLM → Bewertung & Priorisierung
  (Severity-Scoring, Kontextanalyse)
       │
       ▼
Phase 5: NOTIFY
  Operator entscheidet → Block/Monitor/Ignore
```

## Tech-Stack

- **Capture:** Standard-Paketmitschnitt-Tools
- **Processing:** tshark, pyshark, scapy, Python
- **Detection:** Regelbasierte Filter (Python)
- **LLM:** Lokales Sprachmodell + Prompt-Templates
- **Notification:** Custom Alert-System
- **Hardware:** Standard Netzwerk-Routing-Hardware + Verarbeitungsgerät

## Design-Prinzipien

- **Passiv:** Kein Eingriff in Netzwerk-Konfiguration
- **Lokal:** Alle Daten bleiben im Heimnetzwerk
- **Human-in-the-Loop:** LLM empfiehlt, Operator entscheidet
- **Modular:** Jede Phase austauschbar

## Features

- Erfasst gesamten Netzwerk-Traffic
- Strukturierte Aufbereitung nach Gerät, Protokoll, Zeitraum
- Regelbasierte Vorerkennung reduziert LLM-Input
- Lokale LLM-Analyse ohne externe APIs
- Operator-Dashboard mit manuellen Reaktionsmöglichkeiten
- Zyklische, automatisierte Erfassung

## Ergebnis

Intelligentes Netzwerk-Monitoring zwischen Home-Router-Logging und Enterprise-SIEM – ohne Cloud-Abhängigkeit und mit vollständiger lokaler Kontrolle.

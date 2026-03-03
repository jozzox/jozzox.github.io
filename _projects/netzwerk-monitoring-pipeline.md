---
layout: project
title: "Netzwerk-Monitoring Pipeline"
date: 2026-03-01
tags: [NetzwerkMonitoring, LLM, Heimnetzwerk]
excerpt: "Eine 5-stufige Monitoring-Pipeline für die Fritz!Box 6660, die Netzwerk-Traffic automatisiert erfasst, verarbeitet und mittels lokalem LLM auf Anomalien analysiert. Der Operator behält jederzeit die volle Kontrolle – das System beobachtet passiv und empfiehlt, greift aber nie selbstständig ein."
---
## Netzwerk-Monitoring Pipeline Überblick

Eine 5-stufige Monitoring-Pipeline für die Fritz!Box 6660, die Netzwerk-Traffic automatisiert erfasst, verarbeitet und mittels lokalem LLM (LM Studio) auf Anomalien analysiert.
Der Operator behält jederzeit die volle Kontrolle – das System beobachtet passiv und empfiehlt, greift aber nie selbstständig ein.

## Problem

Heimnetzwerke werden zunehmend komplexer (IoT, Smart Home, mehrere Arbeitsgeräte), aber die meisten Router bieten nur rudimentäres Logging. Auffälliges Verhalten einzelner Geräte bleibt oft unbemerkt,
bis es zu spät ist.

## Lösung

Eine modulare Pipeline, die den gesamten Traffic der Fritz!Box über das Routing Interface mitschneidet und in 5 Stufen verarbeitet – von der rohen pcap-Datei bis zur priorisierten Benachrichtigung.

## Pipeline-Architektur

```markdown
Phase 1: CAPTURE
  Fritz!Box Routing Interface → raw .pcap
  (Kabel + WLAN 2.4GHz + 5GHz)
       │
       ▼
Phase 2: PROCESS
  tshark / pyshark → strukturierte Logs
  (DNS-Queries, Ports, Protokolle, Traffic pro Gerät)
       │
       ▼
Phase 3: DETECT
  Regelbasierte Anomalie-Erkennung
  (Unbekannte IPs, ungewöhnliche Ports, Traffic-Spikes)
       │
       ▼
Phase 4: ANALYZE
  Lokales LLM (LM Studio) → Bewertung & Priorisierung
  (Prompt-Templates, Severity-Scoring, Kontextanalyse)
       │
       ▼
Phase 5: NOTIFY
  Operator wird informiert → entscheidet & handelt
  (Block, Monitor, Ignore, Investigate)
```

## Tech-Stack

- **Capture:** Fritz!Box Paketmitschnitt (Routing Interface)
- **Processing:** tshark, pyshark, scapy, Python
- **Detection:** Regelbasierte Filter (Python)
- **LLM:** LM Studio mit lokalem Modell + Prompt-Templates
- **Benachrichtigung:** Custom Notification System
- **Hardware:** Fritz!Box Kabel 6660, Mac Mini M4, Geekom Mini IT 11

## Design-Prinzipien

- **Passiv:** Kein Eingriff in die Fritz!Box-Konfiguration, reine Beobachtung
- **Lokal:** Alle Daten bleiben im Heimnetzwerk, kein Cloud-Upload
- **Human-in-the-Loop:** LLM empfiehlt, Operator entscheidet
- **Modular:** Jede Phase ist unabhängig austauschbar und testbar

## Features

- Erfasst gesamten ein- und ausgehenden Traffic (Kabel + WLAN)
- Strukturierte Aufbereitung nach Gerät (MAC/IP), Protokoll und Zeitraum
- Regelbasierte Vorerkennung filtert Rauschen vor LLM-Analyse
- Lokales LLM bewertet Severity ohne Daten an externe APIs zu senden
- Operator-Dashboard mit manuellen Reaktionsmöglichkeiten
- Cronjob-basierte zyklische Erfassung

## Ergebnis

Ein datenschutzkonformes Netzwerk-Monitoring, das die Lücke zwischen einfachem Router-Logging und teuren Enterprise-SIEM-Lösungen schließt. Die Integration eines lokalen LLMs ermöglicht intelligente
Analyse ohne Cloud-Abhängigkeit.

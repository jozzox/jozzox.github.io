---
layout: project
title: "Python Dev Workflows"
date: 2026-03-01
image: /assets/images/projects/python-dev-workflows.svg
tags: [Python, UV, PyQt6, macOS]
excerpt: "Standardisierte Entwicklungs-Workflows für Python-Projekte unter macOS mit UV als modernem Package Manager. Zwei dokumentierte Arbeitsweisen – Terminal-first und VS Code-first – mit PyQt6-Integration, reproduzierbaren Builds und Schnellstart-Templates."
---

## Python Dev Workflows Überblick

Standardisierte Entwicklungs-Workflows für Python-Projekte unter macOS mit **UV** als modernem Package Manager. Zwei dokumentierte Arbeitsweisen – Terminal-first und VS Code-first – mit PyQt6-Integration,
reproduzierbaren Builds und Schnellstart-Templates.

## Problem

Python-Projektsetups unter macOS sind fragmentiert: verschiedene Package Manager (pip, pipenv, poetry, conda), inkonsistente venv-Handhabung und fehlende Standardisierung zwischen Terminal- und IDE-Workflows
führen zu Reibungsverlusten und schwer reproduzierbaren Umgebungen.

## Lösung

Ein einheitlicher Workflow basierend auf UV (von Astral), der beide Arbeitsweisen abdeckt und als referenzierbares Cheat Sheet dokumentiert ist.

## Workflows

### Terminal-First

```markdown
uv init mein-projekt
cd mein-projekt
uv python pin 3.12
uv venv
source .venv/bin/activate
uv add pyqt6 qtpy
uv run main.py
```

### VS Code-First

```markdown
uv init mein-projekt
cd mein-projekt
uv python pin 3.12
uv venv
source .venv/bin/activate
uv add pyqt6 qtpy
# Cmd+Shift+P → "Python: Select Interpreter" → .venv
uv run hello.py
```

## Projektstruktur

```markdown
mein-projekt/
├── .python-version      # Python-Version (uv python pin)
├── .venv/               # Virtual Environment
├── pyproject.toml       # Dependencies & Projektconfig
├── uv.lock              # Reproduzierbare Builds
├── README.md
└── main.py
```

## Tech-Stack

- **Package Manager:** UV (Astral) – Drop-in Replacement für pip/poetry
- **Python:** 3.12 (gemanaged über UV)
- **GUI:** PyQt6 + qtpy (Abstraktionslayer)
- **IDE:** VS Code mit Python Extension + Auto-venv-Detection
- **OS:** macOS  mit Homebrew

## Features

- Ein-Befehl-Projektinitialisierung mit `uv init`
- Automatische Python-Versionsverwaltung (`uv python pin`)
- Reproduzierbare Builds via `uv.lock` (analog zu `package-lock.json`)
- `uv run` braucht keine aktivierte venv
- `uv sync` als Gegenstück zu `npm install`
- VS Code erkennt `.venv/` automatisch
- PyQt6-Integration für Desktop-GUI-Entwicklung

## Ergebnis

Ein dokumentierter, reproduzierbarer Python-Workflow, der die Geschwindigkeit von UV mit der Bequemlichkeit moderner IDE-Integration kombiniert.
Das Cheat Sheet dient als Referenz für alle zukünftigen Python-Projekte.

# jozzox.github.io

Portfolio-Website von **jozzox** — Branding, visuelle Identität und modernes Webdesign für Geschäftskunden.

🌐 **Live:** <https://jozzox.github.io>

---

## Über die Website

Diese Website ist ein Portfolio für Leistungen rund um visuelle Markenidentität und Webdesign:

- **Branding** — Logo, Styleguide, Corporate Design
- **Webdesign** — Moderne, konversionsorientierte Websites
- **Visuelle Identität** — Farben, Typographie, Bildsprache
- **Strategie** — Zielgruppenanalyse und Positionierung

---

## Technischer Stack

Die Website läuft auf [Jekyll](https://jekyllrb.com/) und wird über **GitHub Pages** gehostet.

- **Generator:** Jekyll (via `github-pages` Gem)
- **Sprache:** Deutsch (de_DE)
- **Styling:** Custom CSS (`assets/css/main.css`)
- **Kontaktformular:** [Formspree](https://formspree.io/)
- **Plugins:** jekyll-feed, jekyll-sitemap, jekyll-seo-tag

---

## Lokale Entwicklung

```bash
bundle install
bundle exec jekyll serve
```

Die Website ist dann unter `http://localhost:4000` erreichbar.

---

## Struktur

```
.
├── _includes/        # Wiederverwendbare HTML-Fragmente
├── _layouts/         # Seitenlayouts
├── _posts/           # Blog-Beiträge
├── _projects/        # Projektbeschreibungen
├── assets/           # CSS, JS, Bilder
└── _config.yml       # Jekyll-Konfiguration
```

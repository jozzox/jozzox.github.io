---
layout: page
title: "Kontakt"
description: "Nehmen Sie Kontakt auf — für Projekte, Anfragen und Zusammenarbeit."
permalink: /kontakt/
---

## Projekt anfragen

Haben Sie eine Idee oder ein konkretes Projekt? Ich freue mich auf Ihre Nachricht — ich melde mich in der Regel innerhalb von 24 Stunden.

<form action="https://formspree.io/f/YOUR_FORMSPREE_ID" method="POST" class="contact-form">
  <div class="form-group">
    <label for="name">Name</label>
    <input type="text" id="name" name="name" placeholder="Ihr Name" required>
  </div>
  <div class="form-group">
    <label for="email">E-Mail</label>
    <input type="email" id="email" name="email" placeholder="ihre@email.de" required>
  </div>
  <div class="form-group">
    <label for="subject">Betreff</label>
    <input type="text" id="subject" name="subject" placeholder="Worum geht es?">
  </div>
  <div class="form-group">
    <label for="message">Nachricht</label>
    <textarea id="message" name="message" rows="6" placeholder="Beschreiben Sie Ihr Projekt oder Ihre Frage…" required></textarea>
  </div>
  <!-- Honeypot anti-spam field — hidden from real users, caught by Formspree -->
  <input type="text" name="_gotcha" style="display:none" tabindex="-1" autocomplete="off">
  <button type="submit" class="btn btn--primary">Nachricht senden</button>
  <p class="contact-note">Mit dem Absenden stimmen Sie der Verarbeitung Ihrer Daten gemäß unserer <a href="/datenschutz/">Datenschutzerklärung</a> zu.</p>
</form>

---

> **Hinweis:** Ersetzen Sie `YOUR_FORMSPREE_ID` in der `kontakt.md` durch Ihre Formspree-Formular-ID.
> Kostenloses Konto unter [formspree.io](https://formspree.io) anlegen → Neues Formular erstellen → ID aus der Action-URL kopieren.
{: .contact-note }

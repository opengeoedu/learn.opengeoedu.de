---
title: 'Adding pages'
taxonomy:
    category:
        - docs
menu: 'Adding pages'
twitterenable: true
twittercardoptions: summary
orgaenabled: false
orga:
    ratingValue: 2.5
orgaratingenabled: false
personenabled: false
facebookenable: true
---
(to be translated soon)
## GRAV Grundlagen
Die Dateien in Pfad /user/pages/ bilden den Inhalt der Seiten.
Die Reihenfolge der Inhalte ist durch die Ordnerstruktur 01.OpenGeoEdu, 02.openx, usw… festgelegt. Die Zahlen und der . werden in den URLs entfernt.
```plaintext
├──03.Thema/
│   ├── chapter.md
│   ├── 01.lecture/
│   │   ├── chapter.md
│   │   ├── 01.Einleitung/
│   │   │   ├── docs.md
│   │   │   └── bild.*
│   │   └── 02.XYZ
│   ├── 02.uebung
│   │   └── docs.md
│   ├── 03.test
│   │   └── docs.md
├── 04.Thema
├── 05.Thema
│
```


## Frontmatter
Für jede markdown Seite **muss** eine Frontmatter angegeben werden.
Darin werden Titel der Seite, Menütitel und weitere Einstellungen vorgenommen.

```YAML
---
title: Seitentitel (Überschrift und Name im Browser/Suchergebnis)
menu: Seiten hinzufügen (optionaler Name der Seite im Navigationsmenü, falls Titel zu sperrig)
slug: URL-Name der Seite (optional, falls Titel zu sperrig)
taxonomy:
    category:
        - docs
---
```

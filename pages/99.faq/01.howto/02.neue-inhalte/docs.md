---
title: Neue Seiten erstellen
menu: Seiten hinzufügen
taxonomy:
    category:
        - docs
---
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

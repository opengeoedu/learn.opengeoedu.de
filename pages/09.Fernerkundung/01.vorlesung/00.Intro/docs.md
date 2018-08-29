---
title: 'Lernziele und Struktur der Lerneinheit'
taxonomy:
    category: docs
---

## Lernziele

Die Lerneinheit beinhaltet folgende Lernziele:
-	Kenntnisse über Fernerkundung 
-	Recherche und Download
	- Satellitendaten des Copernicus Programms, Copernicus Landdienst, BKG Open Data
-	Verarbeitung von Sentinel-2 Daten in der freien Software SNAP & QGIS
	-	Maskierung von FE-Daten anhand von Landbedeckungsdaten
	-	Berechnung spektraler Indizes – FE zum Vegetationsmonitoring
	-	Schwellenwertbasierte Klassifikation
	-	Quantifizierung von Schadensflächen
-	Erstellung einer dreidimensionalen Geländeansicht

![Verschneidung der Geodaten](VerschnS2Geodaten.png?classes=caption "Workflow im Fallbeispiel")

## Autor der Lerneinheit

...

## Struktur der Vorlesung

...


Die Landesfläche Deutschlands ist zu etwa einem Drittel mit Wald bedeckt. Die Ausdehnung der Wälder ist gut dokumentiert und lässt sich auch aus frei verfügbaren Daten mit hoher räumlicher Genauigkeit ableiten. Für die Erfassung des Waldzustands werden jedoch aktuellste Informationen benötigt, die in so großer Ausdehnung nicht in-situ erfasst werden können. Um großflächig die Gesundheit der Vegetation zu beobachten und nach Sturmereignissen oder Schädlingsbefall einen schnellen Überblick über betroffene Waldflächen zu erhalten, kommt daher die Fernerkundung zum Einsatz.

In dem ersten Fallbeispiel wird ein Sturmereignis vom August 2017 untersucht, bei dem es im Taunus (Hessen) zu größeren Sturmschäden im Wald kam. Dazu wird jeweils eine Sentinel-2-Szene von vor und nach dem Ereignis aufbereitet, analysiert und Vegetationsindizes für beide Zeitpunkte berechnet. Durch die Ermittlung der Differenzen zwischen den Indizes können die Schadensflächen identifiziert und auf Basis eines Schwellenwerts extrahiert werden. Anschließend erfolgt eine Verschneidung mit Landbedeckungsdaten, um das Ergebnis hinsichtlich der betroffenen Waldtypen zu quantifizieren. Abschließend werden die ermittelten Windwurfflächen in einer dreidimensionalen Geländeansicht visualisiert.


![Sentinel-2](Sentinel-2.jpg?classes=caption "Sentinel-2. Quelle: ESA")
<br><br>

Auf folgende grundlegende FE-Literatur sei verwiesen: 

-	Heipke, C. (2017): Photogrammetrie und Fernerkundung. Handbuch der Geodäsie, Springer Verlag.
-	Albertz, J. (2009): Einführung in die Fernerkundung. Grundlagen der Interpretation von Luft- und Satellitenbildern, 4th ed. Wissenschaftliche Buchgesellschaft.
-	Tutorial Fernerkundung: https://tu-dresden.de/bu/umwelt/geo/ipf/fern/studium/tutorial/tutorial-fernerkundung/tutorial-001

Englischsprachig:
-	Jensen, R. (2007): Remote sensing of the environment: an earth resource perspective, 2nd ed. Prentice Hall Inc., Upper Saddle, NJ.
- 	Lillesand, T.M., Kiefer, R.W., Chipman, J.W. (2008): Remote sensing and image interpretation, 6th ed. Wiley-Blackwell, John Wiley & Sons, Hoboken, NJ.
- 	Jones, H.G., Vaughn, R.A., 2010. Remote Sensing of Vegetation. Principles, techniques and applications. 1st ed. Oxford University Press Inc., New York.

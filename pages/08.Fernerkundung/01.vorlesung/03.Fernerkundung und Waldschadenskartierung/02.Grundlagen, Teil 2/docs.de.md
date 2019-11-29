---
title: 'Rasterbilder'
taxonomy:
    category:
        - docs
---


## Digitale Bilder

!	Unterschied zwischen Raster und Vektordaten: siehe Vorlesungsteile  [Flächenmonitoring](https://learn.opengeoedu.de/monitoring) und [GIS](https://learn.opengeoedu.de/gis).

!	Im FE-Lexikon (www.fe-lexikon.info) finden sich weitere Informationen zu [Vektor-](http://www.fe-lexikon.info/lexikon-v.htm#vektordaten) und [Rasterdaten](http://www.fe-lexikon.info/lexikon-r.htm#rasterbild).

Bei digitalen (multispektralen) RGB-Bildern, wie sie auch auf Monitoren und Displays dargestellt sind, repräsentiert jedes Pixel des einzelnen Kanals einen bestimmten Grauwert. Dieser ist quasi mit einem Helligkeitswert gleichzusetzen. Je höher der Signal-Input (z.B. reflektierte Strahlung) auf einen Sensor war, desto größer ist auch der Grauwert des resultierenden Bildes. Dementsprechend wird das Pixel heller dargestellt. Bei einer Aufnahme mit einer radiometrischen Auflösung von 8-bit können die Pixel 256 unterschiedliche Grauwerte annehmen: Minimum 0 = schwarz, Maximum 255 = weiß.

![GraustufenPixel](004.jpg?resize=500)

Dies ist wichtig für die Interpretation von bildgebenden Fernerkundungsdaten. Denn erst durch die Kombination der Grauwertbilder einzelner Sensorkanälen (Bänder) erhalten wir ein farbiges Bild. So werden Objekte differenzierbarer und bestimmte Merkmale (Features) können erkannt werden. Zwei Beispiele von Sentinel-2-Satelllitenszenen von Frankfurt am Main sind nachfolgend dargestellt. Im südlichen Teil ist der Stadtwald zu erkennen. Durch die hohe Rückstrahlung im nahen Infrarot erscheint die Vegetation rötlich, wenn der NIR-Kanal anstellte des roten Kanals gesetzt wird.

![GraustufenPixel](komposit.jpg?classes=caption "Durch das Setzen von Schwellenwerten kann man ein Graustufenbild einfärben. Das Beispiel zeigt ein NDVI aus einer Sentinel-2- Aufnahme um die Stadt Frankfurt. So lassen sich Vegetation von Wasser und bebauten Flächen bereits trennen.")

#### Color Slicing

Sogar ein einziges Grauwertbild lässt sich mittels Schwellenwertfestlegung farbig darstellen. Dazu wird das [Bildhistogramm](http://www.fe-lexikon.info/lexikon-h.htm#histogramm) bzw. die Grauwertverteilung der einzelnen Pixel in separate Gruppen unterteilt, die jeweils einer Farbe zugeordnet werden. So lassen sich bereits Objekte bzw. Landbedeckungsklassen voneinander trennen. Das nachstehende Beispiel zeigt die Einfärbung eines NIR-Kanals (Band 8) von Sentinel-2. Gewässer, Vegetation und versiegelte/bebaute Flächen können so bereits unterschieden werden. Dies ist eine einfache Art der Bildklassifizierung.

![ColorSlicing](Slices.jpg?classes=caption "Einfärbung eines NIR-Kanals (Band 8) von Sentinel-2. Gewässer, Vegetation und versiegelte/bebaute Flächen durch setzen von simplen Schwellenwerten.")


## Bildverbesserung

Es gibt zahlreiche Wege ein digitales Bild optisch so zu verändern/verbessern, um mehr erkennen zu können. Auch in der Fernerkundung kommen viele unterschiedliche Methoden zum Einsatz.
Ein wichtiger Schritt ist meist die Anpassung des Kontrasts, d.h. dem Unterschied zwischen den verschiedenen Grauwerten bzw. Pixelwerten.
Dabei handelt es sich meist eher um eine Darstellungsform, bei der die originalen Pixelwerte nicht verändert gespeichert werden.


## Bildinterpretation

Die Güte der Bildinterpretation hat viele Faktoren. Der grundlegendste ist die persönliche Erfahrung des Betrachters. Wir lernen Objekte voneinander zu unterscheiden etwa anhand von Größe, Form und Farbe. Das gilt für alltägliche Dinge wie einen Tisch oder Autos, aber auch für Personen. Dabei wird meist jeweils eine abgestufte Attributierung vorgenommen; d.h. von grober Einteilung (z.B. Tier/Säugetier) zu genaueren Klassen (z.B. Art: Hund, Rasse: Dalmatiner). Ändern wir unsere Perspektive, wird deutlich, dass man dies auch auf die Fernerkundung übertragen kann. Bei der optischen Interpretation von Luft- und Satellitenbildern etwa beruht vieles auf Erfahrungswerten. Allerdings stößt man schnell an die Grenzen des Machbaren, wenn es um die eindeutige Identifizierung von Objekten und Objektklassen geht.

![Erkennung](005.jpg?resize=500)

Landbedeckungs- und Landnutzungsklassen sind oft nur durch eine Verifizierung vor Ort voneinander abzugrenzen und zu identifizieren. Sorgfältig und statistisch sauber gesammelte Trainingsdaten und in-situ Referenzinformationen sind unabdingbar für eine sinnvolle und möglichst genaue Klassifizierung. Ein möglicher Schritt ist das Sammeln von Referenzdaten in Form von Spektraler Bibliotheken (z.B. [USGS Spectral Library](https://crustal.usgs.gov/speclab/QueryAll07a.php)). So kann eine Vielzahl an Messungen einer bestimmten Klasse (Vegetation, Mineral, etc.) eine gewisse Übertragbarkeit zulassen, ohne dass eine in-situ Aufnahme im aktuellen Untersuchungsgebiet notwendig sein muss.

![Interpretation](006.jpg?resize=650)

Die Interpretation und Klassifizierung hängt nicht nur von dem abgebildeten Farbraum ab, sondern auch von der räumlichen Auflösung. Diese definiert vereinfacht gesagt die kleinste mögliche Einheit, aus der sich Objekte zusammensetzen können, jeweils in Abhängigkeit vom (lokalen) Kontrast. Zwar gilt: je größer die Pixel, desto gröber ist eine mögliche Klassifizierung. Doch kommt es auf den Kontext und Intention an. Zu viel Information – sowohl spektral als auch räumlich – kann auch hinderlich für eine Ansprache bzw. Klassifizierung sein. So ist unter Umständen eine Unterscheidung von Baumkronen in einem Bild mit wenigen Zentimetern Auflösung schwieriger  als in einem Bild mit 1-2 m Auflösung.

![RäumlAufl](003b.jpg?resize=250)

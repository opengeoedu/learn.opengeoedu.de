---
title: 'Auflösungen'
taxonomy:
    category:
        - docs
---

## Auflösungen

! An dieser Stelle sei das "Lexikon der Fernerkundung" zum Nachschlagen erwähnt: [FE-Lexikon](http://www.fe-lexikon.info/lexikon-a.htm#aufloesung). Das Glossar bietet umfassende Informationen zur Fernerkundung im Allgemeinen und im Detail an, wie etwa über die unterschiedlichen Typen von Auflösungen.

### Räumliche Auflösung
!!! Die räumliche Auflösung beschreibt vor allem die Pixelgröße bzw. den Pixelabstand (im Bild oder am Objekt) und somit die Fähigkeit des Sensors zur Detailunterscheidung. Sie ist abhängig von der Art des Sensors, Größe des CCD-Arrays (charge-coupled device) und dem Blickwinkel. Einige wichtige Begriffe in der Fernerkundung und ihre Bedeutung sind:
- FOV = field of view, deutsch: Blickfeld, definiert die Schwadbreite
- IFOV = instantaneous field of view, definiert den Winkel der einzelnen Sensoren
- GIFOV = ground instantaneous field of view, ist das auf den Boden projizierte IFOV
- GSD = ground sample distance (aus GIFOV, Detektorgröße), definiert die resultierende Pixelgröße

![GIFOV & GSD](GIFOV_Jones&Vaughn_b.jpg?classes=caption "Wichtige Kenngrößen in der Fernerkundung. Quelle: Jones & Vaughn, 2010.")

Die Pixelgröße des finalen Bildprodukts ist somit abhängig vom Sensor und schwankt stark etwa zwischen 0,4 und 900 m. Für gängige freie Satelliten liegen sie bei 5 m (RapidEye), 30 m (Landsat 8) oder 250/500 m (MODIS). Sentinel-2 hat je nach Kanal räumliche Auflösungen von 10, 20 und 60 m. Die räumliche Bildauflösung ist neben dem Kontrast primär entscheidend für die Erkennung und Unterscheidung von Objekten.

![Pixelgröße](Räumliche_Auflösung.jpg?classes=caption "Unterschiedliche räumliche Auflösungen zum Vergleich.")

### Radiometrische Auflösung
!!! Die Radiometrische Auflösung gibt die Fähigkeit eines Sensors an, unterschiedliche Intensitäten innerhalb des jeweiligen Wellenlängenbereichs eines Kanals voneinander zu unterscheiden. Einfach gesagt handelt es sich dabei um den Kontrast eines Bildes, unter der Angabe der Anzahl an Graustufen - angegeben in Bit:
- 1 bit =  2<sup>1</sup> =   2 Graustufen
- 2 bit =  2<sup>2</sup> =   4 Graustufen
- 4 bit =  2<sup>4</sup> = 16 Graustufen
- 8 bit =  2<sup>8</sup> = 256 Graustufen

![Bitte ein Bit](bitt.jpg?classes=caption "Die Radiometrische Auflösung defniniert die Sensitivität des Sensors, sprich den Kontrast.")

### Spektrale Auflösung
!!!  Die spektrale (optische) Auflösung eines Sensors gibt an, welche Bereiche des elektromagnetischen Spektrums wie erfasst werden können. Die spektrale Auflösung ist somit der abgedeckte Wellenlängenbereich bezogen auf die Anzahl der Spektralbänder und ist mit der Bandbreite verknüpft, welche durch den Full Width Half Mean-Wert (FWHM) beschrieben wird. Dieser gibt die Wellenlängenbreite an, die ein Kanal bei 50 % der maximalen Durchlässigkeit des Spektralbandes umfasst. Sie wird manchmal mit dem spektralen Sampling Interval verwechselt, was jedoch die Schritte zwischen den einzelnen Bändern definiert.

Nachfolgende Abbildung ziegt die Position der 13 Sentinel-2 Kanäle innerhalb des elektromagnetischen Spektrums. Beispie ist eine typische Relfektanzkurve von grüner Vegetation dargestellt.

![Spektralkurve & Sentinel-2-Kanäle](Sentinel-2_bands_vegref.jpg?classes=caption "Position der Sentinel-2-Bänder am Beispiel einer typischen Reflektanzkurve grüner Vegetation. Kurve: Buchenkrone, Sensor: AISA Eagle/Hawk, nach Aberle, 2017.")

### Temporale Auflösung
!!! Mit der temporalen bzw. zeitliche Auflösung wird schließlich die Zeitspanne angegeben, die zwischen zwei Überflügen (Aufnahmen) desselben Objekts liegt. Die zeitliche Auflösung ist besonders wichtig im Zusammenhang von operationellem Monitoring und Zeitreihenanalysen.

So hat Sentinel-2 z.B. eine Wiederholungsrate am Äquator von 5 Tagen, bei Landsat 8 sind es 16 Tage, bei RapidEye ebenfalls 5 Tage. Durch größere Überlappungen der Aufnahmestreifen kann bei Sentinel-2 in höheren Breiten wie in Deutschland soagar alle 2-3 Tage ein Bild desselben Ortes zustande kommen.

![Tempus fugit](temp_Aufl.jpg)

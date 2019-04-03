---
title: 'Fernerkundungsgrundlagen'
taxonomy:
    category:
        - docs
---

## Sensortypen

Grundsätzlich lassen sich Fernerkundungssensoren in zwei Gruppen einteilen:
1. _Aktive Sensoren_ senden elektromagnetische Strahlung aktiv aus und nehmen die von der Erdoberfläche zurückkommenden Signale wieder auf. Hierzu gehören etwa Lidar-Systeme (Light detection and ranging), die mit Laserstrahlen die Oberfläche abtasten, und Radar-Systeme (Radio direction and ranging), die Radiowellen abgeben und aufnehmen. Beispiele sind Satelliten wie [TerraSAR-X](https://www.dlr.de/dlr/desktopdefault.aspx/tabid-10377/565_read-436/#/gallery/350) und [Sentinel-1](https://www.d-copernicus.de/daten/daten-sentinels/).
2. _Passive Sensoren_ dagegen erzeugen keine eigene Strahlung, die sie dann wieder empfangen könnten, sondern nehmen die reflektierte Strahlung anderer Quellen wie der Sonne auf. Zu diesen zählen z.B. die Satelliten der [Landsat-Serie](https://landsat.usgs.gov/landsat-missions-timeline), [RapidEye](https://www.satimagingcorp.com/satellite-sensors/other-satellite-sensors/rapideye/), [Sentinel-2](https://www.d-copernicus.de/daten/daten-sentinels/) und die geplante hyperspektrale [EnMAP](http://www.enmap.org/)-Mission. Des Weiteren gibt es passive Sensoren wie Landsat 8, die auch im langwelligeren thermalen Infrarot arbeiten und die von der Erde emittierte Wärmestrahlung aufnehmen können.

![aktiv_passiv](Aktiv_passiv.png?resize=600)
<br><br>

Bei den passiven optischen Sensoren, gibt es eine Reihe an unterschiedlichen Systemen. Sie unterscheiden sich z.B. in der Anzahl der Kanäle, mit denen verschiedene Wellenlängenbereiche des elektromagnetischen Spektrums wahrgenommen werden können. Unsere Augen sind im Grunde auch passive Fernerkundungssensoren, die das sichtbare Licht von etwa 400-700 nm wahrnehmen - also nur einen kleinen Teil des gesamten Spektrums. Kurzwelligere oder langwelligere Strahlung können wir nur mit Hilfe von speziellen Kameras und Sensoren wahrnehmen. So wird quasi sichtbar gemacht, was für uns unsichtbar ist.

## Erdatmosphäre

Entscheidend für die Funktionsweise von Satelliten ist die atmosphärische Durchlässigkeit bzw. die sogenannten atmosphärischen Fenster. Die Erdatmosphäre blockiert einen Großteil der Sonnenstrahlung und lässt nur bestimmte Strahlung ungehindert bzw. abgeschwächt durch. Durch _Absorption_ (Englisch: absorption) wird die Energie der elektromagnetischen Strahlung abgeschwächt oder so stark blockiert, dass auf der Erdoberfläche nichts mehr davon ankommt. _Streuung_ (Englisch: scattering) hingegen beschreibt das Ablenken der Strahlung in eine andere Richtung ohne Absorbtion. Die Prozesse von Absorption und Streuung sind wellenlängenabhängig, wobei kurzwelligere Strahlung stärker gestreut wird:

- Die _Mie-Streuung_ tritt eher im sichtbaren Spektralbereich auf und wird in erster Linie durch größere Moleküle wie Wasser und Aerosole verursacht. Dabei entspricht deren Größe der jeweiligen Wellenlänge.
- Die _Rayleigh-Streuung_ wird von Molekülen verursacht, die kleiner sind als die Wellenlänge der jeweiligen Strahlung, und tritt vor allem im kurzwelligen Bereich auf wie ultraviolette Strahlung und in blauem Licht. Verantwortlich sind in erster Linie Sauerstoff, Kohlendioxid und Stickstoff. Die Rayleigh-Streuung ist u.a. dafür verantwortlich, dass der Himmel tagsüber blau erscheint und in der Dämmerung rötlich.

Im Gegensatz zu diesen sogenannten selektiven Streuungsvorgänge ist die nicht-selektive Streuung unabhängig von der Wellenlänge. Ein Beispiel ist etwa Dunst (Englisch: haze), der das sichtbare Licht gleichermäßig streut, oder Wolken, die uns weiß erscheinen.

![Elektromegnetisches Spektrum](Albertz_EMS_Atmosphaere.jpg?classes=caption "Das elektromagnetische Spektrum. Das menschliche Auge kann nur den sichtbaren Bereich von etwa 0,4-0,7 µm (400-700 nm) wahrnehmen. Quelle Abb. rechts: Albertz, 2001.")
<br><br>

Die Eigenschaften der Erdatmosphäre wirken sich besonders auf die optische Fernerkundung aus. Als weitaus kritischer sind Wolken zu sehen. Als Teil der Erdbeobachtung wird für die Landüberwachung ein weitestgehend wolkenfreier Himmel benötigt. Wolken und -schatten erschweren allerdings oft operationelle Anwendungen, besonders in tropischen Regionen aber auch in unseren Breiten. Die nachfolgende Abbildung zeigt beispielhaft unterschiedliche Grade an Wolkenbedeckung. Relativ unabhängig von der Atmosphäre sind dagegen etwa Radar-Sensoren. Sie erlauben jederzeit Aufnahmen, auch nachts und durch eine Wolkendecke hindurch.

![Wolkenbedeckung](Wolkenbedeckung.jpg?classes=caption "Beispiele unterschiedlicher Bewölkungsgrade von 0, 40 und >80 %. In dem  Bildauschnitt zu sehen sind Teile des Rhein-Main-Gebietes samt Taunus, aufgenommen im Mai 2018. (c) ESA")
<br><br>

## Auflösungen

! An dieser Stelle sei das "Lexikon der Fernerkundung" zum Nachschlagen erwähnt: [FE-Lexikon](http://www.fe-lexikon.info/lexikon-a.htm#aufloesung). Das Glossar bietet umfassende Informationen zur Fernerkundung im Allgemeinen und im Detail an, wie etwa über die unterschiedlichen Typen von Auflösungen.

### Räumliche Auflösung
!!! Die räumliche Auflösung beschreibt vor allem die Pixelgröße bzw. den Pixelabstand (im Bild oder am Objekt) und somit die Fähigkeit des Sensors zur Detailunterscheidung. Sie ist abhängig von der Art des Sensors, Größe des CCD-Arrays (charge-coupled device) und dem Blickwinkel. Einige wichtige Begriffe in der Fernerkundung und ihre Bedeutung sind:
- FOV = field of view, deutsch: Blickfeld, definiert die Schwadbreite
- IFOV = instantaneous field of view, definiert den Winkel der einzelnen Sensoren
- GIFOV = ground instantaneous field of view, ist das auf den Boden projizierte IFOV
- GSD = ground sample distance (aus GIFOV, Detektorgröße), definiert die resultierende Pixelgröße

![GIFOV & GSD](GIFOV_Jones&Vaughn_b.jpg?classes=caption "Wichtige Kenngrößen in der Fernerkundung. Quelle: Jones & Vaughn, 2010.")

Die Pixelgröße des finalen Bildprodukts ist somit abhängig vom Sensor und schwankt stark etwa zwischen 0,4 und 900 m. Für gängige freie Satelliten liegen sie bei 5 m (RapidEye), 30 m (Landsat 8) oder 250/500 m (MODIS). Sentinel-2 hat je nach Kanal räumliche Auflösungen von 10, 20 und 60 m.

![Pixelgröße](Räumliche_Auflösung.jpg?classes=caption "Unterschiedliche räumliche Auflösungen zum Vergleich.")

### Radiometrische Auflösung
!!! Die Radiometrische Auflösung gibt die Fähigkeit eines Sensors an, unterschiedliche Intensitäten innerhalb des jeweiligen Wellenlängenbereichs eines Kanals voneinander zu unterscheiden. Einfach gesagt handelt es sich dabei um den Kontrast eines Bildes, unter der Angabe der Anzahl an Graustufen - angegeben in Bit:
- 1 bit =  2<sup>1</sup> =   2 Graustufen
- 2 bit =  2<sup>2</sup> =   4 Graustufen
- 4 bit =  2<sup>4</sup> = 16 Graustufen
- 8 bit =  2<sup>8</sup> = 256 Graustufen

Die räumliche Bildauflösung ist neben dem Kontrast primär entscheidend für die Erkennung und Unterscheidung von Objekten.

### Spektrale Auflösung
!!!  Die spektrale (optische) Auflösung eines Sensors gibt an, welche Bereiche des elektromagnetischen Spektrums wie erfasst werden können. Die spektrale Auflösung ist somit der abgedeckte Wellenlängenbereich bezogen auf die Anzahl der Spektralbänder und ist mit der Bandbreite verknüpft, welche durch den Full Width Half Mean-Wert (FWHM) beschrieben wird. Dieser gibt die Wellenlängenbreite an, die ein Kanal bei 50 % der maximalen Durchlässigkeit des Spektralbandes umfasst. Sie wird manchmal mit dem spektralen Sampling Interval verwechselt, was jedoch die Schritte zwischen den einzelnen Bändern definiert.

![Spektralkurve & Sentinel-2-Kanäle](Sentinel-2_bands_vegref.jpg?classes=caption "Position der Sentinel-2-Bänder am Beispiel einer typischen Reflektanzkurve grüner Vegetation. Kurve: Buchenkrone, Sensor: AISA Eagle/Hawk, nach Aberle, 2017.")

### Temporale Auflösung
!!! Mit der temporalen bzw. zeitliche Auflösung wird schließlich die Zeitspanne angegeben, die zwischen zwei Überflügen (Aufnahmen) desselben Objekts liegt. Die zeitliche Auflösung ist besonders wichtig im Zusammenhang von operationellem Monitoring und Zeitreihenanalysen.

So hat Sentinel-2 z.B. eine Wiederholungsrate am Äquator von 5 Tagen, bei Landsat 8 sind es 16 Tage, bei RapidEye ebenfalls 5 Tage. Durch größere Überlappungen der Aufnahmestreifen kann in höheren Breiten wie in Deutschland soagar alle 2-3 Tage ein Sentinel-2-Bild desselben Ortes zustande kommen. 

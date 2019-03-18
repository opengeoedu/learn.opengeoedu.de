---
title: 'Fernerkundungsgrundlagen'
taxonomy:
    category:
        - docs
---

## Sensortypen

Grundsätzlich lassen sich Fernerkundungssensoren in zwei Gruppen einteilen:
1. Aktive Sensoren senden elektromagnetische Strahlung aktiv aus und nehmen die von der Erdoberfläche zurückkommenden Signale wieder auf. Hierzu gehören etwa Lidar-Systeme (Light detection and ranging), die mit Laserstrahlen die Oberfläche abtasten, und Radar (Radio direction and ranging), die Radiowellen abgeben und aufnehmen. Hierzu gehören Satelliten wie [TerraSAR-X](https://www.dlr.de/dlr/desktopdefault.aspx/tabid-10377/565_read-436/#/gallery/350) und [Sentinel-1](https://www.d-copernicus.de/daten/daten-sentinels/).
2. Passive Sensoren dagegen erzeugen keine eigene Strahlung, die sie dann wieder empfangen könnten, sondern nehmen die reflektierte Strahlung anderer Quellen wie der Sonne auf. Zu diesen zählen z.B. die Satelliten der [Landsat-Serie](https://landsat.usgs.gov/landsat-missions-timeline), [RapidEye](https://www.satimagingcorp.com/satellite-sensors/other-satellite-sensors/rapideye/), [Sentinel-2](https://www.d-copernicus.de/daten/daten-sentinels/) und die geplante hyperspektrale [EnMAP](http://www.enmap.org/)-Mission. Des Weiteren gibt es passive Sensoren wie Landsat 8, die auch im langwelligeren thermalen Infrarot arbeiten und die von der Erde emittierte Wärmestrahlung aufnehmen können.

![aktiv_passiv](Aktiv_passiv.png?resize=300)
<br><br>

Bei den passiven optischen Sensoren, gibt es eine Reihe an unterschiedlichen Systemen. Sie unterscheiden sich z.B. in der Anzahl der Kanäle, mit denen verschiedene Wellenlängenbereiche des elektromagnetischen Spektrums wahrgenommen werden können. Unsere Augen sind im Grunde auch passive Fernerkundungssensoren, die das sichtbare Licht von etwa 400-700 nm wahrnehmen - also nur einen kleinen Teil des gesamten Spektrums. Kurzwelligere oder langwelligere Strahlung können wir nur mit Hilfe von speziellen Kameras und Sensoren wahrnehmen. So wird quasi sichtbar gemacht, was für uns unsichtbar ist.

## Erdatmosphäre

Entscheidend für die Funktionsweise von Satelliten ist die atmosphärische Durchlässigkeit bzw. die sogenannten atmosphärischen Fenster. Die Erdatmosphäre blockiert einen Großteil der Sonnenstrahlung und lässt nur bestimmte Strahlung ungehindert bzw. abgeschwächt durch. Durch Absorption (Englisch: absorption) wird die Energie der elektromagnetischen Strahlung abgeschwächt oder so stark blockiert, dass auf der Erdoberfläche nichts mehr davon ankommt. Streuung (Englisch: scattering) hingegen beschreibt das Ablenken der Strahlung in eine andere Richtung ohne Absorbtion. Die Prozesse von Absorption und Streuung sind wellenlängen-abhängig, wobei kurzwelligere Strahlung stärker gestreut wird:

- Die Mie-Streuung tritt eher im sichtbaren Spektralbereich auf und wird in erster Linie durch größere Moleküle wie Wasser und Aerosole verursacht. Dabei entspricht deren Größe der jeweiligen Wellenlänge.
- Die Rayleigh-Streuung wird von Molekülen verursacht, die kleiner sind als die Wellenlänge der jeweiligen Strahlung, und tritt vor allem in kurzwelligen Bereich auf wie ultraviolette Strahlung und in blauem Licht. Verantwortlich sind in erster Linie Sauerstoff, Kohlendioxid und Stickstoff. Die Rayleigh-Streuung ist u.a. dafür verantwortlich, dass der Himmel tagsüber blau erscheint und in der Dämmerung rötlich.

Im Gegensatz zu diesen sogenannten selektiven Streuungsvorgänge ist die nicht-selektive Streuung unabhängig von der Wellenlänge. Ein Beispiel ist etwa Dunst (Englisch: haze), der das sichtbare Licht gleichermäßig streut, oder Wolken, die uns weiß erscheinen.

![Elektromegnetisches Spektrum](Albertz_EMS_Atmosphaere.jpg?classes=caption "Das Elektromagnetische Spektrum. Das menschliche Auge kann nur den sichtbaren Bereich von etwa 0,4-0,7 µm (400-700 nm) wahrnehmen. Quelle Abb. rechts: Albertz, 2001.")
<br><br>

Die Eigenschaften der Erdatmosphäre wirken sich besonders auf die optische Fernerkundung aus. Ein weitaus kritischer sind Wolken zu sehen. Als Teil der Erdbeobachtung wird für die Landüberwachung ein weitestgehend wolkenfreier Himmel benötigt. Wolken und -schatten erschweren allerdings oft operationelle Anwendungen, besonders in tropischen Regionen aber auch in unseren Breiten. Die nachfolgende Abbildung zeigt beispielhaft unterschiedliche Grade an Wolkenbedeckung. Relativ unabhängig von der Atmosphäre sind dagegen etwa Radar-Sensoren. Sie erlauben jederzeit Aufnahmen, auch nachts und durch eine Wolkendecke hindurch.

![Wolkenbedeckung](Wolkenbedeckung.jpg?classes=caption "Beispiele unterschiedlicher Bewölkungsgrade von 0, 40 und >80 %. In dem  Bildauschnitt zu sehen sind Teile des Rhein-Main-Gebietes samt Taunus, aufgenommen im Mai 2018. (c) ESA")
<br><br>

## Auflösungen

! An dieser Stelle sei das "Lexikon der Fernerkundung" erwähnt: [FE-Lexikon](http://www.fe-lexikon.info/lexikon-a.htm#aufloesung). Das Glossar bietet umfassende Informationen zur Fernerkundung im Allgemeinen und im Detail an, wie etwa über die unterschiedlichen Typen von Auflösungen.

### Räumliche Auflösung
!!! Die räumliche Auflösung beschreibt vor allem die Pixelgröße bzw. den Pixelabstand (im Bild oder am Objekt). Es ist abhängig von der Art des Sensors. Fähigkeit, Größe des CCD-Arrays (charge-coupled device) und dem Blickwinkel. Einige wichtige Begriffe in der Fernerkundung und ihre Bedeutung sind:
- FOV = field of view, deutsch: Blickfeld, definiert die Schwadbreite
- IFOV = instantaneous field of view, definiert den Winkel der einzelnen Sensoren
- GIFOV = ground instantaneous field of view, ist das auf den Boden projizierte IFOV
- GSD = ground sample distance (aus GIFOV, Detektorgröße), definiert die resultierende Pixelgröße

insert ABBILDUNG aus Jones&Vaughn ???

Die Pixelgröße des finalen Bildprodukts ist somit abhängig vom Sensor und schwankt stark etwa zwischen 0,4 und 900 m. Für gängige freie Satelliten liegen sie bei 5 m (RapidEye), 30 m (Landsat 8) oder 250/500 m (MODIS). Sentinel-2 hat je nach Kanal räumliche Auflösungen von 10, 20 und 60 m.

insert ABBILDUNG Pixels

### Radiometrische Auflösung
!!! Die Radiometrische Auflösung gibt die Fähigkeit eines Sensors an, unterschiedliche Intensitäten innerhalb des jeweiligen Wellenlängenbereichs eines Kanals voneinander zu unterscheiden. Einfach gesagt handelt es sich dabei um den Kontrast eines Bildes, unter der Angabe der Anzahl an Graustufen - angegeben in Bit:
- 1 bit =  2<sup>1</sup> =   2 Graustufen
- 2 bit =  2<sup>2</sup> =   4 Graustufen
- 4 bit =  2<sup>4</sup> = 16 Graustufen
- 8 bit =  2<sup>8</sup> = 256 Graustufen

Die räumliche Bildauflösung ist neben dem Kontrast primär entscheidend für die Erkennung und Unterscheidung von Objekten.

### Spektrale Auflösung
!!!  Die spektrale (optische) Auflösung eines Sensors gibt an, welche Bereiche des elektromagnischen Spektrums wie erfasst werden können. Die spektrale Auflösung ist somit der abgedeckte Wellenlängenbereich bezogen auf die Anzahl der Spektralbänder und ist mit der Bandbreite verknüpft, welche durch den Full Width Half Mean-Wert (FWHM) beschrieben wird. Dieser gibt die Wellenlängenbreite an, die ein Kanal bei 50 % der maximalen Durchlässigkeit des Spektralbandes umfasst. Sie wird manchmal mit dem spektralen Sampling Interval verwechselt, was jedoch die Schritte zwischen den einzelnen Bändern definiert.

insert ABBILDUNG Reflektanzkurve

### Temporale Auflösung
Mit der temporalen bzw. zeitliche Auflösung wird schließlich die Zeitspanne angegeben, die zwischen zwei Überflügen (Aufnahmen) desselben Objekts liegt. So hat Sentinel-2 z.B. eine Wiederholungsrate am Äquator von 5 Tagen, bei Landsat 8 sind es 16 Tage, bei RapidEye ebenfalls 5 Tage. Die zeitliche Auflösung ist besonders wichtig im Zusammenhang von operationellem Monitoring und Zeitreihenanalysen.

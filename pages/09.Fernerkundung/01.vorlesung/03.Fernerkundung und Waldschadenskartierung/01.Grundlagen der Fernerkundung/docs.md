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

![aktiv_passiv](Aktiv_passiv.png)
<br><br>

Bei den passiven optischen Sensoren, gibt es eine Reihe an unterschiedlichen Systemen. Sie unterscheiden sich z.B. in der Anzahl der Kanäle, mit denen verschiedene Wellenlängenbereiche des elektromagnetischen Spektrums wahrgenommen werden können. Unsere Augen sind im Grunde auch passive Fernerkundungssensoren, die das sichtbare Licht von etwa 400-700 nm wahrnehmen - also nur einen kleinen Teil des gesamten Spektrums. Kurzwelligere oder langwelligere Strahlung können wir nur mit Hilfe von speziellen Kameras und Sensoren wahrnehmen. So wird quasi sichtbar gemacht, was für uns unsichtbar ist.

## Atmosphäre

Entscheidend für die Funktionsweise von Satelliten ist die Atmosphärische Durchlässigkeit bzw. die Atmosphärischen Fenster. Die Erdatmosphäre blockiert einen Großteil der Sonnenstrahlung und lässt nur bestimmte Strahlung ungehindert bzw. abgeschwächt durch. Durch Absorption (Englisch: absorption) wird die Energie der elektromagnetischen Strahlung abgeschwächt oder so stark blockiert, dass auf der Erdoberfläche nichts mehr davon ankommt. Streuung (Englisch: scattering) hingegen beschreibt das Ablenken der Strahlung in eine andere Richtung ohne Absorbtion. Die Prozesse von Absorption und Streuung sind wellenlängen-abhängig, wobei kurzwelligere Strahlung stärker gestreut wird:

- Die Mie-Streuung tritt eher im sichtbaren Spektralbereich auf und wird in erster Linie durch größere Moleküle wie Wasser und Aerosole verursacht. Dabei entspricht deren Größe der jeweiligen Wellenlänge.
- Die Rayleigh-Streuung wird von Molekülen verursacht, die kleiner sind als die Wellenlänge der jeweiligen Strahlung, und tritt vor allem in kurzwelligen Bereich auf wie ultraviolette Strahlung und in blauem Licht. Verantwortlich sind in erster Linie Sauerstoff, Kohlendioxid und Stickstoff. Die Rayleigh-Streuung ist u.a. dafür verantwortlich, dass der Himmel tagsüber blau erscheint und in der Dämmerung rötlich.

Im Gegensatz zu diesen sogenannten selektiven Streuungsvorgänge ist die nicht-selektive Streuung unabhängig von der Wellenlänge. Ein Beispiel ist etwa Dunst (Englisch: haze), der das sichtbare Licht gleichermäßig streut, oder Wolken, die uns weiß erscheinen.

![Elektromegnetisches Spektrum](Albertz_EMS_Atmosphaere.jpg?classes=caption "Das Elektromagnetische Spektrum. Das menschliche Auge kann nur den sichtbaren Bereich von etwa 0,4-0,7 µm (400-700 nm) wahrnehmen. Quelle Abb. rechts: Albertz, 2001.")
<br><br>

Die Eigenschaften der Erdatmosphäre wirken sich besonders auf die optische Fernerkundung aus. Ein weitaus kritischer sind Wolken zu sehen. Als Teil der Erdbeobachtung wird für die Landüberwachung ein weitestgehend wolkenfreier Himmel benötigt. Wolken und -schatten erschweren allerdings oft operationelle Anwendungen, besonders in tropischen Regionen aber auch in unseren Breiten. Die nachfolgende Abbildung zeigt beispielhaft unterschiedliche Grade an Wolkenbedeckung. Relativ unabhängig von der Atmosphäre sind dagegen etwa Radar-Sensoren. Sie erlauben jederzeit Aufnahmen, auch nachts und durch eine Wolkendecke hindurch.

![Wolkenbedeckung](Wolkenbedeckung.jpg?classes=caption "Beispiele unterschiedlicher Bewölkungsgrade von 0, 40 und >80 %. In dem  Bildauschnitt zu sehen sind Teile des Rhein-Main-Gebietes samt Taunus, aufgenommen im Mai 2018. (c) ESA")
<br><br>

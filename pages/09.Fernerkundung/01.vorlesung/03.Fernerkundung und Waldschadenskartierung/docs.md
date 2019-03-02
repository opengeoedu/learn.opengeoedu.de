---
title: 'Fernerkundung+Waldmonitoring'
taxonomy:
    category:
        - docs
---
Im Folgenden erfolgt eine kurze Einführung in die Fernerkundung und das Erd- bzw. Waldmonitoring.

!!! Laut DIN 18716/3 versteht man unter Fernerkundung die Gesamtheit der Verfahren zur Gewinnung von Informationen über die Erdoberfläche durch Messung und Interpretation der von ihr ausgehenden (Energie-)Felder. Als Informationsträger dient dabei die von der Erde reflektierte oder emittierte elektromagnetische Strahlung.

Fernerkundung (Englisch: remote sensing) ist somit das berührungsfreie Messen und Sammeln von Informationen mittels Sensoren über eine Distanz. Die Erdbeobachtung (Englisch: Earth observation) durch Fernerkundung wird bereits seit Jahrzehnten betrieben, und die Zahl an flugzeuggetragenen Systemen und Satelliten nimmt stetig zu (Belward & Skøien 2015; Boyd & Danson 2005; Landgrebe 1997). Dabei wurden immer neue und leistungsstärkere Sensoren und Auswertungsmöglichkeiten entwickelt.

Anwendungsbeispiele der Fernerkundung:
- Auswirkungen des Klimawandels und Maßnahmen zur Minderung
- Änderungen in der Landbedeckung/-nutzung
- Wasserqualität und -verfügbarkeit
- Biodiversität und Ökosystemdienstleistungen
- Exploration natürlicher Ressourcen
- Gefahren- und Risikobewertung

Grundsätzlich lassen sich Fernerkundungssensoren in zwei Gruppen einteilen:
1. Aktive Sensoren senden elektromagnetische Strahlung aktiv aus und nehmen die von der Erdoberfläche zurückkommenden Signale wieder auf. Hierzu gehören etwa Lidar-Systeme (Light detection and ranging), die mit Laserstrahlen die Oberfläche abtasten, und Radar (Radio direction and ranging), die Radiowellen abgeben und aufnehmen. Hierzu gehören Satelliten wie [TerraSAR-X](https://www.dlr.de/dlr/desktopdefault.aspx/tabid-10377/565_read-436/#/gallery/350) und [Sentinel-1](https://www.d-copernicus.de/daten/daten-sentinels/).
2. Passive Sensoren dagegen erzeugen keine eigene Strahlung, die sie dann wieder empfangen könnten, sondern nehmen die reflektierte Strahlung anderer Quellen wie der Sonne auf. Zu diesen zählen z.B. die Satelliten der [Landsat-Serie](https://landsat.usgs.gov/landsat-missions-timeline), [RapidEye](https://www.satimagingcorp.com/satellite-sensors/other-satellite-sensors/rapideye/), [Sentinel-2](https://www.d-copernicus.de/daten/daten-sentinels/) und die geplante hyperspektrale [EnMAP](http://www.enmap.org/)-Mission. Des Weiteren gibt es passive Sensoren wie Landsat 8, die auch im langwelligeren thermalen Infrarot arbeiten und die von der Erde emittierte Wärmestrahlung aufnehmen können.

![aktiv_passiv](Aktiv_passiv.png)
<br><br>

Bei den passiven optischen Sensoren, gibt es eine Reihe an unterschiedlichen Systemen. Sie unterscheiden sich z.B. in der Anzahl der Kanäle, mit denen verschiedene Wellenlängenbereiche des elektromagnetischen Spektrums wahrgenommen werden können. Unsere Augen sind im Grunde auch passive Fernerkundungssensoren, die das sichtbare Licht von etwa 400-700 nm wahrnehmen - also nur einen kleinen Teil des gesamten Spektrums. Kurzwelligere oder langwelligere Strahlung können wir nur mit Hilfe von speziellen Kameras und Sensoren wahrnehmen. So wird quasi sichtbar gemacht, was für uns unsichtbar ist.

Entscheidend für die Funktionsweise von Satelliten ist die Atmosphärische Durchlässigkeit bzw. die Atmosphärischen Fenster. Die Erdatmosphäre blockiert einen Großteil der Sonnenstrahlung und lässt nur bestimmte Strahlung ungehindert bzw. abgeschwächt durch. Durch Absorption (Englisch: absorption) wird die Energie der elektromagnetischen Strahlung abgeschwächt oder so stark blockiert, dass auf der Erdoberfläche nichts mehr davon ankommt. Streuung (Englisch: scattering) hingegen beschreibt das Ablenken der Strahlung in eine andere Richtung ohne Absorbtion. Die Prozesse von Absorption und Streuung sind wellenlängen-abhängig, wobei kurzwelligere Strahlung stärker gestreut wird:

- Die Mie-Streuung tritt eher im sichtbaren Spektralbereich auf und wird in erster Linie durch größere Moleküle wie Wasser und Aerosole verursacht. Dabei entspricht deren Größe der jeweiligen Wellenlänge.
- Die Rayleigh-Streuung wird von Molekülen verursacht, die kleiner sind als die Wellenlänge der jeweiligen Strahlung, und tritt vor allem in kurzwelligen Bereich auf wie ultraviolette Strahlung und in blauem Licht. Verantwortlich sind in erster Linie Sauerstoff, Kohlendioxid und Stickstoff. Die Rayleigh-Streuung ist u.a. dafür verantwortlich, dass der Himmel tagsüber blau erscheint und in der Dämmerung rötlich.

Im Gegensatz zu diesen sogenannten selektiven Streuungsvorgänge ist die nicht-selektive Streuung unabhängig von der Wellenlänge. Ein Beispiel ist etwa Dunst (Englisch: haze), der das sichtbare Licht gleichermäßig streut, oder Wolken, die uns weiß erscheinen.

![Elektromegnetisches Spektrum](Albertz_EMS_Atmosphaere.jpg?classes=caption "Das Elektromagnetische Spektrum. Das menschliche Auge kann nur den sichtbaren Bereich von etwa 0,4-0,7 µm (400-700 nm) wahrnehmen. Quelle Abb. rechts: Albertz, 2001.")
<br><br>

Die Eigenschaften der Erdatmosphäre wirken sich besonders auf die optische Fernerkundung aus. Ein weitaus kritischer sind Wolken zu sehen. Als Teil der Erdbeobachtung wird für die Landüberwachung ein weitestgehend wolkenfreier Himmel benötigt. Wolken und -schatten erschweren allerdings oft operationelle Anwendungen, besonders in tropischen Regionen aber auch in unseren Breiten. Die nachfolgende Abbildung zeigt beispielhaft unterschiedliche Grade an Wolkenbedeckung. Relativ unabhängig von der Atmosphäre sind dagegen etwa Radar-Sensoren. Sie erlauben jederzeit Aufnahmen, auch nachts und durch eine Wolkendecke hindurch.

![Wolkenbedeckung](WOLKEN.jpg?classes=caption "Beispiele unterschiedlicher Beweölkungsgrade von 25, 45 und 85 %. In dem  Bildauschnitt zu sehen sind Teile des Rhein-Main-Gebietes samt Taunus, aufgenommen im Mai 2018. (c) ESA")
<br><br>

Eine zentrale Komponente bei der Überwachung der Landbedeckung spielt die Vegetation, wobei das Waldmonitoring eine spezielle Form darstellt. Für die Ansprache von Vegetation ist der sichtbare spektrale Bereich ebenso wichtig wie das nahe und kurzwellige Infrarot. Vor allem im roten und blauen Licht wird ein Großteil durch Blattpigmente und Chlorophyll absorbiert. Im NIR dagegen reflektieren gesunde Pflanzen stark (s. Vorlesungsteil Vegetationsmonitoring). Die charakteristischen Reflexionseigenschaften von Vegetation kann man sich beim Waldmonitoring zu nutzen mach. Um räumlich genaue Informationen über Waldgebiete zu erhalten, wird das terrestrische Waldmonitoring durch die Fernerkundung erweitert und unterstützt (Ackermann et al., 2014; Fagan and Defries, 2009; Pause et al., 2016; Romijn et al., 2015). Dies gilt besonders immer dann, wenn für die Erfassung des Waldzustandes aktuellste Informationen benötigt werden, die in so großer Ausdehnung nicht in-situ erfasst werden können (Lausch et al., 2016).

Die Landesfläche Deutschlands ist zu etwa 30 % mit Wald bedeckt. Die Ausdehnung der Wälder ist gut dokumentiert und lässt sich auch aus frei verfügbaren Daten mit hoher räumlicher Genauigkeit ableiten.
Neben Gesundheitszustand und Wuchs lassen sich aus Satelliten- oder Luftbildern zudem forstlich relevante Variablen abschätzen wie z.B.:  Waldtypen und Baumarten, Baumhöhen, Bestandesdichten bzw. Anzahl Bäume pro Hektar (n/ha), Bestandesgrundflächen (m²) und Holz-Volumen (m³), Kohlenstoffvorrat.

Die Erkennung und räumliche Erfassung von Waldschäden sind zentrale Elemente des Waldmonitorings. Die Schäden sind vielfältig und werden etwa durch Insekten (Borkenkäfer), Feuer (Trockenheit & Hitze) oder Wind (Sturm & Orkan) verursacht. Um großflächig die Gesundheit der Vegetation zu beobachten und nach Sturmereignissen oder Schädlingsbefall einen schnellen Überblick über betroffene Waldflächen zu erhalten, kommt die Fernerkundung zum Einsatz. Mehrere Studien zeigten bereits die Anwendbarkeit der Fernerkundung zur Erkennung von Windwurfflächen (Einzmann et al., 2017; Remelgado et al., 2014; Schwarz et al., 2003; Seitz und Straub, 2017; Steinmeier et al., 2002). Die verwendeten Daten umfassen dabei auch oft kommerzielle Radarsysteme und sehr hochauflösende optische Sensoren. Da diese Daten begrenzt und nicht immer verfügbar sind, ist die Verwendung offener Daten ein bevorzugter Ansatz für Waldbesitzer sowie für Institutionen und Organisationen, aber auch für die Forschung, Bildung und Lehre. Somit sind frei verfügbare Fernerkundungsdaten mit großer räumlicher Abdeckung nützlich und notwendig für die Waldbeobachtung wie z.B. zur Erfassung von Windwurfgebieten.

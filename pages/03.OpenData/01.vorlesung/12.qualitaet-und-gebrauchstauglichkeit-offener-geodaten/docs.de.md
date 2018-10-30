---
title: 'Qualität und Gebrauchstauglichkeit offener Geodaten'
taxonomy:
    category:
        - docs
published: false
---

!! Diese Seite ist noch im Entwurfsstadium!

###Evaluationskriterien

**Evaluation nach Open Data Kritierien:**

Bewertung in Anlehnung an Schicktanz et al. (2017) und Klessman et al. (2012): Punktevergabe von 0 - 12 Punkten

Kriterium / Punktevergabe                                                                                                                 | Datensatz 1 | Datensatz 2
------------------------------------------------------------------------------------------------------------------------------------------|-------------|------------
**Vollständigkeit** <br/>1: teilweise  <br/>2: vollständig                                                                                |             |
Verfügbarkeit der Primärquelle <br/>0: Bericht / Text mit Datenwerten  <br/>1: teilweise  <br/>2: vollständig                             |             |
**Zeitnähe**<br/>0: keine Aktualisierung <br/>1: feste Aktualisierungsrate <br/>2: Historienbildung                                       |             |
Zugänglichkeit* <br/>0: Bericht / Text mit Datenwerten  <br/>1: eingeschränkt (z.B. Registrierung erforderlich)  <br/>2: direkter Zugriff |             |
**Maschinenlesbarkeit**<br/>0: gar nicht bis gering <br/> 1: überwiegend  <br/>2: vollständig                                             |             |
**nicht diskriminierende Bereitstellung**                                                                                                 |             |
**nicht proprietäre Bereitstellung**                                                                                                      |             |
**Lizenzfreiheit**                                                                                                                        |             |
**Dauerhaftigkeit**                                                                                                                       |             |
**Nutzungskosten**                                                                                                                        |             |
**Gesamt (Ist / Soll) :**                                                                                                                 |             |
* Kriterien angepasst

*Mögliche Zusatzfragen:*

Ist ein eindeutiger Lizenz-Hinweis gegeben? Geben Sie ggf. den Namen der Lizenz an!

Handelt es sich dabei um eine Open-Data Lizenz? Begründen Sie ihre Antwort!

Welche Pflichten / Einschränkungen sind mit der Nutzung des Datensatzes verbunden


**Evaluation für wissenschaftliche Weiterverarbeitung:**

Wichtig u.a. für das wissenschaftliche Zitieren:

Von wem wuden die Daten Erhoben (Personen / Behörde)?

Wann wurden die Daten veröffentlicht?

Sind die (Meta-) daten dauerhaft über einen eundeutigen Globalen Identifier abrufbar (z.B. DOI). Wie lautet dieser Identifier?

!!! Für eine ausführliche Evaluation offener Forschungsdaten können die FAIR Prinzipien für offene Forschungsdaten genutzt werden. Sie sind u.a. offizielle Richtlinie des Horizon 2020 Programms der EU:
!!! Grundprinzip: Daten sollten auffindbar, zugänglich, interoperabel und wiederverwendbar sein (findable, accessible, operable and reusable)


**Kriterien der Interoperabilität:**
(Sollten sie eine dieser Fragen über die Daten nicht beantworten können, deutet dies auf unzureichende Metadaten hin)

**Technisch:**
- Ist das Datenformat (Oder der Datenservice) kompatibel mit dem GIS-Tool (oder dem Web-Service, dem Informationsystem)? Erlaubt das GIS Lesen, Bearbeiten, exportieren der Daten?
-> Falls nicht: Ist es möglich, die Daten mittels einer anderen Software / eines Webdienstes in ein Kompatibles Format zu konvertieren?

**Syntaktisch:**


- Auf welche Art sind fehlende Werte beschrieben? (NA, null, Leerzeichen ...)
- Auf welche Arten sind Nachkommastellen von nummerischen Daten beschrieben (Komma oder Punkt)

**Semantisch:**

Sind die Begriffe / Modellannamen klar definiert (bei zu verschneidenden Daten bereinstimmend / vereinbar)

Beispiele: Ein und das selbe Gebiet können je nach Datensatz als Wald, Erholungsgebiet, Naturschutzgebiet können sich je nach Datensatz auf ein und das selbe Gebiet bezogen sein. Bei Geobasisdaten unterscheiden sich möglicherweise Grenzverläufe oder behandeln nicht allgemein anerkannten Staaten unterschiedlich (z.B. Taiwan, Nordzypern) und wirken sich entsprechend auf die Datenlage aus


**Betrachtung der Datenqualität:**


Auf welchen Zeitpunkt(e) / Zeiträum(e) beziehen sich die Daten?

Auf welch(e/s) Ort(e) / Gebiet(e) beziehen sich die Daten?

Was wird gemessen / Abgebildet?

Wie genau / akkurat und mit welcher Granularität sind diese Informationen gegeben?

Wie zuverlässig / Vertrauenswürdig ist die Datenquelle? Handelt es sich um amtliche / offizielle Daten?
Sind Ursprung der Daten, Erhebung und ggf. Weiterverarbeitung ausreichend und nachvollziehbar Dokumentiert (Provenance/Lineage)

---
Betrachtung von:

1. Georeferenz
	- In welcher Form liegt ein räumlicher Bezug vor? (
Koordinaten / Adressen, Ortsnamen, Gemeindeschlüssel oder ID, (Luft-)bild

- Welches Koordinatenreferenzsystem / welche Projektion ist gegeben? Wird

2. Zeitkomponente


3. Attribute

Welche Maßeinheiten sind gegeben?

Einordnung nach Skalenniveau: Nominal, Ordinal, Kardinalskala
--> Unterschiedliche Skalenniveaus lassen sich u. U. homogenisieren. Von Nominal > Ordinal > Kardinal nur mit zusätzlichen informationen, umgekehrt mit Informationsverlust




- Oftmals wird Aktualität als ein wichtiges Kriterium für Datenqualität aufgeführt.


- Informationen zur Herkunft der Daten (Erfassung und Verarbeitung) sind wichtige Metadaten zur Beurteilung der Datenqualität


|	Räumlich	|	Zeitlich	|	Thematisch
---|----|----|---
Genauigkeit	|	| |
Auflösung (Granularität, Detailiertheit)	|	| |
Vollständigkeit	|	| |
(innere) Konsistenz	|	|	|

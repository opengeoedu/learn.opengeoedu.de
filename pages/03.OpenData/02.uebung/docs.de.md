---
title: Übungsanleitung
menu: Übung
taxonomy:
    category:
        - docs
---

In dieser Übung lernen Sie grundlegende Schritte im Umgang mit offenen Verwaltungsdaten, insbesondere in einer GIS-Umgebung, kennen. Praktisch beschäftigen Sie sich in drei Übungseinheiten:

* Recherche und Vergleich von Open Data-Angeboten mithilfe des [Portals der Open Data Portale](https://portal.opengeoedu.de)
* Verknüpfung und Auswertung von Verwaltungsgebiete mit amtlichen Statistiken mithilfe des amtlichen Gemeindeschlüssels (AGS) bzw. Regionalschlüssels (ARS)
* <font style="color:grey">Nutzung OpenStreetMap für eine GIS-Analyse (wird später ergänzt)</font>


[center]<a href="https://ilias.opengeoedu.de/ilias/goto.php?target=crs_249&client_id=opengeoedu" markdown="1" target="_blank">![](/images/exercise.png?resize=200,200)Hier geht es weiter zur Übung (ILIAS)</a>[/center]


<!--

####1. Finden Sie einen offenen Datensatz (oder Service) mit räumlichen Bezug.

 (Advanced: Finden Sie Zwei offene Datensätze, die Sie verschneiden - 1x Geobasisdaten, 1x Fachdaten)

(Basic bzw. zur automatisierung: Vorgabe von möglichen Beispieldatensätzen und Services)

####2. Evaluieren und Bewerten sie nun die Eignung zur Weiterverarbeitung nach Kriterien der Offenheit, der Interoperabilität und der Qualität geographischer Informationen.

- Betrachten sie zunächst die Metadaten und Erläuterungen, die auf dem Datenportal selbst verfügbar sind. Schauen sie auch nach möglichen Readme-Dateien oder Dokumenten, die gemeinsam mit dem Datensatz Heruntergeladen werden können.

- Benutzen sie nun ein GIS-Tool ihrer Wahl, um den Datensatz zu Erkunden und zu Visualisieren

####3. XXXX

**Abgabe:**
- Ausgefüllte Bewertungsmatrix
- Screenshot oder Export der visualisierten Daten, ggf. Zusammenfassung der Datentabelle
- Schriftliche Interpretation und Fazit über die Qualität/Eignung des Datensatzes (max. 500 Wörter)



###Evaluationskriterien

**Evaluation nach Open Data Kritierien:**

Bewertung in Anlehnung an Schicktanz et al. (2017) und Klessman et al. (2012): Punktevergabe von 0 - 12 Punkten

| Kriterium / Punktevergabe  | Datensatz 1 | Datensatz 2 |
| ------------- |:-------------:| -----:|  -----:|
Vollständigkeit <br/>1: teilweise; 2: vollständig | | |
Verfügbarkeit der Primärquelle <br/>0: Bericht / Text mit Datenwerten; 1: teilweise; 2: vollständig | | |
Zeitnähe <br/>0: keine Aktualisierung 1: feste Aktualisierungsrate; 2: Historienbildung | | |
Zugänglichkeit* <br/>0: Bericht / Text mit Datenwerten; 1: eingeschränkt (z.B. Registrierung erforderlich) 2: direkter Zugriff | | |
Maschinenlesbarkeit <br/>0: gar nicht bis gering 1: überwiegend 2: vollständig | | |
nicht diskriminierende Bereitstellung   | | |
nicht proprietäre Bereitstellung   | | |
Lizenzfreiheit   | | |
Dauerhaftigkeit   | | |
Nutzungskosten | | |
**Gesamt (Ist / Soll) :**  | | |

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
 Unterschiedliche Skalenniveaus lassen sich u. U. homogenisieren. Von Nominal > Ordinal > Kardinal nur mit zusätzlichen informationen, umgekehrt mit Informationsverlust




  *Basic Erläuterungen:*
	- Kostenlose Desktop GIS-Tools:
		- QGis
		- GRASS GiS
		- SAGA GIS
		- OpenJump
   - Online GIS-Tools:
      - [GeoJson.io](http://geojson.io/)
      - [ArcGIS Online](https://www.arcgis.com) (kostenlos für nicht-kommerzielle Zwecke)
      - [MapBox](https://www.mapbox.com) (kostenlos für nicht-kommerzielle Zwecke)
       - [Carto](https://carto.com) (kostenlos für nicht-kommerzielle Zwecke)
   - Programmiersprachen mit GIS-Funktionalitäten:
   		- Python
   		- R mit Spatial-Erweiterungen (z.B. package sp und rgdal)
   - Earth-Viewer (Virtueller Globus, teilweise mit grundlegenden GIS-Funktionalitäten ausgestattet):
    	- [Marble](https://marble.kde.org/) (Freie Software, GPL-basiert)
    	- Google Earth/Google Maps (Unter Beachtung der [Google Nutzungsbedingungen](https://www.google.com/permissions/geoguidelines.html) sind viele Funktionen für private, nicht-kommerzielle Zwecke kostenlos)


 !!!! Eine Datenbank von freier und Open Source Software aus dem GIS-Bereich ist verfügbar unter [FreeGIS.org](http://www.freegis.org/)
---

!(%202018-01-24%2015-36-47%20OpenDataPortal-Kartenansicht.png "Portal der Open Data Portale")
-->

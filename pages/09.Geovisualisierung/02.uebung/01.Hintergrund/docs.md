# Hintergrund & Zusammenfassung

Die Landesfläche Deutschlands ist zu 32% mit Wald bedeckt. Die Ausbreitung der Wälder ist gut dokumentiert und lässt sich auch aus frei verfügbaren Daten mit hoher räumlicher Genauigkeit ableiten. Für die Erfassung des Waldzustands werden jedoch aktuellste Informationen benötigt, die in so großer Ausdehnung nicht in-situ erfasst werden können. Um großflächig die Gesundheit der Vegetation zu beobachten und nach Sturmereignissen oder Schädlingsbefall einen schnellen Überblick über betroffene Waldflächen zu erhalten, kommt daher die Fernerkundung zum Einsatz. 

![SatWindwurf](/pages/09.Geovisualisierung/SatellitWindwurf2.png)
 
In diesem Fallbeispiel wird ein Sturmereignis vom August 2017 untersucht, bei dem es im Taunus (Hessen) zu größeren Sturmschäden im Wald kam. Dazu wird jeweils eine Sentinel 2-Szene vor und nach dem Ereignis aufbereitet, analysiert und Vegetationsindizes für beide Zeitpunkte berechnet. Durch die Ermittlung der Differenzen zwischen den Indizes können die Schadensflächen identifiziert und auf Basis eines Schwellenwerts extrahiert werden. Anschließend erfolgt eine Verschneidung mit Landbedeckungsdaten, um das Ergebnis hinsichtlich der betroffenen Waldtypen zu quantifizieren. Abschließend werden die ermittelten Windwurfflächen in einer dreidimensionalen Geländeansicht visualisiert. 

Ein Video mit vergleichbarem Workflow  gibt es zum besseren Verständnis ![hier](https://www.youtube.com/watch?v=0cLMNZWC1zY&index=3&list=PLNxdHvTE74Jz19pXbL9yK6HuJ90b29Lb_).

### Fragestellungen
- Wie groß ist die Waldfläche im Untersuchungsgebiet?
- Welche Daten zu Waldflächen und -zusammensetzung in Deutschland stehen zur Verfügung?
- Wie groß ist die durch den Sturm beschädigte Waldfläche in ha?
- Wie groß sind die Anteile von Nadel-/Laubwald innerhalb der Windwurfflächen?
- Welchen Einfluss hat das lokale Relief? Treten Schäden nur an bestimmten Expositionen auf?



## Benötigtes Vorwissen
-	Grundkenntnisse zur Analyse von vektorbasierten Geodaten
-	Grundkenntnisse zur Struktur und Erfassung multispektraler Fernerkundungsdaten

## Benötigte Software 

-	QGIS: Quantum GIS ist eine freie, quelloffene Software zur Analyse und Verarbeitung von Geodaten und bietet alle Funktionen eines Geoinformationssystems. Es existieren darüber hinaus zahlreiche freie Erweiterungen, die für spezielle Anwendungen heruntergeladen werden können. QGIS kann unter https://qgis.org/en/site/forusers/download.html heruntergeladen werden. Unter diesem Link findet sich auch die Möglichkeit, das OSGeo4W-Paket herunter zu laden. Neben QGIS beinhaltet dieses Paket viele weitere freie Tools zur Geodatenverarbeitung, die zum Teil auch direkt mit QGIS verknüpft und so komfortabel aufgerufen werden können.

-	SNAP: Die *Sentinel Application Platform* ist eine freie von der ESA bereitgestellte Software zur Verarbeitung von Fernerkundungsdaten. Sie wurde speziell für die Auswertung von Sentinel-Daten der Copernicus-Missionen entwickelt, unterstützt jedoch auch viele andere Fernerkundungssensoren. SNAP kann unter http://step.esa.int/main/download/ heruntergeladen werden. Der entsprechende Link befindet sich in der Zeile „Sentinel Toolboxes“. Es existieren eine Reihe kurzer Video-Tutorials, die den Einstieg in SNAP erleichtern: http://step.esa.int/main/doc/tutorials/snap-tutorials/

-	Google Earth (ggf. für Visualisierung): Google Earth (Pro) ist der wohl bekannteste digitale Globus, der Geodaten und Satellitenbilder verschiedenster Quellen – u.a. Bundesamt für Kartographie und Geodäsie (BKG) verwendet. Die Nutzung von Google Earth ist zwar grundsätzlich kostenlos, jedoch an bestimmte Bedingungen geknüpft, da es sich nicht um Open Source Software handelt. Die aktuelle Version Google Earth Pro kann über folgenden Link heruntergeladen werden: https://www.google.de/earth/download/gep/agree.html 

## Verwendete Daten

-	Sentinel-2 ist eine aus zwei Satelliten (S-2A, S-2B) bestehende Mission des Copernicus-Programms der ESA (http://www.d-copernicus.de/). Sentinel-2 verfügt über einen Multispektralsensor, der den von der Erde reflektierten Anteil der Sonnenstrahlung in 13 Spektralkanälen erfasst. Die räumliche Auflösung beträgt je nach Kanal 10, 20 oder 60 m. Aufgrund der großen Schwadbreite von 290 km und der Zwillingsformation erreicht Sentinel-2 eine zeitliche Auflösung von maximal fünf Tagen. Die Daten werden in 100 x 100 km UTM-Kacheln (Tiles) ausgeliefert und werden im Copernicus Open Access Hub (https://scihub.copernicus.eu/) nach Registrierung kostenlos bereitgestellt. Dabei stehen für jede Szene die Prozessierungsstufen 1C und 2A zur Verfügung. Level 1C besteht aus orthorektifizierten TOA (top of atmosphere) reflectance Daten, während bei Level 2A zusätzlich eine Atmosphärenkorrektur zur BOA (bottom of atmosphere) reflectance Daten durchgeführt wurde.

-	OpenStreetMap (OSM) (www.openstreetmap.org) ist ein freies crowd-sourcing Kartenprojekt, bei dem Freiwillige Geodaten erfassen, sammeln und online bereitstellen. Die Daten können über verschiedene Wege heruntergeladen werden. Die Firma Geofabrik bietet unter http://download.geofabrik.de/ als ESRI-Shapefile aufbereitete OSM-Daten auf Bundeslandebene kostenlos zum Download an. Die so bezogenen Daten bestehen aus verschiedenen Shapefiles, die unterschiedlichen Domänen zugeordnet sind (z.B. Roads, Natural Features, Land Use, etc.)

-	CORINE Land Cover (CLC) ist ein von der EU initiiertes Projekt zur einheitlichen Klassifikation der Landbedeckung/Landnutzung in Europa. Der Datensatz wird auf Basis von Fernerkundungsdaten erstellt und alle sechs Jahre aktualisiert. Die Nomenklatur besteht aus drei Hierarchieebenen, wobei auf der feinsten Ebene 44 Klassen existieren: ![Nomenklatur](http://www.umweltbundesamt.at/fileadmin/site/umweltthemen/raumplanung/1_flaechennutzung/corine/CORINE_Nomenklatur.pdf). Für das Bundesgebiet Deutschlands ist das BKG für die Bereitstellung des CLC-Datensatzes zuständig und stellt diesen als Open Data mit einer Mindestkartiergröße von 10 ha kostenlos zur Verfügung (CLC 10 ha): ![Geodatenzentrum](
http://www.geodatenzentrum.de/geodaten/gdz_rahmen.gdz_div?gdz_spr=deu&gdz_akt_zeile=5&gdz_anz_zeile=1&gdz_unt_zeile=22&gdz_user_id=0).

-	Die Daten der Shuttle Radar Topography Mission (SRTM) beschreiben die Erdoberfläche als digitales Geländemodell (DGM) und wurden im Februar 2000 fernerkundlich erfasst. Mittlerweile stehen die Daten im USGS (United States Geological Survey) Earth Explorer (https://earthexplorer.usgs.gov/) in verschiedenen Auflösungsstufen kostenlos zur Verfügung und können neben weiteren Produkten und Fernerkundungsdaten nach Registrierung auf der Seite heruntergeladen werden. 
*Zusatzinfo:* Im Rahmen des Copernicus-Programms liegt auch ein europaweites digitales Geländemodell (EU-DEM) frei verfügbar vor, welches jedoch auf Daten der SRTM sowie dem ASTER GDEM basiert. Das EU DEM kann heruntergeladen werden unter:
https://land.copernicus.eu/pan-european/satellite-derived-products/eu-dem. 



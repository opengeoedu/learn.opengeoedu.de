# Copernicus
Welche Daten? Und wie bekomme ich sie?

## Das Copernicus-Programm 

![CopernicusLogo](/pages/09.Geovisualisierung/Copernicus2.png)  

Das Copernicus-Vorgängerprogramm war das Global Monitoring for Environment and Security (GMES, deutsch: Globale Umwelt- und Sicherheitsüberwachung) welches 1998 von der EU und der ESA ins Leben gerufen wurde. Im Jahr 2012 wurde es dann in Copernicus umbenannt. 

Die Copernicus Kerndienste stellen umfangreiche Grundlageninformationen bereit, die für vielfältige Anwendungen weiter verarbeitet werden können. Die Dienste „Überwachung des Klimawandels“ und „Sicherheit“ befinden sich noch in der Entwicklung. 
Das Programm besteht aus den folgenden sechs Kerndiensten:
-	Landüberwachung (Copernicus Land Monitoring Service, CLMS)
-	Überwachung der Meeresumwelt (Copernicus Marine Environment Monitoring Service, CMEMS)
-	Katastrophen- und Krisenmanagement (Copernicus Emergency Management Service, Copernicus EMS)
-	Überwachung der Atmosphäre (Copernicus Atmosphere Monitoring Service, CAMS)
-	Überwachung des Klimawandels (Copernicus Climate Change Service, C3S)
-	Sicherheit (Copernicus Security service)

In dieser Lerneinheit soll der Fokus auf das Landmonitoring liegen.


![CopernicusDienste](/pages/09.Geovisualisierung/Copernicus_Dienste_1.png)
*Die sechs Copernicus Dienste.*
<br><br>
Im Rahmen von Copernicus gibt es im Grunde vier Projektkomponenten: die Basis bilden zum einen die __(i)__ Satelliten und beitragenden Missionen sowie das Bodensegment, zum anderen die nationalen **(ii)** in-situ Messnetze. Hinter der in-situ Komponente verbergen sich alle Daten, die nicht aus dem Weltraum gewonnen wurden (außer Daten wie z.B. SRTM). Darauf aufbauend operieren die __(iii)__ sechs thematischen Dienste, die durch Fachagenturen wie die Europäische Umweltagentur (EEA) umgesetzt werden. Die daraus resultierenden Informationen werden zusammengetragen und aufbereitet sowie für die __(iv)__ Endnutzer bereitgestellt. Dazu zählen behördliche Anwender und Verwaltung, Politik, Wissenschaft, kommerzielle Unternehmen, Start-Ups oder gemeinnützige Organisationen und Bürger ...bzw. jeder.

![CopernicusKomponenten](/pages/09.Geovisualisierung/Copernicus_Komponenten.png)

Innerhalb der *Weltraumkomponente* bilden die Satellitensysteme natürlich die grundlegende Basis für die Erdbeobachtung und Umweltüberwachung. Durch dauerhafte Datenlieferungen und neue Standards soll die Position Europas in der internationalen Satellitenfernerkundung gefestigt werden. Der geplante Bau von sieben Satellitensystemen/-instrumenten wird in den nächsten Jahren weitergeführt. Das bedeutet auch den Aus- und Aufbau von Bodensegmenten und Datenplattformen. NNeben den Sentinels gibt es zudem ein Abkommen mit ca. 30 beitragenden Missionen, zu denen bekannte zählen wie etwa RapidEye, Landsat, SPOT, Pleiades, WorldView, GeoEye, ALOS/PALSAR, TerraSAR-X, TanDEM-X.

<br><br>

## Die ersten drei „Wächter“

__Sentinel-1__

![S1](/pages/09.Geovisualisierung/Sentinel-1.png)

*Radar --> aktiv*
 
 <br><br>
 
__Sentinel-2__ 

![S2](/pages/09.Geovisualisierung/Sentinel-2_2.png)

*optisch Multispektral --> passiv*
 
<br><br>  

__Sentinel-3__ 

![S3](/pages/09.Geovisualisierung/Sentinel-3.png)

*Radar & Multispektral --> aktiv & passiv*

<br><br>

## Datenzugang

Für den potentiellen Nutzer ist es zunächst wichtig zu wissen, wie man an welche Sentinel-Daten kommt. Dabei gibt es mehrere Möglichkeiten und Wege. Im Folgenden sollen die beiden gängigsten Plattformen beschrieben werden.
Der erste Datenzugang erfolgt über den Sci-Hub der Europäischen Raumfahrtbehörde (European Space Agency, ESA), der zu erreichen ist unter: https://scihub.copernicus.eu/ bzw. https://scihub.copernicus.eu/dhus/#/home. Dabei handelt es sich um einen Open Access Hub, wo man nach einer Registrierung kostenlosen Zugang zu Sentinel-1 und Sentinel-2 erhält. Es gibt verschieden Suchoptionen: AOI, Sensor, Produkt, Datum und Wolkenbedeckung. 
Zusätzlich: Sentinel-3 PreOps Hub, API Hub.

Der zweite Datenzugang ist CODE-DE (Copernicus Data and Exploitation platform), erreichbar unter https://code-de.org. Auch hier ist eine Registrierung notwendig und kostenlos. Der Dienst bietet ebenso Sentinel-1 & -2 an. Es gibt einen offenen Such- und Darstellungsdienst sowie eine Toolsammlung zur Analyse von Sentinel-Daten. Der Kostenpflichtige Zugang ermöglicht darüber hinaus die Nutzung der online Prozessierungsumgebung.


> __Aufgabe:__ Sentinel-2 Datenrecherche. 
Recherchieren Sie nach wolkenfreien (Wolkenbedeckung bis max. 10 %) Sentinel-2 Aufnahmen der Stadt Frankfurt am Main, die im zweiten Halbjahr 2017 erfasst wurden. 

> Wie viele Datensätze finden Sie …  
 a)	… im Copernicus Hub?  
 b)	… in Code-DE?   
 *MC-Frage: Warum finden Sie unterschiedlich viele Datensätze? (Hinweis: Recherchieren Sie nach Namenskonventionen der Sentinel-2 Daten)*

<br><br>

## Copernicus Land Monitoring Service

Datenzugang des Landüberwachungs-Services: Der Copernicus Land Monitoring Service ist erreichbar unter https://land.copernicus.eu. Die Daten stehen nach kostenloser Registrierung (EIONET Account) zur Verfügung.
Dort werden Globale, europaweite, lokale und in-situ Daten angeboten. Vorrangig handelt es sich dabei um biophysikalische Parameter und LULC-Daten (Land Use/Land Cover, deutsch: Landnutzung/Landbedeckung). 

Die globale Komponente liefert Daten über eine breite Palette von biophysikalischen Variablen auf globaler Ebene, die den Zustand der Vegetation (leaf area index, fraction of green vegetation cover, vegetation condition index), den Energiehaushalt (Albedo, Landoberflächentemperatur, top of canopy reflectance) und den Wasserkreislauf (soil water index, water bodies) beschreiben. ![Global](https://land.copernicus.eu/global/)

Die gesamteuropäische Komponente liefert hochauflösende Informationsprodukte, die die Landbedeckung und Landnutzung sowie deren Veränderungen beschreiben. Die CORINE Land Cover (CLC) bietet eine europaweite Kartierung der Landnutzung und stellt mittlerweile eine einzigartige Zeitreihe zur Beobachtung der Veränderungen in unseren europäischen Landschaften seit 1990 dar. Seit 2006 wird CLC durch drei jährliche High Resolution Layer (HRL) über die Bodenbedeckungseigenschaften der wichtigsten Bodenbedeckungstypen ergänzt: künstliche Flächen, Waldflächen, landwirtschaftliche Flächen, Feuchtgebiete und kleine Wasserkörper. Die Paneuropäischen HRL liefern somit Informationen über spezifische Landbedeckungsmerkmale und ergänzen die CLC-Landbedeckungs- bzw. Landnutzungskartierung.  ![HRL](https://land.copernicus.eu/pan-european/high-resolution-layers)

Die lokale Komponente zielt darauf ab, spezifische und detailliertere Informationen bereitzustellen, welche die durch die gesamteuropäische Komponente gewonnenen Informationen ergänzen. Sie konzentriert sich auf "Hotspots", die für spezifische Umweltprobleme anfällig sind, und liefert detaillierte Informationen über die Landbedeckung und Landnutzung in den wichtigsten europäischen Städten. Neben einer Aktualisierung dieses sogenannten Urban Atlas wird sich die nächste lokale Komponente mit der Biodiversität in Hotspot-Gebieten rund um Flüsse (Ufergebiete) befassen. ![Lokal](https://land.copernicus.eu/local)
 
Durch einen regelmäßigen Update-Zyklus wir ein nachhaltiges Monitoring gewährleistet. Neben den Sentinels als Informationsquelle werden die Daten aus den beitragenden Missionen (Proba-V, SPOT, RapidEye, …) abgeleitet.

> __Aufgabe__: Recherche von HRL: Forest und Metadaten. Recherchieren Sie den Update-Zyklus, Datenquellen und Bestimmungsmethoden. Vergleichen Sie sie mit anderen Daten.

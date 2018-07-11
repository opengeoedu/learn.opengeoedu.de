# Sentinel-2
## Allgemein 
Hinter „Senitel-2“ verbirgt sich nicht nur ein einzelner Satellit, sondern ein Satellitenpaar. Start: 22.06.15 (2A), 07.03.17 (2B). 

![Senitel-2](/pages/09.Geovisualisierung/Sentinel-2_composites.png)
*Künstlerische Darstellung von Senitnel-2. Rechts: Aufnahme aus dem Taunus (Hessen), jeweils in verschiedener Kombination (rot-grün-blau, RGB) verschiedener Bänder.*

Eckdaten Sentinel-2:

-	Optischer Sensor mit 13 Kanälen – verteilt im elektromagnetischen Spektrum vom sichtbaren Licht über das Nahe Infrarot bis zum Mittleren (Kurzwelligen) Infrarot, ca. 440-2200 nm
-	Bodenauflösung: 10-60 m pro Pixel
-	Hohe temporale Abdeckung (alle 5 Tage mit 2 Satelliten, 10 Tage für 1 Satellit)
Die Schwadbreite ist mit 290 km größer als etwa die von Landsat 7 und Landsat 8 (185 km) oder SPOT (120 km). Die herunterladbaren Sentinel-2 Bilder (Tiles, Kacheln) haben allerdings immer eine Größe von 100x100 km.

Zum Kennenlernen bietet sich der ![Sentinel Playground](http://apps.sentinel-hub.com/sentinel-playground/?source=S2&lat=40.34366578968397&lng=-3.6512374877929688&zoom=11&preset=1_NATURAL_COL0R&layers=B04,B03,B02&maxcc=20&gain=1.0&gamma=1.0&time=2015-01-01|2018-01-17&atmFilter=&showDates=false) an.

<br><br> 

![Rostock](/pages/09.Geovisualisierung/Senitnel-2_Rostock.png)
*Rostock von oben... Sentinel-2 Color Infrarot (CIR) Falschfarbkomposit, RGB: 8-4-3. Der Pfeil markiert (ungefähr) die Hauptgebäude der Universität Rostock.*

<br><br>

![Tiles](/pages/09.Geovisualisierung/Senitinel-2_Tiles_GoogleEarth.png)
*Globale Abdeckung mit Sentinel-2 als 100x100 km Kacheln.* 

<br><br>

## Räumliche Auflösung

Die räumliche Auflösung beschreibt vor allem die Pixelgröße bzw. den Pixelabstand (im Bild oder am Objekt). Es ist abhängig von der Art des Sensors. Fähigkeit, Größe des CCD-Arrays (charge-coupled device) und die Blickwinkel. Einige wichtige Begriffe in der Fernerkundung und ihre Bedeutung sind: FOV= field of view, deutsch: Blickfeld, definiert die Schwadbreite; IFOV=instantaneous field of view, definiert den Winkel der einzelnen Sensoren; GIFOV=Ground instantaneous field of view, ist das auf den Boden projizierte IFOV. Die GSD=ground sample distance (aus GIFOV, Detektorgröße), definiert schließlich die resultierende Pixelgröße. Die räumliche Bildauflösung ist neben dem Kontrast entscheidend für die Erkennung von Objekten.

![F_Hbf](/pages/09.Geovisualisierung/Frankfurt_Hbf_Resolutions.png)
*Frankfurter Hauptbahnhof aufgenommen mit verschiedenen räumlichen Auflösungen.*

__Aufgabe:__ Ordnen Sie Ausschnitte von Satellitenbildern ihrer räumlichen Auflösung entsprechend an. https://h5p.org/node/173319


<iframe src="https://h5p.org/h5p/embed/173319" width="1090" height="542" frameborder="0" allowfullscreen="allowfullscreen"></iframe><script src="https://h5p.org/sites/all/modules/h5p/library/js/h5p-resizer.js" charset="UTF-8"></script>



<br><br>

Vgl. Sentinel-2 vs. Luftbild: https://h5p.org/node/239827 

__Aufgabe:__ Recherchieren Sie Metadaten zu den Sensoren und platzieren Sie sie entsprechend im Diagramm. https://h5p.org/node/172678


<br><br>
## Spektrale Auflösung

Die spektrale Auflösung eines Sensors beschreibt die 

![KanäleS2LS7LS8](/pages/09.Geovisualisierung/BANDS_S2_LS8_LS7.png)
*Die spektralen Kanäle von Sentinel-2 im Vergleich zu Landsat 8 (OLI und TRS) und Landsat 7 ETM+.*

https://h5p.org/node/238969

![Sentinel-2KanäleReflektanz](/pages/09.Geovisualisierung/Sentinel-2_Bands_Reflectance.png)


Die einzelnen Sentinel-2 Bänder liegen als Grauwertbilder vor
Image-Slider: https://h5p.org/node/248696 

Die Grauwertbilder können nach Bedarf kombiniert werden (standardmäßig drei, RGB)
Bandkombinationen:  https://h5p.org/node/248682 

<br><br>

## Vegetationsmonitoring

Spektrale Kurve und Pflanzenparameter https://h5p.org/node/240206 

![ReflektanzVegetation](/pages/09.Geovisualisierung/Reflectance_Vegetation.png)

*Vegetationsindizes*

Die in der Reflektanz (hier: Pixelwerten der einzelnen Kanäle) enthaltenen Informationen ...
Spektrale Indizes verfolgen das Prinzip einer Neuberechnung eines künstlichen Kanals.
um spezielle Features (Merkmale) hervorzuheben 
meist als einfache oder Verhältnisse
Es gibt je nach Sensor und der Anzahl der Kanäle eine Vielzahl an möglichen Kombinationen.
Vegetationsindizes sind robuster gegenüber Beleuchtungsunterschieden oder atmosphärischen und Hintergrundeinflüssen.

Der wohl bekannteste Vegetationsindex ist der Normalized Difference Vegetation Index (NDVI). Er gilt als Standard des Vegetationsmonitorings und macht sich die Unterschiede beim (Gesundheits-)Status von Vegetation besonders im NIR zu nutze.
Der NDVI wird wie folgt berechnet:
NDVI=  (NIR-rot)/(NIR+rot) =(ρ_800-ρ_680)/(ρ_800+ρ_680 )  ,  [-1;1]

BILD


Recherche von Indizes auf der Index Database 
Beispiele und Gegenüberstellung
ggf. Indizes auf Sentinel Playground vergleichen

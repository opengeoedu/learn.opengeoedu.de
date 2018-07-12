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

> Zum Kennenlernen bietet sich der ![Sentinel Playground](http://apps.sentinel-hub.com/sentinel-playground/?source=S2&lat=40.34366578968397&lng=-3.6512374877929688&zoom=11&preset=1_NATURAL_COL0R&layers=B04,B03,B02&maxcc=20&gain=1.0&gamma=1.0&time=2015-01-01|2018-01-17&atmFilter=&showDates=false) an.

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

> __Aufgabe:__ Ordnen Sie Ausschnitte von Satellitenbildern ihrer räumlichen Auflösung entsprechend an. https://h5p.org/node/173319


<iframe src="https://h5p.org/h5p/embed/173319" width="1090" height="542" frameborder="0" allowfullscreen="allowfullscreen"></iframe><script src="https://h5p.org/sites/all/modules/h5p/library/js/h5p-resizer.js" charset="UTF-8"></script>



<br><br>

Vergleich von Sentinel-2 und Luftbild: 
<iframe src="https://h5p.org/h5p/embed/239827" width="1090" height="1065" frameborder="0" allowfullscreen="allowfullscreen"></iframe><script src="https://h5p.org/sites/all/modules/h5p/library/js/h5p-resizer.js" charset="UTF-8"></script>


> __Aufgabe:__ Recherchieren Sie Metadaten zu den Sensoren und platzieren Sie sie entsprechend im Diagramm. 
<iframe src="https://h5p.org/h5p/embed/172678" width="1090" height="1046" frameborder="0" allowfullscreen="allowfullscreen"></iframe><script src="https://h5p.org/sites/all/modules/h5p/library/js/h5p-resizer.js" charset="UTF-8"></script>

<br><br>

## Spektrale Auflösung
Die spektrale (optische) Auflösung eines Sensors gibt an, welche Bereiche des elektromagnischen Spektrums wie erfasst werden können. Die spektrale Auflösung ist somit der abgedeckte Wellenlängenbereich bezogen auf die Anzahl der Spektralbänder und ist mit der Bandbreite verknüpft, welche durch den Full Width Half Mean-Wert (FWHM) beschrieben wird. Dieser gibt die Wellenlängenbreite an, die ein Kanal bei 50 % der maximalen Durchlässigkeit des Spektralbandes umfasst (s. ![FE-Lexikon](http://www.fe-lexikon.info/lexikon-s.htm#spektrale-aufloesung)). Sie wird manchmal mit dem spektralen Sampling Interval verwechselt, was jedoch die Schritte zwischen den einzelnen Bändern definiert.

![KanäleS2LS7LS8](/pages/09.Geovisualisierung/BANDS_S2_LS8_LS7.png)
*Die spektralen Kanäle von Sentinel-2 im Vergleich zu Landsat 8 (OLI und TRS) und Landsat 7 ETM+.*

<iframe src="https://h5p.org/h5p/embed/238969" width="1090" height="494" frameborder="0" allowfullscreen="allowfullscreen"></iframe><script src="https://h5p.org/sites/all/modules/h5p/library/js/h5p-resizer.js" charset="UTF-8"></script>

![Sentinel-2KanäleReflektanz](/pages/09.Geovisualisierung/Sentinel-2_Bands_Reflectance.png)

Die einzelnen Sentinel-2 Bänder liegen als Grauwertbilder vor...

Image-Slider:  
<iframe src="https://h5p.org/h5p/embed/248696" width="1090" height="963" frameborder="0" allowfullscreen="allowfullscreen"></iframe><script src="https://h5p.org/sites/all/modules/h5p/library/js/h5p-resizer.js" charset="UTF-8"></script>

Die Grauwertbilder können nach Bedarf kombiniert werden (standardmäßig drei, RGB):  
<iframe src="https://h5p.org/h5p/embed/248682" width="1090" height="935" frameborder="0" allowfullscreen="allowfullscreen"></iframe><script src="https://h5p.org/sites/all/modules/h5p/library/js/h5p-resizer.js" charset="UTF-8"></script>

---
title: 'Sentinel-2, Teil 1'
slug: Sentinel-2-Teil-1
taxonomy:
    category:
        - docs
---
## Allgemeines 
Hinter „Sentinel-2“ verbirgt sich nicht nur ein einzelner Satellit, sondern ein Satellitenpaar. Der erste Satellit 2A startete am 22.06.15, 2B wurde am 07.03.17 ins All befördert. Sie umkreisen die Erde in einem polaren sonnensynchronen Orbit in einer Höhe von ca. 786 km. Die Überflugszeiten sind dabei ähnlich zu Landsat und SPOT-5. Dadurch sind die Datensätze vergleichbarer und lassen auch Zeitreihenanalysen zu.

![Senitel-2](Sentinel-2_composites.png?classes=caption "Künstlerische Darstellung von Sentinel-2. Rechts: Aufnahme aus dem Taunus (Hessen), jeweils in verschiedener Kombination (rot-grün-blau, RGB) verschiedener spektraler Bänder.")
<br><br>

Eckdaten Sentinel-2:

-	Optischer Sensor mit 13 Kanälen – verteilt im elektromagnetischen Spektrum vom sichtbaren Licht über das Nahe Infrarot bis zum Mittleren (Kurzwelligen) Infrarot, ca. 440-2200 nm
-	Bodenauflösung: 10-60 m pro Pixel
-	Hohe temporale Abdeckung (alle 10 Tage für 1 Satellit, 5 Tage mit 2 Satelliten, in höheren Breiten auch 2-3 Tage)
- Die Schwadbreite ist mit 290 km größer als etwa die von Landsat 7 und Landsat 8 (185 km) oder SPOT (120 km). Die herunterladbaren Sentinel-2 Bilder (Tiles, Kacheln) haben allerdings immer eine Größe von 100 x 100 km.

! Zum Kennenlernen bietet sich der [Sentinel Playground](http://apps.sentinel-hub.com/sentinel-playground/?source=S2&lat=40.34366578968397&lng=-3.6512374877929688&zoom=11&preset=1_NATURAL_COL0R&layers=B04,B03,B02&maxcc=20&gain=1.0&gamma=1.0&time=2015-01-01|2018-01-17&atmFilter=&showDates=false) an.
<br><br> 

Globale Abdeckung von Sentinel-2 in der Videoanimation (ESA):
 <style>iframe{width: 100%; max-width: 640px; height: 360px; max-height: 360px}</style>
<div class="embed-responsive embed-responsive-16by9">
<iframe class="embed-responsive-item" src="https://www.esa.int/spaceinvideos/content/view/embedjw/473937" width="640" height="360" frameborder="0" allowfullscreen="allowfullscreen"></iframe>
</div>
<br></br>

![Rostock](Senitnel-2_Rostock.png?classes=caption "Rostock von oben... Sentinel-2 Color Infrarot (CIR) Falschfarbkomposit, RGB: 8-4-3. Der Pfeil markiert (ungefähr) den Campusbereich der Universität Rostock.")
<br><br>

![Tiles](Senitinel-2_Tiles_GoogleEarth.png?classes=caption "Globale Abdeckung mit Sentinel-2 als 100x100 km Kacheln.") 
<br><br>

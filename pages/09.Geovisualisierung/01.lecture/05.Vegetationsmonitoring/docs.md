 # Vegetationsmonitoring

## Spektrale Eigenschaften von Vegetation

Spektrale Kurve und Pflanzenparameter https://h5p.org/node/240206 

![ReflektanzVegetation](/pages/09.Geovisualisierung/Reflectance_Vegetation.png)

## Vegetationsindizes

Die in der Reflektanz (hier: Pixelwerten der einzelnen Kanäle) enthaltenen Informationen ...
Spektrale Indizes verfolgen das Prinzip einer Neuberechnung eines künstlichen Kanals.
um spezielle Features (Merkmale) hervorzuheben 
meist als einfache oder Verhältnisse
Es gibt je nach Sensor und der Anzahl der Kanäle eine Vielzahl an möglichen Kombinationen.
Vegetationsindizes sind robuster gegenüber Beleuchtungsunterschieden oder atmosphärischen und Hintergrundeinflüssen.

Der wohl bekannteste Vegetationsindex ist der Normalized Difference Vegetation Index (NDVI). Er gilt als Standard des Vegetationsmonitorings und macht sich die Unterschiede beim (Gesundheits-)Status von Vegetation besonders im NIR zu nutze.
Der NDVI wird wie folgt berechnet:
NDVI=  (NIR-rot)/(NIR+rot) =(ρ_800-ρ_680)/(ρ_800+ρ_680 )  ,  [-1;1]

- BILD


> __Aufgabe:__ Recherche von Indizes auf der ![Index Database](https://www.indexdatabase.de/) für Sentinel-2 und weitere Sensoren.
Beispiele und Gegenüberstellung!
Vergleichen Sie Indizes auf dem ![Sentinel Playground](https://apps.sentinel-hub.com/sentinel-playground/?source=S2&lat=50.03619419013074&lng=8.040962219238281&zoom=13&preset=1_NATURAL_COL0R&layers=B02,B12,B08&maxcc=20&gain=1.0&gamma=1.0&time=2015-01-01|2018-05-17&atmFilter=&showDates=false) vergleichen.

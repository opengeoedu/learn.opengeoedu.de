 # Vegetationsmonitoring

## Spektrale Eigenschaften von Vegetation

Jede Art von Materie oder Oberfläche reflektiert Strahlung, wenn auch in unterschiedlicher Stärke.
sei es Böden, Wasser (auch als Schnee und Eis), versiegelte Flächen wie Straßen und Gebäude, oder eben *Vegetation* wie Gras, und landwirtschaftliche Flächen oder Wälder.
Trifft Sonnenstrahlung auf ein Objekt oder Erdoberfläche, wird sie transmittiert, absorbiert bzw. in Energie umgwandelt und jeweils in bestimmten Wellenlängen unterschiedlich stark zurückgeworfen.

> Der Begriff der spektralen *Signatur* wird dabei oftmals als etwas Absolutes verstanden, was der Sache nicht immer gerecht wird. Zwar ist die wellenlängenabhängige Reflexion für viele dieser Klassen sehr typische, allerdings spielen eine Reihe von Faktoren wie Betgrachtungswinkel und Position der Sonne, Aufnahmezeitpunkt und Sensortyp entscheidende Rollen. Hinzu kommen die unterschiedlichen Ausprägungen des Zielobjekts.
Nehmen wir Waldbäume als Beispiel. Sie stehen mal dicht gedrängt, mal mit sehr großen Lücken zwischeneinander, mal auf flacher Ebene, mal an steilen Hängen; Jungpflanzen erscheinen dabei anders als alte Bäume. Und obwohl Unterschiede zwischen Baumarten signifikant sein können, gibt es nicht *die eine* Signatur für Fichte oder Buche. Der (situatuationsbedingte) Sachverhalt ist vielfältiger. Es kann nicht schaden, dies im Hinterkopf zu behalten.  

Die Reflektanzkurve von grüner gesunder Vegetation hat eine charakteritische Form und ist geprägt von Faktoren wie Konzentration an Blattpigmenten, Wassergehalt und Blattaufbau. Die folgende Abbildung zeigt das typische Erscheinen anahnd einer spektralen Kurve eines Eichenblatts (Kokaly et al. 2017) und den Einfluss der Faktoren.

<iframe src="https://h5p.org/h5p/embed/240206" width="1091" height="682" frameborder="0" allowfullscreen="allowfullscreen"></iframe><script src="https://h5p.org/sites/all/modules/h5p/library/js/h5p-resizer.js" charset="UTF-8"></script>

<br><br>

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


!!!! __Aufgabe:__ Recherche von Indizes auf der ![Index Database](https://www.indexdatabase.de/) für Sentinel-2 und weitere Sensoren.
Beispiele und Gegenüberstellung!
Vergleichen Sie Indizes auf dem ![Sentinel Playground](https://apps.sentinel-hub.com/sentinel-playground/?source=S2&lat=50.03619419013074&lng=8.040962219238281&zoom=13&preset=1_NATURAL_COL0R&layers=B02,B12,B08&maxcc=20&gain=1.0&gamma=1.0&time=2015-01-01|2018-05-17&atmFilter=&showDates=false) vergleichen.

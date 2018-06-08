---
title: Datenveröffentlichung
published: false
taxonomy:
    category:
        - docs
---
Schlussendlich muss jedes Projekt irgendwo veröffentlicht werden. Möglicherweise in einem wissenschaftlichen Journal, auf einer Projektwebseite, oder auf einem von einer Institution angebotenen WebGIS. In allen Fällen muss unterschiedlich vorgegangen werden.

Für wissenschaftliche Publikationen benötigt man Varianten der Karten, die in das Paper selbst eingefügt werden können. Da diese jedoch oft zu klein, und nicht maschinenlesbar sind, sollten die Daten auch auf einer privaten Webseite, oder auf Institutsseiten veröffentlich werden. Teilweise bieten auch die Journals selbst Speicherplatz an.

Haben Sie Zugriff auf ein WebGIS, können Sie ihre Daten auch hier hochladen. Formate wie GeoJSON und Shapefiles sind über viele GI-Systeme kompatibel. Hierbei müssen Sie beachten, dass Sie meist nur die erzeugten Daten hochladen, nicht jedoch ihre Kartenvisualisierungen. Diese hängen häufig stärker vom genutzten System ab und sind selten kompatibel. Hier müssen Sie entweder im WebGIS ihren genutzten Stil (Farben, Symbole, etc...) neu einstellen, oder beide GIS unterstützen ein Austauschformat wie z.B. SLD. In dieses können Sie dann von Ihrem Desktop-GIS exportieren, und es im WebGIS importieren.

Außerdem gibt es die Methode, die Daten direkt auf einer Webseite zu veröffentlichen. Das kann eine private, oder eine Webseite einer Organisation/eines Institutes sein. Durch moderne Webtechnologien kann dies komplett frei von externen Plugins mit einer Mischung aus HTML, CSS und Javascript erreicht werden. Zwei Bibliotheken erleichtern einem die Arbeit hier erheblich:
* [Leaflet.js](http://leafletjs.com/) und
* [OpenLayers](https://openlayers.org/).
Diese bieten alle Funktionalitäten, die man für Karten wie wir sie hier erstellt haben benötigt, an und sind zudem offen und frei verfügbar. Die Karten sind interaktiv, Layer können ab- und angeschaltet werden, und ein Klick auf bestimmte Features gibt Rückschlüsse auf die zugrundeliegenden Daten. An dieser Stelle werden die Schritte, die Sie in der Datenaufbereitung durchlaufen haben, wichtig, da diese hier entscheidend dafür sind ob der Nutzer die Daten gut verwenden kann.

Es ist trotz dieser Bibliotheken jedoch nicht trivial, eine Karte per Hand zu übersetzen, vor allem wenn man keine weitere Erfahrung mit Webtechnologien hat. Einige GIS bieten hier Exportwerkzeuge an, welche diesen Schritt fast komplett automatisieren. So ist für [QGIS](https://www.qgis.org) ein Plugin namens [qgis2web](https://plugins.qgis.org/plugins/qgis2web/) erhältlich, welches die Daten mitsamt passendem Stil in OpenLayers und Leaflet übersetzen kann.

Liegt die entsprechende Seite dann vor, kann sie entweder in eine existierende Seite eingebunden, oder nach einigen Anpassungen direkt veröffentlicht werden. Zu Details hierzu schauen Sie sich das [Modul Webtechnologien](https://www.opengeoedu.de/imaufbau) an.

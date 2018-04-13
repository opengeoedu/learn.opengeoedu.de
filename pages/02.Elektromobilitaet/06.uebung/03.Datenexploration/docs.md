---
title: Datenexploration
taxonomy:
    category:
        - docs
---
Will man wie vorher angesprochen nun eine Auswertung mit offenen Daten durchführen, stellt sich die Frage wie man diese Daten findet. Dies hängt besonders von benötigtem Datentyp, Thematik und benötigter Datenqualität ab.

Im Allgemeinen beginnt man eine solche Recherche entweder über einschlägige Suchmaschinen wie z.B., durch das Nachfragen bei Experten, oder durch die direkte Nutzung von Datenportalen. Letzteres ist offensichtlich nur möglich wenn man sich schon vorher mit ähnlichen Themen oder Open Data allgemein befasst hat.

Ein prominentes Beispiel für einen solchen Anlaufpunkt für offene Geodaten ist OpenStreetMap.[^1] Die Datenbanken dieses internationalen Projektes enthalten eine Vielzahl von Daten aus einer Vielzahl von Domänen. Hierzu wird es später ein konkreteres Beispiel und Erklärungen geben. Ein Beispiel für ein spezifischeres Portal ist die mCloud des Bundesamtes für Verkehr und digitale Infrastruktur, eine "Rechercheplattform zu offenen Daten aus dem Bereich Mobilität und angrenzender Themen".[^2] Zu finden sind hier Daten von Verkehrsinfrastruktur bis Wetteraufzeichnungen.

Zusätzlich zu den allgemeinen Kriterien von offenen Daten, die im vorherigen Kapitel genannt wurden, soll nachfolgend noch auf einige speziellere Merkmale eingegangen werden.

## Dateiformate
Soll eine repräsentative Auswertung mit sinnvollen Datenquantitäten erstellt werden, so ist es von hoher Wichtigkeit dass die Daten in guter, maschinenlesbarer Form vorliegen. Erlaubt ein Portal keinen Datenexport in allgemein verwendete Datenformate, ist es kaum zu gebrauchen.

Die häufigsten Datenformate, auf die wir hier stoßen werden, sind:
* **.shp**: ESRI-Shapefiles bestehen meist aus mehreren Einzeldateien und speichern sowohl Geometrie als auch Attribute. Die Geometrien bestehen aus Punkten, Linien und Polygonen, und sind nicht topologisch, d.H. Lagebeziehungen zwischen verschiedenen Geometrien werden nicht explizit abgespeichert.[^3]

* **.geojson**: GeoJSON, ein Austauschformat für geografische Vektordaten mit weiteren Attributen, basierend auf der Javascript Object Notation (JSON).[^4]

* **.kml**: Dateiformat der Keyhole Markup Language, einer XML-basierten Beschreibungssprache für Geodaten, die sowohl Vektor- als auch Rasterdaten enthalten kann.[^5]

* **.csv**: Dateiformat für Comma Separated Values, ein eine einfache Methode strukturierte Daten im Textformat zu speichern. Ist wie eine Tabelle nach Zeilen und Spalten geordnet, und ermöglicht verschiedene Sonderzeichen um die Werte zu separieren.

* **.xlsx**: Microsoft Excel-XML Format, Standardformat neuerer Excel-Versionen als Ersatz für alte Binärformate, offen definiert mittels XML.

Alle diese Formate werden typischerweise von modernen Geo-Informationssystemen unterstützt. Hat man die Wahl zwischen mehreren Formaten, sollte man überlegen wie komplex die folgenden Auswertungen werden. Arbeitet man z.B. mit ArcGIS, erlauben Shapefiles einige fortgeschrittene Vorgänge, wie z.B. das Einbinden in eine Geodatabase, um Topologieinformationen hinzuzufügen. GeoJSON wiederum ist in webbasierten Anwendungen sehr einfach zu verarbeiten und gut zum Austausch über Schnittstellen geeignet.

## Lizenzen
Datenlizenzen sind ein komplexes Thema. Aufgrund der Popularität von offenen Daten, offener Software und offenen Standards, wurde wiederholt versucht ein für Laien verständliches System aufzubauen. Die verschiedenen Lizenzmodelle haben dabei oft frei verfügbare, vorgefertigte Lizenzpakete an denen sich Nutzer bedienen können.

Ein Beispiel für ein solches System wäre Creative Commons. Sicher haben Sie schon einmal ein Symbol wie dieses gesehen:
![](cc-by-sa.png)

Ein solches Symbol definiert einen Lizenzvertrag für das Werk dem es beiliegt. Das spezielle Symbol, das hier gezeigt wird, sagt aus dass der Urheber bei jeder Nutzung explizit genannt werden muss (BY), und dass ein Werk, das Teile des hier lizenzierten Werkes nutzt, auch mit der selben Lizenz veröffentlicht werden muss. Abgesehen von diesen Faktoren können das Ursprungswerk/die Ursprungsdaten frei verändert, kombiniert und auch in kommerziellen Produkten genutzt werden.[^6]

Trotz dieser Vereinfachung gibt es hier immer wieder Stolpersteine und Missverständnisse. Gerade für kommerzielle Nutzungen macht es immer Sinn vorher einen entsprechenden Anwalt zu kontaktieren.

## Datenqualität & -aktualität
Ein Datensatz kann gut zugreifbar, in einem passenden Dateiformat und mit freier Lizenz vorliegen, aber trotzdem ungeeignet sein. Demographische/Strukturelle Auswertungen wie hier angestrebt, machen nur Sinn wenn die Daten auch wirklich die Realität möglichst gut wiederspiegeln. Findet man z.B. verschiedene Datensätze, und stellt fest dass einer oder mehrere weitaus weniger Daten enthalten als der Rest, ist Vorsicht geboten. Teilweise können Metadaten von nicht offen verfügbaren, aber offiziell gepflegten Datensätze wichtige Anhaltspunkte bieten ob die offenen Datensätze überhaupt vollständig und korrekt genug sind um ein gegebenes Problem mit ihnen zu lösen.

## Elektromobilität
Auf den folgenden drei Seiten werden wir den Explorations- und Akquisitionsprozess für die für unsere Auswertung benötigten Daten durchlaufen. Jede Seite zielt auf einen Datensatz ab, und ist mit einer Aufgabe assoziiert die zu lösen ist.

Quellen:

[^1]: OpenStreetMap https://www.openstreetmap.org
[^2]: mCloud https://www.mcloud.de/
[^3]: ArcMap Handbuch - http://desktop.arcgis.com/de/arcmap/10.3/manage-data/shapefiles/what-is-a-shapefile.htm
[^4]: RFC 7946 - https://tools.ietf.org/html/rfc7946
[^5]: Open Geospatial Konsortium, KML-Referenz - http://www.opengeospatial.org/standards/kml/
[^6]: CC-Lizenz https://creativecommons.org/licenses/

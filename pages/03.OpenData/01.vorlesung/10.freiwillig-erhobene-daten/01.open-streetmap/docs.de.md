---
title: 'OpenStreetMap'
slug: openstreetmap
taxonomy:
    category: docs
---
[![OSM](osm_logo.png)](https://www.openstreetmap.org/about)
OpenStreetMap ist ein im Jahre 2004 gegründetes Projekt mit dem Ziel, eine freie Weltkarte zu erschaffen. OSM-Kartierer erzeugen weltweit Daten über Straßen, Eisenbahnen, Flüsse, Wälder, Häuser und alles andere, was gemeinhin auf Karten zu sehen ist. Dieses Projekt soll die für kommerzielle Geodaten oftmals vorhandenen Barrieren z. B. bezüglich Nutzungsrechten und Kosten überwinden. Im Jahr 2006 wurde die OpenStreetMap Foundation als Non-Profit-Organisation gegründet, die durch Spenden und sonstige Gelder die Infrastruktur aufrechterhält ([www.openstreetmap.org](http://www.openstreetmap.org/), [F. Ramm und J. Topf, (2008)](/opendata/vorlesung/literatur#ramm2008openstreetmap)). OSM wird ganz wesentlich durch das Engagement seiner Nutzergemeinschaft geprägt. Im OSM Wiki sind im Januar 2020 über 5 Millionen Nutzer registriert. Die OpenStreetMap-Daten darf jeder lizenzkostenfrei einsetzen und beliebig weiterverarbeiten.

Technologisch besteht das OSM-Projekt aus vier Komponenten:
* **Editoren** zur Dateneingabe und Datenpflege, im Wesentlichen per GNSS-Import oder mittels eigener Digitalisierungen (z. B. Potlatch als flashbasierter Online-Editor oder JOSM als Java Stand-alone-Applikation).
* **Datenbankserver** z.B. mit einer MySQL-Datenbank am University College London. Auf die Daten kann entweder mittels OSM-API direkt oder in einem spezifischen XML-Dateiformat (\*.osm) auf einen Datenbankabzug zugegriffen werden.
* **Kartenrenderer** sind für das Erstellen der Karten zuständig. Der osmarender erzeugt z.B. aus den OSM-Daten SVG-Graphikdaten. Mapnik ist ein Open-Source-Kartenrenderer.
* **Viewer**, die im Browser verwendet werden, um die OSM-Karte anzuzeigen.

Neben den eigenen Geodaten stehen auch freie Daten z. B. Satellitenbilddaten oder Geodaten, die keinen Lizenzrechten unterstehen, zur Verfügung. [P. Neis und A. Zipf, 2008](/opendata/vorlesung/literatur#neis2008openstreetmap), diskutieren Vor- und Nachteile der OSM-Geodaten. Vorteile sind z.B. weltweit freie, teilweise sehr spezielle Geodaten mit großer Aktualität und oftmals ausreichender Genauigkeit bei schnellem, aber unkontrolliertem Anwachsen der Geodaten. Nachteil ist der stark unterschiedliche weltweite Abdeckungsgrad und die heterogene Qualität der Geodaten bei uneinheitlicher Semantik und mit Hindernissen aufgrund des Lizenzmodells für Anreicherungen mit kommerziellen Daten.

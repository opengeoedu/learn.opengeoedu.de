---
title: 'Open Street Map'
taxonomy:
    category: docs
---
[![OSM](osm_logo.png)](https://www.openstreetmap.org/about)
OpenStreetMap ist ein im Jahre 2004 gegründetes Projekt mit dem Ziel, eine freie Weltkarte zu erschaffen. OSM-Kartierer erzeugen weltweit Daten über Straßen, Eisenbahnen, Flüsse, Wälder, Häuser und alles andere, was gemeinhin auf Karten zu sehen ist. Dieses Projekt soll die für kommerzielle Geodaten oftmals vorhandenen Barrieren z. B. bezüglich Nutzungsrechten und Kosten überwinden. Im Jahr 2006 wurde die OpenStreetMap-Foundation als Non-Profit-Organisation gegründet, die durch Spenden und sonstige Gelder die Infrastruktur aufrechterhält ([www.openstreetmap.org](http://www.openstreetmap.org/), F. Ramm und J. Topf, (2008)). OSM wird ganz wesentlich durch das Engagement seiner Nutzergemeinschaft geprägt. Im OSM Wiki sind im August 2017 über 3 Millionen Nutzer registriert. Die OpenStreetMap-Daten darf jeder lizenzkostenfrei einsetzen und beliebig weiterverarbeiten. Die Daten unterliegen der Open Database License ([ODbL](https://opendatacommons.org/licenses/odbl/summary/)).

Technologisch besteht das OSM-Projekt aus vier Komponenten:
* Editoren zur Dateneingabe und Datenpflege, im Wesentlichen per GNSS-Import oder mittels eigener Digitalisierungen (z. B. Potlatch als flashbasierter Online-Editor oder JOSM als Java Stand-alone-Applikation).
* Datenbankserver mit einer MySQL-Datenbank am University College London. Auf die Daten kann entweder mittels OSM-API direkt oder in einem spezifischen XML-Dateiformat (\*.osm) auf einen Datenbankabzug zugegriffen werden.
* Kartenrenderer sind für das Erstellen der Karten zuständig. Der osmarender erzeugt z.B. aus den OSM-Daten SVG-Graphikdaten. Mapnik ist ein Open-Source-Kartenrenderer.
* Viewer, die im Browser verwendet werden, um die OSM-Karte anzuzeigen.

Neben den eigenen Geodaten stehen auch freie Daten z. B. Satellitenbilddaten oder Geodaten, die keinen Lizenzrechten unterstehen, zur Verfügung. P. Neis und A. Zipf, 2008, diskutieren Vor- und Nachteile der OSM-Geodaten. Vorteile sind z.B. weltweit freie, teilweise sehr spezielle Geodaten mit großer Aktualität und oftmals ausreichender Genauigkeit bei schnellem, aber unkontrolliertem Anwachsen der Geodaten. Nachteil ist der stark unterschiedliche weltweite Abdeckungsgrad und die heterogene Qualität der Geodaten bei uneinheitlicher Semantik und mit Hindernissen aufgrund des Lizenzmodells für Anreicherungen mit kommerziellen Daten.

## OSM-Datenmodell
Das OSM-Datenmodell kennt im Wesentlichen die Objekttypen Knoten (Node), Linien (Way) und Beziehungen (Relation). Flächenhafte Objekte werden durch Linienschluss erzeugt. Den einzelnen Objekten können Attribute zugeordnet werden. Mittels einer Relation können Beziehungen zwischen den Objekten modelliert werden. Da es im Wesentlichen um die Erhebung von Verkehrsdaten geht, ist eine Art Objektartenkatalog (Map Features) definiert, der Straßen (Highway), Wasserstraßen (Waterway), Schienenwege (Railway) kennt und um flächenhafte Nutzungsarten wie Freizeitflächen, Plätze, Landnutzung u.a. ergänzt ist. OSM lässt aber prinzipiell jegliche Schlüssel und Werte zu, individuelle Erweiterungen werden aber nicht unbedingt unterstützt und visualisiert. Alle Daten, die in der OSM-Datenbank eingestellt sind, unterstehen der Lizenz Creative Commons Attribute Share Alike 2.0 (creativecommons.org/licenses/by-sa/2.0/).

[center]![](Datenmodell.png)[/center]

Die Einträge bestehen jeweils aus einem Tag, der eine Kombination von Schlüsselbegrff (Key) und Werteintrag (Value) darstellt.

### Node (Knoten)
![](node.png)

### Ways (Linien)
![](ways.png)

### Relations (Verknüpfungen)
![](relations.png)

! Weiterführende Informationen unter:
! * [www.openstreetmap.org](http://www.openstreetmap.org/)
! * [OpenStreetMap Wiki](http://wiki.openstreetmap.org/wiki/DE:Hauptseite?uselang=de)

!! Recherchieren Sie in OSM an ihrem eigenen Wohnort und machen sich mit den vorhandenen Inhalten und der Aussagekraft der OSM-Daten vertraut.

## OSM in Rostock
Die folgende Abbildung zeigt einen Ausschnitt aus OpenStreetMap am Standort Rostock.

[![Rostock in Open Street Map
](HRO_OSM.png?classes=caption "Rostock in Open Street Map")](https://www.openstreetmap.org/#map=11/54.0928/12.1275)

## Offene Regionalkarte MV (ORKa.MV)
Die Offene Regionalkarte Mecklenburg-Vorpommern (ORKa.MV) ist ein offener Kartendienst aus der Verwaltung (OpenGovData), in dem Katasterdaten und OpenStreetMap-Daten kombiniert werden.
Realisiert wurde die ORKa.MV durch die Landkreise und kreisfreien Städte in Mecklenburg-Vorpommern (LkKfS-MV), betreut und gehostet wird das Projekt durch das Kataster-, Vermessungs- und Liegenschaftsamt der Hansestadt Rostock ([https://www.orka-mv.de](https://www.orka-mv.de/)).

[center]
[![](ORKa.MV.png?classes=caption "ORKa.MV-Ausschnitt (beachten Sie die Urheberrechtsvermerke rechts unten)")](https://www.orka-mv.de/app/#/map=3/312198.17526/5997123.06413/EPSG:25833/S)
[/center]

>Die von der Hansestadt Rostock angebotene und in ihrem Eigentum befindliche ORKa.MV unterliegt der freien Lizenz Creative Commons Namensnennung 4.0 ([CC BY 4.0](https://creativecommons.org/licenses/by/4.0/deed.de)). Damit ist es gestattet die ORKa.MV zu nutzen, in jedwedem Format oder Medium zu vervielfältigen und weiterzuverbreiten sowie zu remixen, zu verändern und auf der ORKa.MV aufzubauen, und zwar für beliebige Zwecke, auch und vor allem kommerziell. Allein der Quellenvermerk ist stets und bei jedweder Art der Nutzung erforderlich und wie folgt auszugestalten:

> `Kartenbild © Hansestadt Rostock (CC BY 4.0) | Kartendaten © OpenStreetMap (ODbL) und LkKfS-MV.`
> <cite>Zitat aus den [Nutzungsbedingungen der ORKa.MV](https://www.orka-mv.de/nutzungsbedingungen.html)</cite>

!! Vergleichen Sie einen Ausschnitt aus Rostock zwischen OpenStreetMap und der Offenen Regionalkarte. Bezüglich welcher Themen unterscheiden sich diese?
<!--
[ui-accordion independent=true open=none][ui-accordion-item title="OSM-Datenmodell"]
Das OSM-Datenmodell kennt im Wesentlichen die Objekttypen Knoten (Node), Linien (Way) und Beziehungen (Relation). Flächenhafte Objekte werden durch Linienschluss erzeugt. Den einzelnen Objekten können Attribute zugeordnet werden. Mittels einer Relation können Beziehungen zwischen den Objekten modelliert werden. Da es im Wesentlichen um die Erhebung von Verkehrsdaten geht, ist eine Art Objektartenkatalog (Map Features) definiert, der Straßen (Highway), Wasserstraßen (Waterway), Schienenwege (Railway) kennt und um flächenhafte Nutzungsarten wie Freizeitflächen, Plätze, Landnutzung u.a. ergänzt ist. OSM lässt aber prinzipiell jegliche Schlüssel und Werte zu, individuelle Erweiterungen werden aber nicht unbedingt unterstützt und visualisiert. Alle Daten,  in der OSM-Datenbank unterstehen der
[Open Data Commons Open Database License](https://opendatacommons.org/licenses/odbl/) (ODbL), die kartographische Darstellung sind unter der [Creative Commons Attribute Share Alike 2.0](creativecommons.org/licenses/by-sa/2.0/) (CC BY-SA 2.0) lizensiert.

[center]![](Datenmodell.png)[/center]

Die Einträge bestehen jeweils aus einem Tag, der eine Kombination von Schlüsselbegrff (Key) und Werteintrag (Value) darstellt.

[center]
![](node.png)**Node (Knoten)**
![](ways.png)**Ways (Linien)**
![](Relations.png)**Relations (Verknüpfungen)**
[/center]

! Weiterführende Informationen unter:
! * [www.openstreetmap.org](http://www.openstreetmap.org/)
! * [OpenStreetMap Wiki](http://wiki.openstreetmap.org/wiki/DE:Hauptseite?uselang=de)

!!! Recherchieren Sie in OSM an ihrem eigenen Wohnort und machen sich mit den vorhandenen Inhalten und der Aussagekraft der OSM-Daten vertraut.
[/ui-accordion-item]
[ui-accordion-item title="OSM in Rostock"]
Die folgende Abbildung zeigt einen Ausschnitt aus OpenStreetMap am Standort Rostock. Recherchieren Sie in OSM an ihrem eigenen Wohnort und machen sich mit den vorhandenen Inhalten und der Aussagekraft der OSM-Daten vertraut.
[center]
[![Rostock in Open Street Map
](HRO_OSM.png)](https://www.openstreetmap.org/#map=11/54.0928/12.1275)**Rostock in Open Street Map**
[/center]
[/ui-accordion-item]

[ui-accordion-item title="Offene Regionalkarte MV (ORKa.MV)"]
Die Offene Regionalkarte Mecklenburg-Vorpommern (ORKa.MV) ist ein offener Kartendienst aus der Verwaltung (OpenGovData), in dem Katasterdaten und OpenStreetMap-Daten kombiniert werden.
Realisiert wurde die ORKa.MV durch die Landkreise und kreisfreien Städte in Mecklenburg-Vorpommern (LkKfS-MV), betreut und gehostet wird das Projekt durch das Kataster-, Vermessungs- und Liegenschaftsamt der Hansestadt Rostock ([https://www.orka-mv.de](https://www.orka-mv.de/)).

[center]
[![](ORKa.MV.png)](https://www.orka-mv.de/app/#/map=3/312198.17526/5997123.06413/EPSG:25833/S)**ORKa.MV-Ausschnitt (beachten Sie die Urheberrechtsvermerke rechts unten)**
[/center]

>Die von der Hansestadt Rostock angebotene und in ihrem Eigentum befindliche ORKa.MV unterliegt der freien Lizenz Creative Commons Namensnennung 4.0 ([CC BY 4.0](https://creativecommons.org/licenses/by/4.0/deed.de)). Damit ist es gestattet die ORKa.MV zu nutzen, in jedwedem Format oder Medium zu vervielfältigen und weiterzuverbreiten sowie zu remixen, zu verändern und auf der ORKa.MV aufzubauen, und zwar für beliebige Zwecke, auch und vor allem kommerziell. Allein der Quellenvermerk ist stets und bei jedweder Art der Nutzung erforderlich und wie folgt auszugestalten:

> `Kartenbild © Hansestadt Rostock (CC BY 4.0) | Kartendaten © OpenStreetMap (ODbL) und LkKfS-MV.`
> <cite>Zitat aus den [Nutzungsbedingungen der ORKa.MV](https://www.orka-mv.de/nutzungsbedingungen.html)</cite>

!!! Vergleichen Sie einen Ausschnitt aus Rostock zwischen OpenStreetMap und der Offenen Regionalkarte. Bezüglich welcher Themen unterscheiden sich diese?

[/ui-accordion-item]
[/ui-accordion] -->

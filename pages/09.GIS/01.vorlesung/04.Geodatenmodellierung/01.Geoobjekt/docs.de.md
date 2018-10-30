---
title: Das Geoobjekt
taxonomy:
    category:
        - docs
---
Geo-Informationssysteme folgen heute meist einer objektbasierten Sicht. Die Normung definiert hierzu das Geoobjekt (engl. spatial feature oder spatial object, deutsch auch raumbezogenes oder räumliches Objekt genannt, vgl. DIN EN ISO 19109, 2013)).

„Unter einem Geoobjekt wird eine aus Nutzersicht in einem GIS enthaltene und für seine Arbeit bedeutsame Einheit verstanden, welche mittels Geodaten eindeutig beschreibbar und in der Realität identifizierbar und referenzierbar ist. Das Geoobjekt stellt i.d.R. das Abbild einer konkreten physisch, geometrisch oder begrifflich begrenzten Einheit der Erde dar, ist in dem Sinne also ein Unikat in der realen Welt und besitzt eine eindeutige Identität. Ein Geoobjekt kann elementar oder beliebig komplex zusammengesetzt sein und die beschreibenden Attribute des Geoobjekts können sowohl quantitativ (z. B. geometrische Angaben) als auch qualitativ (etwa Angabe eines Namens oder eines Bodentyps) sein. Jedes Geoobjekt kann einer bestimmten Objektklasse zugeordnet werden.“ (Bill, 2016: 18-19)

Gängige Geoobjekte in der Stadt- und Raumentwicklung können z. B. sein: Gebäude, Parzelle, Baublock, Stadtquartier, Stadt. Sie werden durch die folgenden Komponenten definiert, was am Beispiel Gebäude illustriert wird:

+ Geometrische Eigenschaften beschreiben die Lage und Form (als Punkt, Linie, Fläche, Körper) von Objekten im Raum. So kann das Gebäude durch sein Umringspolygon, eine Fläche angegeben durch eine Folge von 2D-Koordinaten als Vektordaten, definiert sein.
+ Topologische Eigenschaften beschreiben die relativen räumlichen Beziehungen von Objekten zueinander, wobei von der Geometrie abstrahiert wird. Somit ergänzt die Topologie (Knoten, Kanten, Maschen, Nachbarschaften) die Lage und Form aus der Geometrie noch durch Nachbarschaftsaussagen. Das Gebäude könnte topologisch durch den Datentyp 2-Zelle (Masche) sowie die Nachbarschaftsbeziehungen zur Straße und den anliegenden Nutzungsarten beschrieben werden.
+ Thematische Eigenschaften (als Teil der Semantik eines Objekts) entsprechen beschreibenden Merkmalen, Sachdaten oder Attributen. Den Objekten können unterschiedliche thematische Beschreibungen zugeordnet werden, zum Geoobjekt "Gebäude" z.B. die beschreibenden Attributen "Grundfläche, Hausnummer, Stockwerkszahl, Baujahr, Grundfläche, Gebäudewert".
+ Temporale Eigenschaften beschreiben den Zeitpunkt oder den Zeitraum, für den die übrigen Eigenschaften gelten. Grundlage hierfür legt die Norm DIN EN ISO 19108, 2009. Die Dynamik eines Gebäudes kann z. B. durch Angabe des Baujahres, des Zeitpunktes der letzten Sanierung oder durch seine geplante Nutzungsdauer angegeben werden. Natürlich können sich auch alle anderen Komponenten des Objekts mit der Zeit ändern, z. B. die Geometrie durch einen nachträglich angebrachten Anbau, wodurch sich dann auch das Attribut Grundfläche ändert.
+ Metainformationen beschreiben die Objektinformationen und geben Auskunft über deren Hintergründe und Verwendbarkeit, so z. B. zu deren thematischer Einordnung, deren IT-mäßiger Strukturierung, der Qualität und Aktualität der das Objekt beschreibenden Informationen, der Form der Datenerfassung u. v. m. Grundlage hierfür legt heute die Norm DIN EN ISO 19115, 2011 fest.

![Geoobjekt](GIS14.png)

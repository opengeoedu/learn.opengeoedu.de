---
title: Ladestationen
published: false
taxonomy:
    category:
        - docs
---
Da es sowohl für Anbieter als auch für Privatpersonen von Vorteil ist, wenn die Ladestationen gut auffindbar sind, ist es nicht unwahrscheinlich hier einen guten Datensatz zu finden. Außerdem sind sie sehr einfach zu verzeichnen, da Punktdaten mit einigen Attributen hier völlig ausreichen.

Tatsächlich gibt es hier auch mehrere Anbieter, die schon mit einer einfachen Suchmaschinen-Anfrage gut auffindbar sind. Doch natürlich müssen wir nach wie vor Lizenzen, Vollständigkeit, Aktualität und Verfügbarkeit beachten. Speziell zeigt sich hier, dass es viele Datensätze gibt, welche nur das Anzeigen und Hinzufügen von Ladestationen auf Karten ermöglichen, jedoch nicht das Herunterladen eben dieser Daten.

Die folgende Tabelle enthält einen Überblick über verschiedene Anbieter, meist fokussiert auf den deutschen Raum.

|  Anbieter  |  Anzahl Stationen in Deutschland  |  Aktualität  |  Verfügbarkeit  |  URL  |
|  :-----          |  :-----          |  :-----          |  :-----          |  :-----          |
|  LemNet e.V. |  >7500	| aktuell |	Nur Karte |	https://www.lemnet.org/de |
|  Bundesverband der Energie- und Wasserwirtschaft |  3206 (7407 Ladepunkte) |	aktuell	| Nur Karte | https://www.bdew.de/internet.nsf/id/bdew-erhebung-elektromobilitaet-de |
|  GoingElectric |  8860 (26402 Ladepunkte)	| aktuell |	Nur Karte und Liste |	http://www.goingelectric.de/ |
|  Smarttanken | ? |	aktuell	| Nur Karte	| www.smarttanken.de |
|  e-stations.de | ~4000 | aktuell	| Nur Karte und Liste |	https://e-stations.de/ |
|  E-Tankstellenfinder |	4340 |	aktuell |	Nur Karte |	https://e-tankstellen-finder.com |
|  OpenStreetMap	| 3566	| ?	| Rohdaten über Overpass API	| Datenbank, über tag: amenity=charging_station |

Neben OSM kommt hier nur OpenChargeMap in Frage, da diese aktueller und vollständiger ist. Das einzige Problem hier, und gleichzeitig der Grund, dass diese Daten nicht schon in OSM eingebunden wurden, ist dass jeder Datensatz seine eigene Lizenz hat. Will man wirklich nur mit offenen Daten arbeiten muss dieses in der Datenanfrage entsprechend beachtet werden. Aber angesichts der Vielzahl von Offenen Datenlizenzen ist auch dann noch keine komplette rechtliche Klarheit vorhanden. Siehe Diskussionen unter.[^1]

Letztendlich sind beide Datensätze ausreichend groß um gute Analysen zu ermöglichen, im Falle von OSM läuft man jedoch größere Gefahr in Regionen, in denen weniger Nutzer aktiv sind, ein falsches Bild zu erlangen. Für diese Übung werden wir jedoch trotzdem die OSM-Daten verwenden, um den Umgang mit deren Schnittstellen zu lernen.

## OSM-Datenbankanfragen
OSM bietet verschiedene Programmschnittstellen (kurz API - "Application Programming Interface") an, die unterschiedliche Möglichkeiten und Eigenschaften haben. Zugrunde liegt allem eine REST-API, mit der vor allem Daten in der OSM-Datenbank editiert werden können.[^2] REST steht für "Representational State Transfer", und bedeutet dass eine API mittels einer festgeschriebenen, text-basierten Anzahl von Befehlen bedient werden kann, wobei diese Befehle keinen Zustand besitzen, sondern jeweils einzeln abgehandelt werden.

Da eine API für Editier-Anfragen jedoch eine bei weitem andere Ausrichtung hat als reines Auslesen, gibt es zusätzlich weitere APIs, welche speziell auf das massenhafte Lesen von Datensätzen ausgerichtet sind. Zuerst gab es hier XAPI, eine modifizierte Version dieser Editier-Schnittstelle. Da diese in vielen Fällen als nicht ideal angesehen wurde, gibt es nun die Overpass API, welche effizienter und flexibler arbeitet als XAPI, jedoch weiterhin Kompatibilität mit dieser anbietet.[^3]

Für die Zwecke dieser Aufgabe wollen wir nur eine Leseoperation durchführen, jedoch auf einen potentiell sehr großen Datensatz. Daher liegt es nahe die Overpass API zu nutzen. Speziell bietet sich hier das Web-Tool Overpass Turbo an, da es einfach zu bedienen ist, nicht installiert werden muss und einen Anfragen-Wizard bietet, der dem Nutzer einige Arbeit abnehmen kann. So muss man für eine Anfrage nur den internen OSM-Namen der gewünschten Objekte kennen (Ladestationen sind gekennzeichnet als "`amenity=charging_station`"), es im Wizard auswählen, den gewünschten Bereich in der OSM-Karte markieren, und dann die entstandene Anfrage ausführen. Es muss nur darauf geachtet werden dass der gewünschte Datensatz nicht zu groß wird, da die API gewisse Begrenzungen eingebaut hat um Missbrauch zu vermeiden. Wird auch bei einem moderaten Datensatz kein Ergebnis zurückgegeben, ist die standardmäßig eingestellte Timeout-Zeit möglicherweise zu kurz, und muss am Anfang der Anfrage mittels [timeout:xx] ausreichend hoch gestellt werden. Sind die Daten dann auf der Karte zu sehen, können sie auf verschiedene Weisen exportiert werden.

Der ursprüngliche Anwendungszweck für Overpass Turbo ist das Testen und Entwerfen von Overpass-Anfragen, damit diese später in automatisch laufenden Skripten sicher verwendet werden können. Für einen Schnitt eines bestimmten Datensatzes zu einem einzigen Zeitpunkt ist sie jedoch völlig ausreichend.

Quellen:
[^1]: http://wiki.openstreetmap.org/wiki/OpenChargeMap, Zugriff: 26.07.2017
[^2]: http://wiki.openstreetmap.org/wiki/API_v0.6, Zugriff: 03.08.2017
[^3]: http://wiki.openstreetmap.org/wiki/Overpass_API, Zugriff 03.08.2017

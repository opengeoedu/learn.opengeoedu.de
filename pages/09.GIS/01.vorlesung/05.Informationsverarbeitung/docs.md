---
title: Informationsverarbeitung in GIS
menu: Informationsverarbeitung
taxonomy:
    category:
        - docs
---
Mit dem Oberbegriff ‚GIS’ lassen sich verschiedene Bedeutungen assoziieren:

- die zugrundeliegende Technologie, also die Basistechniken aus der Informatik gekoppelt mit in den Anwendungsgebieten speziell entwickelten Verfahren,
- die in den Anwendungsgebieten initiierten Vorhaben zum Aufbau und zur Nutzung von Geodaten und
- die Vielzahl der am Markt verfügbaren Produkte (vgl. speziell hierzu Bill, 2016, S. 144 ff., Harzer, 2017).


Im Wesentlichen muss ein GIS das gesamte Funktionalitätenspektrum von der Datenerfassung über die Datenverwaltung und die Datenanalyse bis zur Datenpräsentation bedienen, klassisch als das EVAP-Modell der GIS-Verarbeitungskette bezeichnet (Bill, 2016). Es muss also einen Anwender dabei unterstützen, seine eigenen und andere relevante Probleme bezogene Daten in das System einzugeben, mit diesen Daten dann Auswertungen zu betreiben und die Ergebnisse in einer geeigneten Form (analog auf Papier, digital auf dem Bildschirm, auf Datenträgern/Speichermedien oder mittels Diensten über das Internet abrufbar etc.) auch wieder visualisieren oder verbreiten zu können. Die Komplexität und die Interdependenzen dieser Anforderungen sind durch die nachfolgend dargestellte, idealisierte Verarbeitungskette illustriert (siehe Abbildung).

Die Verarbeitungskette startet i.d.R. mit einer anwendungsspezifischen und abstrahierten Modellierung eines Ausschnittes der realen Welt, in der die verschiedenen Objektklassen definiert werden, die für die Bearbeitung bestimmter Aufgaben notwendig sind. Damit wird das thematische Datenmodell festgelegt. Die Daten sind anschließend zu erheben, wofür unterschiedliche Erfassungsmethoden zur Verfügung stehen. Auch vorhandene Daten können direkt digital übernommen werden. Die Daten müssen danach gepflegt und permanent fortgeführt werden.

Die Daten werden in (Geo-)Datenbanksystemen abgelegt. Hierzu bedarf es der konzeptionell-logischen Modellierung, d.h. der Datenstrukturierung in einer Form, die das Datenbanksystem verarbeiten kann. Bei den heute gängigen (objekt-)relationalen Datenbanken ist die Grundstruktur die Tabelle, d.h. die Daten – sowohl Geometrie-, Topologie-, Dynamik- als auch Sachdaten – müssen in tabellare Struktur gebracht werden. Eventuell werden auch Adaptionen des ursprünglichen konzeptionellen Datenmodells notwendig, welches zu iterativen Prozessen führen kann und generell zeigt, dass ein Datenmodell nichts Statisches ist, sondern permanent an die sich verändernden Rahmenbedingungen angepasst werden muss. Heutige Systeme und Datenmodelle tragen diesem Umstand Rechnung, indem eine Erweiterung bzw. Profilbildung bereits vorhandener Datenmodelle möglich ist. Somit können auch Altdatenbestände einfacher in neu entwickelte Anwendungen übernommen werden. Spezielle Transformationswerkzeuge helfen hier bei der Datenübernahme.

Anwendungen werten Daten i.d.R. aus. So können die in den vorher beschriebenen Beispielen skizzierten Abfragen an den Datenbestand gestellt werden. Es können aber auch komplexere GIS-Analysefunktionen wie z. B. die Flächenverschneidung, kürzeste Wege-Analysen oder Simulationen z. B. anhand von Lärmausbreitungsmodellen durchgerechnet werden. Die Ergebnisse derartiger Analysen können zu Erweiterungen des Modells der realen Welt führen und als neue Informationen abgelegt werden, oder auch nur temporär untersucht und in einer tabellarisch-graphischen Form visualisiert werden. Hierzu eignen sich natürlich besonders thematisch-kartographische Darstellungsformen, für die Darstellungsmodelle und -regeln aufzustellen und zu beachten sind. Auch diese Visualisierungen können zur Erweiterung unseres gedanklichen Modells der realen Welt beitragen und somit wieder in den Kreislauf der GIS-Verarbeitungskette einfließen.

Derartige iterativ-rekursive Prozesse und Kreisläufe erfordern eine hohe Flexibilität des Geo-Informationssystems. Im nachfolgenden Abschnitt sollen die vier grundlegenden funktionalen Komponenten eines GIS etwas genauer betrachtet werden.

![](GIS18.png?classes=caption "Die EVAP-Verarbeitungskette in einem GIS")

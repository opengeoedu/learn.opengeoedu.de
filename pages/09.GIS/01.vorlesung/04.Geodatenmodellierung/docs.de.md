---
title: Geodatenmodellierung: Von der realen Welt zur digitalen Repräsentation in der Datenbank
menu: Geodatenmodellierung
taxonomy:
    category:
        - docs
---
Zur Bearbeitung einer raumbezogenen Fragestellung wird ein Ausschnitt der realen Welt aus fachlicher Sicht betrachtet und in bedeutungsvollen Objektklassen aus Sicht der fachlichen Nutzung beschrieben (thematisches/fachliches oder auch externes Modell genannt) (siehe Abbildung).

![Modellierung](GIS13.png)

Unter **thematischem/fachlichem oder externem Modellieren** versteht man die Beschreibung, Bearbeitung und Speicherung der zugrundeliegenden Thematik eines räumlichen Objekts. Thematisches Modellieren ist stets von der Anwendung abhängig. Jedoch finden  sich grundlegende Konzeptionen und damit Gemeinsamkeiten in vielen, voneinander unterschiedlichen Problemstellungen. Zur thematischen Modellierung haben sich objektbezogene Modelle etabliert. Dabei bedient man sich des sogenannten Objektklassenprinzips, bei dem ein Graph aufgebaut wird, der im einfachsten Fall einen Baum darstellt. Die Verzweigung des Baumes nach oben kann beliebig sein, d.h. einer Objektklasse wird eine komplexe Objektklasse überlagert. 

Die thematischen Modelle werden im **konzeptionellen/logischen Modell** in einem Anwendungsschema modelliert z. B. in ihrem statischen Verhalten durch Verwendung von UML-Klassendiagrammen (Unified Modeling Language) und in einer für Datenbanken verständlichen Form (z. B. mittels Entitäten-Relationenmodell (ER)) und in Form von Tabellen in der Datenbank abgelegt. Die eigentliche physische Speicherung auf den Servern und Festplatten wird im **physischen/internen Modell** definiert (Bill, 2016, S. 19ff.).

---
title: Auswertung
taxonomy:
    category:
        - docs
---
Hier nun eine kleine Erinnerung was unsere eigentliche Problemstellung war: Wir wollen anhand der Verteilung der Ladestationen in Deutschland abschätzen, in welchen Kreisen die potentielle Nachfrage nach Fahrzeugen und Infrastruktur am größten ist.

## Idee
Da die Verarbeitung offener Daten hier im Fokus steht, wollen wir ein einfaches Auswertungsbeispiel wählen. Bricht man die Problemstellung herunter, dann geht es um die Anzahl der verfügbaren Ladestationen in Relation zur Bevölkerungsdichte: Hat ein Kreis eine hohe Bevölkerungsdichte ist er entweder dicht besiedelt, oder normal besiedelt und flächenmäßig klein. Dies sind beides Fälle in denen sich Elektroautos besonders anbieten, für kürzere innerstädtische Strecken. Hat nun solch ein Kreis verhältnismäßig wenige Ladestationen, gibt es hier vermutlich eine Diskrepanz in Angebot und Nachfrage.

Dieses Beispiel ist offensichtlich stark vereinfacht, und müsste für eine signifikante Aussage mindestens noch um die Flächengröße der Kreise und Informationen zum Verkehrsnetz erweitert werden. Wollen Sie solche Informationen mit einbeziehen, oder haben eine Idee für eine andere Auswertung in diesem Bereich, dann gibt es im weiteren Verlauf eine Aufgabe in der Sie ihre eigene Auswertung erstellen können.

## Vorgehen
Im Grunde ist jede GIS-basierte Auswertung eine Abfolge an Operationen die in einem GI-System ausgeführt werden. In komplexeren Fällen kann es auch vorkommen, dass zusätzliche Software oder eigene Skripte angewendet werden müssen, doch trotzdem ist es ein Schritt-für-Schritt abarbeiten von allgemeingültigen Werkzeugen, um später ein spezielles Ergebnis zu erhalten. Teilweise müssen dabei Parameter in langen Versuchsreihen feinfühlig eingestellt werden. Aufgrund der Einfachheit des hier gewählten Beispeils werden wir uns jedoch mit einfachen GIS-internen Mitteln begnügen können.

Bevor ein Werkzeug eingesetzt wird, muss man sich als Nutzer stets die Frage stellen: Ist was ich vorhabe ein sinnvoller Schritt angesichts der Natur meiner Daten?

Würden wir in unserem Fall z.B. einfach die Differenz in absoluten Zahlen zwischen Ladestationen und Bevölkerungsdichte betrachten, wäre kein sinnvolles Ergebnis zu erreichen, da die Wertebereiche für jeden Kreis stark schwanken. Da wir die Nachfrage hier relativ über das Bundesgebiet betrachten wollen, benötigen wir keine absoluten Werte, sondern Abweichungen vom Durchschnitt.

Um vergleichbare Metriken der Abweichungen zu erhalten, gibt es eine statistische Methode names Standardisierung (auch Normalisierung oder Z-Transformation genannt). Diese Methode transformiert eine statistische Zufallsvariable so, dass sie einen Erwartungswert von Null, und eine Varianz von Eins besitzt. Praktisch bedeutet dies, dass alle Werte so verändert werden, dass sie nur die relative Abweichung vom Mittelwert anzeigen, in den positiven als auch in den negativen Bereich. Die Werte können dabei auch einen Betrag von Eins übersteigen, falls sie besonders stark abweichen.

Berechnet wird diese Transformation mit folgender Formel:
!!! x′=x−x¯¯¯σ

x ist dabei ein einzelner Wert, x¯¯¯ der Mittelwert, und σ die Standardabweichung. Diese Formel kann normalerweise im Feldrechner des von ihnen genutzten GIS einfach eingegeben werden. Falls nicht, müssen sie Mittelwert und Standardabweichung separat berechnen und zwischenspeichern. Beachten Sie dass dieser Vorgang für beide Datensätze durchführt werden muss, Bevölkerungsdichte pro Kreis, und Anzahl der Ladestationen pro Kreis!

Um die Anzahl der Ladestationen pro Kreis zu erhalten, müssen Sie ein entsprechendes Werkzeug nutzen, welches die Punkte in jedem Polygon durchzählt. QGis hat hier direkt ein "Punkte in Polygon zählen" Werkzeug, bei ArcGIS gibt es den Umweg über die "Spatial Join"-Funktionalität. Hier muss erst in den Punktdaten ein Attributfeld mit einem Wert von Eins erstellt werden, und dieses dann über die Polygone aufsummiert werden. Auch diese Funktion wird im Teil zu Geo-Algorithmen erklärt.

Hat man die Punkte nun gezählt, und beide Attribute standardisiert, fehlt noch ein letzter Schritt. Wir nehmen die Differenz von den standardisierten Bevölkerungsdichten und Ladestationen. (Bevölkerungsdichte - Ladestationen) Die resultierende Tabellenspalte ist das finale Ergebnis unserer Auswertung. Ein relativer Punktwert, der eine gewisse Aussage zur Nachfrage nach Elektroautos liefern könnte. Hohe Werte stehen dabei für eine potentiell hohe Nachfrage.

Die eigentliche Auswertung ist an dieser Stelle fertig. Die nächsten beiden Schritte befassen sich mit Kartenvisualisierung und Datenveröffentlichung. Beachten Sie außerdem, dass eine der Aufgaben darin besteht, eine Auswertung mit eigener Zielsetzung durchzuführen. Sie können z.B. die Nachfrageschätzung verbessern, sich andere demographische Faktoren anschauen, oder eine ganz andere Auswertung im Bereich Elektromobilität durchführen.

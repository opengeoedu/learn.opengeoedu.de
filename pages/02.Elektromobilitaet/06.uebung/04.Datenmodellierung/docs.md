---
title: Datenmodellierung
taxonomy:
    category:
        - docs
---
Im vorherigen Übungsschritt haben wir erkundet, was für Daten verfügbar sind, und entschieden, welche dieser Daten wir nutzen wollen. Nun haben wir mehrere Datensätze aus verschiedenen Quellen, möglicherweise mit Attributen die wir für unsere Auswertungen auf keinen Fall benötigen, oder die einfach leer sind, besonders im Fall von OSM-Daten.

Bevor wir nun nach Augenmaß Datensätze entfernen und rekombinieren, sollte man sich lieber genauere Gedanken machen was genau benötigt wird. Besonders für Auswertungen oder Projekte die weitaus größer sind als diese einfache Übung macht dies Sinn. Da wir hier mit offenen Daten arbeiten, und wir diese idealerweise auch zur weiteren Nutzung veröffentlichen wollen, ist es nur angebracht einen entsprechenden offenen Standard für diese Überlegungen zu nutzen.

Das Ergebnis dieser Überlegungen sollte also eine gut durchsichtige Struktur für unsere Daten liefern. In solchen Fällen ist eine visuelle Darstellung oft effektiver als eine textuelle Beschreibung. Der Standard für grafische Modellierung ist die Unified Modeling Language (UML).

## Unified Modeling Language
Die Unified Modeling Language ist ursprünglich eine grafische Modellierungssprache für komplexe Softwaresysteme, welche es erlaubt Software zu entwerfen bevor diese programmiert wird. Sie hilft sowohl beim Spezifizieren, Visualisieren, als auch beim Dokumentieren und Testen.[^1]

Nachdem sie im Bereich der Softwareentwicklung zu internationaler Verbreitung gelangt ist, hat sie sich auch in weiteren Bereichen verbreitet. Fast jedes komplexe System das von größeren Gruppen entwickelt und genutzt werden soll profitiert von einer guten Modellierung. Das am weitesten verbreitete Beispiel ist hierbei sicher die Geschäftsprozessmodellierung, welche auch für größere geodatenbasierte Projekte relevant sein kann. An dieser Stelle wollen wir uns jedoch nicht auf Prozesse, sondern auf Strukturen konzentrieren.

Um dies zu illustrieren, sehen wir uns zuerst das vermutlich am weitesten verbreitete Modell der UML an: Das Klassendiagramm.
![](uml.png)
> <cite>https://de.wikipedia.org/wiki/Klassendiagramm, Author: Stkl, Lizenz: CC BY-SA 3.0</cite>

Hier sehen wir verschiedene Klassen (Vierecke), die über Relationen miteinander verbunden sind. Eine dieser Relationen ist der weiße Pfeil zwischen "Privatkunde"/"Geschäftskunde" und "Kunde". Dieser kennzeichnet dass erstere Spezialisierungen der Klassen "Kunde" sind, also alle Attribute und Methoden von dieser Klasse übernehmen, und ihre eigenen hinzufügen. Attribute sind dabei einfach mit einer Klasse assoziierte Daten eines bestimmten Typs, also z.B. der Name eines Kundens. Methoden sind bestimmte dynamische Vorgänge die mit einer Klasse assoziiert sind, also z.B. das Einzahlen auf ein Konto. Wir benötigen für unsere Zwecke jedoch nur Attribute, da wir statische Daten und ihre Relationen beschreiben wollen. Die anderen Relationen, die wir hier sehen, sind alle Assoziationen, welche festlegen wie zwei Klassen miteinander verbunden sind. Ein "Privatkunde" hat z.B. genau eine Adresse, während auf einer "Adresse" eine beliebige Anzahl von Privatkunden wohnen können, einschließlich niemandem (0). Der Effekt dieser Assoziation ist, dass eines der Attribute des "Privatkunden" ein Adress-Objekt ist, während eine "Adresse" eine ganze Liste von Privatkunden-Objekten enthalten kann.

Es gibt noch weitere Arten von Relationen, aber die beiden Genannten reichen für unsere Zwecke. Überlegen Sie sich welche Datensätze so eng beieinander liegen resp. sich ähneln, dass man sie generalisieren kann, und welche in der Auswertung später miteinander assoziiert werden um Schlussfolgerungen zu ziehen.

!! Das in den Folien gezeigte Diagramm illustriert wie so ein Klassendiagramm aussehen könnte, ist aber selbst kein korrekt spezifiziertes Klassendiagramm, so sind z.B. die Assoziationen nicht ausreichend beschriftet)

Wie weiter oben angedeutet gibt es auch weitere Diagrammtypen, z.B. Anwendungsfall-, Aktivitäts-, Zustands- und Sequenzdiagramme. Von diesen ist hier erstmal nur das Anwendungsfall-Diagramm relevant, mit welchem die genaue Nuzung von Teilen eines Systems geplant werden kann. Dieses besteht aus Akteuren (oft als Strichmännchen dargestellt) und Anwendungsfällen (Ellipsen). Diese können auch generalisiert und spezialisiert werden, und miteinander assoziiert werden.

![](UseCase.png)
> <cite>https://de.wikipedia.org/wiki/Anwendungsfalldiagramm, Author: Stkl, Lizenz: CC BY-SA 3.0 </cite>

Ein Beispiel für einen Anwendungsfall wäre hier ein Besitzer eines E-Fahrzeugs, welcher eine Spezialisierung des Akteurs "Bürger" ist und mit dem Anwendungsfall "Ladestationen finden" assoziiert ist. Ein Anwendungsfalldiagramm würde hier also weniger die Struktur der Daten beschreiben, als mit in die Planung einbeziehen wie gewonnene Daten oder die erstellte Auswertung später genutzt werden könnten. Weitere Informationen und Einsatzmöglichkeiten zur UML finden sie in der entsprechenden Vorlesungseinheit.

!! LINK zur Vorlesungseinheit einfügen


## INSPIRE
Angesichts der weiten Verbreitung der UML, ist es nicht überraschend dass es auch eine standardisierte Spezifikation speziell für Geodaten gibt. Das INSPIRE-Projekt (Infrastructure for spatial information in Europe) will eine Europa weite Geodateninfrastruktur aufbauen, und nutzt dabei zur Definition ihrer Standards eine Vielzahl von UML-Elementen und Diagrammen. Dabei stützen sie sich auf die ISO-Norm ISO 19103:2015.[^2]

Die UML-Modelle, die Sie hier erstellen, müssen sich nicht an diese Norm halten, aber ein Blick auf die UML-Diagramme in der INSPIRE-Data Specification (Siehe externe Materialien) kann sich schon deshalb lohnen, um die eine oder andere Idee zum Aufbau Ihrer Diagramme zu bekommen. Sollten Sie zu einem späteren Zeitpunkt in offizielle Projekte involviert sein, ist es außerdem nicht unwahrscheinlich, dass diese auf INSPIRE aufbauen.

Quellen:
[^1]: http://www.uml.org/what-is-uml.htm
[^2]: https://inspire.ec.europa.eu/

---
title: Datenaufbereitung
taxonomy:
    category:
        - docs
---

# Datenaufbereitung
Die Aufbereitung setzt sich aus zwei Schritten zusammen:
1. Alle überflüssigen Attribute sollten entfernt und
2. alle gewünschten Attribute in die richtige Form gebracht werden.

Das Entfernen gestaltet sich einfach. In den demographischen Daten können die entsprechenden Spalten z.B. mit einem Tabellenkalkulationsprogramm wie Excel entfernt werden. Für die Daten mit zusätzlicher Attributtabelle muss eventuell ein GI-System bemüht werden, doch auch in diesem werden nur Spalten gelöscht werden.

## Namensvergabe
Die Attribute in die richtige Form zu bringen ist etwas anspruchsvoller. Zuerst einmal sollten den Spalten der Tabelle hier gut verständliche Namen gegeben werden, da diese teilweise ursprünglich maschinengeneriert sind. Handelt es sich um ein System mit Beschränkung der Zeichenzahl, dann sollten Sie sich für komplexere Spaltennamen nach einer Label-Funktionalität in ihrem GI-System umschauen, mit dem der Name der Daten selbst nicht verändert wird, allerdings die Darstellung. Teilweise ist dies auch erst in späteren Schritten möglich.

## Datenformate
Wenn die Namen nun die wirkliche Bedeutung widerspiegeln, sollten die Daten dieses auch tun. Teilweise kann es bei Exporten und Datenkonvertierungen dazu kommen, dass die Datentypen der Spalten verloren gehen. Am häufigsten hat man hier den Fall, dass eine Spalte, die aus Werten des Typs Integer (Ganze Zahl) oder Float/Double (Dezimalzahl) besteht, in Strings (Zeichenketten) umgewandelt wird, und damit nicht für Berechnungen eingesetzt werden kann.

Dies kann im Grunde auf zwei Arten behoben werden. Zum einen kann man später die Berechnungen anpassen, und die Daten aus der betreffenden Spalte stets mit einer Funktion versehen, die einen String als Integer oder Float interpretiert, zum anderen kann man es in dem jetzigen Schritt noch direkt beheben.

So kann man z.B. in Excel nach einem Rechtsklick auf eine oder mehrere ausgewählte Zellen den Menüpunkt "Zellen formatieren" aufrufen, in dem angezeigt wird auf welchen Datentyp diese Zellen festgelegt sind. Es kann auch direkt an dieser Stelle geändert werden. Es sollten außerdem überflüssige Zeilen entfernt werden, die z.B. Text über dem eigentlichen Tabellenkopf enthalten oder mit einem Sonderzeichen befüllt sind um einen fehlenden Datensatz zu markieren, da das genutzte GI-System sonst möglicherweise den Datentyp falsch interpretiert.

Steht am Ende doch der falsche Datentyp in der Attributtabelle, können noch die internen Werkzeuge des GIS genutzt werden. Dies hängt stark vom einzelnen Programm ab, kann aber üblicherweise einfach auf den entsprechenden Hilfeseiten nachgeschlagen werden.

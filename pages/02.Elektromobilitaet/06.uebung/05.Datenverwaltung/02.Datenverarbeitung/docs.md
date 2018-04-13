---
title: Datenverarbeitung
taxonomy:
    category:
        - docs
---

# Datenverarbeitung
Nun zum letzten Vorbereitungsschritt. Hier wollen wir unsere Daten endlich in Verbindung zueinander bringen, so dass wir mit ihnen arbeiten können. Grundsätzlich gibt es hier zwei Arten von Daten:

Daten mit direkter Georeferenz. Diese enthalten Längen- und Breitengrade, einen Rechts- und Hochwert, oder eine sonstige direkte Koordinatenangabe. In den meisten Fällen wird das Geo-Informationssystem diese korrekt erkennen und die Datensätze korrekt auf einer Karte positionieren.
Daten ohne direkte Georeferenz. Daten, bei denen der Raumbezug zwar relevant ist, die aber nicht direkt auf einer Karte verortet sind. Sie müssen über irgendeinen indirekten Bezug mit einem direkt georeferenzierten Datensatz in Verbindung gebracht werden, z.B. über einen Namen oder einen Kennzeichnungsschlüssel.
Welche unserer Daten fallen hier in welche Kategorie?

## Direkte Georeferenz
Dies sind typischerweise alle Raster- und Vektordaten (Punkte, Linien und Flächen). Im derzeitigen Kontext fallen hierunter also die deutschen Kreisgrenzen (Flächen, auch Polygone genannt), und die Ladestationen (Punkte). Nachdem Sie diese beiden Datensätze in ein GIS geladen haben, sollten sie beide sichtbar und korrekt positioniert sein. Ist dies nicht der Fall, müssen beide oder einer der Datensätze eventuell reprojiziert werden. Wie dies funktioniert lernen Sie in der Vorlesung GIS-Grundlagen, oder auf den Hilfeseiten eines GI-Systems.

Ist dieser Schritt korrekt abgehandelt worden, sind die Daten an dieser Stelle fertig. Wenn Ladestationen und Kreisgrenzen noch konkreter miteinander assoziiert werden müssen, dann ist dies Teil der jeweiligen Auswertung.

## Indirekte Georeferenz
Dies sind typischerweise attributierte Tabellendaten, unsere demographischen Einflussfaktoren fallen also unter diese Kategorie. Im Umfeld der amtlichen Daten gibt es jedoch eine standardisierte Art Daten zu attributieren, welche unter anderem eine Kennnummer names "Regionalschlüssel", kurz RS, enthält. Dieser findet sich in allen drei Tabellen, als auch in der Attributtabelle der Kreisgrenzen. Das ist also unser Ansatzpunkt: Die Tabellen müssen mit den Kreisgrenzen verbunden werden.

Da es sich hier um eine Tabellenoperation, und im weitesten Sinne um eine Datenbankoperation, handelt, können wir eine in dieser Domäne verbreitete Standardmethode nutzen: Den "Join" (Verbund). Hierbei werden in beiden Tabellen ein oder mehrere Attributpaare festgelegt. Es werden nun für jede Kombination von Datensätzen alle diese Paare überprüft. Stimmen die Werte beider Datensätze in allen Paaren überein, dann werden sie verbunden. "Verbunden" bedeutet hier, dass die Attribute der zweiten Tabelle, welche nicht in der ersten vorkommen, an die entsprechende Zeile in der ersten Tabelle angehängt werden. Eine IIlustration hierzu finden Sie in der Lehreinheit zu Geo-Algorithmen.

Typischerweise nutzt man hier nur ein Paar.

!!!! Ein Beispiel:
!!!! Wir haben einen Datensatz, in dem Bäume als Punkte auf einer Karte markiert sind. Wir haben außerdem einen Datensatz mit einer Beschreibung der Blattform verschiedener Baumarten. Wie finden wir die Blattform für einen bestimmten Punkt auf der Karte? Damit dies möglich ist, braucht der Baumdatensatz eine Tabellenspalte in der die Baumart gekennzeichnet ist. Wir würden nun einen Join durchführen. Dafür wählen wir als Attributpaar in beiden Datensätzen die Spalte "Baumart". Nun wird jeder Baum im Punktdatensatz durchlaufen, und seine Baumart wird mit denen in der Blattform-Tabelle verglichen. Sobald das Wertepaar gleich ist, werden die Attributwerte der Blattform-Tabelle zu den Attributwerten des entsprechenden Punktes hinzugefügt.

Die ursprüngliche Tabelle wird also um neue Spalten erweitert, welche mit den zu den älteren Spalten passenden Werten gefüllt werden. Dies gibt einem georeferenzierten Datensatz zusätzlichen Kontext, und georeferenziert quasi die Werte der hinzugefügten Tabelle.

Ein Join kann in jedem GIS über die Attributtabellen durchgeführt werden, konsultieren Sie hierzu die Hilfeseiten des gewählten Systems.

!! Link/Redundanz zu GIS-Analysemethoden JOIN! 

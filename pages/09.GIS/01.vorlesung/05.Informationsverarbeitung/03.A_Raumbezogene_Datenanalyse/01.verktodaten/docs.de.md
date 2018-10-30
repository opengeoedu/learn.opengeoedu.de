---
title: 'Anwendung von geometrischen Methoden für Vektordaten'
menu: Vektordaten
taxonomy:
    category:
        - docs
---
Für dieses Beispiel sei das Szenario eines Tierseuchenausbruchs angenommen. Nun soll um die ländlichen Siedlungen eine 300 m Schutzzone errichtet werden. Zudem sollen alle Straßenabschnitte markiert werden, die den Rand der Schutzzonen kreuzen, um schneller die Straßenabschnitte ausfindig zu machen, auf denen eventuell Zugangsbereiche oder -sperren errichtet werden müssen. Die folgende Abbildung zeigt das Ergebnis einer solchen Analyse: Die Schutzzonen werden als zusammenhängende Zonen (Buffer) um die Siedlungsbereiche gerechnet und dargestellt. Die Straßenabschnitte sind dann mit diesen Zonen geometrisch verschnitten und die Abschnitte, die den Rand der  Zonen schneiden, sind selektiert worden.

![Buffer](GIS20.png?classes=caption "Anwendung von Zonenbildung und Verschneidung zur Bestimmung von Schutzzonen und zu sperrenden Straßenabschnitten")

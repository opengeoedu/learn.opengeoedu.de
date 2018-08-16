---
title: Kreisgrenzen
taxonomy:
    category:
        - docs
---

Hierbei handelt es sich um einen Datensatz, der auf jeden Fall offen vorliegt, da er Grundlage für so viele Arten von Auswertungen und Visualisierungen ist. Eine Google-Suche mit den richtigen Stichwörtern sollte dabei genügen. So geht es hier genauer gesagt um die Grenzen von Kreisen *und* von Kreisfreien Städten, damit der Datensatz später auch vollständig ist.

Es sollte außerdem darauf geachtet werden für welchen Zeitraum der Datensatz vorliegt. Dementsprechend müssen später die weiteren Datensätze zeitlich ausgewählt werden. Dies ist nicht immer vom ersten gewählten Datensatz abhängig, da später benötigte Daten oft auch einfach nicht für das gewünschte Jahr vorliegen. Im Idealfall findet man eine Quelle, welche die Kreisgrenzen für verschiedene Jahre anbietet.

## Datenqualität
Natürlich gibt es auch bei solchen Datensätzen Qualitätsunterschiede. Zum einen gibt es da ganz offensichtlich den Maßstab und die Auflösung. Da es sich hier um eine Deutschland weite Auswertung handelt, müssen die Grenzübergänge nicht in höchstem Detailgrad vorliegen, aber auch nicht so vereinfacht sein dass Ladestationen in andere Kreise hinüberrücken. Ein guter Maßstab ist z.B. 1:250000, welcher auch offiziell vorliegt und gut dokumentiert ist.

Schlussendlich sollte auch eine kurze Prüfung der "handwerklichen" Qualität der Daten durchgeführt werden. Sind alle Geometrien topologisch sauber angeordnet, d.h. gibt es keine Lücken zwischen den Polygonen der Kreise? Sind sie passend und vollständig attributiert? Gerade letzteres ist in unserem Fall wichtig, denn die Kreispolygone müssen alle einen gültigen Gemeindeschlüssen/Regionalschlüssel haben, um später mit den nicht direkt geolokalisierten demographischen Daten in Verbindung gebracht werden können.

Ist all dies gegeben, dann kann der Datensatz als Grundlage für die Auswertung und die spätere Visualisierung festgelegt werden. Nun kann sich um die eigentlich interessanten Daten gekümmert werden: Ladestationen und Demographie.

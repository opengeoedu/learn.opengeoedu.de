---
title: Datengrundlage
media_order: LSM_Vekor.png
twitterenable: true
twittercardoptions: summary
facebookenable: true
---

Als Datengrundlage dienen bei der Berechnung von Landschaftsstrukturmaßen Vektor- und Rasterdaten des Untersuchungsraums. Im Folgenden werden die Unterschiede beider Datentypen erläutert.

Vektordaten:
Vektordaten sind in der Geoinformation Punkte, Linien und Flächen, welche in der zugehörigen Attributtabelle weitere Informationen bereitstellen (wie z.B. die Landnutzung). Mit Vektordaten, insbesondere mit Flächen, kann eine direkte Berechnung der Landschaftsstrukturmaße auf Basis der Attribute (Klassen) erfolgen (siehe dazu Abb.9).

![LSM mit Vektordaten](LSM_Vekor.png?lightbox=800&resize=300&classes=caption "Abb. 9: Berechnung der Landschaftsstrukturmaße mit Vektordaten - Obere Zahl: Shape-Index; Mittlere Zahl: Fraktale Dimension; Unterste Zahl: Umfang-Flächenverhältnis (Quelle: WALZ 2018)")

Durch die geometrischen Informationen der Vektordaten können unter anderem Berechnungen hinsichtlich der Fläche, des Umfangs oder der Form durchgeführt werden.

Vektordaten können z.B. aus dem ATKIS-DLM, frei aus Open Street Map bezogen oder selbst digitalisiert werden. Unabdingbar ist bei allen Daten eine vorherige Qualitätskontrolle. 

Rasterdaten:
Rasterdaten basieren auf den Werten der einzelnen Pixel (Rasterzellen). Patches sind in diesem Fall eine Menge von benachbarten Pixeln mit gleichen Werten und werden auch nach diesen klassifiziert. Also gilt: Je kleiner die Pixelgröße, desto genauer wird die spätere Berechnung. (vgl. Abb. 10) 

![LSM_Raster](Raster_2.png?lightbox=800&resize=300&classes=caption "Abb. 10: Beispiel Rasterdaten - Auswirkung der Pixelgröße (Quelle: S. Hoechstetter)")

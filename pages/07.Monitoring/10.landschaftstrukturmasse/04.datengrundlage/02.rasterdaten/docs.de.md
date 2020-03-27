---
title: Rasterdaten
taxonomy:
    category:
        - docs
visible: true
twitterenable: true
twittercardoptions: summary
facebookenable: true
---

Rasterdaten basieren auf den Werten der einzelnen Pixel (engl. Picture element, Rasterzellen). Patches sind in diesem Fall eine Menge von benachbarten Pixeln mit gleichen Werten und werden auch nach diesen klassifiziert. Also gilt: Je kleiner die Pixelgröße, desto genauer wird die spätere Berechnung. (vgl. Abb. 10)

![LSM_Raster](Raster_2.png?lightbox=800&classes=caption "Abb. 10: Beispiel Rasterdaten - Auswirkung der Pixelgröße (Quelle: HOECHSTETTER 2009)")

Im Gegensatz zu Vektordaten sind Rasterdaten an Pixel gebunden und sind daher, je nach Datensatz, an den Grenzen zwischen Nutzungsklassen „getreppt“  (wie in Abb. 10 zu sehen). Der obere Ausschnitt und der Ausschnitt unten rechts haben eine einheitliche geographische Ausdehnung. Jedoch mit unterschiedlichen Pixelgrößen, wodurch sich auch die Anzahl der Pixel verändert. Auf Grund dieser Tatsache liegen bei der Berechnung von Landschaftsstrukturmaßen große Unterschiede vor. Besonders gut ist diese Problematik an der „Number of patches“ oder der „Ø Patch size“ zu erkennen.

Rasterdaten sind also stark abhängig von ihrer Auflösung. Jedoch sind sie in vielen Fällen leicht zu beziehen. Hier sind insbesondere frei zugängliche Satellitenbilddaten (z.B. Landsat- oder Sentineldaten, vgl. hierzu die Vorlesung [Fernerkundung](https://learn.opengeoedu.de/fernerkundung)) zu erwähnen.

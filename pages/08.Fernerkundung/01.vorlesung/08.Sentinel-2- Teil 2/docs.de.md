---
title: 'Sentinel-2, Teil 2'
slug: Sentinel-2-Teil-2
taxonomy:
    category:
        - docs
---
<script src="https://h5p.org/sites/all/modules/h5p/library/js/h5p-resizer.js" charset="UTF-8"></script>
## Räumliche Auflösung

!!! Die räumliche Auflösung beschreibt vor allem die Pixelgröße bzw. den Pixelabstand (im Bild oder am Objekt). Es ist abhängig von der Art des Sensors. Fähigkeit, Größe des CCD-Arrays (charge-coupled device) und dem Blickwinkel. Einige wichtige Begriffe in der Fernerkundung und ihre Bedeutung sind: FOV= field of view, deutsch: Blickfeld, definiert die Schwadbreite; IFOV=instantaneous field of view, definiert den Winkel der einzelnen Sensoren; GIFOV=Ground instantaneous field of view, ist das auf den Boden projizierte IFOV. Die GSD=ground sample distance (aus GIFOV, Detektorgröße), definiert schließlich die resultierende Pixelgröße. Die räumliche Bildauflösung ist neben dem Kontrast entscheidend für die Erkennung von Objekten.
<br><br>

Vergleich von Sentinel-2 und Luftbild:
<br><br>
<style>iframe{max-width: 800px; width: 100%; height: 900px; max-height;900px}</style>
<iframe iframe id="239827" src="https://h5p.org/h5p/embed/239827" width="100%" frameborder="0" allowfullscreen="allowfullscreen"></iframe>
<br><br>

!!!! __Aufgabe:__ Beispiele unterschiedliche räumliche Auflösungen in der Fernerkundung:
<br><br>
<iframe iframe id="173319" src="https://h5p.org/h5p/embed/173319" width="100%" frameborder="0" allowfullscreen="allowfullscreen"></iframe>
<br><br>

## Spektrale Auflösung

!!! Die spektrale (optische) Auflösung eines Sensors gibt an, welche Bereiche des elektromagnischen Spektrums wie erfasst werden können. Die spektrale Auflösung ist somit der abgedeckte Wellenlängenbereich bezogen auf die Anzahl der Spektralbänder und ist mit der Bandbreite verknüpft, welche durch den Full Width Half Mean-Wert (FWHM) beschrieben wird. Dieser gibt die Wellenlängenbreite an, die ein Kanal bei 50 % der maximalen Durchlässigkeit des Spektralbandes umfasst. Sie wird manchmal mit dem spektralen Sampling Interval verwechselt, was jedoch die Schritte zwischen den einzelnen Bändern definiert.

! Das *Lexikon der Fernerkundung* ist ein sehr gutes Glossar und bietet Informationen zur Fernerkundung im Allgemeinen und im Detail an, wie etwa über die unterschiedlichen Typen von Auflösungen.
! [FE-Lexikon](http://www.fe-lexikon.info/lexikon-s.htm#spektrale-aufloesung)
<br><br>

![KanäleS2LS7LS8](BANDS_S2_LS8_LS7.png?classes=caption "Die spektralen Kanäle von Sentinel-2 im Vergleich zu Landsat 8 (OLI und TRS) und Landsat 7 ETM+. Quelle: NASA")
<br><br>

Die Sentinel-2 Bänder werden in folgender Abbildung näher beleuchtet (Reflektanzkurven aus Kokaly et al. 2017):
<br><br>
<iframe iframe id="238969" src="https://h5p.org/h5p/embed/238969" width="100%" frameborder="0" allowfullscreen="allowfullscreen"></iframe>
<br><br>

Die einzelnen Bänder liegen wie bei anderen Fernerkundungssensoren auch als Grauwertbilder vor. Im Fall von Sentinel-2 werden diese mit einer *radiometrischen Auflösung* von 12-bit gespeichert, was einem Kontrastvermögen von 2<sup>12</sup> (also 4069) Grauwerten entspricht. 

! Hier sei noch einmal auf den [Sentinel Playground](https://apps.sentinel-hub.com/sentinel-playground/?source=S2&lat=50.00067775723633&lng=8.155975341796875&zoom=9&preset=1_NATURAL_COL0R&layers=B01,B02,B03&maxcc=20&gain=1.0&gamma=1.0&time=2015-01-01%7C2018-09-20&atmFilter=&showDates=false) verwiesen. 

Image-Slider:
<br><br>
<iframe iframe id="248696" src="https://h5p.org/h5p/embed/248696" width="100%" frameborder="0" allowfullscreen="allowfullscreen"></iframe>
<br><br>

Die Grauwertbilder können nach Bedarf kombiniert werden (standardmäßig drei, RGB). Dadurch können je nach Intention und Bedarf unterschiedliche Bildbereiche angesprochen werden.
<br><br>
<iframe iframe id="248682" src="https://h5p.org/h5p/embed/248682" width="100%" frameborder="0" allowfullscreen="allowfullscreen"></iframe>
<br><br>

!!!! __Aufgabe:__ Eigenschaften verschiedener Fernerkundungssensoren:
<br><br>
<iframe iframe id="172678" src="https://h5p.org/h5p/embed/311234" width="100%" frameborder="0" allowfullscreen="allowfullscreen"></iframe>
<br><br>

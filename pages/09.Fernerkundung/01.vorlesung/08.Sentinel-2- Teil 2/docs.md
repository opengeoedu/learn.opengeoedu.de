---
title: 'Sentinel-2, Teil 2'
taxonomy:
    category:
        - docs
---
<script src="https://h5p.org/sites/all/modules/h5p/library/js/h5p-resizer.js" charset="UTF-8"></script>
## Räumliche Auflösung

Die räumliche Auflösung beschreibt vor allem die Pixelgröße bzw. den Pixelabstand (im Bild oder am Objekt). Es ist abhängig von der Art des Sensors. Fähigkeit, Größe des CCD-Arrays (charge-coupled device) und die Blickwinkel. Einige wichtige Begriffe in der Fernerkundung und ihre Bedeutung sind: FOV= field of view, deutsch: Blickfeld, definiert die Schwadbreite; IFOV=instantaneous field of view, definiert den Winkel der einzelnen Sensoren; GIFOV=Ground instantaneous field of view, ist das auf den Boden projizierte IFOV. Die GSD=ground sample distance (aus GIFOV, Detektorgröße), definiert schließlich die resultierende Pixelgröße. Die räumliche Bildauflösung ist neben dem Kontrast entscheidend für die Erkennung von Objekten.
<br><br>

<<<<<<< HEAD:pages/09.Fernerkundung/01.vorlesung/08.Sentinel-2- Teil 2/docs.md
Vergleich von Sentinel-2 und Luftbild:
<iframe class="embed-responsive-item" src="https://h5p.org/h5p/embed/239827" scrolling="no" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>

!!!! __Aufgabe:__ Beispiele unterschiedliche räumliche Auflösungen in der Fernerkundung:
<iframe src="https://h5p.org/h5p/embed/173319" scrolling="no" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>
=======
Vergleich von Sentinel-2 und Luftbild:
<br><br>
<style>iframe{max-width: 800px; width: 100%; height: 900px; max-height;900px}</style>
<iframe iframe id="239827" src="https://h5p.org/h5p/embed/239827" width="100%" frameborder="0" allowfullscreen="allowfullscreen"></iframe>
<br><br>

!!!! __Aufgabe:__ Beispiele unterschiedliche räumliche Auflösungen in der Fernerkundung:
<br><br>
<iframe iframe id="173319" src="https://h5p.org/h5p/embed/173319" width="100%" frameborder="0" allowfullscreen="allowfullscreen"></iframe>
<br><br>
>>>>>>> a232193bea8ab1451f2cbb7363d63355ceda1635:pages/09.Geovisualisierung/01.vorlesung/08.Sentinel-2- Teil 2/docs.md

## Spektrale Auflösung

Die spektrale (optische) Auflösung eines Sensors gibt an, welche Bereiche des elektromagnischen Spektrums wie erfasst werden können. Die spektrale Auflösung ist somit der abgedeckte Wellenlängenbereich bezogen auf die Anzahl der Spektralbänder und ist mit der Bandbreite verknüpft, welche durch den Full Width Half Mean-Wert (FWHM) beschrieben wird. Dieser gibt die Wellenlängenbreite an, die ein Kanal bei 50 % der maximalen Durchlässigkeit des Spektralbandes umfasst. Sie wird manchmal mit dem spektralen Sampling Interval verwechselt, was jedoch die Schritte zwischen den einzelnen Bändern definiert.

! Das *Lexikon der Fernerkundung* ist ein sehr gutes Glossar und bietet Informationen zur Fernerkundung im Allgemeinen und im Detail an, wie etwa über die unterschiedlichen Typen von Auflösungen.
! [FE-Lexikon](http://www.fe-lexikon.info/lexikon-s.htm#spektrale-aufloesung)
<br><br>

![KanäleS2LS7LS8](BANDS_S2_LS8_LS7.png?classes=caption "Die spektralen Kanäle von Sentinel-2 im Vergleich zu Landsat 8 (OLI und TRS) und Landsat 7 ETM+.")
<br><br>

<<<<<<< HEAD:pages/09.Fernerkundung/01.vorlesung/08.Sentinel-2- Teil 2/docs.md
Die Sentinel-2 Bänder werden in folgender Abbildung näher beleuchtet (Reflektanzkurven aus Kokaly et al. 2017):
<iframe class="embed-responsive-item" src="https://h5p.org/h5p/embed/238969" scrolling="no" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>
=======
Die Sentinel-2 Bänder werden in folgender Abbildung näher beleuchtet (Reflektanzkurven aus Kokaly et al. 2017):
<br><br>
<iframe iframe id="238969" src="https://h5p.org/h5p/embed/238969" width="100%" frameborder="0" allowfullscreen="allowfullscreen"></iframe>
>>>>>>> a232193bea8ab1451f2cbb7363d63355ceda1635:pages/09.Geovisualisierung/01.vorlesung/08.Sentinel-2- Teil 2/docs.md
<br><br>

Die einzelnen Bänder liegen wie bei anderen Fernerkundungssensoren auch als Grauwertbilder vor. Im Fall von Sentinel-2 werden diese mit einer *radiometrischen Auflösung* von 12-bit gespeichert, was einem Kontrastvermögen von 2<sup>12</sup> Grauwerten entspricht.

<<<<<<< HEAD:pages/09.Fernerkundung/01.vorlesung/08.Sentinel-2- Teil 2/docs.md
Image-Slider:
<div class="embed-responsive embed-responsive-1by1">
    <iframe class="embed-responsive-item"
    src="https://h5p.org/h5p/embed/248696"
    scrolling="no" frameborder="0" webkitallowfullscreen
        mozallowfullscreen allowfullscreen></iframe>
</div>
<br><br>

Die Grauwertbilder können nach Bedarf kombiniert werden (standardmäßig drei, RGB). Dadurch können je nach Intention und Bedarf unterschiedliche Bildbereiche angesprochen werden.
<iframe src="https://h5p.org/h5p/embed/248682" width="583" height="500" frameborder="0" allowfullscreen="allowfullscreen"></iframe><script src="https://h5p.org/sites/all/modules/h5p/library/js/h5p-resizer.js" charset="UTF-8"></script>
<script src="https://h5p.org/sites/all/modules/h5p/library/js/h5p-resizer.js" charset="UTF-8"></script>
<br><br>

!!!! __Aufgabe:__ Eigenschaften verschiedener Fernerkundungssensoren:
<iframe src="https://h5p.org/h5p/embed/172678" width="521" height="500" frameborder="0" allowfullscreen="allowfullscreen"></iframe><script src="https://h5p.org/sites/all/modules/h5p/library/js/h5p-resizer.js" charset="UTF-8"></script>
<script src="https://h5p.org/sites/all/modules/h5p/library/js/h5p-resizer.js" charset="UTF-8"></script>
=======
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
<iframe iframe id="172678" src="https://h5p.org/h5p/embed/172678" width="100%" frameborder="0" allowfullscreen="allowfullscreen"></iframe>
<br><br>
>>>>>>> a232193bea8ab1451f2cbb7363d63355ceda1635:pages/09.Geovisualisierung/01.vorlesung/08.Sentinel-2- Teil 2/docs.md

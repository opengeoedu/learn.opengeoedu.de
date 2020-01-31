---
title: 'Sentinel-2, Teil 2'
slug: Sentinel-2-Teil-2
taxonomy:
    category:
        - docs
---
<script src="https://h5p.org/sites/all/modules/h5p/library/js/h5p-resizer.js" charset="UTF-8"></script>

Der direkte Vergleich von Sentinel-2 und einem sehr hochaufgelösten Luftbild, verfügbar in Deutschland als Digitale Orthophotos (DOP-20/40) in ATKIS, verdeutlicht sehr anschaulich die Unterschiede in der Erkennbarkeit von Objekten:
<br><br>
<style>iframe{max-width: 800px; width: 100%; height: 900px; max-height:900px}</style>
<iframe iframe id="239827" src="https://h5p.org/h5p/embed/239827" width="100%" frameborder="0" allowfullscreen="allowfullscreen"></iframe>
<br><br>

!!!! __Aufgabe:__ Ordnen von Beispielen unterschiedlichen räumlichen Auflösungen in der Fernerkundung:
<br><br>
<iframe iframe id="173319" src="https://h5p.org/h5p/embed/173319" width="100%" frameborder="0" allowfullscreen="allowfullscreen"></iframe>
<br><br>

Die spektrale Auflösung bzw. die einzelnen Kanäle von Sentinel-2 sind in folgender Abbildung im Vergleich zu der Abdeckung von Landsat 8 und Landsat 7 dargestellt.

![KanäleS2LS7LS8](BANDS_S2_LS8_LS7.png?classes=caption "Die spektralen Kanäle von Sentinel-2 MSI (MultiSpectral Instrument) im Vergleich zu Landsat 8 OLI (Operational Land Imager) & TRS (Thermal Infrared Sensor) und Landsat 7 ETM+ (Enhanced Thematic Mapper). Im Hintergrund ist die Durchlässigkeit der Atmosphäre (samt atmosphärischer Fenster) dargestellt. Quelle: NASA")
<br><br>

Die Sentinel-2 Bänder werden in folgender Abbildung näher beleuchtet (Reflektanzkurven aus Kokaly et al. 2017).

!!!! __Aufgabe:__ Spektralbänder: Klicken Sie auf die blau-hinterlegten weißen Kreuze:
<br><br>
<iframe iframe id="238969" src="https://h5p.org/h5p/embed/238969" width="100%" frameborder="0" allowfullscreen="allowfullscreen"></iframe>
<br><br>

Die einzelnen Bänder liegen wie bei anderen Fernerkundungssensoren auch als Grauwertbilder vor. Im Fall von Sentinel-2 werden diese mit einer radiometrischen Auflösung von 12-bit gespeichert, was einem Kontrastvermögen von 2<sup>12</sup> (also 4069) Grauwerten entspricht.

! Hier sei nochmals auf den [Sentinel Playground](https://apps.sentinel-hub.com/sentinel-playground/?source=S2&lat=50.00067775723633&lng=8.155975341796875&zoom=9&preset=1_NATURAL_COL0R&layers=B01,B02,B03&maxcc=20&gain=1.0&gamma=1.0&time=2015-01-01%7C2018-09-20&atmFilter=&showDates=false) verwiesen.

Mit dem nachfolgenden Image-Slider können Sie sehen, wie die Grauwertbilder der einzelnen Kanäle von Sentinel-2 ausschauen. Das erste Bild ist eine RGB-Normalfarbkomposit. Ein kleines Gimmick: Gut zu erkennen ist ein Passagierflugzeug, das durch die Szene fliegt. Durch die Bewegung von Flugzeug und Satellit, aber auch durch die Funktionsweise des Scanners erscheint das helle Objekt in den jeweils nahezu maximalen RGB-Farben separiert.

<br><br>
<iframe iframe id="248696" src="https://h5p.org/h5p/embed/248696" width="100%" frameborder="0" allowfullscreen="allowfullscreen"></iframe>
<br><br>

Die Grauwertbilder können nach Bedarf kombiniert werden (standardmäßig drei, RGB). Dadurch können je nach Intention und Bedarf unterschiedliche Bildbereiche angesprochen werden.
<br><br>
<iframe iframe id="248682" src="https://h5p.org/h5p/embed/248682" width="100%" frameborder="0" allowfullscreen="allowfullscreen"></iframe>
<br><br>

!!!! __Aufgabe:__ Eigenschaften verschiedener Fernerkundungssensoren: Ordnen Sie per Drag & Drop die Namen der Sensoren entsprechend ihrer Eigenschaften den kleinen Quadraten innerhalb des Koordinatensystems zu.
<br><br>
<iframe iframe id="172678" src="https://h5p.org/h5p/embed/311234" width="100%" frameborder="0" allowfullscreen="allowfullscreen"></iframe>
<br><br>

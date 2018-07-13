---
title: 'Nachbereitung'
taxonomy:
    category:
        - docs
---
### Öffnen des Ergebnisrasters

Schließen Sie alle geöffneten Layer in QGIS. Öffnen Sie das exportierte GeoTIFF in QGIS über Rasterlayer hinzufügen. Eventuell müssen Sie über Rechtsklick --> *Eigenschaften* --> *Stil* die Anzeige des Layers ändern, damit er korrekt dargestellt wird: Wählen Sie unter *Darstellungsart* *Einkanalpseudofarbe* und fügen Sie unten mit Hilfe des + Symbols die Werte 0 und 1 hinzu, denen Sie Farben zuweisen können. Klicken Sie dann auf *Anwenden* und *Ok*. Falls die Darstellung verzerrt ist, passen Sie das Darstellungskoordinatensystem an: Klicken Sie in der unteren Menüleiste rechts auf *EPSG: …* (EPSG=European Petroleum Survey Group Geodesy), aktivieren Sie das Häkchen bei *Spontanreaktion aktivieren* und suchen Sie nach *25832*. Wählen Sie das entsprechende Koordinatensystem aus und klicken Sie auf *Ok*.

## Vektorisierung
Zur einfacheren Verschneidung mit Vektordaten wird das Ergebnisraster zunächst ebenfalls vektorisiert. Klicken Sie auf *Raster* --> *Konvertierung* --> *Vektorisieren*. Geben Sie einen Ausgabepfad an, aktivieren Sie das Häkchen bei *Feldname: DN* und bestätigen Sie. Der neue Datensatz enthält nun sowohl intakte als auch geschädigte Waldflächen. Öffnen Sie die Attributtabelle und wählen Sie *Objekte über Ausdruck wählen*. Geben Sie den Ausdruck *“DN“ != 1* ein und bestätigen Sie per Klick auf *Auswahl*. Dadurch werden alle Objekte, die nicht den Wert 1, also beschädigt, besitzen, ausgewählt. Aktivieren Sie anschließend innerhalb der Attributtabelle den Bearbeitungsmodus (Stift-Symbol) und klicken Sie auf *Gewählte Objekte löschen* (Mülleimersymbol). Speichern Sie die Änderungen und verlassen Sie den Bearbeitungsmodus. 

## Löschen von kleinen Objekten
Es befinden sich noch einige Ungenauigkeiten und sehr kleine Einzelflächen im Datensatz. Für dieses Szenario sollen nur Windwurfflächen mit einer Mindestgröße von 0,25 ha erfasst werden. Wählen Sie *Vektor* --> *Geometrie-Werkzeuge* --> *Geometriespalte hinzufügen*. Vergeben Sie einen Ausgabedateinamen und bestätigen Sie. Öffnen Sie die Attributtabelle des neuen Datensatzes. Die Flächeneinheiten unter *area* wurden anhand des Layer-Koordinatensystems berechnet und liegen daher in m² vor. Bei Flächen dieser Größenordnung bietet sich jedoch eine Umrechnung in Hektar an: Klicken Sie in der Attributtabelle auf *Feldrechner öffnen*. Wählen Sie *Neues Feld anlegen* und vergeben Sie den Feldnamen *area_ha*. Verändern Sie den Ausgabefeldtyp auf Dezimalzahl und die Genauigkeit auf 4. Geben Sie den Ausdruck *“area“/10000* ein und bestätigen Sie mit *Ok*. Innerhalb der Attributtabelle können Sie per Klick auf den Feldnamen *„area_ha“* alle Objekte ihrer Größe nach sortieren. Wählen Sie alle Objekte aus, die kleiner als 0,25 ha sind, und löschen sie diese. 

## Verschneidung
Öffnen Sie über *Vektorlayer hinzufügen* die heruntergeladene Datei *CLC10.shp*. Dieser Datensatz enthält Informationen über die Landbedeckung/Landnutzung und wird alle sechs Jahre mit Hilfe von Fernerkundungsdaten aktualisiert. Die Spalte *clc* in der Attributtabelle enthält die Landbedeckungs-/Landnutzungsinformation in Form eines eindeutigen Schlüssels. Wählen Sie *Vektor* --> *Geoverarbeitungswerkzeuge* --> *Zuschneiden*. Wählen Sie *CLC10* als *Eingabelayer* und die Sturmschäden als *Layer zuschneiden* und bestätigen Sie. Der neue Datensatz enthält nun die Landbedeckung/Landnutzung innerhalb der geschädigten Flächen.

## Quantifizierung
Zunächst werden alle Objekte, die der gleichen Klasse zugeordnet sind, zusammengefasst. Wählen Sie *Vektor* --> *Geoverarbeitungswerkzeuge* --> *Dissolve*. Wählen Sie den zugeschnittenen Layer als *Eingabelayer* und entfernen Sie das Häkchen bei *Alle auflösen*. Verschieben Sie das Attribut *clc* in die *Selected*-Spalte und bestätigen Sie. Öffnen Sie die Attributtabelle des neuen Datensatzes. Die CLC-Klassen für Wald sind 311 (Laubwald), 312 (Nadelwald) und 313 (Mischwald). Möglicherweise befinden sich noch weitere Klassen im Datensatz. 
> Woran könnte das liegen? 

Löschen Sie alle Objekte, die nicht zu einer dieser Klassen gehören, aus dem Datensatz. 

Um die Ergebnisflächen zu quantifizieren, muss erneut eine Flächen-Spalte hinzugefügt werden. Dieser Schritt ist erneut nötig, da durch das Zusammenfassen der Objekte neue Polygone erzeugt wurden, das Feld *„area_ha“* jedoch ohne Anpassung aus dem vorherigen Datensatz übernommen wurde. Gehen Sie vor und berechnen Sie die Flächen der Ergebnispolygone. 
> Wie groß sind die beschädigten Flächen pro Waldtyp? 

##


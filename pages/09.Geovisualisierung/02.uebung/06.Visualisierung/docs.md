# Visualisierung

Im letzten Schritt werden die Analyseergebnisse visualisiert. Um die Topographie des Taunus in der Visualisierung sichtbar zu machen, kann eine dreidimensionale Darstellung gewählt werden. Die folgenden Schritte dokumentieren die Erstellung einer Geländeansicht in QGIS __(5.1)__ und Google Earth Pro __(5.2)__. Für den erfolgreichen Abschluss dieses Fallbeispiels ist nur die Bearbeitung einer der beiden Möglichkeiten notwendig.

## Geländeansicht in QGIS
### Darstellung der Sturmschäden
Rechtsklicken Sie auf den Sturmschäden-Layer und wählen Sie *Eigenschaften*. Unter *Stil* wählen Sie *Einzelsymbol* und *Einfache Füllung*. Wählen Sie eine geeignete Füllfarbe. Wählen Sie unter *Rahmen* *Transparenter Rand*. Sie können die Farbgebung auch je nach Waldtyp anpassen, wählen Sie dazu *Kategorisiert* und unter *Spalte* *clc*. Per Klick auf *Klassifizieren* werden alle vorhandenen Werte der Spalte *clc* hinzugefügt und Sie können die Einzelsymbole anpassen. 

### WMS 
Laden Sie per Klick auf *WMS-Layer hinzufügen* in der linken Leiste einen WMS (Web Map Service) Ihrer Wahl in die Ansicht. Dieser soll als Hintergrund für die Visualisierung dienen. Klicken Sie im sich öffnenden Fenster auf *Neu*, vergeben Sie einen Namen und geben Sie die URL des entsprechenden WMS ein, bevor Sie mit *OK* bestätigen. Sie können beispielsweise den vom BKG bereitgestellten Kartendienst Topplus-Web-Open verwenden (http://www.geodatenzentrum.de/geodaten/gdz_rahmen.gdz_div?gdz_spr=deu&gdz_akt_zeile=5&gdz_anz_zeile=1&gdz_unt_zeile=41&gdz_user_id=0) oder das hochauflösende Echtfarbmosaik des Copernicus Land Monitoring Service (nach login: https://land.copernicus.eu/pan-european/high-resolution-image-mosaic/very-high-resolution/vhr-2012/view). Wählen Sie die in QGIS erstellte WMS-Verbindung im folgenden Dialog aus und klicken Sie auf *Hinzufügen*. 

### QGIS2Threejs 
Laden Sie über *Rasterlayer hinzufügen* die beiden SRTM-DGM .tif-Dateien in Ihr QGIS-Projekt. Ordnen Sie die Layer so an, dass die Sturmschäden über dem WMS-Dienst, und dieser wiederum über den DGM liegt. Wählen sie *Erweiterungen* --> *Erweiterungen verwalten und installieren* und suchen Sie nach der QGIS-Erweiterung *QGIS2Threejs*. Dieses PlugIn ermöglicht die dreidimensionale Darstellung von Geodaten in einem Webbrowser. Klicken Sie auf *Erweiterung installieren*. Über die Schaltfläche *Web* gelangen Sie zur Erweiterung. Wählen Sie im oberen Dropdown-Menü *3DViewer.html*. Unter *World* können Sie einen Faktor zur Überhöhung des Geländemodells einstellen (Vertical exaggeration). Geben Sie hier den Faktor 2 an. Geben Sie unter *DEM* eins der beiden SRTM-DGM an und schieben Sie den Regler unter *Resampling* nach ganz rechts. Wählen Sie unter *Display Type* als *Layer Image* den WMS aus. Stellen Sie unter *Resolution* 200% ein. Wiederholen Sie diese Schritte für das zweite SRTM-DGM, das Sie über *Additional DEM* auswählen können. 

Aktivieren Sie unter *Polygon* das Sturmschäden-Polygon aus und wählen Sie unter *Object type Overlay*. Zoomen Sie ihre Ansicht zu einem Raumausschnitt, den Sie dreidimensional darstellen möchten. Erstellen Sie einen neuen Ordner und wählen Sie diesen als Output HTML file path und klicken Sie auf *Run*. Wenn die Sturmschäden nicht in der erzeugten 3D-Ansicht zu erkennen sind, oder eine Fehlermeldung ausgegeben wird, deaktivieren Sie das Häkchen unter *Polygon* und stellen Sie bei den DGM jeweils *Map canvas image* unter *Display type* ein. 

![QGIS2Threejs](/pages/09.Geovisualisierung/QGIS2Threejs_output.png)

*Dreidimensionale Ansicht des Untersuchungsgebiets östlich von Mainz zur Verdeutlichung des Reliefs und der Lage der Windwurfflächen, markiert in Rot. Im Vordergrund ist der Flusslauf des Rheins zu erkennen.*

In der 3D-Ansicht können Sie mit Hilfe beider Maustasten sowie des Mausrades navigieren. Mit Shift + S können Sie die gegenwärtige Ansicht als Bild speichern. Das komplette Ergebnis lässt sich versenden, indem Sie den gesamten Ergebnisordner einem .zip-Archiv hinzufügen und verschicken. Nach dem Entpacken lässt sich die 3D-Ansicht per Doppelklick auf die .html-Datei öffnen.

<br><br>

## Geländeansicht in Google Earth
### KML-Export
Rechtsklicken Sie auf den Sturmschäden-Layer und wählen Sie *Speichern als…*. Im folgenden Dialog wählen Sie unter *Format Keyhole Markup Language [KML]*. Vergeben Sie einen Ausgabenamen und –pfad und bestätigen Sie. 

### Google Earth Import und Darstellung
Starten Sie Google Earth und Wählen Sie *Datei* --> *Öffnen…*. Navigieren Sie zu der soeben erstellten kml-Datei und bestätigen Sie. Die Ansicht sollte automatisch in das Untersuchungsgebiet zoomen. Markieren Sie den Sturmschäden-Layer im Menü *Orte* und wählen Sie *Bearbeiten* --> *Eigenschaften*. Im Reiter *Stil, Farbe* können Sie nach Klick auf *Gleichen Stil zuweisen* die Farbgebung des Layers anpassen (z.B. rote Füllung, transparenter Rand) (Abb.4). Unter *Tools* --> *Optionen* können Sie im Reiter *3D-Ansicht* zusätzlich einen Faktor zur Geländeüberhöhung einstellen (Parameter *Höhenverstärkung*), um das lokale Relief zu betonen.

### Erstellung der Geländeansicht
Nutzen Sie die Navigationsmöglichkeiten in Google Earth (Ansicht neigen, zoomen etc. per Maustasten/-rad) um einen Ausschnitt zu erhalten, den Sie exportieren möchten. Klicken Sie in der oberen Menüleiste auf das Symbol *Bild speichern*. Einige Kartenelemente werden Ihnen angezeigt. Im Menü Ebenen links unten können Sie Informationen wie Ortsnamen, Straßen, etc. ein- oder ausblenden. Sie haben zudem die Möglichkeit am oberen Bildrand über Kartenoptionen Kartenelemente hinzuzufügen oder zu entfernen. Passen Sie auch die Auflösung des Exportbildes an. Bearbeiten Sie die Kartenelemente nach Ihren Vorstellungen und klicken Sie abschließend auf *Bild speichern*. Geben Sie einen Ausgabenamen und –pfad an und teilen Sie Ihr Ergebnis mit Ihren Kommilitonen/-innen.

![GoogleEarth](/pages/09.Geovisualisierung/Google_Earth_Export_2.png)

*Dreidimensionale Ansicht des Untersuchungsgebiets in Google Earth.*

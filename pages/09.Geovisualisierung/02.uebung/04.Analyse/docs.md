# Datenanalyse

## NDVI und dNDVI

Um den Zustand von Vegetation ermitteln zu können, kommen verschiedene spektrale Indizes zum Einsatz. __(Siehe hierzu Lecture ...)__. Der NDVI (Normalized Difference Vegetation Index) ist ein normalisierter, auf rotem und nahem infrarotem Kanal basierender Index. Er basiert auf der Tatsache, dass vitale Vegetation aufgrund eines hohen Chlorophyllgehalts im Bereich des nahen Infrarots stark reflektiert, wohingegen das Licht im roten Bereich größtenteils absorbiert wird. Diesen Gradienten macht sich der NDVI zunutze und bildet den Anteil vitaler Vegetation innerhalb eines Pixels auf einer Skala von -1 (keine Vegetation) bis +1 (komplett von vitaler Vegetation bedeckt) ab. Wird der NDVI für beide Sentinel-2 Aufnahmen ermittelt, können aus der Differenz der beiden Indexbilder Veränderungen des Vegetationszustands abgelesen werden.

Entfernen Sie zunächst alle Datensätze außer dem maskierten Sentinel-2 Datensatz aus dem *Product Explorer*. Rechtsklicken Sie dazu auf diesen Datensatz und wählen Sie *Close other Products*. Die nicht gespeicherten Zwischenergebnisse können Sie verwerfen. Rechtsklicken Sie auf den Sentinel-2 Datensatz und wählen Sie *Band Maths* und vergeben Sie den Namen *NDVI_pre*. Entfernen Sie den Haken bei *Virtual* und klicken Sie auf *Edit Expression*. Geben Sie mit Hilfe der Schaltflächen oder der Tastatur folgende Formel im Feld *Expression* ein:

*(B8<sub>20170619</sub> - B4<sub>20170619</sub>) / (B8<sub>20170619</sub> + B4<sub>20170619</sub>)*

und bestätigen Sie doppelt mit *Ok*. Per Klick auf *Layer Manager* --> *Vector data* lässt sich die Layermaske aus der Ansicht entfernen. Im Reiter *Pixel Info* neben dem *Product Explorer* können Sie sich den Pixelwert an der Cursorposition anzeigen lassen. Erstellen Sie ein weiteres Band *NDVI_post*, das aus der Formel 

*(B8<sub>20170823</sub> - B4<sub>20170823</sub>) / (B8<sub>20170823</sub> + B4<sub>20170823</sub>)*

besteht. Erstellen Sie anschließend ein Band *dNDVI* mit der Formel 

*NDVI<sub>pre</sub> - NDVI<sub>post</sub>*

und untersuchen Sie das Ergebnis. Rechtsklicken Sie auf den Datensatz und erstellen Sie über *Open RGB Image Window* eine Falschfarbansicht aus den Kanälen Red: B3_20170619, Green: B4_20170823, Blue: dNDVI. 
> In welcher Farbe sind Schäden am Wald zu erkennen?

<br><br> 
## Schwellenwertberechnung und Export

Mit Hilfe der NDVI-Differenz können nun die geschädigten Waldflächen identifiziert werden. Dazu werden alle Pixel, die im Differenzbild einen bestimmten Schwellenwert überschreiten, als Raster extrahiert. Einen geeigneten Schwellenwert können Sie herausfinden, indem Sie im *Colour Manipulation*-Bereich die Farbgebung des Differenzbildes durch Verschiebung der Regler anpassen und diese mit einem RGB-Komposit vergleichen. Starten Sie erneut das *Band Maths* Tool und vergeben Sie den Namen *Sturmschaden*. Vergessen Sie nicht, den Haken vor *Virtual* zu entfernen. Geben Sie im Fenster *Edit Expression* folgende Formel ein 

*if dNDVI > 0.15 then 1 else 0*

und bestätigen Sie. Damit erstellen Sie ein binäres Raster mit Sturmschäden (1) und übrigen Flächen (0). Wählen Sie anschließend *File* --> *Export* --> *GeoTIFF*. Klicken Sie auf Subset und entfernen Sie im Reiter *Band Subset* alle Bänder außer *Sturmschaden*. Klicken Sie auf *Ok*, vergeben Sie einen aussagekräftigen Dateinamen und Bestätigen Sie. 

# Hintergrund

Die Landesfläche Deutschlands ist zu 32% mit Wald bedeckt. Die Ausbreitung der Wälder ist gut dokumentiert und lässt sich auch aus frei verfügbaren Daten mit hoher räumlicher Genauigkeit ableiten. Für die Erfassung des Waldzustands werden jedoch aktuellste Informationen benötigt, die in so großer Ausdehnung nicht in-situ erfasst werden können. Um großflächig die Gesundheit der Vegetation zu beobachten und nach Sturmereignissen oder Schädlingsbefall einen schnellen Überblick über betroffene Waldflächen zu erhalten, kommt daher die Fernerkundung zum Einsatz. 

![SatWindwurf](pages/09.Geovisualisierung/SatellitWindwurf2.png)
 
In diesem Fallbeispiel wird ein Sturmereignis vom August 2017 untersucht, bei dem es im Taunus (Hessen) zu größeren Sturmschäden im Wald kam. Dazu wird jeweils eine Sentinel 2-Szene vor und nach dem Ereignis aufbereitet, analysiert und Vegetationsindizes für beide Zeitpunkte berechnet. Durch die Ermittlung der Differenzen zwischen den Indizes können die Schadensflächen identifiziert und auf Basis eines Schwellenwerts extrahiert werden. Anschließend erfolgt eine Verschneidung mit Landbedeckungsdaten, um das Ergebnis hinsichtlich der betroffenen Waldtypen zu quantifizieren. Abschließend werden die ermittelten Windwurfflächen in einer dreidimensionalen Geländeansicht visualisiert. 


---
title: 'Sentinel-2, part 1'
slug: Sentinel-2-Teil-1
taxonomy:
    category:
        - docs
---
## General
"Sentinel-2" does not refer to a single satellite, but to a pair of satellites. The first satellite 2A was launched on 22.06.15, 2B was launched on 07.03.17. They circle around the earth in a polar sun-synchronous orbit at an altitude of about 786 km. The overflight times are similar to Landsat and SPOT-5. This makes the data sets more comparable and also allows time series analyses.

![Senitel-2](Sentinel-2_composites.png?classes=caption "Artistic representation of Sentinel-2. Right: Image from the Taunus (Hesse), each in a different combination (red-green-blue, RGB) of different spectral bands.")
<br><br>

Some key facts about Sentinel-2:

- Optical sensor with 13 channels - distributed in the electromagnetic spectrum from visible light via near infrared to medium (short-wave) infrared, approx. 440-2200 nm
- Ground resolution: 10-60 m per pixel
- High temporal coverage (every 10 days for 1 satellite, 5 days with 2 satellites, in higher latitudes also every 2-3 days)
- The swath width of 290 km is larger than that of Landsat 7 and Landsat 8 (185 km) or SPOT (120 km). The downloadable Sentinel-2 images (tiles) always have a size of 100 x 100 km.

! For getting to know more about it, the [Sentinel Playground](http://apps.sentinel-hub.com/sentinel-playground/?source=S2&lat=40.34366578968397&lng=-3.6512374877929688&zoom=11&preset=1_NATURAL_COL0R&layers=B04,B03,B02&maxcc=20&gain=1.0&gamma=1.0&time=2015-01-01|2018-01-17&atmFilter=&showDates=false) (Sinergise Ltd.) is recommended.
<br><br>

Global coverage of Sentinel-2 in a video animation (ESA):
 <style>iframe{width: 100%; max-width: 640px; height: 360px; max-height: 360px}</style>
<div class="embed-responsive embed-responsive-16by9">
<iframe class="embed-responsive-item" src="https://www.esa.int/spaceinvideos/content/view/embedjw/473937" width="640" height="360" frameborder="0" allowfullscreen="allowfullscreen"></iframe>
</div>


![Rostock](Senitnel-2_Rostock.png?classes=caption "Rostock from above... Sentinel-2 Color Infrared (CIR) False color composite, RGB: 8-4-3. The arrow marks (approximately) the campus area of the University of Rostock.")
<br><br>

![Tiles](Senitinel-2_Tiles_GoogleEarth.png?classes=caption "Global coverage with Sentinel-2 as 100x100 km tiles.")
<br><br>

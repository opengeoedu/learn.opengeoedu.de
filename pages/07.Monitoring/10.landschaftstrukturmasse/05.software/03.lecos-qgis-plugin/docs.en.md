---
title: 'LecoS (QGIS Plugin)'
media_order: LecoS.JPG
taxonomy:
    category:
        - docs
twitterenable: true
twittercardoptions: summary
facebookenable: true
---

LecoS is a plugin of the GIS software QGIS (up to version 2.18). It allows calculations of landscape metrics with raster and vector data. The algorithms are obtained from the software FRAGSTATS, which has just been introduced.

The calculations based on raster data can be carried out quickly and the results are stored in a table. The use of vector data, however, is not possible in this form. A raster is still needed, but vector data can serve as a kind of mask. The results can also be saved in the attribute table of the vector data. Therefore this plugin is no alternative to the Patch Analyst when using vector data.

In summary, the LecoS plugin is an alternative to FRAGSTATS, especially if the rest of the workflow is still performed in QGIS. In addition, LecoS offers small scale calculations with vector data, but this is not comparable to the scope of the Patch Analyst.

![LecoS!](LecoS.JPG?lightbox=800&classes=caption "Figure 14: LecoS - Landscape vector overlay (QGIS plugin)")

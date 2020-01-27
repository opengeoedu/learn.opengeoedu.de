---
title: Raster data
taxonomy:
    category:
        - docs
visible: true
twitterenable: true
twittercardoptions: summary
facebookenable: true
---

Raster data is based on the values of the individual pixels (Picture element, raster cells). In this case, patches are a set of neighboring pixels with the same values and are also classified according to these values. So the smaller the pixel size, the more accurate the later calculation. (see Fig. 10)

![LSM_Raster](Raster_2.png?lightbox=800&classes=caption "Fig. 10: Example raster data - effect of pixel size (Source: HOECHSTETTER 2009)")

In contrast to vector data, raster data are bound to pixels and are therefore, depending on the data set, "stepped" at the boundaries between usage classes (as shown in Fig. 10). The upper section and the section at the bottom right have a uniform geographical extent. However, different pixel sizes also change the number of pixels. Due to this fact there are big differences in the calculation of landscape metrics. This problem can be recognized particularly well by the "Number of patches" or the "Ø Patch size".

Raster data are therefore strongly dependent on their resolution. However, in many cases they are easy to obtain. In particular, freely accessible satellite image data (e.g. Landsat or Sentinel data, see the lecture [Remote Sensing](https://learn.opengeoedu.de/fernerkundung)) should be mentioned here.

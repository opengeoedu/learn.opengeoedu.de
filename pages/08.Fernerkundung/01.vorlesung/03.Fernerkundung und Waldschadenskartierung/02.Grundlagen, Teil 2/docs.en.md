---
title: 'Raster images'
taxonomy:
    category:
        - docs
---


## Digital images

!	Difference between raster and vector data: see lecture [Land monitoring](https://learn.opengeoedu.de/monitoring) and [GIS](https://learn.opengeoedu.de/gis).

!	You will find further information in the remote sensing lexikon (www.fe-lexikon.info) about [vector-](http://www.fe-lexikon.info/lexikon-v.htm#vektordaten) and [raster data](http://www.fe-lexikon.info/lexikon-r.htm#rasterbild).

In digital (multispectral) RGB images, such as those displayed on monitors and displays, each pixel of the individual channel represents a specific gray value. This is virtually equivalent to a brightness value. The higher the signal input (e.g. reflected radiation) to a sensor, the greater the gray value of the resulting image. Accordingly, the pixel is displayed brighter. When recording with a radiometric resolution of 8 bit, the pixels can have 256 different gray values: Minimum 0 = black, maximum 255 = white.

![GrayscalesPixel](004_en.jpg?resize=500)

This is important for the interpretation of remote sensing imagery. Only by combining the gray value images of individual sensor channels (bands)  we can obtain a colored image. In this way, objects become more differentiable and certain features can be recognized. Two examples of Sentinel-2 satellite scenes from Frankfurt (Main) are shown below. The southern part shows the city forest. Due to the high reflection in the near infrared, the vegetation appears reddish when the NIR channel is set to red.

![GrayscalePixel](komposit_en.jpg?classes=caption "By setting threshold values you can color a grayscale image. The example shows an NDVI from a Sentinel-2 image around the city of Frankfurt. Thus vegetation can already be separated from water and built-up areas.")

#### Color slicing

Even a single gray value image can be displayed in color by defining a threshold value. For this purpose, the [image histogram](http://www.fe-lexikon.info/lexikon-h.htm#histogramm) or the gray value distribution of the individual pixels is divided into separate groups, each of which is assigned to a color. In this way, objects or land cover classes can already be separated from each other. The following example shows the colouring of a NIR channel (band 8) of Sentinel-2. Water bodies, vegetation and sealed/built-up areas can already be distinguished. This is a simple way of classifying images.

![ColorSlicing](Slices.jpg?classes=caption "Coloration of a NIR channel (band 8) of Sentinel-2. Water bodies, vegetation and sealed/built-up) areas by setting simple threshold values.")


## Image enhancement

There are numerous ways to optically change/improve a digital image in order to be able to recognize more. Also in remote sensing many different methods are applied.
An important step is usually the adjustment of the contrast, i.e. the difference between the different gray values or pixel values.
This is mostly a form of display in which the original pixel values are not changed and stored.


## Image interpretation

The quality of the image interpretation has many factors. The most basic is the viewer's personal experience. We learn to distinguish objects from each other by size, shape and colour. This applies to common items such as a table or car, but also to people. In each case a graded attribution is usually made, i.e. from rough classification (e.g. animal/mammal) to more precise classes (e.g. species: dog, race: Dalmatian). If we change our perspective, it becomes clear that this can also be transferred to remote sensing. In the optical interpretation of aerial and satellite images, for example, much is based on empirical values. However, one quickly reaches the limits of what is feasible when it comes to the unambiguous identification of objects and object classes.

![Erkennung](005_en.jpg?resize=500)

Land cover and land use classes can often only be distinguished and identified by on-site verification. Carefully collected training data and in-situ reference information are indispensable for a meaningful and accurate classification. A possible step is the collection of reference data in the form of spectral libraries (e.g. [USGS Spectral Library](https://crustal.usgs.gov/speclab/QueryAll07a.php)). Thus, a large number of measurements of a certain class (vegetation, mineral, etc.) can allow a certain transferability without the need for an in-situ recording in the current study area.

![Interpretation](006_en.jpg?resize=650)

The interpretation and classification depends not only on the color space, but also on the spatial resolution. In simple terms, this defines the smallest possible unit from which objects can be composed, depending on the (local) contrast. It is true that the larger the pixels, the coarser a possible classification is. But it depends on the context and intention. Too much information - both spectral and spatial - can also hinder a response or classification. For example, it may be more difficult to distinguish between crowns of trees in an image with a resolution of a few centimeters than in an image with 1-2 m resolution.

![SpatialResolution](003b_en.jpg?resize=250)

---
title: Interoperability
taxonomy:
    category:
        - docs
slug: interoperabilitaet
---

<style>
#schaubild_interoperabilitaet svg {
  width: auto;
  height: auto;
  max-width: 750px;
}

#schaubild_interoperabilitaet svg path {
  margin:50px;
}
</style>
Most Open Data guidelines contain similar specifications to the Open Definition (cf. [5-Star Open Data](../5star), [Open Government Data](/opendata/vorlesung/open-government-data)), but add further criteria to the "openness" or concretise them. In general, interoperability can be understood as a measure of the ability of different systems, organisations and/or individuals to work together to achieve a common goal ([Ide und Pustejovsky, 2010](/opendata/vorlesung/literatur#Ide2010)). **Technical openness** limits this and requires interoperability of data.

In the context of this lecture, the term interoperability is used more specifically to describe the possibility of integrating different data and systems into a single workflow (cf. [Bill, 2016, S. 212](/opendata/vorlesung/literatur#bill2016)).

In the scientific literature, interoperability is often subdivided into different sections, but these vary according to author and context ([Staub, 2009](/opendata/vorlesung/literatur#Staub2009), [Ide und Pustejovsky, 2010](/opendata/vorlesung/literatur#Ide2010)). In the context of data exchange and software systems, the term **syntactic interoperability** or interoperability of systems is usually used. With the help of defined data formats, communication protocols and interfaces, etc., the systems involved are able to exchange and process data, but there is no guarantee that they will interpret it meaningfully and correctly. This requires **semantic interoperability** or interoperability of concepts, i.e. there must be generally accessible data models that ensure that the systems involved interpret the data in the same way. For [Staub (2009)](/opendata/vorlesung/literatur#Staub2009), syntax and semantics are partial aspects of **technical interoperability**. 

**Organizational interoperability** also plays an important role: by defining standards (e.g. W3C, OGC) and norms (e.g. ISO, DIN), but also laws and guidelines, a uniform framework for technologies and structures that are used is set within the respective area of application.

<figure class="image-caption">
<div id="schaubild_interoperabilitaet" width=100%>
    <noscript>
        <img src="interoperabilitaet/interoperabilitaet.png">
    </noscript>

</div>
<figcaption>Structure of the concept of interoperability according to <a href="/opendata/vorlesung/literatur#Staub2009">Staub (2009)</a></figcaption>
</figure>

All these aspects are of fundamental importance for the usability of open data: Ideally, these should be processed (syntactic interoperability) and interpreted (semantic interoperability) by means of generally available software, without this being hampered by the use of proprietary, exotic or non-standard data formats and interfaces (organisational interoperability).

<script type="text/javascript" src="interoperabilitaet/loadsvg.js"></script>

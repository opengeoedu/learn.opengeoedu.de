---
title: 'Administrative structure in Switzerland'
taxonomy:
    category:
        - docs
menu: 'Adm. structure CH'
slug: adm_ch
---

<!-- Farbgebung Schweiz "Forestgreen": #228b22-->

<style>
    .figureattributes{
        max-width:600px;
        width: 100%;
        height: auto;
    }

    #vwgeb_ch{
    }

    #vwgl_ch{

    }

</style>

Switzerland has been a federal state since 1948, also known as 'Swiss Confederation'. Power is divided between the Confederation, cantons and communes, with cantons and communes having a great deal of leeway to fulfil their duties. In this way it is possible for Switzerland to exist as a unit despite its many languages and regional characteristics. In the administrative-hierarchical order, a distinction is generally made between 4 levels: Confederation, cantons, districts and communes. Administrative units are uniquely identified by the so-called BFS or code numbers (BFS = Federal Statistical Office).


<div class="row align-items-center">
   <div class="col-md-6 image-caption" style="padding:0px">
   <figure class="image-caption" markdown="1">
  ![](vwgeb_ch/Rplot_all.png?id=vwgeb_ch)
    <figcaption>Quelle: <a href="https://www.swisstopo.admin.ch/">Bundesamt für Landestopografie</a>, 2018 (swissBoundaries3D)</figcaption>
    </figure>
  </div>
  <div class="col-md-6" markdown="1">
  ![](vwgl_ch/ch_vwgl_all.png?id=vwgl_ch)

  </div>

</div>
  <div id="description" align="middle">Political and administrative structure in Switzerland (as at 1.1.2019)</div>


[ui-tabs position="top-left" active="0" theme="lite"]
[ui-tab title="Administrative units"]

[ui-accordion independent=true open=none classes="figureattributes, figure-left"]

[ui-accordion-item title="Cantons"]
The cantons are the federal members of the federal state with a high degree of autonomy. Among the 26 cantons with equal rights, 6 are also counted as semi-cantons (Basel-Stadt and Basel-Landschaft; Ob- and Nidwalden; Appenzell A. Rh. and I. Rh.). The Federal Constitution thus speaks of 23 cantons. In principle, the cantons exercise all rights that are not transferred to the Confederation under the Federal Constitution. This also means that new tasks are first the responsibility of the cantons and are only transferred to the Confederation if they require uniform regulation. (cf. https://www.bfs.admin.ch/bfs/de/home/statistiken/querschnittsthemen/raeumliche-analysen/raeumliche-gliederungen/Institutionelle-gliederungen.html, http://www.hls-dhs-dss.ch/textes/d/D26414.php)
[/ui-accordion-item]

[ui-accordion-item title="Districts"]
Districts are not political bodies but, with a few exceptions, purely administrative and judicial units and constituencies without autonomy. In some cantons, terms such as administrative region or district, constituency, office or district are also used. As an intermediate level between the canton and the municipalities, the district also plays a role in statistics. The small cantons without district subdivisions are usually each represented as one district. In Graubünden, Thurgau, Ticino and Vaud, the districts are further subdivided into districts.

The districts in Appenzell Innerrhoden tend to correspond in their functions to political communities, while those in Schwyz are at the same time public corporations with their own legal personality. The districts in Uri and Nidwalden also had or have a corporative character. Some cantons have exclaves.
(cf. http://www.hls-dhs-dss.ch/textes/d/D10358.php)
[/ui-accordion-item]

[ui-accordion-item title="Congregations"]
The **municipalities** are the lowest and smallest administrative units in Switzerland, with numerous political competences and tasks. As the political organisation at the local level is the responsibility of the cantons, the municipalities vary from canton to canton, both in terms of their size and their areas of responsibility, as well as their administrative and political structure. They often represent the lowest level of statistical coverage. According to the Federal Statistical Office (FSO), due to their heterogeneity and the annually fluctuating number caused by territorial reforms, they are only suitable for spatial and temporal analyses to a limited extent. (See https://www.bfs.admin.ch/bfs/de/home/statistiken/querschnittsthemen/raeumliche-analysen/raeumliche-gliederungen/Institutionelle-gliederungen.html)
[/ui-accordion-item]

[ui-accordion-item title="Counties"]
**Counties** in Switzerland designate administrative units that are mostly limited to certain functions and exist at different levels of government, i.e. at federal, cantonal and, in some cases, communal level. They allow administrative tasks to be performed beyond the traditional division into cantons, districts and municipalities. (cf. http://www.hls-dhs-dss.ch/textes/d/D10361.php)
[/ui-accordion-item]

[ui-accordion-item title="Cantonal territory"]
Areas under the sovereignty of a canton.
[/ui-accordion-item]

[ui-accordion-item title="Communancy"]
Areas under the sovereignty of several political communes (so-called communes or communal areas)
[/ui-accordion-item]
[/ui-accordion]

[/ui-tab]
[ui-tab title="Code / BFS number"]

!!!!! Sorry, we are working hard to make this content available to you in English.

Zur eindeutigen Identifizierung von Verwaltungseinheiten vergibt das Bundesamt für Statistik (BFS) die sogenannten Code- oder BFS- Nummern. Unabhängig von der 1 bis 4-stelligen BFS-Gemeindenummer existieren auch BFS-Seenummern und auf den höheren Verwaltungsebenen eine 1- bis 2-stellige Kantonsnummer und eine 3- bis 4-stellige Bezirksnummer. Die ersten 1 bzw. 2 Stellen der Berzirksnummer entprechen jeweils der Kantonsnummer. Kantone, welche nicht in Bezirke eingeteilt werden, wird im amtlichen Gemeindeverzeichnis eine Bezirksnummer  zugeordnet, die auf zwei Nullen endet, z.B. 400 für Kanton Uri oder 600 für Kanton Nidwalden.

Im Gegensatz zu den Österreichischen und Deutschen Systematiken wird also kein durchgängiger Verwaltungsschlüssel verwendet - der Gemeindeschlüssel wird unabhängig von den übergeordnetten Kantons- und Bezirksnummern gebildet und reicht für sich aus, um Gemeinden eindeutig zu identifiziern. Aus der Bezirksnummer kann jedoch die Kantonsnummer abgeleitet werden.

Im Datenprodukt swissBoundaries3D, herausgegeben durch das BFS, werden Hoheitsgebiete zudem eindeutig mit einem zusammengesetzten Schlüssel-Attribut der Bezeichnung 'SHN' identifiziert, der sich aus ICC (internationaler Country-Code), Bezirksnummer und BFS-Gemeindenummer zusammensetzt.

Beispiel:
Die Gemeinde Lindau mit der BFS-Gemeindenummer 176 liegt im Bezirk Pfäffikon mit der Nummer 108, welcher Teil des Kantons Zürich (ZH) mit der Nummer 1 ist. Der zusammengesetzte im SHN-Schlüssel swissBoundaries3D ist CH01080176.


<!--Die BFS-Nummer ist ein von den Statistischen Ämtern der Bundesländer vergebener 5-stelliger Schlüssel zur eindeutigen Identifizierung einer Gemeinde. Er setzt sich wie folgt zusammen zusammen:

<pre style="white-space: pre-wrap;">Kanton&#160;(2 Stellen), Regierungsbezirk&#160;(1 Stelle), Kreis&#160;(2 Stellen) und Gemeinde&#160;(3 Stellen)</pre>

5-stellige Gemeindenummer (Code-NR, BFS-Nr)
(z.B. Kantonsnummer 2 Stellen, dann 4-stelliger Nummernbereich für Gemeinden
z.B. Kanton Zürich, Bezirk Affoltern, Gemeinde Affoltern am Albis 0002-0002)-->
[/ui-tab]
[/ui-tabs]

## Literature

Regiograph Switzerland: Administrative regions of Switzerland (online at: https://www.regiograph-schweiz.ch/download/administrative-gebiete/)
Federal Statistical Office: Switzerland's official municipal directory (online at: https://www.bfs.admin.ch/bfs/de/home/grundlagen/agvch.html)
Federal Statistical Office: spatial planning of Switzerland (online at: https://www.bfs.admin.ch/bfs/de/home/grundlagen/raumgliederungen.html)
Federal Statistical Office: Regional statistics (online at: https://www.bfs.admin.ch/bfs/de/home/statistiken/regionalstatistik.html)
Federal Statistical Office: Spatial analyses. Spatial structure (online at: https://www.bfs.admin.ch/bfs/de/home/statistiken/querschnittsthemen/raeumliche-analysen/raeumliche-gliederungen.html)
Federal Chancellery BK (2019): The Confederation briefly explains (online at: https://www.bk.admin.ch/bk/de/home/dokumentation/der-bund-kurz-erklaert.html)
Historical Dictionary of Switzerland (HLS)(online at http://www.hls-dhs-dss.ch/)

! The FSO's **Statistical Atlas of Switzerland** enables you, among other things, to interactively display the administrative areas of Switzerland at various administrative and political levels, see: [Cantons](https://www.atlas.bfs.admin.ch/maps/13/de/234_233_228_227/134.html) of Switzerland, [Districts 2019](https://www.atlas.bfs.admin.ch/maps/13/de/14046_231_228_227/22542.html), [Communes 2019](https://www.atlas.bfs.admin.ch/maps/13/de/14045_229_228_227/22541.html)

<script src="adm_ch/animate.js"></script>

---
title: 'OSM data model'
menu: 'Data model'
slug: 'datenmodell'
taxonomy:
    category: docs
---
The OSM data model essentially knows the object types *node*, *way* and *relation*. Planar objects are created by line closure. *Attributes* can be assigned to the individual objects. A relation can be used to model relationships between objects. Since the original focus was on the collection of traffic data, a kind of object type catalogue (Map Features) is defined, which knows roads (Highway), waterways (Waterway), railways (Railway) and which is supplemented by extensive types of use such as leisure areas, squares, land use and others. In principle, however, OSM allows any keys and values, but individual extensions are not necessarily supported and visualized. All data in the OSM database is subject to the [Open Database Lizenz (OdbL) 1.0](https://opendatacommons.org/licenses/odbl/) for the database and the [Open Data Contents License 1.0](https://opendatacommons.org/licenses/dbcl/) for individual content.

<!--Alle Daten, die in der OSM-Datenbank eingestellt sind, unterstehen der Lizenz Creative Commons Attribute Share Alike 2.0 (creativecommons.org/licenses/by-sa/2.0/).-->

[center]
![](Datenmodell.png?width=500)
[/center]

The entries each consist of a tag that represents a combination of key term (Key) and value entry (Value) (*Key-Value-Pair*).

[center]
[ui-tabs position="top-left" active="0"]
[ui-tab title="Node"]
![](node.png?width=500)
[/ui-tab]
[ui-tab title="Ways"]
![](ways.png?width=500)
[/ui-tab]
[ui-tab title="Relations"]
![](relations.png?width=500)

[/ui-tab]
[/ui-tabs]
[/center]
! Further information can be found at:
! * [www.openstreetmap.org](http://www.openstreetmap.org/)
! * [OpenStreetMap Wiki](https://wiki.openstreetmap.org/wiki/Main_Page)


!! Research in OSM at your own place of residence and familiarize yourself with the existing content and the expressiveness of the OSM data.

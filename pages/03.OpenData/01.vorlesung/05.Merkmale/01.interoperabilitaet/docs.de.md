---
title: Interoperabilität
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

Die meisten Open Data Richtlinien beinhalten ähnliche Vorgaben wie die Open Definition (vgl. [5-Star Open Data](../5star), [Open Government Data](/opendata/vorlesung/open-government-data)), fügen dem aber noch weitere Kriterien an die "Offenheit" hinzu oder konkretisieren diese. So setzt das Kriterium der **technischen Offenheit** Interoperabilität der Daten voraus, d.h. die Möglichkeit, gemeinsam verschiedenartige Daten und Systeme in einen einzigen Arbeitsablauf zu integrieren ([Bill, 2016, S. 212](/opendata/vorlesung/literatur#bill2016)).


In der wissenschaftlichen Literatur wird Interoperabilität oft in verschiedene Teilbereiche untergliedert, jedoch varieren diese nach Autor und Kontext ([Staub, 2009)](/opendata/vorlesung/literatur#Staub2009), [Ide und Pustejovsky, 2010](/opendata/vorlesung/literatur#Ide2010)). Im Zusamenhang mit Datenaustauch und Software-Systemen ist meist von **syntaktischer Interoperabilität** oder Interoperabilität der Systeme die Rede. Mithilfe definierter Datenformate, Kommunikationsprotokolle und Schnittstellen u.a. sind die involvierten Systeme sind in der Lage, Daten auszutauschen und zu verarbeiten, jedoch ist nicht garantiert, dass Sie diese auch sinnvoll und korrekt interpretieren.

Dafür ist **semantische Interoperabilität** oder Interoperabilität der Konzepte notwendig, d.h. es muss allgemein zugängliche Datenmodelle geben, die sicherstellen, dass die beteiligten Systeme die Daten auf die gleiche Weise interpretieren. Für [Staub (2009)](/opendata/vorlesung/literatur#Staub2009) sind Syntax und Semantik Teilaspekte der **technischen Interoperabilität**. Daneben spielt **organisatorische Interoperabilität** eine wichtige Rolle: Durch die Definition von Standards (z.B. W3C, OGC) und Normen (z.B. ISO, DIN), aber auch Gesetze und Richtlinien, wird innerhalb des jeweiligen Geltungsbereich ein einheitlicher Rahmen für Technologien und Strukturen gesetzt, die Verwendung finden.

<figure class="image-caption">
<div id="schaubild_interoperabilitaet" width=100%>
    <noscript>
        <img src="interoperabilitaet/interoperabilitaet.png">
    </noscript>

</div>
<figcaption>Gliederung des Interoperabilitätsbegriffs nach <a href="/opendata/vorlesung/literatur#Staub2009">[Staub (2009)]</a></figcaption>
</figure>

Alle diese Aspekte sind von grundlegender Bedeutzung für die Nutzbarkeit von offenen Daten: Diese ist gegeben, wenn es möglich ist, Daten mittels allgemein verfügbarer Software zu verarbeiten (syntaktische Interoperabilität) und zu interpretiert (semantische Interoperabilität), ohne dass dies etwa durch die Verwendung exotischer oder nicht-standardisierter Datenformate und Schnittstellen erschwert wird (organisatorische Interoperabilität).



<script type="text/javascript" src="interoperabilitaet/loadsvg.js"></script>

<!--
## Datenformate und Schnittstellen

Für einen offenen Informationsaustausch ist die Verwendung proprietärer oder auch exotischer Datenformate, Schnittstellen oder APIs kontraproduktiv, weil diese i.d.R. nur mit der Produktfamilie eines bestimmten Softwareanbieters kompatibel sind. Sollen Informationen und Services der Öffentlichkeit oder einem größeren Publikum zugänglich gemacht werden, ist es daher besser, wenn sich diese an allgemeingültigen Normen (z.B. ISO- und DIN- Normen) und offenen Standards (z.B. W3C und OGC-Spezifikationen) orientieren.



Diese wird durch Normen, Standards, Richtlinien und Gesetzte realisiert, auf deren Grundlage standardisierte Schnittstellen, Datenausausformate und Datenbeschreibungssprachen definiert sind.



Teilbereiche der technischen Interoperabilität zu der auch die *Meta-Intoperabilität* zählt.


Die wissenschaftliche Literatur unterscheidet zwischen verschiedene Teilaspekten der Interoperabilität - jedoch varieren die Einteilungen je nach Autor und Kontext.

Es wird zwischen organisatorischer, technischer, syntaktischer und semantischer Interoperabilität unterschieden [], die jeweils separat und oft branchenspezifisch durch standardisierte Schnittstellen, Webservice-Spezifikationen, Datenformate und Datenmodelle adressiert werden müssen.

Ist Interoperabilität nicht gegeben, ist es mitunter unmöglich oder sehr aufwändig, verschiedene Datensätze miteinander zu verknüpfen oder mit einer Software eigener Wahl zu verarbeiten.

-->

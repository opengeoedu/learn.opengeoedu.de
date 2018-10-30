---
title: OpenGeoEdu + GRAV + GitHub
menu: Dokumentation für Autoren
taxonomy:
    category:
        - docs
---
# Dokumentation der offenen Lernumgebung

## Was ist <i class="fab fa-grav"></i> GRAV?
Die zugrundeliegende Architektur von [Grav](https://getgrav.org/) basiert auf bewährten Technologien. Damit soll sichergestellt werden, dass OpenGeoEdu mit Grav einfach zu bedienen und einfach zu erweitern ist. Einige dieser Schlüsseltechnologien sind:
+ **Twig** Templating: für die Steuerung der Benutzeroberfläche
+ **Markdown**: zur einfachen Erstellung von Inhalten
+ **YAML**: für einfache Konfiguration
+ Parsedown: für schnelle Markdown und Markdown Extra Unterstützung
+ und weitere (Doctrine Cache,Pimple Dependency Injection Container, Symfony Event Dispatcher


## Grundidee
Die Erstellung und Aktualisierung der offenen Lerninhalte (Lectures) soll nach kurzem erlernen der Grundlagen vielen Interessierten möglich sein. Die Versionskontrolle und Kollaboration bei der Erstellung offener Inhalte soll durch Git(Hub) gewährleistet werden.

Dazu folgendes Schema:
![http://learn.hibbittsdesign.org/user/pages/03.openpublishingspace/02.work-flow/open-publishing-space-with-git-sync-workflow.png](gravgitworkflow.png?classes=caption "scheme by hibbittsdesign")

---
title: OpenGeoEdu + GRAV + GitHub
menu: Dokumentation für Autoren
taxonomy:
    category:
        - docs
<<<<<<< HEAD
shortcode-core:
    active: false
    enabled: true
highlight:
  enabled: false
---
# Dokumentation der offenen Lernumgebung


## Markdown in HTML
Für die Verwendung von markdown in html-Abschnitten muss folgender Wert gesetzt werden:

```
markdown="1"
```

funktionierendes Beispiel:

```
<div class="container" markdown="1">
  ![Bildalttext](URL)
```

## Code Markierung
Einfaches Einrücken mit 4 Leerzeichen am Zeilenanfang
oder mit ```

    ```
     codezeile1
     codezeile2
     ```
wird zu html

    <pre>
        <code>
          codezeile1
          codezeile2
        </code>
    </pre>

## Shortcodes
The core plugin contains a few simple shortcodes that can be used as basic examples:

#### Underline
Underline a section of text

```
This is some [u]bb style underline[/u] and not much else
```

#### Font Size
Set the size of some text to a specific pixel size

```
This is [size=30]bigger text[/size]
```

#### Alignment
Left align the text between this shortcode

```
[left]This text is left aligned[/left]
```

Center a selection of text between this shortcode

```
[center]This text is centered[/center]
```

Right align the text between this shortcode

```
[right]This text is right aligned[/right]
```


#### Div

Allows you to wrap markdown in an HTML `div` tag that supports both `id` and `classes` attributes

```
[div class="text-center"]

 This text is **centered** aligned

[/div]
```

or

```
[div class="table table-striped"]
| header 1 | header 2 |
|----------|----------|
| A 1      | B 1      |
| A 2      | B 2      |
| A 3      | B 3      |
[/div]
```


#### Span

Allows you to wrap markdown in an HTML `span` tag that supports both `id` and `classes` attributes

```
[span class="text-center"]
This text is **centered** aligned
[/span]
```


#### Columns

Take advantage of powerful CSS columns support by using this shortcode

```
[columns]
### Headline

Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
consequat.

Duis aute irure dolor in reprehenderit in voluptate velit esse
cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
proident, sunt in culpa qui officia deserunt mollit anim id est laborum.

Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
consequat.
[/columns]
```

Defaults to 2 columns.  You can also explicitly set the number of `columns`, `width`, `gap`, and `rule` styling for the column divider:

```
[columns count=3 width=200px gap=30px rule="1px dotted #930"]
### Headline

Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
consequat.

Duis aute irure dolor in reprehenderit in voluptate velit esse
cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
proident, sunt in culpa qui officia deserunt mollit anim id est laborum.

Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
consequat.
[/columns]
```

#### Raw

Do not process the shortcodes between these raw shortcode tags

```
[raw]This is some [u]bb style underline[/u] and not much else[/raw]
```

#### Safe-Email

Encode an email address so that it's not so easily 'scrapable' by nefarious scripts.  This one has a couple of options: `autolink` toggle to turn the email into a link, and an `icon` option that lets you pick a font-awesome icon to prefix the email.  Both settings are optional.

```
Safe-Email Address: [safe-email autolink="true" icon="envelope-o"]user@domain.com[/safe-email]
```

#### Section

The **section** shortcode is a powerful way to encompass some text in your markdown page with a `[section][/section]` tag and then this is cached by Grav so it can be accessed later.  For example you could have a page with a variety of sections described in it that let you create many **chunks** of data. These are then added to Twig as an array of shortcode objects.  An example of this would be the following markdown:

```
[section name="author"]
![](author.jpg?cropResize=100,100&classes=left)
### Johnny Appleseed
Johnny Appleseed was an American pioneer nurseryman who introduced apple trees to large parts of Pennsylvania, Ontario, Ohio, Indiana, and Illinois, as well as the northern counties of present-day West Virginia. He became an American legend while still alive, due to his kind, generous ways, his leadership in conservation, and the symbolic importance he attributed to apples.
[/section]

[section name="quote"]
> Some are born great, some achieve greatness, and some have greatness thrust upon them.
  Read more at http://www.brainyquote.com/quotes/topics/topic_great.html#tdqt3strtEYBCH43.99
> <cite>William Shakespeare</cite>

Regular **Markdown** content that will be output as `page.content`
[/section]
```

This we be removed from the page content and made available in Twig variables so you could insert these into custom HTML structures, for example:

```
<div id="author">{{ shortcode.section.author }}</div>

<div id="article">
    <div class="left">
        {{ page.content }}
    </div>
    <div class="right">
        {{ shortcode.section.quote }}
    </div>
</div>
```

#### Sections from other pages

You can even retrieve a section from another page utilizing the shortcodes as they are stored in the page's `contentMeta` with this syntax:

```
<div id="author">{{ page.find('/my/custom/page').contentMeta.shortcodeMeta.shortcode.section.author }}</div>
```

#### Notice

A useful shortcode that performs a similar job to the [markdown-notices](https://github.com/getgrav/grav-plugin-markdown-notices) plugins, allows you to easily create simple notice blocks as seen on http://learn.getgrav.org and http://getgrav.org.  To use simply use the following syntax:

```
[notice]
Your **Markdown** text that will appear in the notice
[/notice]
```

You can also specifically choose from `note`, `info`, `warning`, `tip` types which provide unique color options:

```
[notice=warning]
Danger Will Robinson! Danger, Will Robinson!
[/notice]
```

#### FontAwesome

[FontAwesome](https://fortawesome.github.io/Font-Awesome/) is a powerful library of font-based icons.  This shortcode makes it simple to add fontawesome icons to your page content without using HTML.

[fa=cog /] Simplest Format

[fa=fa-cog /] Format using `fa-` prefix

[fa icon=fa-camera-retro /] Explicit format

[fa icon=fa-camera-retro extras=fa-4x /] Explicit format with extras - [See FontAwesome Examples](https://fortawesome.github.io/Font-Awesome/examples/)

[fa icon=fa-circle-o-notch extras=fa-spin,fa-3x,fa-fw,margin-bottom /] The full monty! - [See FontAwesome Examples](https://fortawesome.github.io/Font-Awesome/examples/)
=======
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
>>>>>>> 63f56484ed6a2452c50995eb1d15d7fe4ad28e1f

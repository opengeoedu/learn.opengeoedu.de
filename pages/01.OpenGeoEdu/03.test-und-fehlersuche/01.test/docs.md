---
title: Testumgebung für Ideen
menu: Tests & Fehlersuche
---
## gitsynctest

## UML diagrams [liveditor](https://mermaidjs.github.io/mermaid-live-editor/#/edit/eyJjb2RlIjoiZ3JhcGggVERcbkFbQ2hyaXN0bWFzXSAtLT58R2V0IG1vbmV5fCBCKEdvIHNob3BwaW5nKVxuQiAtLT4gQ3tMZXQgbWUgdGhpbmt9XG5DIC0tPnxPbmV8IERbTGFwdG9wXVxuQyAtLT58VHdvfCBFW2lQaG9uZV1cbkMgLS0-fFRocmVlfCBGW2ZhOmZhLWNhciBDYXJdXG4iLCJtZXJtYWlkIjp7InRoZW1lIjoiZGVmYXVsdCJ9fQ)

[sequence]
A->B:Hi C for me !
B-->A:With pleasure
B->C:A says hello
[/sequence]

[flow]
st=>start: Start plugin
e=>end: End
op1=>operation: Development|success
sub1=>subroutine: Add features|success
cond=>condition: It is cool?|invalid
io=>inputoutput: Update for users|calm

st->op1->cond
cond(yes)->io->e
cond(no)->sub1(right)->op1
[/flow]

[mermaid]
graph TD
A[Christmas] -->|Get money| B(Go shopping)
B --> C{Let me think}
C -->|One| D[Laptop]
C -->|Two| E[iPhone]
C -->|Three| F[fa:fa-car Car]
[/mermaid]

# NoticesTest
<div class="p-3 mb-2 bg-dark text-white">[fa=fa-exclamation extras=fa-4x /] Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</div>

[notice=warning]
Danger Will Robinson! Danger, Will Robinson!
[/notice]

[fa=fa-cog extras=fa-2x /]
!  4 Lorem ipsum Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. olor sit amet, consectetur adipisicing elit, sed do

!! 3 Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do

!!! 2 Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco

!!!! consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation

!!!!! Test 5

!!!!!! Test 6



## Demo Test

https://ilias.uni-rostock.de/goto.php?target=tst_44938&client_id=ilias_hro
```
[ILIAS](https://ilias.uni-rostock.de/goto.php?target=tst_44938&client_id=ilias_hro)
```

---
## Navigationsoptionen (Lecture, Übung, Test)
[ui-tabs position="center" active="0" theme="lite"]
[ui-tab title="Lecture"]
![](/images/script-lecture.png)
[/ui-tab]

[ui-tab title="Übung"]
![](/images/exercise.png)
[/ui-tab]

[ui-tab title="Test"]
![](/images/test.png)
[/ui-tab]
[/ui-tabs]
---
## Darstellung der Niveaustufen

<div class="progress">
  <div class="progress-bar progress-bar-striped progress-bar-animated bg-success" style="width:33%"></div>
</div>
<div class="progress">
  <div class="progress-bar progress-bar-striped progress-bar-animated bg-warning" style="width:66%"></div>
</div>
<div class="progress">
  <div class="progress-bar progress-bar-striped progress-bar-animated bg-danger" style="width:99%"></div>
</div>
```
## Darstellung der Niveaustufen
<div class="progress">
  <div class="progress-bar progress-bar-striped progress-bar-animated bg-success" style="width:33%"></div>
</div>

<div class="progress">
  <div class="progress-bar progress-bar-striped progress-bar-animated bg-warning" style="width:66%"></div>
</div>

<div class="progress">
  <div class="progress-bar progress-bar-striped progress-bar-animated bg-danger" style="width:99%"></div>
</div>
```
<br>

## Abstufung der Hilfestellung
<div class="progress">
  <div class="progress-bar bg-success" style="width:33%">
    Advanced
  </div>
  <div class="progress-bar bg-warning" style="width:33%">
    Basic
  </div>
  <div class="progress-bar bg-danger" style="width:33%">
    Click by Click
  </div>
</div>
```
## Abstufung der Hilfestellung
<div class="progress">
  <div class="progress-bar bg-success" style="width:33%">
    Advanced
  </div>
  <div class="progress-bar bg-warning" style="width:33%">
    Basic
  </div>
  <div class="progress-bar bg-danger" style="width:33%">
    Click by Click
  </div>
</div>
```
<br>
<br>

---
## Videoauswahl (statt carousel)
[ui-tabs position="top-left" active="0" theme="lite"]

[ui-tab title="First Tab"]
[plugin:youtube](https://youtu.be/rEB3Oti20CI)
[/ui-tab]

[ui-tab title="second Tab"]
[plugin:youtube](https://youtu.be/rEB3Oti20CI)
[/ui-tab]
[/ui-tabs]

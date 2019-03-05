---
title: Präsentationen
content:
    items: '@self.children'
    order:
        by: date
        dir: asc
    limit: 10
    pagination: true
---

{% for p in page.collection %}
<a href="{{ p.url }}"><h2>{{ p.title }}</h2></a>
<!-- {{ p.summary }} -->
{% endfor %}
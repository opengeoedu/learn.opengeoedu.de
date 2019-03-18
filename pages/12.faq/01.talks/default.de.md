---
title: Präsentationen
published: false
routes:
    aliases:
        - /talks
twitterenable: true
twittercardoptions: summary
facebookenable: true
content:
    items: '@self.children'
    order:
        by: date
        dir: asc
    limit: 10
    pagination: true
---

{% for p in page.collection %}
<a href="{{ p.url }}" target="_blank"><h2>{{ p.title }}</h2></a>
{% endfor %}
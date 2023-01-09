---
layout: page
title: Links
description: 高频访问地址
keywords: 友情链接
comments: true
menu: 链接
permalink: /links/
---

> 

<ul>高频访问 (Generous sharing make the world a beautiful place.)
{% for link in site.data.links %}
  {% if link.src == 'tools' %}
  <li><a href="{{ link.url }}" target="_blank">{{ link.name}}</a></li>
  {% endif %}
{% endfor %}
</ul>

> 友情链接 (God made relatives. Thank God we can choose our friends.)

<ul>
{% for link in site.data.links %}
  {% if link.src == 'friends' %}
  <li><a href="{{ link.url }}" target="_blank">{{ link.name}}</a></li>
  {% endif %}
{% endfor %}
</ul>

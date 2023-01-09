---
layout: page
title: About
description: 积木的价值，在于人赋予它的意义
keywords: Zhuang Ma, 马壮
comments: true
menu: 关于
permalink: /about/
---

这里是积木小屋。

致力于构建「标准化集成模块」。


## 关键词

{% for skill in site.data.skills %}
### {{ skill.name }}
<div class="btn-inline">
{% for keyword in skill.keywords %}
<button class="btn btn-outline" type="button">{{ keyword }}</button>
{% endfor %}
</div>
{% endfor %}

---
layout: page
title: About
description: 积木的价值，在于内在的意义
keywords: Zhuang Ma, 马壮
comments: true
menu: 关于
permalink: /about/
---

这里是积木小屋。

向往「与自然、土地、人的真实连接」。

通过标准化集成模块，构筑内在精神世界。

## 联系

<ul>
{% for website in site.data.social %}
<li>{{website.sitename }}：<a href="{{ website.url }}" target="_blank">@{{ website.name }}</a></li>
{% endfor %}
{% if site.url contains 'mazhuang.org' %}
<li>
微信公众号：待定<br />
<!-- <img style="height:192px;width:192px;border:1px solid lightgrey;" src="{{ site.url }}/assets/images/qrcode.jpg" alt="闷骚的程序员" /> -->
</li>
{% endif %}
</ul>


## 关键词

{% for skill in site.data.skills %}
### {{ skill.name }}
<div class="btn-inline">
{% for keyword in skill.keywords %}
<button class="btn btn-outline" type="button">{{ keyword }}</button>
{% endfor %}
</div>
{% endfor %}

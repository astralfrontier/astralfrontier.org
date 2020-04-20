---
date: '2015-06-02T00:00:00-07:00'
title: Metalsmith
description: 'I''ve rewritten the astralfrontier.org site from using [Nesta] to [Metalsmith], a Node-based static site creator. There''s a few reasons for the transition. '
path: /2015/06/02/metalsmith
featuredImage: ../hexo.png
tags: []
links: []
category: Uncategorized
---

I've rewritten the astralfrontier.org site from using [Nesta] to [Metalsmith], a Node-based static site creator. There's a few reasons for the transition.

<!-- more -->

1. I've been interested in learning more about Node.js. While Nesta is written in Ruby, it doesn't really teach me anything significantly new about Ruby. I did do some monkey-patching of Nesta functionality to make it work more like I wanted, but that was the application of a familiar skill.
2. The site is pretty static by nature, so there's no need for a live server running except to handle things like dynamic redirects.
3. The site doesn't get enough traffic to justify a mature redirect system - I'm not losing anyone if they can't find my defunct Pathfinder material, for example.
4. The Metalsmith pipeline is completely configurable by code, and the plugin system is easy to hook into.

That said, Metalsmith isn't perfect - for example, I can't write page code that dynamically reads collections of other pages, because at the time that code would be run, the pages are still being compiled. There's no dependency management or ordering system for pages. I can work around this, but a dynamic application server would find it an easier problem to solve.

The former blog was written with [Foundation] for CSS. I've gone back to [Bootstrap] for the same reason I switched from Nesta - I know Foundation pretty well now, and my Bootstrap v3 experience could use brushing up.

[Nesta]: http://nestacms.com/
[Metalsmith]: http://www.metalsmith.io/
[Bootstrap]: http://getbootstrap.com/
[Foundation]: http://foundation.zurb.com/

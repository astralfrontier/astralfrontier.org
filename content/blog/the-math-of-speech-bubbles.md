+++
title = "The Math of Speech Bubbles"
description = "Building an comic book, one computation at a time"
date = "2024-01-12 01:06:58"
authors = ["astralfrontier"]

[taxonomies]
tags = ["Comic Design Diary"]

[extra]
icon = "fa-regular fa-comments"
+++

In the interest of creating a comic book, and/or a visual novel with a comic-book vibe,
I want to programmatically create speech bubbles.

On the one hand, this might just be laziness.
Why don't I just hand-draw every single bubble around every single bit of text, like an artist?
I feel like that question answers itself, but let's give another one,
which is that it's easier to produce more stuff if it's easier to, well, produce that stuff!
Labor-saving tools also enable me to easily re-edit my dialogue without laboriously redrawing it all.

The downsides are obvious: this doesn't let me incorporate the bubbles as easily into the
rest of the artwork. For a professional comic book, this might be a serious consideration.
But for something like a VN, or a cheap indie comic to get me started, I'm okay.

So what goes into this process?

<!-- more -->

First, let's define what we're talking about.
You can see plenty of examples [here](https://clipart-library.com/free/transparent-comic-bubble.html),
so let's break those down.

A comic book speech bubble has these common elements:

- A primary shape, most often an ellipse of some kind, with a black stroke and a white interior fill
- An ellipse perimeter that suggests a mood, e.g. fluffiness for thinking, spikes for anger or excitement, and so on.
- A tail, either a roughly triangular shape to point at the speaker, or a series of bubbles to indicate thought
- Optionally, a drop shadow effect

If we wanted to figure out how to draw this on a computer,
say via the HTML canvas API for [ellipse](https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/ellipse),
we have three things to do:

1. Actually draw the ellipse via some provided API, but don't draw the entire perimeter
2. Calculate where to stop and start the drawing - where to leave a gap for the tail
3. Draw the tail

An ellipse is defined by two functions: `x = a cos t` and `y = b sin t`,
where `a` is the radius of the X axis, `b` is the radius of the Y axis,
and `t` is our travel along the perimeter, from zero to `2 pi`.

So to draw our tail, we'd pick a range of `t` values where we don't draw,
then compute `x` and `y` for those values of `t`,
somehow pick an angle for the tail, and compute the rest of ~~the fucking owl~~ a triangle.

This is great if we want our tail to be proportional in size to the overall ellipse.
What if we don't?

In that case, we'd need to pre-calculate the perimeter of the ellipse.
This is pretty hard to do, but there are [approximations](https://www.mathsisfun.com/geometry/ellipse-perimeter.html)
that can give a good enough answer for the scales we're working at.

If we know the width of our desired tail `w`, `w / p` or width divided by perimeter
gives us a percentage of the overall perimeter occupied by the tail.
Multiplying that by `2 pi` gives us the number of radians to omit,
and we again figure out the desired angle of our tail and draw that much gap.
Knowing those values, we can again plug them in as `t` to our ellipse formula
to determine `x` and `y`.

This is good enough for our simple elliptical bubbles.
Is that all we need? Probably not - but it's a starting point.
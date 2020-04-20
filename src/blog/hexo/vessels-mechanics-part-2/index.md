---
date: '2015-07-23T00:00:00-07:00'
title: Vessels Mechanics (Part 2)
description: '[In the last post](/2015/07/13/vessels-mechanics-part-1/), I talked about the three phases of the "vessels" game: disrupt, discover, and direct. '
path: /2015/07/23/vessels-mechanics-part-2
featuredImage: ../hexo.png
tags:
  - vessels
links: []
category: Game Design Diary
---

[In the last post](/2015/07/13/vessels-mechanics-part-1/),
I talked about the three phases of the "vessels" game:
disrupt, discover, and direct.

<!-- more -->

In [The Crown](/2015/09/04/fiction/vessels/crown/), an unnamed lady knight
faces a crowd filled with fear, and tries to galvanize their feelings
of hope. Instead she faces contempt, tied to her own feelings of shame.
How do we model what happens to her? Let's take a look at the emotional
map.

![Emotional map](emotion-cube.png)

We're going to measure everything in 'stars', where a 1-star obstacle
is minor and 5-star is as serious as it gets. Having a star rating
on the map can mean two things: that the emotion is strong and entrenched,
or that the emotion is very unlikely to happen.

The initial conditions will include 4 stars on Fear, and 3 stars on Joy.
The crowd is terrified, and very little is going to make them feel
happiness here until they're home and free.

We'll declare that you move across the map to adjacent nodes, and you can
skip over nodes at extra cost when rolling. Each movement is a roll,
whose difficulty derives from the star cost for each node. For example,
the difficulty of Fear-Joy-Anticipation would be very high because of
the obstacle on Joy. Leaving Fear has its own cost.

The knight plots a course from Fear to Rage to Anticipation - she wants
to fire up the crowd with feelings of bravery and righteousness.
Unfortunately her roll is bad.

However, on her character sheet is some mechanism that lets her either
direct failures onto, or at least make more likely, a Contempt outcome.
As part of her backstory, overcoming such feelings are a common action
for her. So as part of the discovery phase, she puts a heckler into the
crowd to arouse such feelings, and as part of the direct phase, she
places the new obstacle to overcome onto Contempt.

The result of this move is a 2-star obstacle, perhaps. Well, good.
Contempt to Surprise to Anticipation is still two jumps, but the
difficulty is lower. This time she makes the roll, and succeeds.

----

All well and good. So what are the specific mechanics for all this?
I'm not done yet, but here's some random thoughts:

If we're using the escalating die mechanic for the Disrupt phase,
then we're rolling d4, d6, d8, d10, and d12. Not every die needs
to be rolled. So we may have some dice left over. We'll roll
the leftovers. Whichever dice come up 4 or less contribute some
useful currency to Discover.

The difficulty of the Disrupt roll can be based on the star count:
1 for no-stars, 3 for 1 star, 6 for 2 star, 10 for 3 star, 15 for
4 star, and 21 for 5 star. This is a nice progression that maps neatly
to the average rolls on a given dice pool. We'll also say that adding
a hop to the journey adds one star, and you also add stars for
each node you pass along the way.

So our four-star fear obstacle, bumped up to five for the extra hop,
means the knight needs to beat 21.
She rolls 3, 2, 6, 6, and 9, putting her at 26. This is 5 over.

The knight turns this into a 2-star (6 points) obstacle, which
must be placed during the Direct phase. Discovery lets the
knight and the GM negotiate about where.

The knight has no dice left to roll, but if she did, Discovery
tokens could come out of that.
Her backstory can contribute tokens, and it does - letting
her choose Contempt as a destination for the excess emotion.
The crisis itself, and the community of people, can create
tokens as well.
For example, the GM could create a family who'd lost people to the
Bronze Horde, creating a source of Anguish. Tracing a path through
Anguish would have required this obstacle to be overcome.

With Discovery done, the knight Directs her 2-star obstacle
onto Contempt, spending her token to do so.

----

The knight needs a 6 for a 2-star outcome, to move off of Contempt.
She rolls d4 and d6, getting 7.
This leaves a d8, d10, and d12 for discovery.
The d8 comes up 3, the d10 comes up 1, and the d12 comes up 12.
The 3 and the 1 are enough to create discovery tokens.
We'll let such tokens neutralize obstacles as well as create them,
perhaps subtracting from the star rating on a 1-to-1 basis.
This is enough for the knight to neutralize the 1 extra point
she needs. Since there's no further obstacles, and the knight
is currently "on" Anticipation (her goal), she wins.

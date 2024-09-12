+++
title = "Principles of Arise Map Creation"
description = "What makes a good Arise map, in terms of design?"
date = "2023-11-25 18:05:11"
authors = ["astralfrontier"]

[taxonomies]
tags = ["Arise"]

[extra]
banner_image = "blog/Arise.png"
icon = "fa-solid fa-compass-drafting"
pullquote = """
What’s the nature of this place? Why are we fighting here? What objectives can be found here?
Pick a few key points on the map, understand what’s at stake if someone can hold or reach those points, and build terrain around those things.
"""
+++

Arise is different from other tactical games in a few key ways:

1. Maps are of fixed size (8x8 or 12x12)
2. There's emphasis on three-dimensional movement, similar to video games like Final Fantasy Tactics
3. Domination of a quadrant of the map gives the dominating side attack bonuses

What does this mean when it comes to designing original maps?

<!-- more -->

# Deconstructing Final Fantasy Tactics

First, let's take a look at the grand-daddy, Final Fantasy Tactics, and see what we can learn about its maps.
Unfortunately, a big part of the FFT charm is the art direction and exquisite texturing work,
which we can't easily replicate. So we'll focus on the shape, not the appearance.

You can see 3D models of the FFT maps [here](https://www.cavesofnarshe.com/fft/maps/index.php).

What qualities do these maps have?

**The Implied Surroundings**. You don't fight FFT battles at "the castle"
or in the entire town. You fight at one gate in one part of the castle wall,
or between a few buildings on one street.
Each map feels like a tiny chunk of a larger whole,
and the world feels bigger for it.

**Verticality**. Many of the maps are more like cubes than squares at their highest point.
From this, we can suggest a guideline: design maps with a maximum height of 5 to 8.

Where should that height be anchored at? I'm going to suggest the following options.
Pick the one that makes the most sense for you.

- A-type maps. The terrain rises from a low outer ring to an elevated center. This can be a map built around a tower, hill, or some other singular feature.
- V-type maps. The terrain is a valley between two or more elevated sections. This can represent an alleyway in a city.
- L-type maps. Inclines where the low and high terrain are on opposite sides of the map. The anchor point for elevation can be on one side, or it can be in a corner. This can be the slope of a hill or a collapsed basement.
- S-type maps. These intermingle high and low terrain, as in a set of canyons or small buildings on either side of a road.

**Chokepoints, Cover, and Catwalks**. It's uncommon for a map to have an actual chokepoint - a place
where enemy units can't pass without overcoming defenders in a couple of key squares.
But the maps use their verticality to provide a great deal of cover.

In addition, many maps have what I think of as "catwalks": highly elevated strips of terrain,
hard to reach, where ranged attackers can command good chunks of the battlefield beneath them.
In the urban maps, these are often rooftops, reachable from one side of the building.

# Constructing Arise maps

With these things in mind, let's think about how we create an Arise map.
It might be helpful to sketch out key map features on paper before committing to an actual 8x8 grid.

**Start with a story**. What's the nature of this place? Why are we fighting here?
What objectives can be found here? Pick a few key points on the map,
understand what's at stake if someone can hold or reach those points,
and build terrain around those things.

**Think in quadrants**. I would assign each quadrant a role - offense or defense.
An offense quadrant is big and open. It might offer cover and elevation changes,
but it's not going to get in the way of enemies charging at each other.
A defense quadrant has lots of elevation differences, and some cover or catwalks.
Units get into positions there, and attack enemies who get close.

Decide whether you want your objectives to be fought over (offense quadrants)
or maneuvered toward (defense quadrants), and place them appropriately.

**Pick a verticality model and stick with it**. This is the A-, V-, L-, or S-type map mentioned above.
Decide on where your highest points will be anchored on the map,
and include one to three tall locations accordingly.
You can introduce bridges or jumpable gaps to connect them as well.

**Include multiple routes between objectives**. To get from one side of the map
to the other, maybe there's a shorter path with a chokepoint,
but a longer and more open path.
If the enemy controls the chokepoint, you can either fight them or go the long way around.
But there's no single point where the map bogs down.

**Tile types**. Arise includes several types of special tiles:
Damaging, Difficult, Obscuring, Slippery, and Charged terrain, as well as Obstacles.
Try to include a couple of these tile types in your maps, and tie
them closely to your chokepoints or objectives.

For example, you might design two quadrants. One has high elevation tiles with limited access,
letting enemies with ranged attacks pelt your guys.
The other has a stream running through it, which acts as Charged tiles
and reduces the MP cost for your casters to counterattack or heal allies.

# Practical limitations

If you are playing in an environment where you can't have an actual 3D map,
only a 2D image of it, you may be able to design maps with tiles that you can't actually see during play.
For example, if you build a mountain at the center of your map,
and we can only see the west side of it, how will characters move around to the east?

You can solve this in two ways: by making another view of the map, e.g. a top down view
or view from the other side of the obstacle, or by designing maps using V- or L-type
terrain.

If you are [creaeting isometric battlemaps in Blender](@/blog/creating-isometric-battlemaps-in-blender.md),
those instructions talk about how to set up both a top-down and an isomorphic camera.
You can render the same map twice, then add both maps side-by-side in your Virtual Tabletop.

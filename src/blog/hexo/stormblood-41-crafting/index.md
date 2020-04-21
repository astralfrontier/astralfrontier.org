---
date: '2017-10-10T04:50:59-07:00'
title: Stormblood 4.1 Crafting
description: >-
  This is a follow-on from my previous guide, [Stormblood 4.0 Crafting](/2017/09/04/stormblood-4-0-crafting/), and builds on it. This guide covers the new 4.1
  crafting and gathering stuff. 
path: /2017/10/10/stormblood-41-crafting
featuredImage: ../hexo.png
tags:
  - crafting
  - ffxiv
links: []
category: Video Games
---

This is a follow-on from my previous guide,
[Stormblood 4.0 Crafting](/2017/09/04/stormblood-4-0-crafting/),
and builds on it.
This guide covers the new 4.1 crafting and gathering stuff.

<!-- more -->

### Getting Started

Fishing suddenly becomes relevant.
Get FSH to 70 if you're not already there,
go get 2500 Red Gatherer's Scrip,
and get the Ichthyological Folklore tome for Othard specifically.
You'll need it for a new one-star fish, Snailfish.

You should be able to comfortably craft the two-star recipes from the previous tiers.
If you can't, follow the 4.0 guide to its conclusion.

### Raw Materials

The key materials for making new tools and gear are
[Snailfish Oil](https://na.finalfantasyxiv.com/lodestone/playguide/db/item/0891238ff3f) for weapons, and
[Ala Mhigan Fiber](https://na.finalfantasyxiv.com/lodestone/playguide/db/item/55880fe8a2f/) for armor.
To obtain these, you'll need to fish for Snailfish,
mine for Gyr Abanian Spring Water,
and harvest Azim Cotton Boll.
The mining and harvesting nodes are on timers,
so use [Garland Tools](https://www.garlandtools.org/bell/) to track when and how to obtain them.

#### Obtaining Snailfish

Snailfish are obtained by Spearfishing, which unlocks at FSH 61 with a quest.
To understand the mechanics of Spearfishing,
checkout the [FFXIVGuild guide to Fishing 60-70](https://www.ffxivguild.com/ff14-fishing-fisher-leveling-guide-a-realm-reborn/6/).

Teleport to Onokoro, then fly east to the Kobayashi Maru wreck in the Ruby Sea, around X 39 Y 6.
Activate Truth of Oceans and equip a large head on your gig.
Fish up 10 Ichimonji between 2am and 12pm Eorzea time to unlock a shadowy school.
Switch to a medium head, then start working on the spawned school.
Use Veteran's Trade to discard Spiny Lobsters.
The remaining fish should be Snailfish.

### New Crafting and Gathering Gear

The new tools and gear are named "Ala Mhigan X" and are item level 325.
Everyone gets new main-hand tools.
Only left side gear is available this time around, divided between WVR and LTW - no accessories.
The difficulty and HQ numbers are approximately double the two-star 70 recipes you've been making,
so it's time for a new rotation.

The biggest challenge you'll face is that the new equipment recipes are specialized.
As before, I'm ALC/BSM/WVR, so I was able to make the body, hat, and legs, and several tools.
I will be switching to LTW for the rest of the gear,
then ARM and GSM to wrap up tool creation.
I don't advise switching out ALC, as that continues to be where your precursors get created.

#### Materia Melding

The new gear's stats are just more of the same,
so you can use the recommended melds here: [http://ffxiv.ariyala.com/11VCH](http://ffxiv.ariyala.com/11VCH).

This time around, I couldn't find affordable grade 1-3 CP materia
in bulk, so I farmed red scrip and bought the IV materia at 25 scrip.
This is an amazingly good deal for how fast you can pull in red scrip.

### New Rotation

Credit for this rotation goes to Cheshyr on Reddit,
and was posted [here](https://www.reddit.com/r/ffxiv/comments/75sla8/crafting_rotation_for_41_2_star_updated/).
The only thing I did was to reformat their macros
into a cleaner form, as suggested by commenter DeadlyFatalis.

This rotation will give you HQ 100% of the time
when roughly one third of your raw materials are also HQ.
This is vital for crafting your new tools and gear:
the NQ stats are below what you can make at 290,
but the HQ stats blow them away completely.

Here's a macro to set up your new cross-class skills:

```
/aaction clear
/aaction "Maker's Mark" on
/aaction "Careful Synthesis II" on
/aaction "Comfort Zone" on
/aaction "Piece by Piece" on
/aaction "Flawless Synthesis" on
/aaction "Steady Hand II" on
/aaction "Ingenuity" on
/aaction "Ingenuity II" on
/aaction "Innovation" on
/aaction "Byregot's Blessing" on
/echo Cross-class action setup complete <se.1>
```

Don't forget to switch back if you use the earlier 40-80-HQ macros!

You'll need HQ [Tempura Platter](http://xivdb.com/item/19826/tempura+platter)
and HQ [Cunning Craftsman's Tea](http://xivdb.com/item/19884/cunning+craftsman's+tea)
together to cover the CP costs for this new rotation.
The tea only lasts 15 minutes, while the rotations can take up to 5.

This is one of the most complex rotations I've seen so far, so here it is in parts.

#### Part 1: Opener

```
/ac "Maker's Mark" <wait.3>
/ac "Comfort Zone" <wait.3>
/ac "Steady Hand" <wait.3>
/ac "Piece by Piece" <wait.3>
/ac "Piece by Piece" <wait.3>
/ac "Piece by Piece" <wait.3>
/ac "Flawless Synthesis" <wait.3>
/ac "Flawless Synthesis" <wait.3>
/ac "Flawless Synthesis" <wait.3>
/ac "Flawless Synthesis" <wait.3>
/ac "Flawless Synthesis" <wait.3>
/ac "Flawless Synthesis" <wait.3>
/ac "Comfort Zone" <wait.3>
/echo MEGA MACRO PART 1 <se.1>
```

#### Parts 2 - 5: Flawless Synthesis Forever

Repeat this macro four times.

```
/ac "Flawless Synthesis" <wait.3>
/ac "Flawless Synthesis" <wait.3>
/ac "Flawless Synthesis" <wait.3>
/ac "Flawless Synthesis" <wait.3>
/ac "Flawless Synthesis" <wait.3>
/ac "Flawless Synthesis" <wait.3>
/ac "Flawless Synthesis" <wait.3>
/ac "Flawless Synthesis" <wait.3>
/ac "Flawless Synthesis" <wait.3>
/ac "Flawless Synthesis" <wait.3>
/ac "Comfort Zone" <wait.3>
/echo MEGA MACRO PART 2-5 <se.1>
```

#### Part 6: Build-up

```
/ac "Inner Quiet" <wait.3>
/ac "Manipulation II" <wait.3>
/ac "Steady Hand II" <wait.3>
/ac "Patient Touch" <wait.3>
/ac "Ingenuity" <wait.3>
/ac "Prudent Touch" <wait.3>
/ac "Prudent Touch" <wait.3>
/ac "Prudent Touch" <wait.3>
/ac "Observe" <wait.3>
/ac "Focused Touch" <wait.3>
/ac "Comfort Zone" <wait.3>
/ac "Steady Hand II" <wait.3>
/ac "Ingenuity" <wait.3>
/echo MEGA MACRO PART 6 <se.1>
```

#### Part 7: Crescendo

```
/ac "Prudent Touch" <wait.3>
/ac "Prudent Touch" <wait.3>
/ac "Prudent Touch" <wait.3>
/ac "Prudent Touch" <wait.3>
/ac "Steady Hand II" <wait.3>
/ac "Ingenuity II" <wait.3>
/ac "Innovation" <wait.3>
/ac "Prudent Touch" <wait.3>
/ac "Great Strides" <wait.3>
/ac "Byregot's Blessing" <wait.3>
/ac "Observe" <wait.3>
/ac "Focused Synthesis" <wait.3>
/echo MEGA MACRO PART 7 DONE <se.14>
```
---
date: '2019-01-01T02:55:37-08:00'
title: D&D 5E combat musings
description: >-
  When building a D&D character, experience has taught me that they must be useful in combat, no matter what else they do. The game is built around combat
  encounters, after all, and if you I can't contr...
path: /2019/01/01/dandd-5e-combat-musings
featuredImage: ../hexo.png
tags:
  - dndnext
  - sunday dnd
  - theorycrafting
links: []
category: Game Rules
---

When building a D&D character, experience has taught me that they must be useful in combat, no matter what else they do. The game is built around combat encounters, after all, and if you I can't contribute to the main activity of the game somehow, I feel disappointed. D&D also has specific ideas about how combat works. Do I understand those ideas well enough to make a useful PC? More below.

<!-- more -->

### The 30-round day

In 5th edition, D&D breaks up your adventuring day into a series of _encounters_, punctuated by _short rests_, and ending in a _long rest_. Since abilities typically recharge on a short or long rest, we're interested in how often these things happen relative to each other.

[This post](https://rpg.stackexchange.com/questions/93183/how-many-rounds-does-the-average-combat-encounter-last) estimates 3-5 rounds of combat is typical. The DMG seems to agree. The DMG advises about 2 short rests per day, and about 6-8 encounters per day. Days end in a long rest, so that's 2-3 encounters per short rest, 6-8 per long rest. So if we take the middle ground (4 rounds per encounter, 7 encounters per day), you're really engaging in about 30 rounds of combat per day, give or take, and getting your short-rest abilities back twice during that period. Because it's not 30 contigous rounds, long-duration effects won't get their full benefit in our abstraction, so we'll account for them individually.

### Example

I'm playing a [Half-Orc Barbarian](/2018/11/19/the-emotionally-available-barbarian/) in one game. He's level 2 now, but we don't have to stop there. I'm also dipping Fighter for 3 levels pretty soon. So let's look at his stuff.

**Action Surge**: an extra action (and hence 1-2 attacks) every short rest, or 10 rounds. Across 30 rounds, 2 attacks per round gives a total of 60. Action Surge adds another 2 attacks per short rest (if used for this purpose), bringing this to 66, so a 10% increase in actions and hence damage. This is not accounting for feats like GWM that trigger a bonus action on a critical, more on that below.

**Feral Instinct**: advantage on initiative benefits him 7 times a day.

**Rage**: lasts 1 minute, use count resets on a long rest. This is 8 rounds (26% of the time) at levels 1-2, 12 rounds (40%) at levels 3-5, 16 rounds (53%) at L6-L11, 20 (66%) at L12-L16.

**Relentless Endurance and Relentless Rage**: RE is a racial feature, usable once per long rest. Relentless Rage is a neat mechanic, because it uses a saving throw whose DC ratchets up each use, then resets on a short rest. At L14, his CON save of +8 hits a DC 10 95% of the time, DC 15 70% of the time, and DC20 45% of the time. So he gets one "get out of death free" card every 30 rounds and a second one every 10 rounds or so, with odds decreasing if killed more often than that.

**Second Wind**: the ability to heal 1d10+3 (maximum) every 10 rounds, or 3d10+9 every day. Synergizes with RE/RR in that he can immediately self-heal on his action.

### Crit fishing and bonus damage

Critical hits always hit regardless of AC, and add an extra damage die. Half-orcs get a bonus damage die on crits as well.

How often do they happen? With advantage (thanks to Reckless Attack at level 2), 19% of rolled attacks will have a critical.

At level 4, the GWM feat offers a bonus action attack on a crit. Assuming we get to use it every time, GWM effectively adds 19% more attacks. That's 5 per day at level 4, 11 at level 5 (due to our second attack), and 12 at level 7 (due to Action Surge). Each of those _can_ crit too, though there's no GWM chain reaction, and 19% of 12 is still only one extra crit.

Aside from criticals, GWM can give bonus damage. Here's the to-hit chances and average damage (taking hit chance into account) for normal, RA, and RA+GWM attacks.

![ra-gwm-tohit.png](ra-gwm-tohit.png) {.ui .fluid .image}

![ra-gwm-damage.png](ra-gwm-damage.png) {.ui .fluid .image}

Making the best use of GWM depends on hitting more often, to offset the -5. Advantage helps, but what else can we do?

* Leveling up, and raising STR. This will take awhile.
* Magic weapons. Because this crit-fishing build is specific to the greataxe, my options are limited unless my GM is generous.
* Other magic items. A Belt of Giant Strength would be great, but I'm not counting on it.
* The party has a bard, and if the player uses Bardic Inspiration on me, adding a d6 to hit will be helpful.
* Battlemaster fighters can add superiority dice via Precision attack, but my build calls for the Champion, so that's not an option.

### Conclusions

In terms of the relative usefulness of our features, we find...

* We can rage for one quarter to one half of our adventuring day, during which we take half damage and do extra damage
* We can afford to be brought to 0 HP and still be standing about three or four times a day
* We crit about 20% of the time, and (factoring GWM into account) each crit adds about 2.5 damage dice
* Action Surge doesn't add substantially to our attacks per day, but is a great "nova" ability to lay out a lot of damage at once
* With [bounded accuracy](https://olddungeonmaster.com/2014/08/30/bounded-accuracy/) in effect, the effective damage from RA-GWM looks attractive

Whether this is the most mechanically optimized character, it should give me the effect I wanted: someone who can pile on damage, then push some buttons that improve his ability to do harm, and do them often enough that they're not frustrating to use (or skip).
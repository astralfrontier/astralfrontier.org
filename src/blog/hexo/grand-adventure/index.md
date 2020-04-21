---
date: '2015-08-22T00:00:00-07:00'
title: Grand Adventure
description: >-
  On the heels of [Inept Sorcerers] and [It Was There, Honest!], I thought I'd take a shot at writing a general-purpose adventure roleplaying game, using the
  things that resonated most with readers of t...
path: /2015/08/22/grand-adventure
featuredImage: ../hexo.png
tags:
  - grand adventure
links: []
category: Game Design Diary
---

On the heels of [Inept Sorcerers] and [It Was There, Honest!], I thought
I'd take a shot at writing a general-purpose adventure roleplaying game,
using the things that resonated most with readers of those games.

<!-- more -->

Feedback on Inept Sorcerers made the spell-card system out to be a winner.
The reward-token mechanic from IWTH is the only change in the dice rolling
system. So to combine those systems, I'm thinking about something like this.

![Grandia Cast](grandia1_cast.jpg)

### Attributes

We'll give characters three attributes: Level, Wits and Guts.
Individual characters can have other attributes, and we'll cover those below.

Level starts at 1. Other attribute values range from 1-10.
Anything except Level should be around the 3-5 range for a typical adventurer.

At character creation, you get 7 points to distribute between your
attributes.
You get +1 to two attributes, or +2 to one, when you level up.

### Action Cards

You have a set of standard action cards, things that represent the typical
activities in a light adventure fantasy.

Each card has an *AC*, or *Action Cost*, defining how expensive
it is to take action with, or against, that card.
Cards can also be noted with "Control with X", where X is some
attribute. If multiple cards specify a controlling attribute,
use the one you prefer.

Individual characters can have their own cards, or Individual
enemies, artifacts, or even magic spells can be their own cards too.
There's a set of generic cards, available to everybody.
We'll start with some typical cards, mostly stolen from Inept Sorcerers.

* *Challenge... [AC 2]*. A generic card when no other action seems
more appropriate. Control with either Wits or Guts.
* *Fight... [AC 5]*. When you need to fight something in a physical competition. Control with Guts.
* *Hide From... [AC 4]*. Discretion is the better part of valor. Control with Wits.
* *Outwit... [AC 3]*. When you want to beat someone or something with your wits. Control with Wits.
* *Run From... [AC 1]*. Seriously. There's an outrageous amount of running involved. Control with Guts.
* *Me/Here/This [AC 1]*. You, or an object in reach of you.
* *That/Those [AC 2]*. Some object, or set of small objects, at range.
* *Friend(s) [AC 3]*. Your adventuring party or nearby allies.
* *Foe(s) [AC 1-10]*. Enemies or hostile creatures. A variable AC, based on
the level of the foe.

There's some other modifier cards, like From/To, And, With, and so on.
For now we'll give those an AC of 0.

### Example

We have a hero character, called Riser, and his best friend from childhood
Tana. Riser has Wits 2 and Guts 5. Tana has Guts 3 and Wits 4.

Tana gets captured by mercenaries while the pair are exploring an
underground ruin, and Riser wants to break through the guards holding
her captive. He puts together an action: "Fight Foes". The guards are level 1,
so the total Action Cost would be 5+1 or 6.

Riser rolls d4 (3) and d6 (5), getting 8. 8 - 6 is 2, which he further
reduces with his Guts of 5. There's no complications, and Tana is rescued.

Next, Tana wants to puzzle out the moonstone fragment inscription that the
pair found in the ruin. The inscription is fairly complicated, a level 5
challenge, so she wants to Outwit Inscription. Cost is 3+5 or 8.
She rolls d4 (1), d6 (6), and d8 (5) for 12. 12 - 8 is 4, and she
controls that with her Wits of 4. Again, no complications.

Riser finds a mystical crystal sword, which has its own card:
"Crystal Blade [AC 3]".
It does double damage, but to get that benefit, Riser has to include
the sword card in his action.
As the pair are escaping the ruins, they're confronted by the
Relic Golem, an ancient defense mechanism - level 6. Riser moves to fight it,
creating an action like "Fight Golem With Crystal Blade". Action cost
is 5+6+0+3, or 14. With this action, he's able to do double damage to the
golem.

### Custom Attributes and Cards

Riser is a nice guy, and everyone likes him. We'll give him a new card,
letting him overcome social obstacles down the road:

"Befriend... [AC 5]. Control with Friendship". This means Riser has a new
attribute, called Friendship. He'll need to assign a value to it from
his starting attribute points. Riser gets another rule: the "Friends" card
can now be controlled with Friendship too.

What does this mean? Let's say he's avoiding his adventuring party because
he knows he has to go do something dangerous, and doesn't want them hurt.
He can roll "Hide From Friends" and control it with his Friendship (which
is decent) rather than his Wits (which is lacking).

Tana's trip to the ruins taught her some magic, which lets her have a new
action as well: "Cast A Spell To... [AC 2]. Control with Magic."
This lets her do things like "Cast A Spell To Hide From Foes", creating
magical invisibility rather than relying on simple stealth.
While the action cost is higher, it provides her narrative flexibility
that wouldn't or couldn't otherwise exist - like hiding in a plain
room with no nooks or crannies or shadows.

If the game has no character classes, only new card options and
attributes, my hope is that it will give players a reason to specialize -
they can't afford to spread their attribute points across 5 or 6
new attributes.

### Action Points

More daring actions call for a reward. We'll be using the same complication
mechanic from Inept Sorcerers and It Was There, Honest!, where a roll
higher than your target number complicates the story. So we'll make
a new set of rules:

1. Characters have Action Points (AP). Each PC starts with 1 AP.
2. Every die you roll that comes up 4 or under gives you 1 AP back, once the action has been resolved.
3. AP can be spent to power special abilities or buy off complications - rules TBD.

To use the example earlier, maybe Riser's Crystal Blade does some other
amazing things, but he has to spend AP to power those things. For example,
maybe the sword comes with a new action: "Crystalstrike... [AC 4, AP 5]".
This is a special attack that does extra damage,
and costs 5 AP to activate as well as having an Action Cost of 4.

[Inept Sorcerers]: https://astralfrontier.itch.io/inept-sorcerers
[It Was There, Honest!]: /2015/07/08/it-was-there-honest/

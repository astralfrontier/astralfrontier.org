---
date: '2015-06-08T00:00:00-07:00'
title: A Baroque Dice Mechanic
description: >-
  I originally posted this on Ello in two parts ([Part 1], [Part 2]). This is a rewrite of some of that material, with extra thoughts. Mostly I need better
  terminology for some of these things, and a t...
path: /2015/06/08/a-baroque-dice-mechanic
featuredImage: ../hexo.png
tags:
  - baroque dice
links: []
category: Game Design Diary
---

I originally posted this on Ello in two parts ([Part 1], [Part 2]). This is a rewrite of some of that material, with extra thoughts.

Mostly I need better terminology for some of these things, and a truckload of playtesting. I wrote [Inept Sorcerers] around this dice mechanic, and it's theoretically a playable game, so if you want to help me test it, let's start with that.

<!-- more -->

Goals
-----

I wanted a system that does the following things:

* Have some sort of bell curve so that wildly high or low numbers don't just come out of nowhere
* Introduce the chance that something will go out of control without being considered a "failure"
* Present danger even for high-skill characters
* Allow players some degree of control over how much risk-taking they feel comfortable with

Steps
-----

The player's goal is to accumulate **Chance** by rolling successively higher dice and comparing the sum to his **Action Cost**. If there's not enough Chance, he must keep rolling if possible. If there is too much Chance, he can use his **Ability** to keep it under control. Any extra above that is called **Risk**.

1. State your objective.
2. Determine how this maps to some mechanically defined action available to you.
3. Determine the Action Cost. The details of the action you chose should determine how to find this number.
4. Determine the Ability. This can be a character's skill, modified by equipment bonuses and the like, or it can come from somewhere else.
5. Start accumulating Chance by rolling dice. You start with a d4, then add a d6, then a d8, then a d10, and finally a d12. Your total Chance is the sum of all dice you roll. You must roll the dice in the order given. You can stop rolling at any time. You cannot roll further once you've rolled a d12. You cannot unroll a die once it's been rolled.
6. Determine the outcome based on your Chance, Action Cost, and Ability. See below.

Outcomes
--------

**If you have less Chance than the Action Cost**, you can continue rolling if you can. If you cannot roll any more, your action fails.

**If Chance matches the Action Cost exactly**, your action succeeds without modification.

**If Chance exceeds the Action Cost, but not by more than your Ability**, your action succeeds, thanks to your skill, competence, equipment, or whatever.

**If Chance exceeds the Action Cost by more than your Ability**, the remainder is called Risk. The GM determines a bad thing that happens, using the amount of Risk as a guideline - higher is worse. This can be the loss of a desirable modifier, or the introduction of a new problem. The ability you used may specify how to use excess Risk.

At the GM's discretion, you can also negotiate a different action - like using a less expensive but less effective move, or giving up on a certain side-benefit - instead of failing.

Examples
--------

In a hypothetical game, PC ninjas can use an action called "Sentry Removal". The Action Cost is 16. Our specific PC ninja has an Ability of 5.

First scenario: the ninja rolls d4 (2), d6 (5), and d8 (8). This is not enough Chance to do the action, so he must continue rolling (next is a d10) or give up the action. If he doesn't want to keep rolling for some reason, he can try to change the action in question (maybe to something generic like "Attack"), or fail.

Second scenario: the ninja rolls d4 (2), d6 (5), d8 (7), and d10 (2). This is exactly 16, so the action proceeds as planned.

Third scenario: the ninja rolls d4 (2), d6 (5), d8 (8), and d10 (2). This is 17, one more than he needs. His Ability of 5 leaves no Risk (1 - 5), so there's no further complications and he succeeds.

Fourth scenario: the ninja rolls d4 (4), d6 (6), d8 (5), d10 (8). This is 23, 7 more than he needs. His Ability of 5 means 2 points of Risk are left (7 - 5). The GM can offer the ninja a choice: set off the alarm, take an injury as the guard fights back before dying, or some other sort of penalty. The GM might also declare an outcome.

Commentary
----------

The system has a small box it lives in, in terms of how high your target numbers should be. Individual gauges feel like they logically live on a 1-10 scale, including a hypothetical "character level", skills, and other things. There's not a lot of room for nuanced modifiers. That said, a 1 should not be bad - 1 is good, 5 is great, and 10 is super-awesome.

There's several dimensions for game state: things that influence Ability (like skills or bonuses), action and modifier costs, PC or class-specific bonuses, and so on. These can bring your Action cost anywhere from 2 to 20 or more.

There should be uses for only a d4 roll and everything else up to the full d4/6/8/10/12 pool. Casual rolls, like "Harm Mook", should be down in d4, but grow more expensive if you want to avoid counterattacks, take out packs of guys in a single action, and so forth.

There might be room for d20 "Limit Break" or "Desperation Attack" scenarios, where you know there's going to be excess Risk but you need to get stuff done. Players might get a limited allocation of d20s.

Nothing stops novice or untrained characters from rolling their full complement of Chance dice on an unlikely action. It's just very likely it'll get out of hand quickly, which is the point.

There's no "natural 20" or other critical hit business, but individual actions can have modifiers that give you some extra benefit with a corresponding cost.

Alternate Versions
------------------

I believe you get the same outcomes, mathematically, if you follow these steps:

1. State your objective.
2. Determine how this maps to some mechanically defined action available to you.
3. Determine the Action Cost. The details of the action you chose should determine how to find this number.
4. Determine the Ability. This can be a character's skill, modified by equipment bonuses and the like, or it can come from somewhere else.
5. Start paying off the Action Cost by rolling dice. You start with a d4, then add a d6, then a d8, then a d10, and finally a d12. Each time, subtract the value on the die from the Action Cost. Don't stop subtracting at zero if the die value takes you into negatives. You must roll the dice in the order given. You can stop rolling at any time. You cannot roll further once you've rolled a d12. You cannot unroll a die once it's been rolled.
6. If the number you have is negative, try paying off any negative value by adding your Ability.
7. If the number is still negative, you have Risk. Resolve as before. If the number is zero or positive, you succeed.

This version means you only have to keep one number in your head (the Action Cost's running value) rather than two (Action Cost and accumulated Chance). It makes "Risk" a negative number and hence a debt that must be paid off, Ability is added rather than subtracted, and the feeling of "paying off" in both phases is more consistent.

[Part 1]: https://ello.co/astralfrontier/post/FLGSzocSOgLiFuVAZKiPVg
[Part 2]: https://ello.co/astralfrontier/post/pKM0aIN1VSXr0I5X7U0NtQ
[Inept Sorcerers]: https://astralfrontier.itch.io/inept-sorcerers

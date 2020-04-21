---
date: '2015-06-08T00:00:00-07:00'
title: Good Dice Mechanics
description: >-
  Because most RPGs have you roll dice fairly frequently, and because most games use the dice for most of their mechanics, it's important that the specific
  rules around rolling dice are *inclusive*, *ex...
path: /2015/06/08/good-dice-mechanics
featuredImage: ../hexo.png
tags: []
links: []
category: Uncategorized
---

Because most RPGs have you roll dice fairly frequently, and because most games use the dice for most of their mechanics, it's important that the specific rules around rolling dice are *inclusive*, *expressive*, *believable*, and *simple*.

<!-- more -->

Inclusiveness means that the dice mechanic can accommodate as many situations as the rest of the rules are likely to demand. Some games use multiple types of die rolls for different tasks. For example, the d20 system, GURPS, and Hero all roll one set of dice for success on things like an attack, but roll a different set for damage or effectiveness. Others roll everything in the same way, or a similar way. White Wolf's Storyteller system rolls pools of d10s with variable target numbers, with only minor modifications for cases like damage rolls vs. success rolls.

Expressiveness means that you can supply more input variables, and/or get back more output variables, as part of the rolling process. For example, the Storyteller system has three variables you can feed into its roll: number of dice being rolled, target number that each die must hit, and number of times the target number was hit to count as a success. The output of that roll is a success/failure flag, a flag indicating a "botch" (when enough of the dice roll 1), and a number of excess successes over and above the minimum.

Believability means that the dice give you results in accord with the expectations provided by the narrative. A skilled swordsman should hit the same target more often, or better, than a novice. A difficult challenge should fail more often than an easy challenge, all else being equal. Wildly random variations shouldn't happen except in circumstances where they ought to. When rolling dice, this means that there's a balance between the input variables you feed in (like character competence) and the range of randomness your dice can introduce (like a d4 vs. a d20).

Simplicity means that you don't have to do a lot of complex calculations to get a result. This includes doing several math steps, looking results up on a table, or whatever.

----

Let's put this together and look at a simple system. The players will roll a pool of d10s, looking for 8 or higher. Each die that shows 8, 9, or 10 is a *hit*.

What inputs can we feed into this system, and how do they map?

*Character competence* (your skill, equipment bonuses, and so forth) maps to the *number of dice being rolled*.

*Task difficulty* (how hard it is to do a thing) maps to the *number of hits* needed for the entire roll to be a success.

We have two other dimensions available to us: *size of the dice* (d6, d10, d20) and *target number for hits*. Neither of these are in use, but if we had one or two other variables, we could include them. We might have also coupled task difficulty to target number, leaving number of hits as a variable.

From any given roll, we want to extract two things: *success/failure* and *extra hits*. For example, if you roll 6d10 and get 2, 5, 7, 8, 9, and 10, you have three hits. A roll that requires one hit gives us "success" and "two extra hits". On the other hand, a roll of 1, 1, 2, 3, 5, and 8 needing two hits to succeed gives us "failure" and "zero extra hits".

How simple is this system? Let's look at how much math we have to do:

1. For each die, compare to target number to arrive at hits.
2. Sum number of hits.
3. Compare sum of hits to minimum needed to arrive at success/failure.
4. Subtract minimum needed from sum of hits to arrive at extra hits.

This isn't bad.

How does this stack up against the [Baroque Dice System] I posted about earlier?

1. Roll a die. Increment the die size.
2. For each die, sum all dice, then compare to Action Cost.
3. Repeat steps 1-2 until comparison is higher.
4. Compare total against Action Cost, with 3 alternatives to choose from.
5. Compare Ability to difference of Chance and Action Cost.
6. Subtract Ability from Chance if necessary.
7. More math, depending on how much Risk is left.

It feels like a lot, and it is. There's a separate summing step each time you roll dice, and three numbers to keep in mind (Action Cost, current Chance, current die value). Once you've done that, you have to do two more comparisons and possibly one step of subtraction.

I also posted an alternate version. Let's see how that one works.

1. Roll a die. Increment the die size.
2. For each die, subtract from Action Cost.
3. Compare Action Cost to 0. Repeat steps 1-2 until no Action Cost remains.
4. Compare Action Cost to negative. Add Ability if so.
5. More math, depending on how much Risk is left.

In this case, at any given moment there's only two numbers you need (remaining Action Cost, and either current die value or Ability value). This is objectively simpler, with less math, but mathematically identical to the former model.

[Baroque Dice System]: /2015/06/08/a-baroque-dice-mechanic/

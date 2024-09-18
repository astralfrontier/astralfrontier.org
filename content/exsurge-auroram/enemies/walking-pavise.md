+++
title = "Walking Pavise"
description = "A shield brought to artificial life, and charged with guarding other beings"
date = "2023-12-22T12:57:00.000Z"

[taxonomies]
tags = ["Arise", "Artificia", "Stone Aspect"]

[extra]
hide_toc = true
banner_image = "/exsurge-auroram/enemies/walking-pavise.png"
+++

{{ exsurgemob(
    name="Walking Pavise",
    description="A shield imbued with animation and limited limbs, letting it move around a battlefield on its own.",
    aspect="Stone",
    family="Artificia",
    type="Grunt",
    rank=[3,5],
    flavor=["Made of wood", "Made of metal"],
    spd=[1, 1],
    dash=[2, 2],
    atk=[15, 30],
    mgk=[0, 0],
    pdef=[44, 54],
    mdef=[44, 54],
    res=[3, 5],
    counters=[1, 2],
    vuln=[0, 1, -1, -1, 1, -1, 0, 1, 0],
    hp=[8, 10],
    actions=[
        ["1-3", "1-2", "Intervention", "Dash +1, I gain READIED(1)"],
        ["4-5", "3-4", "Toss Ally", "One GMC in Aura 1 Flies 2 tiles in a line"],
        ["6", "5", "Brace", "I gain RETALIATE(1) and Heal 1 HP"],
        ["-", "6", "Shield Smash", "I inflict CRUSHED on a target in melee range"]
    ],
    loot=[
        ["1-4", "1-2 Normal Crafting Materials", "1-4", "2-3 Normal Crafting Materials"],
        ["5", "1 Gaianite", "5", "2 Gaianite"],
        ["6", "1 IP", "6", "1 IP"]
    ]
) }}

A Walking Pavise can expend a Counter to use the Protect Counter, as well as the normal Defend Counter.

# Description

Walking Pavises are the creation of wizards with a peculiar sense of humor.
They are walking shields, made of wood or metal, with a single eye at the center and a pair of feet.
They otherwise lack manipulators, but are extremely agile when it comes to using their shield-bodies to move things around.

{{img(src="/exsurge-auroram/enemies/walking-pavise.png" alt="A Walking Pavise")}}

# Encounters

Walking Pavises accompany other creatures.
They protect them from attack, use their Toss Ally move to get them into melee faster,
and otherwise act as support units.

Their low ATK makes them unsuitable as attackers.
Instead, they rely on status effects like RETALIATE to do damage,
and spend the rest of their actions absorbing damage done to allies.
Trapping them away from allies can negate their effectiveness.
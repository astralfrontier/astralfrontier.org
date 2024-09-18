+++
title = "Skrint"
description = "A goblin type that develops a hivemind devoted to protecting beautiful things"
date = "2023-12-13T10:17:00.000Z"

[taxonomies]
tags = ["Arise", "Goblinkind", "Metal Aspect"]

[extra]
hide_toc = true
+++

{{ exsurgemob(
    name="Skrint",
    description="Small goblinkind with a worrying quality: when a band of Skrint latch onto something beautiful or interesting, they develop a hivemind with each other.",
    aspect="Metal",
    family="Goblinkind",
    type="Grunt",
    rank=[2,4],
    flavor=["Scuttling, shrieking defenders", "Calculating, conniving directors"],
    spd=[3, 4],
    dash=[3, 3],
    atk=[30, 35],
    mgk=[5, 5],
    pdef=[15, 20],
    mdef=[15, 20],
    res=[2, 4],
    counters=[1, 2],
    vuln=[-1, 0, 1, 0, 0, 1, -1, -1, 1],
    hp=[5, 7],
    actions=[
        ["1-3", "1-2", "Raking Claws", "Dash +0, Melee Attack +5"],
        ["4-5", "3-4", "Pelting Rocks", "Dash +0, Ranged Attack +5, Range 4. *Sharp Rocks*: On 1-2 on d6, the target is BLEEDING."],
        ["6", "5", "Battle Frenzy", "I gain HASTE and Heal 1 HP"],
        ["-", "6", "Summon Pack", "Add one Skrint (Basic) to the bottom of the turn tracker, otherwise as per the Grave Thrall’s “Howlcall” move."]
    ],
    loot=[
        ["1-4", "1-3 Supplies", "1-4", "3-5 Supplies"],
        ["5", "1-2 Normal Cooking Materials", "5", "1 Special Cooking Material"],
        ["6", "1 IP", "6", "1 IP"]
    ]
) }}

# Description

Skrint (the singular and plural are the same) are small goblinkind with a worrying quality: when a band of Skrint latch onto something beautiful or interesting, they develop a hivemind with each other. Without individual motivations, the collective sets to work protecting and venerating the “shiny” that has captured their attention.

For this reason, fellow Skrint often encourage adventurers to steal the “shiny” away from a Skrint pack that’s fixated on it, even if some individual members of the pack must be hurt. Once the “shiny” is gone, the hivemind collapses and the affected Skrint will return to their original selves.

Individual Skrint in the world often pick up eccentric habits, manners of dress, or obsessions in an attempt to resist this urge with fellow Skrint. They become fanatically individual to retain their selves, no matter how quirky or weird it makes them seem. Their latent telepathy, the source of the hivemind, otherwise makes them empathetic and sensitive to the needs and feelings of others.

Skrint in history were responsible for the preservation of many old relics from the lost times and may be the reason so much stuff survived to this day. Did the gods make them this way? Or did they, knowing their natures, volunteer to do it? Nobody knows.

Playable Skrint would use the "Hobb" Cath.

Skrint were originally posted about [here](@/blog/principles-of-arise-gmcs.md).

# Encounters

An encounter with a Skrint hivemind should include at least one upranked Skrint, who can summon more units.

The map should include the "shiny" - an object, or a doorway to a place - that the Skrint have latched onto. An objective of the battle should be to deprive the hivemind of the shiny, either by destroying it or carrying it off the map boundary. This will bring the Skrint to their senses, ending the battle.

The GM can stipulate that Downed Skrint aren’t killed, merely injured, and that they’ll be treated by their comrades once the hivemind is dispelled. The PCs can help with this task, perhaps during a Camp scene, or leave it to the goblinkind themselves.
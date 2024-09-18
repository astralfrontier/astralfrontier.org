+++
title = "The Stars Are Right"
description = "Getting Constellation Cards shippable, and next steps"
date = "2023-11-11 20:49:15"

[taxonomies]
tags = ["Constellation Cards", "Game Design Diary"]

[extra]
banner_image = "blog/north-star-2869817_1280.jpg"
icon = "fa-solid fa-file-pdf"
pullquote = """
ConTeXt is a more modern LaTeX engine that supports PDF/X, TrueType and OpenType fonts, and other features I needed.
"""
+++

I've been working on Constellation Cards (formerly "flip-a-card", my branding is crap) for the better part of 6 years.
Recently, some positive encouragement motivated me to bring it back to life
and try to get it ship-shape.

You can try the Tabletop Simulator version of the game by subscribing to [Constellation Cards on Steam](https://steamcommunity.com/sharedfiles/filedetails/?id=3080002958).

I want to talk about the technical aspects of how I created the cards in their current form,
and what my next steps are for the game.

<!-- more -->

# Plough, Furnace, and Sextant

The current incarnation of the cards' contents - the name of the cards, the text, the rules document, etc. -
lives on Github at [https://github.com/constellation-cards](https://github.com/constellation-cards).

I had already written about 85 cards, and had their text available.
I imported that text into a repository, which I then published as an NPM (Node Package Manager) package.
This let me import the cards as a whole into any Javascript or Node.js project.

Next, I got to work on two software packages: [Plough](https://github.com/constellation-cards/plough),
an attempt to write a virtual tabletop for playing the game, and [Furnace](https://github.com/constellation-cards/furnace),
a website that would host the website [constellation.cards](https://constellation.cards/).
I made enough progress that I actually ran a demo game via Plough.

The final piece was a microservice called [Sextant](https://github.com/constellation-cards/sextant).
I wrote this partially to learn the Rust language.
The goal of Sextant was to take card JSON data from elsewhere (such as Furnace),
and output both LaTeX and eventually a PDF of those cards.
I got as far as the LaTeX, but that's far enough for my needs.

To get the cards published in their current form, I went to two resources:
[ConTeXt](https://wiki.contextgarden.net/Main_Page), to produce the actual PDF of the cards,
and [DriveThruCards](https://www.drivethrucards.com/) to print decks of physical cards.

I'm still waiting for the physical cards to ship, but PDF came out great.
It's still not exactly where I want it - the cards should have icons, background images,
and other visual distinction - but it's playable.

# Using ConTeXt to produce cards

ConTeXt is a more modern LaTeX engine that supports PDF/X, TrueType and OpenType fonts,
and other features I needed. It also includes Lua scripting which did nothing for me here, but is nice.

ConTeXt projects include at least two elements: an environment file and a product file.
These are both written as TeX files.

## Environment files

The environment file sets up things like page size, font choices, macros, and so on,
while the product file is where your actual text lives.

Some excerpts from my environment file:

```tex
\setupbackend[format=PDF/X-1a:2003, intent=SWOP2006_Coated5v2.icc]
\definepapersize[tarot][width=3in, height=5in]
\setuppapersize[tarot]
\def\TarotMargin{0.25in}
\setuplayout    [page] [topspace=\TarotMargin,backspace=\TarotMargin]
\setuplayout    [page]
\setuplayout    [location=middle]
\setuphead[chapter][header=high, footer=none]
```

I've specified the PDF output and color profile, the page size, bleed and margin,
and centered the actual text frame within the overall page.

```tex
\define[1]\constellationtitle{\dontleavehmode{\midaligned{\tfa\bf\underbar #1}}}
\define[1]\constellationstack{\dontleavehmode{\midaligned{\tfx #1}}}
\define[1]\constellationquote{\italic{#1}}
\define[1]\constellationrule{\startalignment[middle] \italic{#1} \stopalignment}
```

Here, I've defined some macros that let me write semantically in my actual text.
The `define[1]` indicates how many arguments the macro will take (one),
and the `#1` in the macro body is replaced by the value of the argument.
For example, a `constellationtitle` is middle-aligned, with a 1.2x font size,
bold font, underlined text.

Beyond just having cleaner text, macros let me change the card size, layout,
or font choices of my cards by writing a new environment file.

## Product files

The Sextant service runs my JSON through a templating engine, which outputs stuff like this:

```tex
\constellationtitle{The Principal}
\constellationstack{Core Rules (Agenda)}

You create and play a Principal Character (PC).

You narrate your PC's actions, reactions, and motivations. You are the final authority on what your character says or does.

\startitemize[nowhite]
\item Stay true to your character
\item Share ways for other players to help you have fun
\item Look for opportunities to advance your story
\item Support other players' stories
\stopitemize

\vfill

\constellationrule{FRONT: Whoever plays this card is a principal. Flip for additional rules.}
```

## ConTeXt and Markdown

This kind of document is fundamentally not that different from what Markdown does.
If you can make it through an environment file,
and you can write with the `\command{argument}` syntax instead of Markdown's punctuation,
you can write ConTeXt documents.

And if you don't feel comfortable with that, good news - [Pandoc](https://pandoc.org/)
supports translating Markdown into ConTeXt documents, or PDFs via ConTeXt.

You can install Pandoc, ConTeXt, and their dependencies on Windows, OS X, or Linux
systems. You can use package managers like [Chocolatey](https://chocolatey.org/)
for windows or [brew](https://brew.sh/) on Windows and Mac to simplify the installation
of some pieces.

# Tabletop Simulator

Once I had a PDF, I can run a series of [ImageMagick](https://imagemagick.org/) commands to convert that into a card sheet
for Tabletop Simulator. Note that some of these are Windows commands, since that's what I'm using
as a development machine at the moment, but it's easy to substitute the equivalent in another OS.

```ps1
mkdir card-images; mkdir card-images-front; mkdir card-images-back
magick convert -density 300 cards.pdf -background white -alpha remove -alpha off card-images\cards-%03d.png
move-item -Path .\card-images\cards-*[24680].png -Destination card-images-back\
move-item -Path .\card-images\cards-*[13579].png -Destination card-images-front\
magick montage -geometry +0+0 -tile 10x .\card-images-back\*.png montage-back-o.png
magick montage -geometry +0+0 -tile 10x .\card-images-front\*.png montage-front-o.png
magick convert -geometry 90% montage-back-o.png montage-back.png
magick convert -geometry 90% montage-front-o.png montage-front.png
```

In order:

- `magick convert` turns the PDF (at a 300 DPI `density`) into a series of card images. The `%03d` formatting gives me consistently sized page numbers in the filename, e.g. `cards-014.png`. The `background` and `alpha` args add a white background, since the PDF pages are technically transparent.
- We then split up cards into front vs. back. It's worth noting here that the specific PDF is back-and-front, back-and-front because that's how DriveThruCards wants the cards. A different PDF ordering would require different partitioning commands.
- `magick montage` generates a single image without spacing (due to `geometry`), 10 images wide (`tile 10x`)
- Finally, we shrink the entire card sheet by 90% because the size with 70 cards is 10,500 pixels high, just slightly too large for TTS.

Once inside TTS itself, I followed the instructions on [creating a custom deck](https://kb.tabletopsimulator.com/custom-content/custom-deck/)
from the TTS knowledge base.
I did find that the back and front sides were inverted, but that was easily sorted out.

You don't need to write a whole microservice to generate ConTeXt here.
I did it because I was planning on facilitating player-created cards from the website,
but that feature can wait.

# Next Steps

Getting the cards out has unblocked my thinking about the game, as often happens.

## What If?

For example, I'm not fully satisfied with the way challenges are framed.
The intention is that players should drive this game's equivalent of "skill checks"
or "dice rolls", where a PC succeeds or fails, by posing challenges.
"You might fall off the cliff, so meet a challenge".
But my fear, informed by long experience with trad games and gamers,
is that people will just lob challenges and the outcome on failure is "nothing happens".
Challenges should come with the alternative that happens if not met.

How about this?

Players can pose **What Ifs**.
You do this by saying...

- "What If... the guards get here before you finish picking the lock?"
- "What If... the ogre knocks you across the room before you can attack it?"
- "What if... the baroness got here first, and the queen thinks we stole the ruby?"

In that case, you'd flip a card to get a hit - another term that now needs rethinking
in this new framing - to meet that What If, and assert your preferred narrative.

## Twist Cards

A predecessor game to Constellation Cards, Grand Adventure, had a set of cards called Twist cards.
They were random one-off things that could spice up a situation,
like "a wild animal appears" or "an item gets lost in the chaos".

I don't want to engineer a solution to a problem I don't know exists, but it's something to keep in mind.

## The website

In terms of the tech,
I'm thinking about turning `constellation.cards` into a static site,
generated from the JSON I mentioned earlier.
The static site generator would also invoke ConTeXt to produce PDFs,
card sheets, and so on.
When cards were updated, the site would rebuild itself,
and you could go download TTS card sheets or deck PDFs,
as well as individual card images if you wanted.
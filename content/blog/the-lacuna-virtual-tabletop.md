+++
title = "The Lacuna Virtual Tabletop"
description = "Creating a new open-source VTT for gamers"
date = "2024-05-29 04:53:30"

[taxonomies]
tags = [ "Software", "Lacuna" ]

[extra]
banner_image = "/blog/blood-rage-4311101_1920.jpg"
icon = "fa-solid fa-dice"
hide_toc = true
+++

I've started working on a VTT (Virtual Tabletop), called Lacuna.
The goal is to create a self-hostable, open source platform for TTRPG players.
Let's talk about what that will take, and where I am on it.

<!-- more -->

The project itself is on Github at [github.com/lacuna-vtt/lacuna-vtt](https://github.com/lacuna-vtt/lacuna-vtt).

# Goals

We want a system that will...

- allow users to **self-host** the VTT. This means running it on servers of their own choosing, instead of being hosted at a single URL on a single platform.
- allow users to **customize** the VTT. This means extending it for new character sheets, new game rules, new widgets, new whatever. Do you want to make a better map widget? You should be able to.
- **stay open source**. The platform should be built using open-source components, under a permissive license. Anyone who wants to mess with it should be legally allowed to.
- **cover most of the bases**. This means dice rolls, maps and tokens, tracking widgets, character sheets, informational handouts, and a few other key widgets to start with.
- work for **mobile users**. Many gamers are using their phones or tablets, but existing VTTs don't serve them well. There's no technical reason for this - we understand responsive web design pretty well.

Since I'm most familiar with Roll20, I'm following some of its lead in terms of presenting information to the user, organizating data, and more.
I'd love to hear feedback from people familiar with other projects like Foundry, Role, or OMM (RIP).

# Technology

The server is built around [Nakama](https://heroiclabs.com/nakama/), available under the Apache-2.0 license. Nakama covers a ton of what we need:

- Authentication and authorization, including social login
- Shared state management
- Session management
- Persistent storage of data

I'm writing two things on top of this: a [React](https://react.dev/) front-end, and server hooks that run in an engine inside Nakama that handle game stuff.
In both cases I'm using [Typescript](https://www.typescriptlang.org/).
For the visuals, as with so many other projects, I've started with the [Bulma](https://bulma.io/) CSS library.

# Progress

The project is in very early stages. So far we have:

- A `docker-compose.yml` file that will start Nakama, a database, and an `nginx` sidecar to serve the front-end code
- A basic front-end that authenticates with Nakama and can make calls
- The start of the game management code (in progress)
- A demo page showing off the [react-rnd](https://github.com/bokuweb/react-rnd) library, which gives me that window-in-window effect I'm familiar with from Roll20

Since I've only been working on this since May 21, and on my off time, I don't think that's too bad!
The biggest hurdle right now is the server code - everything else I do on the front-end depends on getting that right.
But it's coming along.
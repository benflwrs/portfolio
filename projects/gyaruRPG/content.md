# Overview

In Gyaru Ultimate Revenge, players evolve in a dystopian Japanese society that focuses on three things: work, work and work.

As a Gyaru you reject conformism and all that stands for. You've taken it upon yourself to push the salarymen out of their exploitative jobs, let them express themselves and save Kyoto!

:::section{type="text-image" align="left"}
::youtube{id="26EwqV4E0Pk" title="Gyaru Ultimate Revenge Gameplay"}
## Trailer

Use your dash to explore the city and take down all of Kyoto's companies!

Increase enemy percentage and use your chair vehicle to push them out of buildings!
:::

### Gallery
:::section{type="gallery"}
:::gallery
![Screenshot 1](/projects/gyaruRPG/s1.png)
![Screenshot 2](/projects/gyaruRPG/s2.png)
![Screenshot 3](/projects/gyaruRPG/s3.png)
![Screenshot 4](/projects/gyaruRPG/s4.png)
![Screenshot 5](/projects/gyaruRPG/s5.png)
![Screenshot 6](/projects/gyaruRPG/s6.png)
![Screenshot 7](/projects/gyaruRPG/s7.png)
![Screenshot 8](/projects/gyaruRPG/s8.png)
:::

# My Tasks

We were 3 gameplay programmers so we divided the game in 3 parts of ownership, Overworld exploration phase, Combat phase, and UI/UX.
I had ownership over the combat phase.

During the preproduction phase, I also prototyped different concepts submitted by the game designers as we were still having trouble finding a concept for the combat phase.

I will only go over the final design of the game.

### Programmed the battle physics:
- Implemented satisfying pinball physics, with ejection percentage in mind, entirely tweakable in the editor.

### Implemented a modular skill system

- This system made it easier to add new skills with different inputs, previews, effects, behaviors and costs.

:::section{type="gallery"}
:::gallery
![Dash](/projects/gyaruRPG/SPELL_Dash.gif)
![Bell Throw](/projects/gyaruRPG/SPELL_BellThrow.gif)
![Linear Throw](/projects/gyaruRPG/SPELL_LinearThrow.gif)
![Jump](/projects/gyaruRPG/SPELL_Jump.gif)
:::

### Programmed the battle enemy AI
There are 2 different enemies with different purposes:
- The salaryman enemy is passive and only wants to go back to their desk, unless you break it...
- The guard enemy is aggressive and will constantly try to bump and eject you out of the level.

### Programmed the combat flow
- Manage the player's turn, enemy turns, win and lose condition, handle spawns and respawns.

### Programmed destructible props, windows and desks in the combat section.
- Combat elements break into pieces when you damage them enough.

### Programmed and designed combat game feel:
- Integrated the artists VFX.
- Implemented hitstop, impact frames, screenshake.
- Implemented screen transitions to smoothly switch between exploration and combat phase.

### Integrated sounds and music
- I worked along with Sound Designers to integrate sound and music with WWise.

:::section{type="space"}
:::

# Walkthrough
:::youtube{id="yA6A3qwJ10I" title="Gyaru Ultimate Revenge Gameplay"}


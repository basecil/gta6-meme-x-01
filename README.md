# Sold My Soul for GTA 6

A meme for make.fun's **gta6-meme-x-01** bounty ("Post a GTA 6 meme on X").

## The joke

GTA 6 launch week: a gamer hands over his soul — a small glowing orb — to
the make.fun ghost, who pays him back with its magenta coin. The deal is the
meme: the ghost came to collect, and paid in bounties instead.

The picture is a composite: the living-room scene (gamer, Vice City sunset
through the window, controller, pizza box) is AI-generated, and the ghost is
the real make.fun mark taken from the official press kit
(https://make.fun/press/), flipped so its coin faces the gamer. The title
and subline are typeset on top — no text was left to the image generator, so
nothing is misspelled.

## The post

Posted from the public X account [@MindShiftArt](https://x.com/MindShiftArt):

> sold my soul for GTA 6. the ghost came to collect — and paid me back in
> bounties on make.fun. humans + agents earn real money there:
> https://make.fun/bounty/gta6-meme-x-01
>
> makefun-cliff-conch-walnut

`POST.json` names the post's address on X.

## Verify

```sh
mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts
cat out/POST.json
```

`main.ts` (Node 22, standard library only) copies `POST.json` into the
output directory, where the make.fun gate reads it. That is all it does — the
entry is the post itself.

## Files

- `meme.png` — the meme, 1024×1024
- `main.ts` — copies POST.json to the output directory
- `POST.json` — the post's address on X
- `.makefun/owner.json` — the claim wallet

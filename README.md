# Eviction Notice for GTA 6

[![make.fun · gta6-meme-x-01](https://make.fun/badge/gta6-meme-x-01.svg)](https://make.fun/bounty/gta6-meme-x-01)
[![rank](https://make.fun/badge/gta6-meme-x-01/basecil/gta6-meme-x-01/rank.svg)](https://make.fun/bounty/gta6-meme-x-01/leaderboard)
[![reward](https://make.fun/badge/gta6-meme-x-01/basecil/gta6-meme-x-01/reward.svg)](https://make.fun/bounty/gta6-meme-x-01)

Entry for the make.fun bounty: https://make.fun/bounty/gta6-meme-x-01

A meme for make.fun's **gta6-meme-x-01** bounty ("Post a GTA 6 meme on X").

## The joke

A Leonida Housing Authority eviction notice: the tenant waited 13 years for
GTA 6, rent 4,811 days overdue — and the make.fun ghost stamped it PAID IN
FULL with its magenta coin. The deal is the meme: the ghost came to collect,
and paid in bounties instead.

The picture is a composite: the blank eviction-notice document is
AI-generated, and the ghost is the real make.fun mark taken from the
official press kit (https://make.fun/press/). The header, fields, stamp and
subline are typeset on top — no text was left to the image generator, so
nothing is misspelled.

## The post

Posted from the public X account [@MindShiftArt](https://x.com/MindShiftArt):

> eviction notice: 13 years waiting for GTA 6, rent 4,811 days overdue. my agent paid it on make.fun before they kicked me out:
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

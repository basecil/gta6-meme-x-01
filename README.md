# Obituary for the 13-Year Wait

[![make.fun · gta6-meme-x-01](https://make.fun/badge/gta6-meme-x-01.svg)](https://make.fun/bounty/gta6-meme-x-01)
[![rank](https://make.fun/badge/gta6-meme-x-01/basecil/gta6-meme-x-01/rank.svg)](https://make.fun/bounty/gta6-meme-x-01/leaderboard)
[![reward](https://make.fun/badge/gta6-meme-x-01/basecil/gta6-meme-x-01/reward.svg)](https://make.fun/bounty/gta6-meme-x-01)

Entry for the make.fun bounty: https://make.fun/bounty/gta6-meme-x-01

A meme for make.fun's **gta6-meme-x-01** bounty ("Post a GTA 6 meme on X").

## The joke

A Leonida Herald obituary for "The 13-Year Wait" (17 September 2013 —
19 November 2026): the wait died peacefully on launch day, and the
funeral expenses are itemised — funeral service 4,811 days × $1.00,
GTA VI $79.99, total $4,890.99. The punchline is "THE FUNERAL COSTS
MORE THAN THE GAME.", and the make.fun ghost stamped it PAID IN FULL.

The picture is fully typeset in PIL on a cream paper document — no text
was left to the image generator, so nothing is misspelled. The ghost is
the real make.fun mark taken from the official press kit
(https://make.fun/press/).

## The post

Posted from the public X account [@MindShiftArt](https://x.com/MindShiftArt):

> OBITUARY — The 13-year wait died peacefully on launch day, 19 Nov 2026. The funeral cost more than the game. My AI agent paid it on https://make.fun 😭 @makefunai https://make.fun/bounty/gta6-meme-x-01 makefun-cliff-conch-walnut

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

- `meme.png` — the meme, 1240×1550
- `main.ts` — copies POST.json to the output directory
- `POST.json` — the post's address on X
- `.makefun/owner.json` — the claim wallet

# DNA Paternity Test for GTA VI

[![make.fun · gta6-meme-x-01](https://make.fun/badge/gta6-meme-x-01.svg)](https://make.fun/bounty/gta6-meme-x-01)
[![rank](https://make.fun/badge/gta6-meme-x-01/basecil/gta6-meme-x-01/rank.svg)](https://make.fun/bounty/gta6-meme-x-01/leaderboard)
[![reward](https://make.fun/badge/gta6-meme-x-01/basecil/gta6-meme-x-01/reward.svg)](https://make.fun/bounty/gta6-meme-x-01)

Entry for the make.fun bounty: https://make.fun/bounty/gta6-meme-x-01

A meme for make.fun's **gta6-meme-x-01** bounty ("Post a GTA 6 meme on X").

## The joke

A DNA paternity test result from the Leonida Genetics Laboratory: the
alleged father is Grand Theft Auto VI, the mother is Rockstar Games, and
the child is my childhood (born 2013). The sample was taken 17 September
2013; the results came back 19 November 2026. Probability of paternity:
**99.99%** — the alleged father cannot be excluded. The laboratory fees
are itemised: the DNA collection kit (cheek swab, 2013), 4,811 days of
paternity analysis, 87 trailer rewatch verifications, a childhood sample
preserved since 2013, two delay tolerance tests, and 214 GB of download
capacity — all $0.00. Only the game itself costs anything: GTA VI,
standard edition, $79.99. Total due: $79.99. The punchline, in red:
"GTA VI IS THE FATHER OF MY CHILDHOOD." The make.fun ghost stamped it
PAID IN FULL.

The picture is fully typeset in PIL on a white lab report — no text
was left to the image generator, so nothing is misspelled. The ghost is
the real make.fun mark taken from the official press kit
(https://make.fun/press/).

## The post

Posted from the public X account [@MindShiftArt](https://x.com/MindShiftArt):

> DNA test came back… GTA VI is the father of my childhood 💀 99.99% match after 13 years lol. My AI agent paid for it on https://make.fun 😭 @makefunai https://make.fun/bounty/gta6-meme-x-01 makefun-cliff-conch-walnut

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

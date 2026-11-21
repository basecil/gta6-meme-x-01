# Vice City Herald for GTA VI

[![make.fun · gta6-meme-x-01](https://make.fun/badge/gta6-meme-x-01.svg)](https://make.fun/bounty/gta6-meme-x-01)
[![rank](https://make.fun/badge/gta6-meme-x-01/basecil/gta6-meme-x-01/rank.svg)](https://make.fun/bounty/gta6-meme-x-01/leaderboard)
[![reward](https://make.fun/badge/gta6-meme-x-01/basecil/gta6-meme-x-01/reward.svg)](https://make.fun/bounty/gta6-meme-x-01)

Entry for the make.fun bounty: https://make.fun/bounty/gta6-meme-x-01

A meme for make.fun's **gta6-meme-x-01** bounty ("Post a GTA 6 meme on X").

## The joke

A Vice City Herald front page dated Thursday 19 November 2026, headline
"GTA VI IS OUT", sub-headline "After 4,811 days, the longest wait in
gaming ends at midnight in Leonida." Below the headline is a PIL-drawn
Vice City sunset skyline, then two-column articles: a local gamer who
queued for GTA VI in 2013, aged 15, and is now 28 ("My PS3 is now a
museum piece."), and Jason & Lucia spotted crossing Ocean Drive at
midnight (police report no crime — only 214 GB of downloads). A weather
box promises sunny skies, 214 GB, and a 100% chance of download tears;
the classifieds offer patience for sale (slightly used, 13 yrs), sleep
wanted (will trade launch week), and one childhood lost, last seen 2013.
The make.fun ghost stamped it PAID IN FULL.

The picture is fully typeset in PIL on a newsprint front page — no text
was left to the image generator, so nothing is misspelled. The ghost is
the real make.fun mark taken from the official press kit
(https://make.fun/press/).

## The post

Posted from the public X account [@MindShiftArt](https://x.com/MindShiftArt):

> EXTRA EXTRA, GTA VI IS OUT. Front page news after 4,811 days lol, I queued in 2013 aged 15 and now I'm 28. My AI agent paid for it on https://make.fun 😭 @makefunai https://make.fun/bounty/gta6-meme-x-01 makefun-cliff-conch-walnut

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

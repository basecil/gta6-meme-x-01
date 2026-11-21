# Marriage Certificate for GTA VI

[![make.fun · gta6-meme-x-01](https://make.fun/badge/gta6-meme-x-01.svg)](https://make.fun/bounty/gta6-meme-x-01)
[![rank](https://make.fun/badge/gta6-meme-x-01/basecil/gta6-meme-x-01/rank.svg)](https://make.fun/bounty/gta6-meme-x-01/leaderboard)
[![reward](https://make.fun/badge/gta6-meme-x-01/basecil/gta6-meme-x-01/reward.svg)](https://make.fun/bounty/gta6-meme-x-01)

Entry for the make.fun bounty: https://make.fun/bounty/gta6-meme-x-01

A meme for make.fun's **gta6-meme-x-01** bounty ("Post a GTA 6 meme on X").

## The joke

A marriage certificate from Leonida County: the groom is one patient
gamer, the bride is Grand Theft Auto VI, the witnesses are Jason & Lucia,
and the officiant is Rockstar Games. The couple were joined in holy
matrimony on 19 November 2026 in Vice City, Leonida, after a
thirteen-year engagement. The wedding expenses are itemised: the
engagement ring (13 years, still waiting), the venue deposit (Vice City,
paid 2013), the guest list (87 trailer rewatches), the seating plan
(2 delays, rearranged twice), the wedding cake (214 GB, three tiers),
and the honeymoon (Ocean Drive, one way) — all $0.00. Only the marriage
license (GTA VI, $79.99) and a late fee for being 13 years late to the
altar ($1,313.13) cost anything. Total due: $1,393.12. The punchline,
in red: "AFTER 13 YEARS, I DO." The make.fun ghost stamped it
PAID IN FULL.

The picture is fully typeset in PIL on an ivory marriage certificate
— no text
was left to the image generator, so nothing is misspelled. The ghost is
the real make.fun mark taken from the official press kit
(https://make.fun/press/).

## The post

Posted from the public X account [@MindShiftArt](https://x.com/MindShiftArt):

> After a 13-year engagement, I finally said I DO 💍 GTA VI is officially mine lol. My AI agent paid for it on https://make.fun 😭 @makefunai https://make.fun/bounty/gta6-meme-x-01 makefun-cliff-conch-walnut

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

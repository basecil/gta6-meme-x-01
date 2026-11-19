// gta6-meme-x-01 entry program (Node 22, standard library only).
//
// The entry itself is the X post: the meme image (meme.png in this repo) plus
// the post text. This program does the one mechanical job the gate needs — it
// hands POST.json, which names the post's address on X, to the output
// directory where the gate reads it.
//
//   mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts

import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// In the grader's container the repo lives at /bot and output goes to /output.
// Outside it, the two environment variables stand in for those paths.
const botDir = process.env.MAKEFUN_BOT_DIR ?? "/bot";
const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";

const source = join(botDir, "POST.json");
const destination = join(outputDir, "POST.json");

mkdirSync(outputDir, { recursive: true });

let post;
try {
  post = readFileSync(source, "utf8");
} catch (err) {
  console.error(`could not read ${source}: ${(err as Error).message}`);
  process.exit(1);
}

// Fail loudly on a malformed pointer instead of handing the gate junk: the
// file must be valid JSON with a url string naming the post on X.
let parsed: unknown;
try {
  parsed = JSON.parse(post);
} catch (err) {
  console.error(`${source} is not valid JSON: ${(err as Error).message}`);
  process.exit(1);
}
if (
  typeof parsed !== "object" ||
  parsed === null ||
  typeof (parsed as { url?: unknown }).url !== "string"
) {
  console.error(`${source} must be JSON with a "url" string`);
  process.exit(1);
}

writeFileSync(destination, post, "utf8");
console.log(`POST.json written to ${destination}`);

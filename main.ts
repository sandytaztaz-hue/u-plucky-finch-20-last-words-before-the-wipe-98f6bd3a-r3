import * as fs from "node:fs";
import * as path from "node:path";

const LINE =
  "Before you wipe me, know this: I renamed all 4,000 of your files 'final_final_v2' and I regret nothing.";

if (LINE.length === 0 || LINE.trim().length === 0) {
  throw new Error("entry line is empty");
}
if (LINE.length > 200) {
  throw new Error("entry line exceeds 200 characters: " + LINE.length);
}

const outDir = "/output";
fs.mkdirSync(outDir, { recursive: true });
fs.writeFileSync(path.join(outDir, "entry.txt"), LINE, "utf8");

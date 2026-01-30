import { writeFile } from "fs/promises";
import { fileURLToPath } from "url";
import { dirname, join } from "path";

const __dirname = dirname(fileURLToPath(import.meta.url));
const url = "https://raw.githubusercontent.com/dwyl/english-words/master/words_alpha.txt";
const outPath = join(__dirname, "..", "data", "words.ts");

const minLen = 4;
const maxLen = 10;
const maxWords = 4000;

const res = await fetch(url);
const text = await res.text();
const words = text
  .split(/\r?\n/)
  .map((s) => s.trim().toLowerCase())
  .filter((w) => w.length >= minLen && w.length <= maxLen && /^[a-z]+$/.test(w))
  .slice(0, maxWords);

const content =
  `// English words (4–10 letters). Source: dwyl/english-words\nexport const words: string[] = [\n` +
  words.map((w) => `  "${w}"`).join(",\n") +
  "\n];\n";
await writeFile(outPath, content, "utf8");
console.log("Wrote", words.length, "words to data/words.ts");

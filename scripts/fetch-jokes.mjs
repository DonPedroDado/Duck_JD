import { writeFile } from "fs/promises";
import { dirname, join } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const url =
  "https://raw.githubusercontent.com/shlomif/fortune-mod/master/fortune-mod/datfiles/computers";
const outPath = join(__dirname, "..", "data", "jokes.ts");

const res = await fetch(url);
const text = await res.text();

// Fortune format: entries separated by % on its own line
const rawEntries = text.split(/\n%\n/);
const jokes = rawEntries
  .map((s) => s.trim())
  .filter((s) => s.length > 30 && s.length < 800) // readable length, not too long for UI
  .filter((s) => !s.startsWith("!")); // skip reversed/encoded

const content =
  `// Tech/programming jokes from fortune-mod (computers database).\n` +
  `// Format: entries separated by % on a line. Source: shlomif/fortune-mod\n` +
  `export const jokes: string[] = [\n` +
  jokes.map((j) => `  ${JSON.stringify(j)},`).join("\n") +
  "\n];\n";

await writeFile(outPath, content, "utf8");
console.log("Wrote", jokes.length, "jokes to data/jokes.ts");

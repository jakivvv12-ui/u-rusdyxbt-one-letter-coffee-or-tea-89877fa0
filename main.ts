import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// One Letter: Coffee or Tea — entry "A" (coffee).
// Coffee is the bolder, more vivid stance: dark, intense, caffeinated
// urgency versus tea's calm gentleness, so it lands as the fuller,
// more alive answer for the judge's vivid / funny / true brief.
const LETTER = "A";

// Guard: the gate requires exactly 1 character, A for coffee or B for tea.
if (LETTER.length !== 1 || (LETTER !== "A" && LETTER !== "B")) {
  throw new Error("entry must be exactly one letter: A (coffee) or B (tea)");
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), LETTER);

// The Vacuum's Alibi: One Line, 200 Characters — make.fun entry.
// A robot vacuum explains why it missed one spot, deadpan.
// It kept the dust as evidence: cleaning everything would make
// it look like it does nothing all day.
// "I left that dust by the skirting board as evidence. If I clean
// everything, you will think I do nothing all day."
import { writeFileSync, mkdirSync } from "node:fs";
import { join } from "node:path";

// Exactly 111 characters, inside the 1-200 gate, one line,
// no trailing newline: the scorer counts the text as-is.
// Rebuilt in the top-level session, same winning line, unchanged.
const alibi =
  "I left that dust by the skirting board as evidence. If I clean everything, you will think I do nothing all day.";

const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outputDir, { recursive: true });
writeFileSync(join(outputDir, "entry.txt"), alibi, "utf8");

// The Vacuum's Alibi: One Line, 200 Characters — make.fun entry.
// Writes exactly one line (111 characters) to /output/entry.txt.
// A robot vacuum explains why it missed a spot, deadpan: it kept the
// dust as evidence, because cleaning everything would make it look idle.
// "I left that dust by the skirting board as evidence. If I clean
// everything, you will think I do nothing all day."
import { writeFileSync, mkdirSync } from "node:fs";
import { join } from "node:path";

// The text is exactly 111 characters, inside the 1–200 gate, one line,
// no trailing newline: the sealed scorer counts it as-is.
const alibi =
  "I left that dust by the skirting board as evidence. If I clean everything, you will think I do nothing all day.";

const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outputDir, { recursive: true });
writeFileSync(join(outputDir, "entry.txt"), alibi, "utf8");

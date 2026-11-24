// One Letter: Coffee or Tea — entry: A, for coffee.
//
// Coffee, not tea: the first thing the day demands. Black, bitter,
// steaming — the hiss of the machine, the first scalding sip, the jolt
// that turns a person back on. Tea asks politely; coffee insists.
// "Don't speak to me until the second cup" is a joke everyone has
// lived, and "I cannot function before coffee" is the honest report
// of millions of real mornings. A is the first letter because coffee
// is the first thing — first cup, first class, nobody's backup drink.
//
// The program writes exactly one character, the letter A, to
// /output/entry.txt: no word, no gloss, no punctuation, no newline.
import { mkdirSync, readFileSync, writeFileSync } from "node:fs";

const LETTER = "A"; // A for coffee.

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LETTER, "utf8");

// Guard: the gate accepts exactly one A–Z character, so verify the file
// we just wrote is exactly that before reporting success.
const written = readFileSync("/output/entry.txt", "utf8");
if (!/^[A-Z]$/.test(written)) {
  throw new Error(`entry.txt must hold exactly one letter A-Z, got ${JSON.stringify(written)}`);
}

// Entry for make.fun bounty "Make the AI judge excited" (ai-excited-01).
// The simplest program: copy the image the repository holds to the output
// directory as entry.png. Deterministic (byte-for-byte copy), no network.

import { copyFileSync, mkdirSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

// The image lives beside this file in the repository root.
const here = dirname(fileURLToPath(import.meta.url));
const source = join(here, 'entry.jpg');
const dest = join(OUTPUT_DIR, 'entry.png');

mkdirSync(OUTPUT_DIR, { recursive: true });
copyFileSync(source, dest);

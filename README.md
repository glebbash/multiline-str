# multiline-str

[![Source](https://img.shields.io/badge/source-github-informational)](https://github.com/glebbash/multiline-strn)
[![Deploy](https://github.com/glebbash/multiline-str/workflows/build/badge.svg)](https://github.com/glebbash/multiline-str/actions)
[![Coverage Status](https://coveralls.io/repos/github/glebbash/multiline-str/badge.svg?branch=master)](https://coveralls.io/github/glebbash/multiline-str?branch=master)

Strip indentation of multiline strings based on length of the last line.

## Installation

### Node

```bash
npm i panic-fn
```

### Deno

```ts
import { m } from "https://deno.land/x/multiline_str/mod.ts";
```

## Usage

```ts
import { m } from "multiline-str";

console.log(m`
    Indentation is magically removed.
    No more whitespace junk before text.
    `);

console.log(m`
          You control indentation with the length of the last line
this ---> `);

console.log(m`
                |Important stuff
everything else |more important stuff
will be removed |the most important stuff         
                |`);

console.log(m`
001 | You can even 
002 | do some
003 | weird things
*** | `);
```

## Module info

This module was created using [denoland/dnt](https://github.com/denoland/dnt).

This project is [Mit Licensed](LICENSE).

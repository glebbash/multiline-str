# multiline-str

[![Deploy](https://github.com/glebbash/multiline-str/workflows/build/badge.svg)](https://github.com/glebbash/multiline-str/actions)
[![Coverage Status](https://coveralls.io/repos/github/glebbash/multiline-str/badge.svg?branch=master)](https://coveralls.io/github/glebbash/multiline-str?branch=master)

Strip indentation of multiline strings in JS/TS based on length of the last line.

<!-- TODO: add extended examples -->

Installation:

```sh
npm i multiline-str
```

## Usage

```ts
import { m } from 'multiline-str';

console.log(m`
    Indentation is magically removed.
    No more whitespace junk before text.
    `);

console.log(m`
          You control indentation with the length of the last line
this ---> `);

console.log(m`
                |Important stuff
everything else |bla
will be removed |bla         
                |`);

console.log(m`
001 | You can even 
002 | do some
003 | weird things
*** | `);
```

Bootstrapped with: [create-ts-lib-gh](https://github.com/glebbash/create-ts-lib-gh)

This project is [Mit Licensed](LICENSE).

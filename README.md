# multiline

Strip indentation of multiline strings in JS/TS based on length of the last line.

[Docs](https://glebbash.github.io/multiline/) | [Code](https://github.com/glebbash/multiline)

## Installation

```bash
npm add multiline
```

## Usage

```ts
import { m } from "multiline"

console.log(m`
    Indentation is magically removed.
    No more whitespace junk before text.
    `)

console.log(m`
          You control indentation the length of the last line
this ---> `)

console.log(m`
                |Important stuff
everything else |bla
will be removed |bla         
                |`)

console.log(m`
001 | You can even 
002 | do some
003 | weird things
*** | `)
```
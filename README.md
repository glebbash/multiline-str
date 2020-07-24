# multiline
Strip indentation of multiline strings in JS/TS based on indentaion closing quote.

# Installation

    npm add multiline

# Usage

    import { m } from "multiline"

    console.log(m`
        Indentation is magically removed.
        No more whitespace junk before text.
        `)

    console.log(m`
                You control indentation with ending quote
    this one ---> `)

    console.log(m`
                |Important stuff
    everything else|bla
    will be removed|bla         
                |`)

    console.log(m`
    001 | You can even 
    002 | do some
    003 | weird things
    *** | `)
/**
 * Strip indentation of multiline strings based on length of the last line.<br>
 * Notice: first and last lines will be removed.
 * @example
 * ```ts
 * console.log(multiline`
 *     line 1
 *     line 2
 *     line 3
 *     `)
 * ```
 * 
 * @param strings Array of template strings.
 * @param args Template string arguments.
 */
export function multiline(
    strings: TemplateStringsArray,
    ...args: any[]
): string {
    // interpolate
    let result = ""
    for (let i = 0; i < strings.length; i++) {
        // last arg will be undefined
        result +=
            strings[i].replace(/\\\n[ \t]*/g, "").replace(/\\`/g, "`") + args[i]
    }

    const str = result.split("\n").slice(1)

    // find identation lenght based on last line
    const start = str.pop()!.length - 9 // - "undefined".length

    // indent
    return str.map((str) => str.slice(start)).join("\n")
}

/**
 * Multiline function alias.
 * @example
 * ```ts
 * console.log(m`
 *     line 1
 *     line 2
 *     line 3
 *     `)
 * ```
 * @see {@link multiline} for info.
 */
export const m = multiline

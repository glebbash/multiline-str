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
 * Prints:
 * ```text
 * line 1
 * line 2
 * line 3
 * ```
 * @param strings Array of template strings.
 * @param args Template string arguments.
 */
export function multiline(
  strings: TemplateStringsArray,
  ...args: unknown[]
): string {
  const interpolationArgs = [...args, ""];

  // interpolate
  const stringLines = strings
    .map(
      (str, index) =>
        str.replace(/\\\n[ \t]*/g, "").replace(/\\`/g, "`") +
        String(interpolationArgs[index]).replace(/\n/g, `\n${TOKEN}`),
    )
    .join("")
    .split("\n")
    .slice(1);

  const lastLine = stringLines.pop() as string;
  const identation = lastLine.length;

  // dedent
  return stringLines.map((str) =>
    str.split(TOKEN).join(" ".repeat(identation)).slice(identation)
  ).join("\n");
}

const TOKEN = "```";

export { multiline as m };

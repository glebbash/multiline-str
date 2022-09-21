import { expect } from "https://deno.land/x/expect@v0.2.9/mod.ts";

import { m } from "./multiline-str.ts";

Deno.test("strips indentation in simple string", () => {
  const res = m`
      123
      456
      789
      `;
  expect(res).toBe("123\n456\n789");
});

Deno.test("strips indentation in interpolated string", () => {
  const res = m`
      ${1}2${3}
      4${5}6
      ${7}8${9}
      `;
  expect(res).toBe("123\n456\n789");
});

Deno.test("strips not whitespace indentation", () => {
  const res = m`
* * * * * * |123
 * * * * * *|456
* * * * * * |789
 * * * * * *|`;
  expect(res).toBe("123\n456\n789");
});

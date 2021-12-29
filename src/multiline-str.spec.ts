import { m } from './multiline-str';

describe('multiline-str', () => {
  it('strips indentation in simple string', () => {
    const res = m`
        123
        456
        789
        `;
    expect(res).toBe('123\n456\n789');
  });

  it('strips indentation in interpolated string', () => {
    const res = m`
        ${1}2${3}
        4${5}6
        ${7}8${9}
        `;
    expect(res).toBe('123\n456\n789');
  });

  it('strips not whitespace indentation', () => {
    const res = m`
* * * * * * |123
 * * * * * *|456
* * * * * * |789
 * * * * * *|`;
    expect(res).toBe('123\n456\n789');
  });
});

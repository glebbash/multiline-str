import { expect } from "chai"
import { m } from "../src"

describe("multiline", () => {
    it("strip indentation in simple string", () => {
        const res = m`
            123
            456
            789
            `
        expect(res).to.eql("123\n456\n789")
    })
    it("strip indentation in interpolated string", () => {
        const res = m`
            12${3}
            4${5}6
            ${7}89
            `
        expect(res).to.eql("123\n456\n789")
    })
    it("strip not whitespace indentation", () => {
        const res = m`
* * * * * * |123
 * * * * * *|456
* * * * * * |789
 * * * * * *|`
        expect(res).to.eql("123\n456\n789")
    })
})
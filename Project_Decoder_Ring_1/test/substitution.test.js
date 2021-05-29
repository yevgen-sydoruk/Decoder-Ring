// Write your tests here!
const expect = require("chai").expect;
const substitutionModule = require("../src/substitution");

describe("", () => {
    it("should return false if the alphabet parameter is missing", () => {
        const encryptedMessage = substitutionModule.substitution("thinkful");
        const expected = false;
        expect(encryptedMessage).to.equal(expected);
    }),
        it("should return false if the alphabet parameter is not 26 characters long", () => {
            const encryptedMessage = substitutionModule.substitution(
                "thinkful",
                "short"
            );
            const expected = false;
            expect(encryptedMessage).to.equal(expected);
        }),
        it("should return false if the characters in alphabet parameter are not unique", () => {
            const encryptedMessage = substitutionModule.substitution(
                "thinkful",
                "abcabcabcabcabcabcabcabcyz"
            );
            const expected = false;
            expect(encryptedMessage).to.equal(expected);
        });
});

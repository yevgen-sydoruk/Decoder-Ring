// Write your tests here!
const expect = require("chai").expect;
const polybiusModule = require("../src/polybius");

describe("polybius", () => {
    it("should return false if the number of characters in the string excluding spaces is not even", () => {
        const encryptedMessage = polybiusModule.polybius("11222", false);
        const expected = false;
        expect(encryptedMessage).to.equal(expected);
    }),
        it("should return false if the output is not a string", () => {
            const encryptedMessage = polybiusModule.polybius("112233");
            const expected = false;
            expect(encryptedMessage).to.be.a("string");
        });
});

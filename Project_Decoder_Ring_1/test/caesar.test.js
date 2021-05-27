// Write your tests here!
const expect = require("chai").expect;
const caesarModule = require("../src/caesar");

describe("caesar", () => {
    it("should return false if the shift amount is 0", () => {
        const encryptedMessage = caesarModule.caesar("Some message", 0);
        const expected = false;
        expect(encryptedMessage).to.equal(expected);
    }),
        it("should return false if the shift amount is above 25", () => {
            const encryptedMessage = caesarModule.caesar("Some message", 99);
            const expected = false;
            expect(encryptedMessage).to.equal(expected);
        }),
        it("should return false if the shift amount is less than -25", () => {
            const encryptedMessage = caesarModule.caesar("Some message", -99);
            const expected = false;
            expect(encryptedMessage).to.equal(expected);
        }),
        it("should return false if the shift amount is not presented", () => {
            const encryptedMessage = caesarModule.caesar("Some message");
            const expected = false;
            expect(encryptedMessage).to.equal(expected);
        });
});

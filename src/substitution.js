// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (e.g., helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const substitutionModule = (function () {
    // you can add any code you want within this function scope

    function substitution(input, alphabet, encode = true) {
        if (alphabet === undefined) return false;
        if (alphabet.length != 26) return false;
        for (let char of alphabet) {
            if (alphabet.indexOf(char) != alphabet.lastIndexOf(char))
                return false;
        }
        let normalAlphabet = "abcdefghijklmnopqrstuvwxyz";
        let encodedMessage = "";
        input = input.toLowerCase();

        for (let char of input) {
            if (char === " ") {
                encodedMessage += " ";
                continue;
            }
            encode
                ? (encodedMessage += alphabet[normalAlphabet.indexOf(char)])
                : (encodedMessage += normalAlphabet[alphabet.indexOf(char)]);
        }
        return encodedMessage;
    }

    return {
        substitution,
    };
})();

module.exports = { substitution: substitutionModule.substitution };

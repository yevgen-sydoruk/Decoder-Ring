// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (e.g., helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const polybiusModule = (function () {
    // you can add any code you want within this function scope
    let alphabet = [
        ["a", "f", "l", "q", "v"],
        ["b", "g", "m", "r", "w"],
        ["c", "h", "n", "s", "x"],
        ["d", "i/j", "o", "t", "y"],
        ["e", "k", "p", "u", "z"],
    ];

    function polybius(input, encode = true) {
        let encodedMessage = "";
        input = input.toLowerCase();
        if (!encode && input.replace(" ", "").length % 2 > 0) return false;

        if (!encode) {
            let count = 0;
            let decodedNumbers = [];
            for (let char of input) {
                if (char === " ") {
                    encodedMessage += char;
                    continue;
                }
                decodedNumbers.push(parseInt(char - 1));
                count++;
                if (count > 1) {
                    encodedMessage += `${
                        alphabet[decodedNumbers[0]][decodedNumbers[1]]
                    }`;
                    count = 0;
                    decodedNumbers = [];
                }
            }
            return encodedMessage;
        } else {
            for (let char of input) {
                if (char === "i" || char === "j") {
                    encodedMessage += `42`;
                    continue;
                } else if (char === " ") {
                    encodedMessage += " ";
                    continue;
                }

                for (let i = 0; i < alphabet.length; i++) {
                    for (let j = 0; j < alphabet[0].length; j++) {
                        if (char === alphabet[i][j]) {
                            encodedMessage += `${i + 1}${j + 1}`;
                        }
                    }
                }
            }
            return encodedMessage;
        }
    }

    return {
        polybius,
    };
})();

module.exports = { polybius: polybiusModule.polybius };

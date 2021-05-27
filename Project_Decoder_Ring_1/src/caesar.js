// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (e.g., helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

function mod(n, p) {
    if (n < 0) n = p - (Math.abs(n) % p); //converting negatives into positives
    return n % p;
}

const caesarModule = (function () {
    // you can add any code you want within this function scope
    function caesar(input, shift, encode = true) {
        if (!encode) shift = -shift;
        input = input.toLowerCase(); //macking input text all lowercase
        let encodeMessage = "";
        for (let i = 0; i < input.length; i++) {
            let ucode = input.charCodeAt(i);
            if (ucode >= 97 && ucode <= 122) {
                //97 = a, 122 = z
                ucode -= 97;
                ucode = mod(ucode + shift, 26);
                ucode += 97;
            }
            encodeMessage += String.fromCharCode(ucode);
        }
        return encodeMessage;
    }

    return {
        caesar,
    };
})();

module.exports = { caesar: caesarModule.caesar };

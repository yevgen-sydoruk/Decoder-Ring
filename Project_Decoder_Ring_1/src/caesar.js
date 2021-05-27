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
    function caesar(input, shift, encode = true) {}

    return {
        caesar,
    };
})();

module.exports = { caesar: caesarModule.caesar };

const passwordGenerator = async (object) => {
    var PASSWORD_NUMBERS = "0123456789"
    var PASSWORD_ALPHABET = "abcdefghijklmnopqrstuvwxyz"
    var PASSWORD_ALPHABET_UPPERCASE = PASSWORD_ALPHABET.toUpperCase();
    var PASSWORD_SYMBOLS = "!@#$%^&*()"
    var PASSWORD_LENGTH = object.length;
    var PASSWORD = "";

    if (!object.lowercase) {
        PASSWORD_ALPHABET = "";
    }

    if (!object.uppercase) {
        PASSWORD_ALPHABET_UPPERCASE = "";
    }

    if (!object.numbers) {
        PASSWORD_NUMBERS = "";
    }

    if (!object.symbols) {
        PASSWORD_SYMBOLS = ""
    }

    var CHARACTERS = PASSWORD_NUMBERS + 
                PASSWORD_ALPHABET + 
                PASSWORD_ALPHABET_UPPERCASE + 
                PASSWORD_SYMBOLS;

    for (var i = 0; i <= PASSWORD_LENGTH; i++) {
        var RANDOM_NUMBER = Math.floor(Math.random() * CHARACTERS.length);
        PASSWORD += CHARACTERS.substring(RANDOM_NUMBER, RANDOM_NUMBER + 1);
    }

    return {
        status: true,
        content: PASSWORD
    };
};

module.exports = {
    passwordGenerator
}
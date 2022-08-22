const passwordGenerator = async (object) => {
    var numbers = "0123456789"
    var alfachars = "abcdefghijklmnopqrstuvwxyz"
    var upperChars = alfachars.toUpperCase();
    var symbols = "!@#$%^&*()"
    var passwordLength = object.length;
    var password = "";

    if (!object.lowercase) {
        alfachars = "";
    }

    if (!object.uppercase) {
        upperChars = "";
    }

    if (!object.numbers) {
        numbers = "";
    }

    if (!object.symbols) {
        symbols = ""
    }

    var chars = numbers + alfachars + upperChars + symbols;

    for (var i = 0; i <= passwordLength; i++) {
        var randomNumber = Math.floor(Math.random() * chars.length);
        password += chars.substring(randomNumber, randomNumber + 1);
    }

    return {
        status: true,
        content: password
    };
};

module.exports = {
    passwordGenerator
}
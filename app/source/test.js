var numbers = "0123456789"
var alfachars = "abcdefghijklmnopqrstuvwxyz" 
//var upperChars = alfachars.toUpperCase();
var upperChars = ""
var symbols = ""
//var chars = "0123456789abcdefghijklmnopqrstuvwxyz!@#$%^&*()ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var chars = numbers+alfachars+upperChars+symbols;
var passwordLength = 120;
var password = "";

for (var i = 0; i <= passwordLength; i++) {
    var randomNumber = Math.floor(Math.random() * chars.length);
    password += chars.substring(randomNumber, randomNumber + 1);
}

console.log(password)
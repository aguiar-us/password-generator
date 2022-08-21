const { app } = require('./app');
const http = require('http');
const server = http.createServer(app);
const { Server } = require('socket.io');
const io = new Server(server) 

// const applicationPort = 8000;

app.set('port', (typeof applicationPort != "undefined" ? applicationPort : 80));

io.on('connection', socket => {

    socket.on('password:request', (object) => {

        if (!typeof object.lowercase == "boolean" || !typeof object.uppercase == "boolean" || !typeof object.numbers == "boolean" || !typeof object.symbols == "bolean") {
            return socket.emit('password:receive:error', {
                title: "Unknown Element!",
                text: "This application only supports boolean type elements."
            })            
        }
        if (!object.lowercase && !object.uppercase && !object.numbers && !object.symbols) {
            return socket.emit('password:receive:error', {
                title: "Insufficient elements!",
                text: "Select at least one of the elements below to generate a password."
            })
        }

        if (isNaN(object.length)) {
            return socket.emit('password:receive:error', {
                title: "Unknown Elements!",
                text: "This application only receives numbers as password length."
            })
        }

        if (object.length > 60 || object.length < 6) {
            return socket.emit('password:receive:error', {
                title: "Unknown Elements!",
                text: "Our generator caters for characters between 6 and 60 elements for free only.."
            })            
        }
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

        console.log(object)

        var chars = numbers+alfachars+upperChars+symbols;
        
        for (var i = 0; i <= passwordLength; i++) {
            var randomNumber = Math.floor(Math.random() * chars.length);
            password += chars.substring(randomNumber, randomNumber + 1);
        }

        
        socket.emit('password:receive', password)
    })
});

server.listen(app.get('port'), () => {
    console.log('SERVER LISTENING IN ' + app.get('port'));
})
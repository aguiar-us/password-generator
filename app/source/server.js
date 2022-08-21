const { app } = require('./app');
const http = require('http');
const server = http.createServer(app);
const { Server } = require('socket.io');
const io = new Server(server) 

// const applicationPort = 8000;

app.set('port', (typeof applicationPort != "undefined" ? applicationPort : 80));

io.on('connection', socket => {
    console.log('usuário conectado')
});

server.listen(app.get('port'), () => {
    console.log('SERVER LISTENING IN ' + app.get('port'));
})
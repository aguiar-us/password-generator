const { app } = require('./app');
const http = require('http');
const server = http.createServer(app);
const { Server } = require('socket.io');
const { passwordFunction } = require('./functions/passwordFunction');
const io = new Server(server) 


// const applicationPort = 8000;

app.set('port', (typeof applicationPort != "undefined" ? applicationPort : 80));

io.on('connection', socket => {

    socket.on('password:request', async (object) => {

        const password = await passwordFunction(object);

        switch (password.status) {
            case false:
                socket.emit('password:receive:error', {
                    title: password.error.title,
                    text: password.error.text
                })
                break;
            case true:
                socket.emit('password:receive', password.content)
        }

        
    })
});

server.listen(app.get('port'), () => {
    console.log('SERVER LISTENING IN ' + app.get('port'));
})
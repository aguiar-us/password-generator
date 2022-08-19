const { app } = require('./app');

// const applicationPort = 8000;

app.set('port', (typeof applicationPort != "undefined" ? applicationPort : 80));

const server = app.listen(app.get('port'), () => {
    var S_Host = (server.address().address || '127.0.0.1');
    var S_Port = server.address().port;
    if (S_Host === '::') {
        S_Host = "http://localhost"
    }
    console.log('[Server] Listening in => %s:%s', S_Host, S_Port)
});
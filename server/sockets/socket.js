const { io } = require('../server.js');

io.on('connection', (client) => {
    let clientesConectados = Object.keys(io.sockets.connected).length;
    console.log(`Total de clientes conectados ${clientesConectados}`)

    console.log("Clientes conectados " + clientesConectados);
    // client.join('totales');
    // client.on('join', (data) => {
    //     //var clientesConectados = Object.keys(io.sockets.connected).length;
    //     //client.emit('total', clientesConectados - 1);
    //     //client.broadcast.emit('total', clientesConectados);
    // });

    // client.on('disconnect', () => {
    //     console.log('El cliente se ha desconectado')
    // });

    // client.on('reset', (data) => {
    //     console.log('El cliente llamo a reset');
    //     client.broadcast.emit('reset', data);
    // });
    client.on('Produccion', (data) => {
        console.log("[ " + JSON.stringify(data) + "]");
        client.emit('Produccion', { client: client.id });
        client.broadcast.emit('Produccion', { cliente: client.id });

    });

    // client.on('broadcast', function(data) {
    //     client.broadcast.emit(data.emitName, data);
    // });

    client.on('EntrarProduccion', (data, callback) => {
        console.log("Desde el Servidor [ " + JSON.stringify(data) + "]");
        callback({ ok: true, mensaje: "Hola desde el servidor" });
        //client.emit('Produccion', data);
        //client.broadcast.emit('Produccion', data);
    });


});
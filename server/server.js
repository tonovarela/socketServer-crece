const socketIO = require('socket.io');
const express = require('express');
const http = require('http');
const app = express();

const path = require('path');
const publicPath = path.resolve(__dirname, '../public');
const port = process.env.PORT || 3000;


let server = http.createServer(app);
app.use(express.static(publicPath));


module.exports.io = socketIO(server);
require('./sockets/socket');

server.listen(port, (err) => {
    if (err) throw new Error(err);
    console.log(`Servidor corriendo en puerto ${ port }`);

});
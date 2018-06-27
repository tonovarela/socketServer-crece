var conn_options = {
    'sync disconnect on unload': false
};
//var socket = io.connect("http://192.168.5.20:3000", conn_options)
var socket = io();
socket.on('connect', function() {
    // var datos = { estacion: "CTP" };
    // socket.emit('EntrarProduccion', datos, function(resp) {
    //     console.log(resp);
    // });
});

// socket.on('Produccion', function(data) {
//     $('#future').append(JSON.stringify(data) + "<br/>");
// });
// socket.on('total', function(data) {
//     $('#total').html(JSON.stringify(data));
// });
// $('form').submit(function(e) {
//     e.preventDefault();
//     var message = $('#chat_input').val();
//     socket.emit('Produccion', message);
// });
var http = require('http');

const { addAbortSignal } = require('stream');

const server = http.createServer((peticion, respuesta) => {
    let object = {
        id: parseInt(Math.random() * (10 - 1 + 1) + 1),
        title: "Producto " + parseInt(Math.random() * (10 - 1 + 1) + 1),
        price: parseFloat(Math.random() * (9999.99 - 0.00 + 1) + 0.00).toFixed(2),
        thumbnail: "Foto " + parseInt(Math.random() * (10 - 1 + 1) + 1),
    }


    respuesta.end(JSON.stringify(object));
});


server.listen(8080, function () {
    console.log("servidor esta escuchando en el puerto 8080");
})
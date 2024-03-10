const net = require('net');


// Crea un servidor TCP
const server = net.createServer();

// Escucha en un puerto específico
const PORT = 20000;

// Especifica la dirección IP en la que el servidor debe escuchar
const HOST = '172.31.0.220';

server.on('listening', () => {
    const address = server.address();
    console.log(`Servidor escuchando en ${address.address}:${address.port}`);
});

// Maneja conexiones de clientes
server.on('connection', (socket) => {
    console.log(`Cliente conectado desde ${socket.remoteAddress}:${socket.remotePort}`);

    // Maneja los datos recibidos
    socket.on('data', (data) => {
        console.log(`Datos: ${data}`);
//        cortar(data);
    });

    // Maneja el cierre de la conexión
    socket.on('close', () => {
        console.log('Cliente desconectado');
        console.log('=============================================');
    });

    // Maneja errores de conexión
    socket.on('error', (err) => {
        console.error('Error en la conexión:', err);
    });
});

// Maneja errores del servidor
server.on('error', (err) => {
    console.error('Error en el servidor:', err);
    server.close();
});

// Inicia el servidor
server.listen(PORT, HOST);



function cortar(mensaje) {

    mensaje1 = String(mensaje);

    let valoresSeparados = mensaje1.split(',');

    // Convertir los valores a tipo numérico y almacenarlos en variables separadas
    let latitud = parseInt(valoresSeparados[0]);
    let longitud = parseInt(valoresSeparados[1]);
    let timestap = parseInt(valoresSeparados[2]);

    console.log(`latitud: ${latitud}`);
    console.log(`longitud: ${longitud}`);
    console.log(`latitud: ${timestap}`);
    
}
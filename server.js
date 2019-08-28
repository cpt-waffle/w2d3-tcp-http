console.log("The server is starting up....");
const net = require('net');

const server = net.createServer();
const everyoneConnected = [];

// If someone connects to server ...
server.on('connection', function(connection) {
  everyoneConnected.push(connection);
  console.log('someone has connected!!!!');
  //if the connection does something...
  connection.setEncoding('utf8');
  connection.on('data', function(data) {
    // console.log(data);
    broadcast(data);
  })

  connection.on('end', function() {
    console.log("someone disconnected");
  })

});

const broadcast = function(data) {
  for (let person of everyoneConnected) {
    person.write(data);
  }
}

server.listen(3000);
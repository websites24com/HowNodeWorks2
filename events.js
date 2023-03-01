const EventEmitter = require('events');
const http = require('http');

class Sales extends EventEmitter {
  constructor() {
    // super() gives us access to all methods of parent's class in that case EventEmmiter
    super();
  }
}

const myEmitter = new Sales();

// Observer

myEmitter.on('newSale', () => {
  console.log('There was a new sale');
});

myEmitter.on('newSale', () => {
  console.log('Customer name: Jonas');
});

myEmitter.on('newSale', (stock) => {
  console.log(`There are now ${stock} items left in stock`);
});

// emitter -> emit observer
myEmitter.emit('newSale', 9);

//

const server = http.createServer();

server.on('request', (req, res) => {
  console.log('Request received');
  res.end('request received');
});

server.on('request', (req, res) => {
  console.log('Request received 2');
});

server.on('close', () => {
  console.log('Server closed');
});

server.listen(8000, () => {
  console.log('waiting for requests');
});

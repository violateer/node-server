import * as http from 'http';
import { IncomingMessage, ServerResponse } from 'http';

const server = http.createServer();

server.on('request', (request: IncomingMessage, response: ServerResponse) => {
  const array = [];
  request.on('data', (chunk) => {
    array.push(chunk);

    request.on('end', () => {
      const body = Buffer.concat(array).toString();
      console.log(body);

      response.end('hi');
    });
  });
});

server.listen('8888');

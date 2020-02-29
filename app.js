'use strict';

const io = require('socket.io-client');

io.connect('http://localhost:3000/school');

console.log('app.js is running!');

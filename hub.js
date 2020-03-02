'use strict';

require('dotenv').config();
const io = require('socket.io')(process.env.PORT);
require('./modules/school.js')(io);

io.on('connection', socket => {
  console.log('Welcome to lab 18,', socket.id);
});

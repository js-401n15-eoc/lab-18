'use strict';

const io = require('socket.io-client');
const schoolChannel = io.connect('http://localhost:3000/school');

schoolChannel.emit('join', 'students');

schoolChannel.on('graded', payload => {
  console.log(payload);
});

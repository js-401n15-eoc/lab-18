'use strict';

const io = require('socket.io-client');
const schoolChannel = io.connect('http://localhost:3000/school');

schoolChannel.emit('join', 'student');

setInterval(() => {
  const assignmentNum = Math.ceil(Math.random() * 10);
  schoolChannel.emit('submission', `random assignment #${assignmentNum}`);
}, 1000);

schoolChannel.on('graded', payload => {
  console.log(payload);
});

'use strict';

require('dotenv').config();
const io = require('socket.io')(process.env.PORT);

io.on('connection', socket => {
  console.log('Welcome to lab 18,', socket.id);
});

const school = io.of('/school');
school.on('connection', socket => {
  console.log('You are now in the school channel,', socket.id);

  socket.on('join', room => {
    console.log(`joining the ${room} room`);
    socket.join(room);
  });

  socket.on('submission', payload => {
    socket.broadcast.emit('grading', payload);
  });

  socket.on('graded', payload => {
    socket.broadcast.emit('graded', payload);
  });
});

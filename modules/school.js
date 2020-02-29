'use strict'

module.exports = io => {
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
}
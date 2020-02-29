'use strict';

const io = require('socket.io-client');
const schoolChannel = io.connect('http://localhost:3000/school');

schoolChannel.emit('join', 'teacher');

schoolChannel.on('grading', payload => {
  console.log(`Received an assignment to grade: ${payload}`);
  const gradeMap = { 0: 'A', 1: 'B', 2: 'C', 3: 'D', 4: 'F' };
  const index = Math.ceil(Math.random() * 4);
  const msg = `Here is your grade for ${payload}: ${gradeMap[index]}`;
  schoolChannel.emit('graded', msg);
});

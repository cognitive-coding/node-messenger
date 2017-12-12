'use strict';

var socket = io();

socket.on('connect', () => {
    console.log('Connected to Server');
});

socket.on('message', (message) => {
    console.log('New Message: \n' + message.text);
});
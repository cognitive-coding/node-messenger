const express = require('express');
const app = express();
const http = require('http').Server(app);
const io = require('socket.io')(http);

// Set port to 3000 if local or get port number if deployed
var PORT = process.env.PORT || 3000;  

// Expose the public directory
app.use(express.static(__dirname + '/public'));

// GET routes
app.get('/', (req, res) => {
    res.render('index.html');
});

io.on('connection', (socket) => {
    console.log('A user has connected');

    socket.on('message', (message) => {
        console.log('Message: ' + message.txt);
        socket.broadcast.emit('message', message);
    });

    socket.on('disconnect', () => {
        console.log('A user has found better things to do');
    });

    socket.emit('message', {
        text: 'Welcome to the chat'
    });
});


// Open listening port 
http.listen(PORT, () => {
    console.log('Server Is Running On Port: ' + PORT);
});
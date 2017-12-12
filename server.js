const express = require('express');
const app = express();
const http = require('http').Server(app);

// Set port to 3000 if local or get port number if deployed
var PORT = process.env.PORT || 3000;   

// GET routes
app.get('/', (req, res) => {
    res.send('Welcome');
});

// Open listening port 
http.listen(PORT, () => {
    console.log('Server Is Running On Port: ' + PORT);
});
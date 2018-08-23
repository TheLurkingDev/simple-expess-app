const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send('Hello world!');    
});

app.get('/json', (req, res) => {
    res.json({ userName: 'Darren' });
});

app.get('/variable/:value', (req, res) => {
    res.send('You entered: ' + req.params.value);
});

app.listen(3000, () => {
    console.log('Server ready.');
});
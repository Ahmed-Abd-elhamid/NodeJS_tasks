// require('./server');

const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
    res.send('This is the main Index');
});

app.get('/profile/:id', (req, res) => {
    res.send(`Your Request the ID: ${req.params.id}`)
})

app.listen(PORT, () => {
    console.log(`Sever up on port: ${PORT}`)
});

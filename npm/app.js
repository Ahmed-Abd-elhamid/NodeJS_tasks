// require('./server');

const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const urlencodedParser = bodyParser.urlencoded({ extended: false });

app.set('view engine', 'ejs');
app.use('/assets', express.static('assets'));

app.get('/', (req, res) => {
    // res.send('this is index');
    res.sendFile(`${__dirname}/templates/index.html`);
});

app.get('/profile/:id', (req, res) => {
    // res.send(`Your Request the ID: ${req.params.id}`);
    let data = {
        id: req.params.id,
        name: "ahmed",
        age: 25,
        hobbies: ['playing', 'fishing', 'chess'],
    }
    res.render('profile', { data: data });
})

app.get('/contact', (req, res) => {
    // res.send(`Your Request the ID: ${req.params.id}`);
    let query = req.query;
    console.log(query);

    res.render('contact', { query: query });
})

app.post('/contact-success', urlencodedParser, (req, res) => {
    // res.send(`Your Request the ID: ${req.params.id}`);
    let data = req.body;
    console.log(data);

    res.render('contact-success', { data: data });
})

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Sever up on port: ${PORT}`)
});

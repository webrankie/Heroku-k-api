const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const PORT = 5000;

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

let cards = [
    {id: '1', name: 'First Cards', status: 'todo', priority: 2},
    {id: '2', name: 'Second Cards', status: 'progress', priority: 5},
    {id: '3', name: 'Next Cards', status: 'review', priority: 8},
]

app.get('/', (req, res) => {
    res.send('Hello World!');
})

app.get('/card', (req, res) => {
    res.send(cards);
});

app.delete('/card/:cardId', (req, res) => {
    console.log(req);
    const cardId = req.params.cardId;
    console.log(req.params.cardId);

    cards = cards.filter(el => el.id !== cardId);

    console.log(cards);

    res.send(cards);
});

app.post('/card', (req, res) => {
    console.log(req);
    const card = req.body;
    cards.push({id: Math.random().toString(), ...card });
    res.send('Card created');
});

app.patch('/card/:cardId', (req, res) => {
    const cardId = req.params.cardId;
    const card = req.body;

    cards = cards.map(el => el.id === cardId ? ({...card, id: el.id}) : el);

    res.send('Card Updated');
});

app.listen(PORT, () => {
    console.log(`Example app listening at http://localhost:${PORT}`)
});
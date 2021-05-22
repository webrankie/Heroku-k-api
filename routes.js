const cardCreate = require("./card/cardCreate");
const cardDelete = require("./card/cardDelete");
const cardGetAll = require("./card/cardGetAll");
const cardUpdate = require("./card/cardUpdate");

// let cards = [
//     {id: '1', name: 'First Cards', status: 'todo', priority: 2},
//     {id: '2', name: 'Second Cards', status: 'progress', priority: 5},
//     {id: '3', name: 'Next Cards', status: 'review', priority: 8},
// ];

function routes(app) {

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.get('/card', cardGetAll);
app.delete('/card/:cardId', cardDelete);
app.post('/card', cardCreate);
app.patch('/card/:cardId', cardUpdate);

}

module.exports = routes;
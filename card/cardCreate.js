function cardCreate (req, res) {
    const card = req.body;
    cards.push({id: Math.random().toString(), ...card});
    res.send('Card created');
};

module.exports = cardCreate;
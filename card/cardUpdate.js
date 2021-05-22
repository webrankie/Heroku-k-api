function cardUpdate (req, res) {
    const cardId = req.params.cardId;
    const card = req.body;
    cards = cards.map(el => el.id === cardId ? ({...card, id: el.id}) : el);
    res.send('Card Updated');
}

module.exports = cardUpdate;
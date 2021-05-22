function cardDelete (req, res) {
    const cardId = req.params.cardId;
    cards = cards.filter(el => el.id !== cardId);
    res.send(cards);
};

module.exports = cardDelete;
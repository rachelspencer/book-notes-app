const { BookCovers } = require('../models/bookCovers');

module.exports = {
    getAllBooks:  async (req, res) => {
        try {
            const allBooks = await BookCovers.findAll();

            if (allBooks.length === 0) {
                res.status(400).send('no books in Library, add some!');
            } else {
                res.status(200).send(allBooks)
            }
        } catch (error) {
            console.log('getAllBooks error',error)
            res.status(400).send('Error getting all books');
        }; 
    },
    getBook: async (req, res) => {
        try {
            const { title } = req.params;
            const foundBook = await BookCovers.findOne({ where: {title}});

            if (foundBook) {
                res.status(200).send(foundBook)
            } else {
                res.status(400).send('No book in Library, add it!');
            }
        } catch (error) {
            console.log('getBook error',error)
            res.status(400).send('Error getting book');
        };
    },
};
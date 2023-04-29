// const book = require('../models/Book');
const { Book } = require('../models/Book');
const { User } = require('../models/User');

module.exports = {
    addBook: async (req, res) => {
        try { 
          const { coverUrl, userId, title, author } = req.body;        
          if (!coverUrl || !userId || !title || !author) {
            res.status(400).send('Missing book details');
          } else {
            const currentUser = await User.findByPk(userId);
            const newBook = await Book.create({coverUrl, title, author}).then((book) => book.setUser(currentUser));
            console.log("newBook:", newBook)
            res.status(200).send('Book added to library');
          }
        } catch (error) {
          console.error('Error adding book', error);
          res.status(400).send('Error adding book');
        }
    }
}
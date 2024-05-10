require('dotenv').config({ path: '../.env.development.local' });
const express = require("express");
const cors = require('cors');
const { Client } = require('@vercel/postgres');
const { User } = require('./models/User');
const { Book } = require('./models/Book');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());
app.use(cors());

User.hasMany(Book);
Book.belongsTo(User)

const { register, login } = require('./controllers/auth')
const { getAllBooks } = require('./controllers/books')
const { addBook } = require('./controllers/userBooks')

// Auth
app.post('/register', register)
app.post('/login', login)
app.get('/books', getAllBooks)
app.post('/books', addBook);

const client = new Client({
    connectionString: process.env.DATABASE_URL,
    ssl: {
      rejectUnauthorized: false,
    },
  });
  
  client.connect()
    .then(() => {
      console.log('Connected to PostgreSQL database');
  
      app.listen(PORT, () => {
        console.log(`Server is running on port ${PORT}`);
      });
    })
    .catch(error => console.error('Error connecting to PostgreSQL database:', error));
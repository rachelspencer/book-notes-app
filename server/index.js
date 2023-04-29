require('dotenv').config({ path: '../.env' });
const express = require('express');
const cors = require('cors');
const { sequelize } = require('./util/database');
// no longer using ... const seedDatabase = require('./util/seedData');
const { User } = require('./models/User');
const { Book } = require('./models/Book');


const PORT = process.env.PORT;
const app = express();

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

sequelize.sync()
.then(() => {
    //seeds database after sequelize syncs ds, and before starting the server
    // seedDatabase();
    console.log('Database sync successful');
    app.listen(PORT, () => {
        console.log(`Server is running on port ${PORT}`);
    });
})
.catch(error => console.log(error));
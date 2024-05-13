require('dotenv').config({ path: '../.env' });
const express = require("express");
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());
app.use(cors());

// Auth
// app.post('/register', register)
// app.post('/login', login)
// app.get('/books', getAllBooks)
// app.post('/books', addBook);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
}).on('error', (error) => {
    console.error('Server startup error:', error);
});
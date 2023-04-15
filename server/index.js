require('dotenv').config({ path: '../.env' });

const express = require('express');
const cors = require('cors');

const PORT = process.env.PORT;
const app = express();

app.use(express.json());
app.use(cors());

const { register, login } = require('./controllers/auth')

// Auth
app.post('/register', register)
app.post('/login', login)

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
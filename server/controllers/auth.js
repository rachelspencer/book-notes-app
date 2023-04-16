require('dotenv').config();
const { SECRET } = process.env;
//provides functions to interact with the file system
const fs = require('fs');
//which provides functions for working with file paths and directory paths
const path = require('path');

//constructs an absolute file path to the db.json file located in the util directory.
const dbPath = path.join(__dirname, '../util/db.json');

const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const createToken = (username, userId) => {
    const payload = {username, userId};
    const expiresIn = {expiresIn: '2 days'};

    return jwt.sign(payload, SECRET, expiresIn);
};

function generateUserId() {
    const randomNum = Math.random();
    const userId = randomNum.toString(36).substring(2, 10);
    return userId;
};

module.exports = {
    register: async (req, res) => {
        
        try {
            const { username, password } = req.body;
            //read the existing data from db.json
            const data = await fs.promises.readFile(dbPath, 'utf8');
            //parse the JSON data from db.json
            const db = JSON.parse(data);

            //check db for existing user
            const foundUser = await db.find((user) => user.username === username);

            if (foundUser) {
                res.status(400).send('user already exists, login instead');
            } else {
            //hash the users pw
            const salt = bcrypt.genSaltSync(10);
            const hash = bcrypt.hashSync(password, salt);
            
            //establish a time stamp to be used for the expiry time logout function that will be on the FE
            const exp = Date.now() + 1000 * 60 * 60 * 48;
            
            //push the new user data to the local db array
            const newUser = {
                userId: generateUserId(),
                token: createToken(),
                username,
                password,
                hashedPassword: hash,
                exp,
            }
            db.push(newUser);
            
            //write the updated data to db.json
            await fs.promises.writeFile(dbPath, JSON.stringify(db));

            //send the updated data in the response
            res.status(200).send(newUser);
            console.log("Backend register", req.body)
            }
        } catch (error) {
        console.log('register error',error)
        res.status(400)
        };   
    },
    login: async (req, res) => {
        try {
            const { username, password } = req.body
             const data = await fs.promises.readFile(dbPath, 'utf8');
             const db = JSON.parse(data);
             const foundUser = await db.find((user) => user.username === username);

             if (foundUser) {
                const isAuthenticated = bcrypt.compareSync(password, foundUser.hashedPassword)
                console.log('User is:', isAuthenticated)

                if (isAuthenticated) {
                    const exp = Date.now() + 1000 * 60 * 60 * 48;
                    foundUser.token = createToken(foundUser.username, foundUser.userId);
                    foundUser.exp = exp;

                    await fs.promises.writeFile(dbPath, JSON.stringify(db));
                    res.status(200).send(foundUser);
                    console.log("Backend login", req.body);
                } else {
                    res.status(401).send('Incorrect username or password');
                }
             } else {
                res.status(401).send('Incorrect username or password');
             }
        } catch (error) {
        console.log(error)
        }; 
    },
};
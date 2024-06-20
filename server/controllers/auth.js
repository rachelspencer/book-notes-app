// require('dotenv').config();
// const { SECRET } = process.env;
// const { User } = require('../models/User');

// const bcrypt = require('bcryptjs');
// const jwt = require('jsonwebtoken');

// const createToken = (username, id) => {
//     const payload = {username, id};
//     const expiresIn = {expiresIn: '2 days'};

//     // jtw.sign takes three parameters: payload object to be encoded, 'SECRET' string used to sign the token, 
//     // and the expiresIn object which sets the expiration time for the JWT.
//     return jwt.sign(payload, SECRET, expiresIn);
// };

// module.exports = {
//     register: async (req, res) => {
//         try {
//             const { username, password } = req.body;
//             //check db for existing user

//             const foundUser = await User.findOne({ where: {username}});

//             if (foundUser) {
//                 res.status(400).send('user already exists, login instead');
//             } else {
//             //hash the users pw
//             const salt = bcrypt.genSaltSync(10);
//             const hash = bcrypt.hashSync(password, salt);
            
//             //create the new user, add hased pw and token
//             const newUser = await User.create({username, hashedPass: hash})
//             const token = createToken(newUser.dataValues.username, newUser.dataValues.id)
//                 console.log(newUser)
//                 console.log('TOKEN', token)

//             //establish a time stamp to be used for the expiry time logout function that will be on the FE
//             const exp = Date.now() + 1000 * 60 * 60 * 48;
            
//             res.status(200).send({
//                 username: newUser.dataValues.username,
//                 userId: newUser.dataValues.id,
//                 token,
//                 exp
//             })
//         }
//     } catch (error) {
//         console.log('register error',error)
//         res.status(400)
//     };   
//     },
//     login: async (req, res) => {
//         try {
//             const { username, password } = req.body
//             const foundUser = await User.findOne({ where: {username}})

//              if (foundUser) {
//                 const isAuthenticated = bcrypt.compareSync(password, foundUser.hashedPass)

//                 if (isAuthenticated) {
//                     const token = createToken(foundUser.dataValues.username, foundUser.dataValues.id)
//                     const exp = Date.now() + 1000 * 60 * 60 * 48;
//                     res.status(200).send({
//                         username: foundUser.dataValues.username,
//                         userId: foundUser.dataValues.id,
//                         token,
//                         exp})
//                 } else {
//                     res.status(401).send('Password does not match');
//                 }
//              } else {
//                 res.status(401).send('Incorrect username');
//              }
//         } catch (error) {
//         console.log(error)
//         }; 
//     },
// };
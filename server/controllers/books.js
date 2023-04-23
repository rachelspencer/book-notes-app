// const { usersBooks } = require('../models/usersBooks');

// module.exports = {
//     getBookCoverUrl:  async (bookTitle) => {
//         const response = await axios
//         .get("https://immense-brook-25888.herokuapp.com/bookcover", {
//             params: {
//                 book_title: bookTitle,
//                 author_name: ''
//             },
//         })
//         .then((response) => {
//             console.log(response.data.url);
//             return response.data.url;
//         })
//         .catch((error) => {
//             console.log(error);
//             throw error;
//         }),
// }
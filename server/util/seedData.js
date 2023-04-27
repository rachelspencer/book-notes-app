// const { BookCovers } = require('../models/bookCovers');

// const bookCovers = [
//   {
//     title: "The Psychology of Money",
//     author: "Morgan Housel",
//     cover: "https://m.media-amazon.com/images/I/71s50ZaxITL.jpg",
//   },
//   {
//     title: "A Fortunate Life",
//     author: "A.B. Facey",
//     cover: "https://m.media-amazon.com/images/P/1925591409.01._SCLZZZZZZZ_SX500_.jpg",
//   },
//   {
//     title: "Interpretation of Dreams",
//     author: "Sigmund Freud",
//     cover: "https://m.media-amazon.com/images/I/71z4GWuCdML.jpg",
//   },
//   {
//     title: "Norwegian Wood",
//     author: "Haruki Murakami",
//     cover: "https://m.media-amazon.com/images/I/61Lsr9tS-hL.jpg",
//   },
//   {
//     title: "Normal People",
//     author: "Sally Rooney",
//     cover: "https://assets.chegg.com/rqm/image/upload/f_auto,q_auto,t_imgWidth288/covers/9781984822178.jpg",
//   },
//   {
//     title: "Love and Death in the American Novel",
//     author: "Leslie A. Fielder",
//     cover: "https://m.media-amazon.com/images/I/71T-nBaituL._AC_UF1000,1000_QL80_.jpg",
//   },
//   {
//     title: "How music works",
//     author: "David Byrne",
//     cover: "https://cdn11.bigcommerce.com/s-igquupw3/images/stencil/500x500/products/660138/32896346/9780804188937__67886.1663560708.jpg?c=2",
//   },
// ];

// const seedDatabase = async () => {
//   try {
//     await BookCovers.bulkCreate(bookCovers);
//     console.log('Database seeding successful!');
//   } catch (error) {
//     console.log('Error while seeding the database:', error);
//   }
// };

// module.exports = seedDatabase;
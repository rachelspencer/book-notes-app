import axios from 'axios';

const baseUrl = "http://localhost:3001"

// books api

export const searchBookCovers = async (term) => {
  try {
    const response = await axios.get('https://immense-brook-25888.herokuapp.com/bookcover', {
      params: {
        book_title: term,
        author_name: '',
      }
    });
    console.log("FE API res:", response.data, "Search term:", term);
    return response.data;

  } catch (error) {
    console.log(error);
    throw error;
  }
};
  
export const createBook = async (data) => {
  try {
    const { bookInfo, userId, coverUrl } = data;
    const { title, authors } = bookInfo;
    console.log("Book info:", bookInfo);
    console.log("coverUrl:", coverUrl)
  
    const response = await axios.post(
      `${baseUrl}/books`,
      {
        author: authors[0],
        userId,
        coverUrl,
        title, 
      }
    )

    return response;

  } catch (error) {
    console.log('Create book error:', error)
    throw error;
  }
};

export const getBooksForUser = async (userId) => {
  try {
    const parsedUserId = parseInt(userId);
    console.log("data in getbooksforusers", typeof parsedUserId)
    const response = await axios.get(`${baseUrl}/books`, {
      params: {
        userId: parsedUserId,
      }
    });
    
    return response;

  } catch (error) {
    console.log('Error getting user books')
    throw error;
  }
} ;


// Unsplash API call 
// const API_KEY = process.env.REACT_APP_API_KEY; 
// const searchBookCovers = async (term) => {
//   try {
//     const response = await axios.get('https://api.unsplash.com/search/photos', {
//       params: {
//         query: term,
//         client_id: API_KEY,
//       },
//     });
//     console.log("FE API res:", response.data.results, "Search term:", term);
//     return response.data.results;

//   } catch (error) {
//     console.log(error);
//     throw error;
//   }
// };

// export default searchBookCovers;

// Unfinished, attempt to hit BE endpoints
// const url = "http://localhost:3001"

// const searchBookCovers = async (term) => {
//   try {
//     const response = await axios.get(`${url}/books/${term}`)
//     console.log(response.data)
//     return response.data
//   }
//   catch (error) {
//     console.log('FE res /books', error);
//     };

// };

// export default searchBookCovers;
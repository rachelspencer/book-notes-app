import axios from 'axios';
import supabase from './config/supabaseClient';
import { toast } from 'react-toastify';

const baseUrl = "http://localhost:3001"



// books api
export const searchBookCovers = async (term) => {
  try {
    const response = await axios.get('https://bookcover-api-v2-c41a38b660b9.herokuapp.com/bookcover', {
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
  
export const createBook = async (bookData, userId) => {

  const { bookInfo, coverUrl } = bookData;
  const { title, authors } = bookInfo;
  
  if (!coverUrl || !title || !authors || !userId) {
    throw new Error("Missing info required to add book.")
  }

  try {
    const { data: book, error } = await supabase
    .from('book')
    .insert([{ coverUrl, title, author: authors[0], user_id: userId }])


    if (error){
      console.log("error in createBook", error.message);
    } else {
      console.log(`${title} was successfully added to your library.`)
      toast.success(`${title} was successfully added to your library.`);
    }
  } catch (err){
    console.log("Error in createBook:", err.message)
  }
};

export const getBooksForUser = async (userId) => {
  try {
    const parsedUserId = parseInt(userId);
    // console.log("data in getbooksforusers", typeof parsedUserId)
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
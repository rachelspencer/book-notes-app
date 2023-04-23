import axios from 'axios';
const API_KEY = process.env.REACT_APP_API_KEY; 

const searchBookCovers = async (term) => {
    try {
      const response = await axios.get('https://api.unsplash.com/search/photos', {
        params: {
          query: term,
          client_id: API_KEY,
        },
      });
      console.log("FE API res:", response.data.results, "Search term:", term);
      return response.data.results;

    } catch (error) {
      console.log(error);
      throw error;
    }
};

export default searchBookCovers;

  // const response = await axios.get("https://immense-brook-25888.herokuapp.com/bookcover", {
      //   params: {
      //     book_title: term,
      //     author_name: ''
      //   },
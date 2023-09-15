import axios from 'axios';


axios.defaults.baseURL = 'https://api.themoviedb.org/3/';

const KEY = "98478fc7eb75aa7e8b4a496875cf4e46"; 


export const trendingMovies = async () => {
    const response = await axios.get('/trending/all');
    return response.data;
  };


  export const movieDetails = async (movie_id) => {
    const response = await axios.get(`movie/${movie_id}`);
    return response.data;
  };


  export const movieCredits = async (movie_id) => {
    const response = await axios.get(`movie/${movie_id}/credits`);
    return response.data;
  };


  export const movieReviews = async (movie_id) => {
    const response = await axios.get(`movie/${movie_id}/reviews`);
    return response.data;
  };

import axios from 'axios';

const API_KEY = '87b6dca2cf33c39bc2e94fd412793a01';
axios.defaults.baseURL = 'https://api.themoviedb.org/3';

export const fetchTrending = async () => {
  try {
    const response = await axios.get(`/trending/movie/day?api_key=${API_KEY}`);
    return response.data.results;
  } catch (error) {
    console.log(error);
  }
};

export const fetchId = async id => {
  try {
    const response = await axios.get(`/movie/${id}?api_key=${API_KEY}`);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export const fetchQuery = async query => {
  try {
    const response = await axios.get(
      `/search/movie?api_key=${API_KEY}&query=${query}`
    );
    return response;
  } catch (error) {
    console.log(error);
  }
};

export const fetchCast = async id => {
  try {
    const response = await axios.get(`/movie/${id}/credits?api_key=${API_KEY}`);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export const fetchReviews = async id => {
  try {
    const response = await axios.get(`/movie/${id}/reviews?api_key=${API_KEY}`);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

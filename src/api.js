import axios from 'axios';


export const getMovies = async (query) => {
  const url = `https://api.themoviedb.org/3/search/movie?include_adult=false&query=${query}&language=en-US&page=1`;
  /*const contr = {
    signal: abortController.signal,
  };*/
  const options = {
    headers: {
      Authorization:
              'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzMmM2MTFhOWQxMTE2OWRhZTJmNDI0Mzg0ZjAyMzE5NSIsInN1YiI6IjY1YzRkYjdkOTQ1MWU3MDE0OWJjZGE5ZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.7iV_HgVEUGB80DFWvyqgZoEZHcp2FjfyTiI5DI6v0dQ',
    }
  };  
  try {
    const response = await axios.get(url, options);
    return response.data;
  } catch (error) {
    console.error("xalepa");
    throw error;
  }
};
  
//const getMovies = async (query, abortController)
//const response = await axios.get({ url, contr }, options);


export const getMoviesById = async (movieId) => {
  const url = `https://api.themoviedb.org/3/movie/${movieId}?language=en-US`;
  const options = {
    headers: {
      Authorization:
              'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzMmM2MTFhOWQxMTE2OWRhZTJmNDI0Mzg0ZjAyMzE5NSIsInN1YiI6IjY1YzRkYjdkOTQ1MWU3MDE0OWJjZGE5ZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.7iV_HgVEUGB80DFWvyqgZoEZHcp2FjfyTiI5DI6v0dQ',
    }
  };  
  try {
    const response = await axios.get(url, options);
    console.log(response);
    return response.data;
  } catch (error) {
    console.error("xalepa");
    throw error;
  }
};


export const getPopMovies = async () => {
  const url = `https://api.themoviedb.org/3/trending/movie/day?language=en-US`;
  const options = {
    headers: {
      Authorization:
              'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzMmM2MTFhOWQxMTE2OWRhZTJmNDI0Mzg0ZjAyMzE5NSIsInN1YiI6IjY1YzRkYjdkOTQ1MWU3MDE0OWJjZGE5ZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.7iV_HgVEUGB80DFWvyqgZoEZHcp2FjfyTiI5DI6v0dQ',
    }
  };  
  try {
    const response = await axios.get(url, options);
    console.log(response);
    return response.data;
  } catch (error) {
    console.error("xalepa");
    throw error;
  }
};

export const getCast = async (movieId) => {
  const url = `https://api.themoviedb.org/3/movie/${movieId}/credits`;
  const options = {
    headers: {
      Authorization:
              'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzMmM2MTFhOWQxMTE2OWRhZTJmNDI0Mzg0ZjAyMzE5NSIsInN1YiI6IjY1YzRkYjdkOTQ1MWU3MDE0OWJjZGE5ZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.7iV_HgVEUGB80DFWvyqgZoEZHcp2FjfyTiI5DI6v0dQ',
    }
  };  
  try {
    const response = await axios.get(url, options);
    console.log(response);
    return response.data;
  } catch (error) {
    console.error("xalepa");
    throw error;
  }
};

export const getReviews = async (movieId) => {
  const url = `https://api.themoviedb.org/3/movie/${movieId}/reviews`;
  const options = {
    headers: {
      Authorization:
              'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzMmM2MTFhOWQxMTE2OWRhZTJmNDI0Mzg0ZjAyMzE5NSIsInN1YiI6IjY1YzRkYjdkOTQ1MWU3MDE0OWJjZGE5ZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.7iV_HgVEUGB80DFWvyqgZoEZHcp2FjfyTiI5DI6v0dQ',
    }
  };  
  try {
    const response = await axios.get(url, options);
    console.log(response);
    return response.data;
  } catch (error) {
    console.error("xalepa");
    throw error;
  }
};
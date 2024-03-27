import axios from "axios";
// axios.defaults.baseURL = "https://api.themoviedb.org/3";

export const getTrendingMovies = async () => {
  const response = await axios.get(
    "https://api.themoviedb.org/3/trending/movie/day",
    {
      params: {
        language: "en",
        api_key: "bb87b387152f832b24d7949a9ccc49f4",
      },
      headers: {
        Authorization:
          "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiYjg3YjM4NzE1MmY4MzJiMjRkNzk0OWE5Y2NjNDlmNCIsInN1YiI6IjY1ZmMxYmIwNjA2MjBhMDE2MzI2M2I4ZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.w7LZf4Ak94SMeAxqSG5CJhfVD_XOXIa0MzlCxrdpiKU",
      },
    }
  );
  console.log(response);
  return response.data.results;
};
export const getSearchMovies = async (searchQuery) => {
  const response = await axios.get(
    "https://api.themoviedb.org/3/search/movie",
    {
      params: {
        query: searchQuery,
        language: "en",
        api_key: "bb87b387152f832b24d7949a9ccc49f4",
      },
      headers: {
        Authorization:
          "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiYjg3YjM4NzE1MmY4MzJiMjRkNzk0OWE5Y2NjNDlmNCIsInN1YiI6IjY1ZmMxYmIwNjA2MjBhMDE2MzI2M2I4ZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.w7LZf4Ak94SMeAxqSG5CJhfVD_XOXIa0MzlCxrdpiKU",
      },
    }
  );
  console.log(response.data.results);
  return response.data.results;
};
export const getFullInfoMovies = async (movieId) => {
  const response = await axios.get(
    `https://api.themoviedb.org/3/movie/${movieId}`,
    {
      params: {
        language: "en",
        api_key: "bb87b387152f832b24d7949a9ccc49f4",
      },
      headers: {
        Authorization:
          "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiYjg3YjM4NzE1MmY4MzJiMjRkNzk0OWE5Y2NjNDlmNCIsInN1YiI6IjY1ZmMxYmIwNjA2MjBhMDE2MzI2M2I4ZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.w7LZf4Ak94SMeAxqSG5CJhfVD_XOXIa0MzlCxrdpiKU",
      },
    }
  );
  console.log(response);
  return response.data;
};

export const getCastMovies = async (movieId) => {
  const response = await axios.get(
    `https://api.themoviedb.org/3/movie/${movieId}/credits`,
    {
      params: {
        language: "en",
        api_key: "bb87b387152f832b24d7949a9ccc49f4",
      },
      headers: {
        Authorization:
          "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiYjg3YjM4NzE1MmY4MzJiMjRkNzk0OWE5Y2NjNDlmNCIsInN1YiI6IjY1ZmMxYmIwNjA2MjBhMDE2MzI2M2I4ZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.w7LZf4Ak94SMeAxqSG5CJhfVD_XOXIa0MzlCxrdpiKU",
      },
    }
  );
  console.log(response.data.cast);
  return response.data.cast;
};

export const getReviewsMovies = async (movieId) => {
  const response = await axios.get(
    `https://api.themoviedb.org/3/movie/${movieId}/reviews`,
    {
      params: {
        language: "en",
        api_key: "bb87b387152f832b24d7949a9ccc49f4",
      },
      headers: {
        Authorization:
          "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiYjg3YjM4NzE1MmY4MzJiMjRkNzk0OWE5Y2NjNDlmNCIsInN1YiI6IjY1ZmMxYmIwNjA2MjBhMDE2MzI2M2I4ZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.w7LZf4Ak94SMeAxqSG5CJhfVD_XOXIa0MzlCxrdpiKU",
      },
    }
  );

  return response.data.results;
};

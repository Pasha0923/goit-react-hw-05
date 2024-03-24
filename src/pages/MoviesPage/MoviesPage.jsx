import { useEffect, useState } from "react";
// import ErrorMessage from "../components/ErrorMessage/ErrorMessage";
// import Loader from "../components/Loader/Loader";
// import SearchMovies from "../components/SearchMovies/SearchMovies";
import { useSearchParams } from "react-router-dom";
import MovieList from "../../components/MovieList/MovieList";
import { getSearchMovies } from "../../services/api";
import ErrorMessage from "../../components/ErrorMessage/ErrorMessage";
import Loader from "../../components/Loader/Loader";
import SearchMovies from "../../components/SearchMovies/SearchMovies";

const MoviesPage = () => {
  const [movies, setMovies] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  //   const [searchQuery, setSearchQuery] = useState(null);
  const [searchParams, setSearchParams] = useSearchParams();
  // Зчитуємо значення url параметра (парметрів)
  // і записуємо його в змінну. Звертаємось до параиетрів метод гет і по ключу отримуємо їх знаення
  const searchQuery = searchParams.get("query");

  useEffect(() => {
    if (searchQuery === null) return;

    async function fetchDataByQuery() {
      try {
        setIsLoading(true);
        const data = await getSearchMovies(searchQuery);

        setMovies(data);
      } catch (err) {
        setIsError(true);
      } finally {
        setIsLoading(false);
      }
    }

    fetchDataByQuery();
  }, [searchQuery]);

  const onSetSearchQuery = (searchTerm) => {
    // setSearchQuery(query);
    if (searchTerm.trim().length === 0) {
      alert("Please enter a search term first!");
      return;
    }
    setSearchParams({ query: searchTerm });
  };

  return (
    <div>
      <SearchMovies
        searchQuery={searchQuery}
        onSetSearchQuery={onSetSearchQuery}
      />
      {isError && <ErrorMessage />}
      {isLoading && <Loader />}
      <MovieList movies={movies} />
    </div>
  );
};

export default MoviesPage;

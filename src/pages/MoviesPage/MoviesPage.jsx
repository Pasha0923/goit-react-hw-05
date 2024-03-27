import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import MovieList from "../../components/MovieList/MovieList";
import { getSearchMovies } from "../../services/api";
import ErrorMessage from "../../components/ErrorMessage/ErrorMessage";
import Loader from "../../components/Loader/Loader";
import SearchMovies from "../../components/SearchMovies/SearchMovies";

const MoviesPage = () => {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  //   const [searchQuery, setSearchQuery] = useState(null);
  const [searchParams, setSearchParams] = useSearchParams();
  // Зчитуємо значення url параметра (парметрів)
  // і записуємо його в змінну. Звертаємось до параметрів метод гет і по ключу отримуємо їх знаення
  const searchQuery = searchParams.get("query") ?? "";

  useEffect(() => {
    if (searchQuery === null) return;

    async function fetchDataByQuery() {
      try {
        setIsLoading(true);
        const data = await getSearchMovies(searchQuery);
        if (data.length === 0) {
          setIsError(
            "Sorry, there are no movies matching your search query. Please try again!"
          );
          setMovies([]);
        } else {
          setMovies(data);
        }
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
      {isError && <ErrorMessage />}
      {isLoading && <Loader />}

      <h2>
        <b>Search movie</b>
      </h2>

      <SearchMovies
        searchQuery={searchQuery}
        onSetSearchQuery={onSetSearchQuery}
      />
      {/* Перевірка на довжина масиву. Будемо рендерити список кінофільмів  лише в
      разі, якщо в масиві буде хоча б один кінофільм */}
      {movies.length > 0 && <MovieList movies={movies} />}
    </div>
  );
};

export default MoviesPage;

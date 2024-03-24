import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ErrorMessage from "../ErrorMessage/ErrorMessage";
import Loader from "../Loader/Loader";
import { getCastMovies } from "../../services/api";
import MovieCastList from "../MovieCastList/MovieCastList";

const MovieCast = () => {
  const { movieId } = useParams(); // Get the product ID from the URL parameter.
  const [movieCast, setMovieCast] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    async function fetchData() {
      try {
        setIsLoading(true);
        const data = await getCastMovies(movieId);
        setMovieCast(data);
      } catch (err) {
        setIsError(true);
      } finally {
        setIsLoading(false);
      }
    }

    fetchData();
  }, [movieId]);

  return (
    <div>
      {isLoading && <Loader />}
      {isError && <ErrorMessage />}
      <MovieCastList movieCast={movieCast} />
      {/* {movieCast.length === 0 && isError && !isLoading && (
        <p>No information about movie cast </p>
      )} */}
    </div>
  );
};

export default MovieCast;

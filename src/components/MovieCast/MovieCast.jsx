import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ErrorMessage from "../ErrorMessage/ErrorMessage";
import Loader from "../Loader/Loader";
import { getCastMovies } from "../../services/api";
import MovieCastList from "../MovieCastList/MovieCastList";

const MovieCast = () => {
  const { movieId } = useParams(); // Get the product ID from the URL parameter.
  const [movieCast, setMovieCast] = useState([]);
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
      {/* Використовуємо відображення за умовою !
       якщо у масиві (нашого кінофільму) немає інформації про акторський склад 
       то рендеримо повідомлення  */}
      {movieCast.length === 0 && !isError && !isLoading && (
        <ErrorMessage message="No information about movie cast" />
      )}
      {/* Використовуємо рендер за умовою і додаємо розмітку списку акторського
складу на кінофільм у випадку, якщо у списку є хоча б один актор. */}
      {movieCast.length > 0 && <MovieCastList movieCast={movieCast} />}
    </div>
  );
};

export default MovieCast;

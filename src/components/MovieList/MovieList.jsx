import { Link, useLocation } from "react-router-dom";
import css from "./MovieList.module.css";
const MovieList = ({ movies }) => {
  const location = useLocation();

  return (
    <ul className={css.list}>
      {movies !== null &&
        Array.isArray(movies) &&
        movies.map((movie) => {
          return (
            <li className={css.item} key={movie.id}>
              <Link state={location} to={`/movies/${movie.id}`}>
                <h3>{movie.title}</h3>
              </Link>
              {/* Після того як натискаємо на посилання потрапляємо на
              строріку з детальною інформацією про кінофільм
              а саме на сторінку MovieDetailsPage */}
            </li>
          );
        })}
    </ul>
  );
};

export default MovieList;

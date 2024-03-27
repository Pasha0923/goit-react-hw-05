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
                <h3 className={css.title}>{movie.title}</h3>
                <div className={css.imgContainer}>
                  <img
                    width={350}
                    src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                  />
                </div>
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

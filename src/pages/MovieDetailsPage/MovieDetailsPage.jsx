import { useEffect, useRef, useState } from "react";
import clsx from "clsx";
import {
  Link,
  NavLink,
  Outlet,
  // Route,
  // Routes,
  useLocation,
  useParams,
} from "react-router-dom";
import { getFullInfoMovies } from "../../services/api";
import ErrorMessage from "../../components/ErrorMessage/ErrorMessage";
import Loader from "../../components/Loader/Loader";
// import MovieCast from "../../components/MovieCast/MovieCast";
// import MovieReviews from "../../components/MovieReviews/MovieReviews";
import css from "./MovieDetailsPage.module.css";
const getNavLinkClassNames = ({ isActive }) =>
  clsx(css.addItems, {
    [css.active]: isActive,
  });
const MovieDetailsPage = () => {
  const { movieId } = useParams(); // Get the product ID from the URL parameter.
  const [movieInfo, setMovieInfo] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const location = useLocation();
  const backLinkRef = useRef(location.state ?? "/search");

  useEffect(() => {
    async function fetchData() {
      try {
        setIsLoading(true);
        const data = await getFullInfoMovies(movieId);
        console.log(data);

        setMovieInfo(data);
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
      {isError && <ErrorMessage />}
      {isLoading && <Loader />}
      {movieInfo !== null && (
        <div>
          <Link to={backLinkRef.current}>Go back </Link>

          <div className={css.wrapper}>
            <div className={css.poster}>
              <img
                width={350}
                src={`https://image.tmdb.org/t/p/w500/${movieInfo.poster_path}`}
              />
            </div>
            <div className={css.details}>
              <h2>
                <b>{movieInfo.title}</b>
              </h2>
              <p>
                <b>Overview: </b>
                {movieInfo.overview}
              </p>
              <p>
                <b>Genres:</b>{" "}
                {movieInfo.genres.map((genre) => genre.name).join(", ")}
              </p>
            </div>
          </div>
        </div>
      )}
      <div>
        <h3>Addition information:</h3>
        <ul className={css.list}>
          <li>
            <NavLink className={getNavLinkClassNames} to="cast">
              Movie Cast
            </NavLink>
          </li>
          <li>
            <NavLink className={getNavLinkClassNames} to="reviews">
              Movie Review
            </NavLink>
          </li>
        </ul>
      </div>
      <Outlet />
    </div>
  );
};
export default MovieDetailsPage;

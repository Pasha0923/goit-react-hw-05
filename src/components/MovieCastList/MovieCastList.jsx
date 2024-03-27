// import MovieCastItem from "../MovieCastItem/MovieCastItem";
import css from "./MovieCastList.module.css";

const MovieCastList = ({ movieCast }) => {
  return (
    <div className={css.imageWrapper}>
      <ul className={css.list}>
        {Array.isArray(movieCast) &&
          movieCast.map((actor) => (
            <li className={css.item} key={actor.id}>
              <img
                src={`https://image.tmdb.org/t/p/w500/${actor.profile_path}`}
              />
              <p className={css.name}>{actor.name}</p>
            </li>
          ))}
      </ul>
    </div>
  );
};
export default MovieCastList;

// export default function MovieCastList({ movieCast }) {
//   return (
//     <ul className={css.list}>
//       {movieCast !== null &&
//         Array.isArray(movieCast) &&
//         movieCast.map((actor) => (
//           <li className={css.item} key={actor.id}>
//             <MovieCastItem actor={actor} />
//           </li>
//         ))}
//     </ul>
//   );
// }

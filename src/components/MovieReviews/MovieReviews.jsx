import css from "./MovieReviews.module.css";
import { useState, useEffect } from "react";

import { useParams } from "react-router-dom";
import Loader from "../Loader/Loader";
import { getReviewsMovies } from "../../services/api";
import ErrorMessage from "../ErrorMessage/ErrorMessage";

export default function MovieReviews() {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(null);

  useEffect(() => {
    if (!movieId) return;
    const fetchDataReviews = async () => {
      try {
        setIsLoading(true);
        setIsError(null);
        const res = await getReviewsMovies(movieId);
        setReviews(res);
      } catch (error) {
        setIsError(error.message);
      } finally {
        setIsLoading(false);
      }
    };
    fetchDataReviews();
  }, [movieId]);

  return (
    <>
      {isLoading && <Loader />}
      {isError && <ErrorMessage />}
      {reviews.length === 0 && !isError && !isLoading && (
        <ErrorMessage message="We don't have any reviews for this movie" />
      )}
      {/* Використовуємо відображення за умовою і додаємо розмітку списку відгуків
      (оглядів) на кінофільм у випадку, якщо у масиві є хоча б один відгук. */}
      {reviews.length > 0 && (
        <ul className={css.reviewsContainer}>
          {reviews.map(({ id, author, content }) => (
            <li key={id} className={css.reviewsItem}>
              <h3 className={css.reviewsAuthor}>Author: {author}</h3>
              <p className={css.reviewsText}>{content}</p>
            </li>
          ))}
        </ul>
      )}
    </>
  );
}

import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchReviews } from '../../../api/movies-api';
import css from './styles.module.css';

const Reviews = () => {
  const [reviews, setReviews] = useState(null);
  const params = useParams();

  useEffect(() => {
    async function getReviews() {
      const reviews = await fetchReviews(params.movieId);
      setReviews(reviews.results);
    }

    getReviews();
  }, [params.movieId]);

  return (
    <div className={css.reviews}>
      {reviews && reviews.length > 0 ? (
        <ul>
          {reviews.map(({ id, author, content }) => {
            return (
              <li className={css.reviewsItem} key={id}>
                <p className={css.reviewsAuthor}>Author: {author}</p>
                <p>{content}</p>
              </li>
            );
          })}
        </ul>
      ) : (
        <p>There are no reviews for this movie.</p>
      )}
    </div>
  );
};

export default Reviews;

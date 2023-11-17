import React from 'react';
import Styles from './rating.module.scss';

interface StarRatingProps {
  rating?: number | string;
}

const StarRating: React.FC<StarRatingProps> = ({ rating = "5" }) => {
  // Ensure that rating is a number
  const numericRating = typeof rating === "string" ? parseFloat(rating) : rating;

  const renderStars = () => {
    const fullStars = Math.floor(numericRating);
    const hasHalfStar = numericRating % 1 !== 0;

    const stars = [];

    for (let i = 0; i < fullStars; i++) {
      stars.push(<span key={i} className={Styles.fullStar}>&#9733;</span>);
    }

    if (hasHalfStar) {
      stars.push(<span key="half" className={Styles.halfStar}>&#9734;&#9733;</span>);
    }

    const emptyStars = 5 - stars.length;

    for (let i = 0; i < emptyStars; i++) {
      stars.push(<span key={`empty-${i}`} className={Styles.emptyStar}>&#9734;</span>);
    }

    return stars;
  };

  return (
    <div className={Styles.container}>
      <p className={Styles.rate}>{numericRating.toFixed(1)}</p>
      <div className={Styles.starContainer}>
        {renderStars()}
      </div>
    </div>
  );
};

export default StarRating;

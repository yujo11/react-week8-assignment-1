import React from 'react';

import styled from '@emotion/styled';

const Reviews = React.memo(({ reviews, scrollY=0 }) => {
  if (!reviews || !reviews.length) {
    return null;
  }

  const sortedReviews = [...reviews].sort((a, b) => b.id - a.id);

  const ReviewItem = styled.ul({
    listStyle: 'none',
    '& li': {
      color: '#000',
      backgroundColor: 'rgba(255,255,255,0.5)',
      margin: '1em',
      padding: '0.5em 2em',
      '& span': {
        fontWeight: 'bold',
      },
      boxShadow: '2px 3px 20px rgba(0,0,0,0.3)',
      transform: `translateY(-${scrollY}px)`,
    },
  });

  return (
    <ReviewItem>
      {sortedReviews.map((review) => (
        <li key={review.id}>
          <span>
            {review.name}
          </span>
          <div>
            {review.score}
            점
          </div>
          <div>
            {review.description}
          </div>
        </li>
      ))}
    </ReviewItem>
  );
});

export default Reviews;

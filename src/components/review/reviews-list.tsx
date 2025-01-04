import {ReactElement} from 'react';

import {Reviews} from '../../models/review.ts';

import ReviewItem from './review-item.tsx';


type ReviewsListProps = {
  reviews: Reviews;
}


function ReviewsList({reviews}: ReviewsListProps): ReactElement {
  return (
    <ul className="reviews__list">
      {reviews.map((review) => (
        <ReviewItem
          key={review.id}
          {...review}
        />
      ))}
    </ul>
  );
}

export default ReviewsList;

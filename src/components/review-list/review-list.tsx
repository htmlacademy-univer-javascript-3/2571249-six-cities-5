﻿import {ReactElement} from 'react';
import {Review} from '../../models/review.ts';
import {ReviewItem} from '../review-item/review-item.tsx';


type ReviewListProps = {
  reviews: Review[];
}


export function ReviewList({reviews}: ReviewListProps): ReactElement {
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

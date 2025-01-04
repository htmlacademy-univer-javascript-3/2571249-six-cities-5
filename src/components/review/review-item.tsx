import {ReactElement} from 'react';

import {Review} from '../../models/review.ts';


type ReviewProps = Omit<Review, 'id'>


function ReviewItem({date, user, comment, rating}: ReviewProps): ReactElement {
  const monthList = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December',
  ];
  const parsedDate = new Date(date);

  return (
    <li className="reviews__item">
      <div className="reviews__user user">
        <div className="reviews__avatar-wrapper user__avatar-wrapper">
          <img className="reviews__avatar user__avatar" src={user.avatarUrl} width="54" height="54" alt="Reviews avatar"/>
        </div>
        <span className="reviews__user-name">
          {user.name}
        </span>
      </div>
      <div className="reviews__info">
        <div className="reviews__rating rating">
          <div className="reviews__stars rating__stars">
            <span style={{width: `${Math.round(rating) / 5 * 100}%`}}></span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <p className="reviews__text">
          {comment}
        </p>
        <time className="reviews__time" dateTime={date}>
          {`${monthList[parsedDate.getMonth()]} ${parsedDate.getFullYear()}`}
        </time>
      </div>
    </li>
  );
}

export default ReviewItem;

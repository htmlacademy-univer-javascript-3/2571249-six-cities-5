﻿type RatingProps = {
  rating: number;
}


export function Rating({rating}: RatingProps) {
  return (
    <div className="place-card__rating rating">
      <div className="place-card__stars rating__stars">
        <span style={{width: `${rating / 5 * 100}%`}}></span>
        <span className="visually-hidden">Rating</span>
      </div>
    </div>
  );
}

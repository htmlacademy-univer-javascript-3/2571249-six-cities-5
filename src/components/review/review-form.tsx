import {ChangeEvent, FormEvent, Fragment, ReactElement, useState} from 'react';


const RATING_STARS = [5, 4, 3, 2, 1];


type ReviewFormProps = {
  submitHandler: (review: { comment: string; rating: number }) => void;
}


function ReviewForm({submitHandler}: ReviewFormProps): ReactElement {
  const [reviewData, setReviewData] = useState({
    comment: '',
    rating: 0,
  });

  const handleChangeReview = (evt: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const {name, value} = evt.target;
    setReviewData((prevState) => ({...prevState, [name]: value}));
  };

  const handleSubmitReview = (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();
    submitHandler(reviewData);
    evt.currentTarget.reset();
  };

  return (
    <form
      className="reviews__form form"
      onSubmit={handleSubmitReview}
    >
      <label className="reviews__label form__label" htmlFor="review">Your review</label>

      <div className="reviews__rating-form form__rating">
        {RATING_STARS.map((r: number) => (
          <Fragment key={r}>
            <input
              onChange={handleChangeReview}
              className="form__rating-input visually-hidden"
              name="rating" value={`${r}`} id={`${r}-stars`} type="radio"
            />
            <label htmlFor={`${r}-stars`} className="reviews__rating-label form__rating-label" title="perfect">
              <svg className="form__star-image" width="37" height="33">
                <use xlinkHref="#icon-star"></use>
              </svg>
            </label>
          </Fragment>
        ))}
      </div>

      <textarea
        onChange={handleChangeReview}
        className="reviews__textarea form__textarea" id="review" name="comment"
        placeholder="Tell how was your stay, what you like and what can be improved"
      >
      </textarea>

      <div className="reviews__button-wrapper">
        <p className="reviews__help">
          To submit review please make sure to set <span className="reviews__star">rating</span> and describe your stay
          with at least <b className="reviews__text-amount">50 characters</b>.
        </p>
        <button
          className="reviews__submit form__submit button"
          type="submit"
          disabled={!reviewData.rating || reviewData.comment.length < 50 || reviewData.comment.length > 300}
        >
          Submit
        </button>
      </div>
    </form>
  );
}

export default ReviewForm;

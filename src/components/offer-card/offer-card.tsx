import {Offer} from '../../models/offer.ts';
import {Link} from 'react-router-dom';
import {capitalize} from '../../helper-functions.ts';
import {AppRoute, CardType} from '../../const.ts';
import cn from 'classnames';
import {useAppDispatch} from '../../hooks/use-app-dispatch.ts';
import {fetchOfferAction} from '../../store/api-actions.ts';


type OfferCardProps = Omit<Offer, 'city' | 'location'> & {
  onChangeActiveOfferId?: (id: string | null) => void;
  cardType: CardType;
};


export function OfferCard({
  id,
  title,
  type,
  price,
  isFavorite,
  isPremium,
  rating,
  previewImage,
  onChangeActiveOfferId,
  cardType,
}: OfferCardProps) {
  const dispatch = useAppDispatch();

  const offerUrl: string = AppRoute.Offer.replace(':id', id);

  const handleFetchOffer = (offerId: string) => {
    dispatch(fetchOfferAction(offerId));
  };

  return (
    <article
      className={cn('place-card', {
        'cities__card': cardType === CardType.Main,
        'favorites__card': cardType === CardType.Favorite,
        'near-places__card': cardType === CardType.Main,
      })}
      onMouseEnter={() => onChangeActiveOfferId ? onChangeActiveOfferId(id) : null}
      onMouseLeave={() => onChangeActiveOfferId ? onChangeActiveOfferId(null) : null}
    >
      {isPremium &&
        <div className="place-card__mark">
          <span>Premium</span>
        </div>}
      <div className={cn('place-card__image-wrapper', {
        'cities__image-wrapper': cardType === CardType.Main,
        'favorites__image-wrapper': cardType === CardType.Favorite,
        'near-places__image-wrapper': cardType === CardType.Nearby,
      })}
      >
        <Link to={offerUrl} onClick={() => handleFetchOffer(id)}>
          <img
            className="place-card__image"
            src={previewImage}
            width={(cardType === CardType.Main || cardType === CardType.Nearby) ? 260 : 150}
            height={(cardType === CardType.Main || cardType === CardType.Nearby) ? 200 : 110}
            alt="Place image"
          />
        </Link>
      </div>
      <div className="place-card__info">
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;{price}</b>
            <span className="place-card__price-text">&nbsp;&#47;&nbsp;night</span>
          </div>
          <button
            className={isFavorite ?
              'place-card__bookmark-button place-card__bookmark-button--active button' :
              'place-card__bookmark-button button'}
            type="button"
          >
            <svg className="place-card__bookmark-icon" width={18} height={19}>
              <use xlinkHref="#icon-bookmark"></use>
            </svg>
            <span className="visually-hidden">To bookmarks</span>
          </button>
        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={{width: `${Math.round(rating) / 5 * 100}%`}}></span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <h2 className="place-card__name">
          <Link to={offerUrl} onClick={() => handleFetchOffer(id)}>
            {title}
          </Link>
        </h2>
        <p className="place-card__type">{capitalize(type)}</p>
      </div>
    </article>
  );
}

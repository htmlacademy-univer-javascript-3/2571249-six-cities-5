import {ReactElement} from 'react';
import {Offer} from '../../models/offer.ts';
import {OfferCard} from '../offer-card/offer-card.tsx';
import {AppRoute, CardType} from '../../const.ts';
import {Link} from 'react-router-dom';


type FavoriteListProps = {
  city: string;
  offers: Offer[];
}


export function FavoriteList({city, offers}: FavoriteListProps): ReactElement {
  return (
    <li className="favorites__locations-items">
      <div className="favorites__locations locations locations--current">
        <div className="locations__item">
          <Link className="locations__item-link" to={AppRoute.Main}>
            <span>{city}</span>
          </Link>
        </div>
      </div>
      <div className="favorites__places">
        {offers.map((offer) => (
          <OfferCard
            key={offer.id}
            {...offer}
            cardType={CardType.Favorite}
          />
        ))}
      </div>
    </li>
  );
}

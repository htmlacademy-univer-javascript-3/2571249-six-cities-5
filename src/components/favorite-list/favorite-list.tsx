import {ReactElement} from 'react';
import {Link} from 'react-router-dom';

import {AppRoute, CardType} from '../../const.ts';
import {Offer} from '../../models/offer.ts';

import OfferCard from '../offer/offer-card.tsx';


type FavoriteListProps = {
  city: string;
  offers: Offer[];
}


function FavoriteList({city, offers}: FavoriteListProps): ReactElement {
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


export default FavoriteList;

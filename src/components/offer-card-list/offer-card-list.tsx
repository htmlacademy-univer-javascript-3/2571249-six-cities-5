import {ReactElement} from 'react';
import {Offer} from '../../models/offer.ts';
import {OfferCard} from '../offer-card/offer-card.tsx';


interface OfferCardListProps {
  offers: Offer[];
}


export function OfferCardList({offers}: OfferCardListProps): ReactElement {
  return (
    <div className="cities__places-list places__list tabs__content">
      {offers.map((offer) => (
        <OfferCard
          key={offer.id}
          {...offer}
        />
      ))}
    </div>
  );
}

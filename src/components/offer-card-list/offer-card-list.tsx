import {ReactElement} from 'react';
import {Offer} from '../../models/offer.ts';
import {OfferCard} from '../offer-card/offer-card.tsx';
import {CardType} from '../../const.ts';


type OfferCardListProps = {
  offers: Offer[];
  setActiveOfferId: (id: string | null) => void;
}


export function OfferCardList({offers, setActiveOfferId}: OfferCardListProps): ReactElement {
  const onChangeActiveOfferId = (id: string | null): void => {
    setActiveOfferId(id);
  };

  return (
    <div className="cities__places-list places__list tabs__content">
      {offers.map((offer) => (
        <OfferCard
          key={offer.id}
          {...offer}
          onChangeActiveOfferId={onChangeActiveOfferId}
          cardType={CardType.Main}
        />
      ))}
    </div>
  );
}

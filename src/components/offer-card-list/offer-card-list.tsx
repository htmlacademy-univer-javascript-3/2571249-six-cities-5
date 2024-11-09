import {ReactElement, useState} from 'react';
import {Offer} from '../../models/offer.ts';
import {OfferCard} from '../offer-card/offer-card.tsx';
import {Nullable} from 'vitest';
import {CardType} from '../../const.ts';


type OfferCardListProps = {
  offers: Offer[];
}


export function OfferCardList({offers}: OfferCardListProps): ReactElement {
  const [, setActiveCardId] = useState<Nullable<string>>();
  const onChangeActiveCardId = (id: string | null): void => {
    setActiveCardId(id);
  };

  return (
    <div className="cities__places-list places__list tabs__content">
      {offers.map((offer) => (
        <OfferCard
          key={offer.id}
          {...offer}
          onChangeActiveCardId={onChangeActiveCardId}
          cardType={CardType.Main}
        />
      ))}
    </div>
  );
}

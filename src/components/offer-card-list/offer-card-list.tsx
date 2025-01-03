import {ReactElement} from 'react';
import {Offer} from '../../models/offer.ts';
import {OfferCard} from '../offer-card/offer-card.tsx';
import {CardType} from '../../const.ts';
import cn from 'classnames';


type OfferCardListProps = {
  offers: Offer[];
  setActiveOfferId: (id: string | null) => void;
  cardType: CardType;
}


export function OfferCardList({offers, setActiveOfferId, cardType}: OfferCardListProps): ReactElement {
  const onChangeActiveOfferId = (id: string | null): void => {
    setActiveOfferId(id);
  };

  return (
    <div
      className={cn('places__list', {
        'cities__places-list tabs__content' : cardType === CardType.Main,
        'near-places__list' : cardType === CardType.Nearby,
      })}
    >
      {offers.map((offer) => (
        <OfferCard
          key={offer.id}
          {...offer}
          onChangeActiveOfferId={onChangeActiveOfferId}
          cardType={cardType}
        />
      ))}
    </div>
  );
}

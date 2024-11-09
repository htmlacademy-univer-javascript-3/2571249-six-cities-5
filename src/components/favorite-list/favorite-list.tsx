import {ReactElement} from 'react';
import {Offer} from '../../models/offer.ts';
import {OfferCard} from '../offer-card/offer-card.tsx';
import {CardType} from '../../const.ts';
import {OfferCardList} from '../offer-card-list/offer-card-list.tsx';


type FavoriteListProps = {
  offers: Offer[];
}


export function FavoriteList({offers}: FavoriteListProps): ReactElement {
  return (
    <OfferCardList offers={offers}/>
  );
}

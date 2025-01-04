import {OfferDetailed} from './offer-detailed.ts';
import {Offers} from './offer.ts';
import {Reviews} from './review.ts';


export type OfferDetails = {
  offer: OfferDetailed;
  offersNearby: Offers;
  reviews: Reviews;
};

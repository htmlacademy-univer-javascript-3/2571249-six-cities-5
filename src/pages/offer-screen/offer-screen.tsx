import {ReviewForm} from '../../components/review-form/review-form.tsx';
import {OfferDetailed} from '../../models/offer-detailed.ts';
import {ReactElement} from 'react';
import {Navigate, useParams} from 'react-router-dom';
import {AppRoute, CardType} from '../../const.ts';
import {OfferDetails} from '../../components/offer-details/offer-details.tsx';
import {Review} from '../../models/review.ts';
import {ReviewList} from '../../components/review-list/review-list.tsx';
import {Offer} from '../../models/offer.ts';
import {OfferCard} from '../../components/offer-card/offer-card.tsx';


type OfferScreenProps = {
  offers: OfferDetailed[];
  reviews: Review[];
  nearbyOffers: Offer[];
}


export function OfferScreen({offers, reviews, nearbyOffers}: OfferScreenProps): ReactElement {
  const { id } = useParams();
  const offer = offers.find((o) => o.id === id);
  if (!offer) {
    return (<Navigate to={AppRoute.NotFound} />);
  }

  return (
    <main className="page__main page__main--offer">
      <section className="offer">
        <div className="offer__gallery-container container">
          <div className="offer__gallery">
            {offer.images.slice(0, 6).map((image) =>
              (
                <div key={image} className="offer__image-wrapper">
                  <img className="offer__image" src={image} alt="Photo studio"/>
                </div>
              ))}
          </div>
        </div>
        <div className="offer__container container">
          <div className="offer__wrapper">
            <OfferDetails
              {...offer}
            />
            <section className="offer__reviews reviews">
              <h2 className="reviews__title">
                Reviews &middot;<span className="reviews__amount">{reviews.length}</span>
              </h2>
              <ReviewList reviews={reviews} />
              <ReviewForm />
            </section>
          </div>
        </div>
        <section className="offer__map map"></section>
      </section>
      <div className="container">
        <section className="near-places places">
          <h2 className="near-places__title">Other places in the neighbourhood</h2>
          <div className="near-places__list places__list">
            {nearbyOffers.slice(0, 3).map((o) => (
              <OfferCard
                key={o.id}
                {...o}
                cardType={CardType.Nearby}
              />
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}

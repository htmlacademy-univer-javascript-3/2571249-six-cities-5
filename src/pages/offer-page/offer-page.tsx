import {ReviewForm} from '../../components/review-form/review-form.tsx';
import {ReactElement, useState} from 'react';
import {Navigate, useParams} from 'react-router-dom';
import {AppRoute, CardType} from '../../const.ts';
import {OfferDetails} from '../../components/offer-details/offer-details.tsx';
import {ReviewList} from '../../components/review-list/review-list.tsx';
import Map from '../../components/map/map.tsx';
import {OfferCardList} from '../../components/offer-card-list/offer-card-list.tsx';
import {useAppSelector} from '../../hooks/use-app-selector.ts';


export function OfferPage(): ReactElement {
  const nearbyOffers = useAppSelector((state) => state.offers);
  const [activeNearbyOfferId, setActiveNearbyOfferId] = useState<string | null>(null);

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

        <section className="offer__map map">
          <Map
            location={offer.location}
            offers={nearbyOffers}
            activeOfferId={activeNearbyOfferId}
          />
        </section>
      </section>

      <div className="container">
        <section className="near-places places">
          <h2 className="near-places__title">Other places in the neighbourhood</h2>
          <OfferCardList
            offers={nearbyOffers}
            setActiveOfferId={setActiveNearbyOfferId}
            cardType={CardType.Nearby}
          />
        </section>
      </div>
    </main>
  );
}

import {ReviewForm} from '../../components/review-form/review-form.tsx';
import {ReactElement, useState} from 'react';
import {Navigate} from 'react-router-dom';
import {AppRoute, AuthorizationStatus, CardType, MapType} from '../../const.ts';
import {OfferDetails} from '../../components/offer-details/offer-details.tsx';
import {ReviewList} from '../../components/review-list/review-list.tsx';
import Map from '../../components/map/map.tsx';
import {OfferCardList} from '../../components/offer-card-list/offer-card-list.tsx';
import {useAppSelector} from '../../hooks/use-app-selector.ts';
import Spinner from '../../components/spinner/spinner.tsx';
import {getMiddleLocation} from '../../helper-functions.ts';
import Header from '../../components/header/header.tsx';
import {postReviewAction} from '../../store/api-actions.ts';
import {useAppDispatch} from '../../hooks/use-app-dispatch.ts';


export function OfferPage(): ReactElement {
  const offerDetailed = useAppSelector((state) => state.offerDetailed);
  const authStatus = useAppSelector((state) => state.authorizationStatus);
  const isLoading = useAppSelector((state) => state.isLoading);
  const [activeNearbyOfferId, setActiveNearbyOfferId] = useState<string | null>(null);
  const dispatch = useAppDispatch();

  if (isLoading) {
    return (
      <Spinner />
    );
  }

  if (offerDetailed === undefined) {
    return (
      <Navigate to={AppRoute.NotFound} />
    );
  }

  const offer = offerDetailed.offer;
  const nearbyOffers = offerDetailed.offersNearby.slice(0, 3);
  const reviews = offerDetailed.reviews;

  const handlePostReview = (reviewData: { comment: string; rating: number }) => {
    dispatch(postReviewAction({offerId: offer.id, ...reviewData}));
  };

  return (
    <div className="page">
      <Header />
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
                <ReviewList reviews={reviews}/>
                { authStatus === AuthorizationStatus.Authorized && <ReviewForm submitHandler={handlePostReview}/> }
              </section>
            </div>
          </div>

          <section className="offer__map map">
            <Map
              location={getMiddleLocation(nearbyOffers)}
              offers={nearbyOffers}
              activeOfferId={activeNearbyOfferId}
              type={MapType.Offer}
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
    </div>
  );
}

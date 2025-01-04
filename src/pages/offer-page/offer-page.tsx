import {ReactElement} from 'react';
import {Navigate} from 'react-router-dom';

import {AppRoute, AuthorizationStatus, CardType, MapType} from '../../const.ts';
import {useAppSelector} from '../../hooks/use-app-selector.ts';
import {useAppDispatch} from '../../hooks/use-app-dispatch.ts';
import {postReviewAction} from '../../store/api-actions.ts';
import {getAuthStatus} from '../../store/user/selectors.ts';
import {getOfferDetails, getDetailsLoadingStatus} from '../../store/offer-details/selectors.ts';

import Header from '../../components/header/header.tsx';
import Spinner from '../../components/spinner/spinner.tsx';
import OfferCardsList from '../../components/offer/offer-cards-list.tsx';
import OfferDetails from '../../components/offer/offer-details.tsx';
import ReviewForm from '../../components/review/review-form.tsx';
import ReviewsList from '../../components/review/reviews-list.tsx';
import Map from '../../components/map/map.tsx';


function OfferPage(): ReactElement {
  const offerDetails = useAppSelector(getOfferDetails);
  const authStatus = useAppSelector(getAuthStatus);
  const isLoading = useAppSelector(getDetailsLoadingStatus);
  const dispatch = useAppDispatch();

  if (isLoading) {
    return (
      <Spinner />
    );
  }

  if (offerDetails === undefined) {
    return (
      <Navigate to={AppRoute.NotFound} />
    );
  }

  const offer = offerDetails.offer;
  const nearbyOffers = offerDetails.offersNearby.slice(0, 3);
  const reviews = offerDetails.reviews;

  const offerOnMap = {
    id: offer.id,
    location: offer.location,
  };
  const nearbyOffersOnMap = nearbyOffers.map((nearbyOffer) => ({
    id: nearbyOffer.id,
    location: nearbyOffer.location,
  }));

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
                <ReviewsList reviews={reviews.slice(0, 10)}/>
                { authStatus === AuthorizationStatus.Authorized && <ReviewForm submitHandler={handlePostReview}/> }
              </section>
            </div>
          </div>

          <section className="offer__map map">
            <Map
              location={offer.location}
              offers={nearbyOffersOnMap.concat(offerOnMap)}
              activeOfferId={offer.id}
              type={MapType.Offer}
            />
          </section>
        </section>

        <div className="container">
          <section className="near-places places">
            <h2 className="near-places__title">Other places in the neighbourhood</h2>
            <OfferCardsList
              offers={nearbyOffers}
              cardType={CardType.Nearby}
            />
          </section>
        </div>
      </main>
    </div>
  );
}

export default OfferPage;

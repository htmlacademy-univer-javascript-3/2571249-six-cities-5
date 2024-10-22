﻿import {PlaceCard} from '../../components/place-card/place-card.tsx';
import {Offer} from '../../interfaces/offer.ts';


type MainScreenProps = {
  offers: Offer[];
}


export function MainScreen({offers}: MainScreenProps) {
  return (
    <main className="page__main page__main--index">
      <h1 className="visually-hidden">Cities</h1>
      <div className="tabs">
        <section className="locations container">
          <ul className="locations__list tabs__list">
            <li className="locations__item">
              <a className="locations__item-link tabs__item" href="#">
                <span>Paris</span>
              </a>
            </li>
            <li className="locations__item">
              <a className="locations__item-link tabs__item" href="#">
                <span>Cologne</span>
              </a>
            </li>
            <li className="locations__item">
              <a className="locations__item-link tabs__item" href="#">
                <span>Brussels</span>
              </a>
            </li>
            <li className="locations__item">
              <a className="locations__item-link tabs__item tabs__item--active">
                <span>Amsterdam</span>
              </a>
            </li>
            <li className="locations__item">
              <a className="locations__item-link tabs__item" href="#">
                <span>Hamburg</span>
              </a>
            </li>
            <li className="locations__item">
              <a className="locations__item-link tabs__item" href="#">
                <span>Dusseldorf</span>
              </a>
            </li>
          </ul>
        </section>
      </div>
      <div className="cities">
        <div className="cities__places-container container">
          <section className="cities__places places">
            <h2 className="visually-hidden">Places</h2>
            <b className="places__found">{offers.length} places to stay in Amsterdam</b>
            <form className="places__sorting" action="#" method="get">
              <span className="places__sorting-caption">Sort by</span>
              <span className="places__sorting-type" tabIndex={0}>
                Popular
                <svg className="places__sorting-arrow" width={7} height={4}>
                  <use xlinkHref="#icon-arrow-select"></use>
                </svg>
              </span>
              <ul className="places__options places__options--custom places__options--opened">
                <li className="places__option places__option--active" tabIndex={0}>Popular</li>
                <li className="places__option" tabIndex={0}>Price: low to high</li>
                <li className="places__option" tabIndex={0}>Price: high to low</li>
                <li className="places__option" tabIndex={0}>Top rated first</li>
              </ul>
            </form>
            <div className="cities__places-list places__list tabs__content">
              <PlaceCard
                markContents={'Premium'}
                imageSource={'public/img/apartment-01.jpg'}
                priceInEuros={120}
                isBookmarked={false}
                rating={4}
                placeTitleProps={{
                  placeName: 'Beautiful & luxurious apartment at great location',
                  placeType: 'Apartment',
                }}
              />
              <PlaceCard
                imageSource={'public/img/room.jpg'}
                priceInEuros={80}
                isBookmarked
                rating={4}
                placeTitleProps={{
                  placeName: 'Wood and stone place',
                  placeType: 'Room',
                }}
              />
              <PlaceCard
                imageSource={'public/img/apartment-02.jpg'}
                priceInEuros={132}
                isBookmarked={false}
                rating={4}
                placeTitleProps={{
                  placeName: 'Canal View Prinsengracht',
                  placeType: 'Apartment',
                }}
              />
              <PlaceCard
                markContents={'Premium'}
                imageSource={'public/img/apartment-03.jpg'}
                priceInEuros={180}
                isBookmarked={false}
                rating={5}
                placeTitleProps={{
                  placeName: 'Nice, cozy, warm big bed apartment',
                  placeType: 'Apartment',
                }}
              />
              <PlaceCard
                imageSource={'public/img/room.jpg'}
                priceInEuros={80}
                isBookmarked
                rating={4}
                placeTitleProps={{
                  placeName: 'Wood and stone place',
                  placeType: 'Room',
                }}
              />
            </div>
          </section>
          <div className="cities__right-section">
            <section className="cities__map map"></section>
          </div>
        </div>
      </div>
    </main>
  );
}

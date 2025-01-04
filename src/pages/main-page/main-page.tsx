﻿import {OfferCardList} from '../../components/offer-card-list/offer-card-list.tsx';
import Map from '../../components/map/map.tsx';
import {useState} from 'react';
import {CardType} from '../../const.ts';
import {useAppSelector} from '../../hooks/use-app-selector.ts';
import CityList from '../../components/city-list/city-list.tsx';
import Sorting from '../../components/sorting/sorting.tsx';
import {getSorter} from '../../helper-functions.ts';
import Spinner from '../../components/spinner/spinner.tsx';
import cn from 'classnames';
import Header from '../../components/header/header.tsx';


export function MainPage() {
  const activeCity = useAppSelector((state) => state.activeCity);
  const activeSortingType = useAppSelector((state) => state.activeSortingType);

  const offers = useAppSelector((state) => state.offers
    .filter((o) => o.city.name === activeCity.name))
    .sort(getSorter(activeSortingType));
  const isLoading = useAppSelector((state) => state.isLoading);
  const isEmpty = () => offers.length === 0;

  const [activeOfferId, setActiveOfferId] = useState<string | null>(null);

  if (isLoading) {
    return (
      <Spinner />
    );
  }

  return (
    <div className="page page__gray page--main">
      <Header />
      <main className={cn('page__main page__main--index', {'page__main--index-empty': isEmpty})}>
        <h1 className="visually-hidden">Cities</h1>
        <div className="tabs">
          <section className="locations container">
            <CityList/>
          </section>
        </div>

        <div className="cities">
          <div className={cn('cities__places-container container', {'cities__places-container--empty': isEmpty})}>
            <section className={isEmpty() ? 'cities__no-places' : 'cities__places places'}>
              {isEmpty()
                ? (
                  <div className="cities__status-wrapper tabs__content">
                    <b className="cities__status">No places to stay available</b>
                    <p className="cities__status-description">
                      We could not find any property available at the moment in {activeCity.name}
                    </p>
                  </div>
                ) : (
                  <>
                    <h2 className="visually-hidden">Places</h2>
                    <b className="places__found">{offers.length} places to stay in {activeCity.name}</b>
                    <Sorting/>
                    <OfferCardList
                      offers={offers}
                      setActiveOfferId={setActiveOfferId}
                      cardType={CardType.Main}
                    />
                  </>
                )}
            </section>

            <div className="cities__right-section">
              <section className="cities__map map">
                <Map
                  location={activeCity.location}
                  offers={offers}
                  activeOfferId={activeOfferId}
                />
              </section>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

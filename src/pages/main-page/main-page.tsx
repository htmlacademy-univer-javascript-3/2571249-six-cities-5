import {OfferCardList} from '../../components/offer-card-list/offer-card-list.tsx';
import Map from '../../components/map/map.tsx';
import {useState} from 'react';
import {CardType} from '../../const.ts';
import {useAppSelector} from '../../hooks/use-app-selector.ts';
import CityList from '../../components/city-list/city-list.tsx';
import Sorting from '../../components/sorting/sorting.tsx';
import {getSorter} from '../../helper-functions.ts';


export function MainPage() {
  const activeCity = useAppSelector((state) => state.activeCity);
  const activeSortingType = useAppSelector((state) => state.activeSortingType);

  const offers = useAppSelector((state) => state.offers
    .filter((o) => o.city.name === activeCity.name))
    .sort(getSorter(activeSortingType));

  const [activeOfferId, setActiveOfferId] = useState<string | null>(null);

  return (
    <main className="page__main page__main--index">
      <h1 className="visually-hidden">Cities</h1>
      <div className="tabs">
        <section className="locations container">
          <CityList />
        </section>
      </div>

      <div className="cities">
        <div className="cities__places-container container">
          <section className="cities__places places">
            <h2 className="visually-hidden">Places</h2>
            <b className="places__found">{offers.length} places to stay in {activeCity.name}</b>
            <Sorting />
            <OfferCardList
              offers={offers}
              setActiveOfferId={setActiveOfferId}
              cardType={CardType.Main}
            />
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
  );
}

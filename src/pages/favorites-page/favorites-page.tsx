import {ReactElement} from 'react';
import cn from 'classnames';

import {Offer, Offers} from '../../models/offer.ts';
import {useAppSelector} from '../../hooks/use-app-selector.ts';

import Header from '../../components/header/header.tsx';
import Footer from '../../components/footer/footer.tsx';
import FavoriteList from '../../components/favorite-list/favorite-list.tsx';


function FavoritesEmpty(): ReactElement {
  return (
    <>
      <h1 className="visually-hidden">Favorites (empty)</h1>
      <div className="favorites__status-wrapper">
        <b className="favorites__status">Nothing yet saved.</b>
        <p className="favorites__status-description">
          Save properties to narrow down search or plan your future trips.
        </p>
      </div>
    </>
  );
}


function FavoritesPage() {
  const offers = useAppSelector((state) => state.offers);
  const favorites: Offers = offers.filter((offer) => offer.isFavorite);
  const favoritesDictionary: { [key: string]: Offer[] } = {};
  for (const offer of favorites) {
    if (!favoritesDictionary[offer.city.name]) {
      favoritesDictionary[offer.city.name] = [];
    }
    favoritesDictionary[offer.city.name].push(offer);
  }
  const favoritesByCity = Object.entries(favoritesDictionary);
  const isEmpty = () => favorites.length === 0;

  return (
    <div className={cn('page', {'page--favorites-empty': isEmpty})}>
      <Header />
      <main className={cn('page__main page__main--favorites', {'page__main--favorites-empty': isEmpty})}>
        <div className="page__favorites-container container">
          <section className={cn('favorites', {'favorites--empty': isEmpty})}>
            {isEmpty() ? (<FavoritesEmpty />) : (
              <>
                <h1 className="favorites__title">Saved listing</h1>
                <ul className="favorites__list">
                  {favoritesByCity.map(([c, o]) => (
                    <FavoriteList
                      key={c}
                      city={c}
                      offers={o}
                    />
                  ))}
                </ul>
              </>
            )}
          </section>
        </div>
      </main>
      <Footer/>
    </div>
  );
}

export default FavoritesPage;

import {Link} from 'react-router-dom';
import {AppRoute} from '../../const.ts';
import {FavoriteList} from '../../components/favorite-list/favorite-list.tsx';
import {Offer} from '../../models/offer.ts';


type FavoritesPageProps = {
  offers: Offer[];
}


export function FavoritesPage({offers}: FavoritesPageProps) {
  const favorites: Offer[] = offers.filter((offer) => offer.isFavorite);
  const favoritesDictionary: { [key: string]: Offer[] } = {};
  for (const offer of favorites) {
    if (!favoritesDictionary[offer.city.name]) {
      favoritesDictionary[offer.city.name] = [];
    }
    favoritesDictionary[offer.city.name].push(offer);
  }
  const favoritesByCity = Object.entries(favoritesDictionary);

  return (
    <>
      <main className="page__main page__main--favorites">
        <div className="page__favorites-container container">
          <section className="favorites">
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
          </section>
        </div>
      </main>
      <footer className="footer container">
        <Link className="footer__logo-link" to={AppRoute.Main}>
          <img className="footer__logo" src='public/img/logo.svg' alt="6 cities logo" width="64" height="33" />
        </Link>
      </footer>
    </>
  );
}

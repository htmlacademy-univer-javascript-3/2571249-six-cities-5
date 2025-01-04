import {ReactElement} from 'react';
import {Link} from 'react-router-dom';
import cn from 'classnames';

import {AppRoute, CITIES} from '../../const.ts';
import {City} from '../../models/city.ts';
import {useAppDispatch} from '../../hooks/use-app-dispatch.ts';
import {useAppSelector} from '../../hooks/use-app-selector.ts';
import {getActiveCity} from '../../store/offers-list/selectors.ts';
import {setActiveCity} from '../../store/offers-list/reducers.ts';


function CitiesList(): ReactElement {
  const cities = CITIES;
  const activeCity = useAppSelector(getActiveCity);
  const dispatch = useAppDispatch();

  const handleActiveCityChange = (city: City) => {
    dispatch(setActiveCity(city));
  };

  return (
    <ul className="locations__list tabs__list">
      {cities.map((city) => (
        <li
          className="locations__item"
          key={city.name}
          onClick={() => handleActiveCityChange(city)}
        >
          <Link
            to={AppRoute.Main}
            className={cn('locations__item-link tabs__item', {
              'tabs__item--active' : city.name === activeCity.name
            })}
          >
            <span>{city.name}</span>
          </Link>
        </li>
      ))}
    </ul>
  );
}

export default CitiesList;

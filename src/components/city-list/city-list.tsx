﻿import {ReactElement} from 'react';
import {Link} from 'react-router-dom';
import {useAppDispatch} from '../../hooks/use-app-dispatch.ts';
import {setActiveCityAction} from '../../store/actions.ts';
import {AppRoute, CITIES} from '../../const.ts';
import cn from 'classnames';
import {useAppSelector} from '../../hooks/use-app-selector.ts';
import {City} from '../../models/city.ts';


export default function CityList(): ReactElement {
  const cities = CITIES;
  const activeCity = useAppSelector((state) => state.activeCity);
  const dispatch = useAppDispatch();

  const handleActiveCityChange = (city: City) => {
    dispatch(setActiveCityAction(city));
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

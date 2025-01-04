import {ReactElement, useState} from 'react';
import cn from 'classnames';

import {SortingType} from '../../const.ts';
import {useAppSelector} from '../../hooks/use-app-selector.ts';
import {useAppDispatch} from '../../hooks/use-app-dispatch.ts';
import {getActiveSortingType} from '../../store/offers-list/selectors.ts';
import {setActiveSortingType} from '../../store/offers-list/reducers.ts';


function Sorting(): ReactElement {
  const [isOpen, setIsOpen] = useState(false);
  const activeSortingType = useAppSelector(getActiveSortingType);
  const dispatch = useAppDispatch();

  const handleSetActiveSortingType = (sortingType: SortingType): void => {
    dispatch(setActiveSortingType(sortingType));
    setIsOpen(false);
  };

  return (
    <form className="places__sorting" action="#" method="get">
      <span className="places__sorting-caption">Sort by&nbsp;</span>
      <span className="places__sorting-type" tabIndex={0} onClick={() => setIsOpen(!isOpen)}>
        {activeSortingType}
        <svg className="places__sorting-arrow" width={7} height={4}>
          <use xlinkHref="#icon-arrow-select"></use>
        </svg>
      </span>
      <ul className={cn('places__options places__options--custom', {'places__options--opened' : isOpen})}>
        {Object.values(SortingType).map((sortingType) => (
          <li
            key={sortingType}
            className={cn('places__option', {'places__option--active' : sortingType === activeSortingType})}
            tabIndex={0}
            onClick={() => handleSetActiveSortingType(sortingType)}
          >
            {sortingType}
          </li>
        ))}
      </ul>
    </form>
  );
}

export default Sorting;

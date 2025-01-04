import {ReactElement, useState} from 'react';
import {useAppSelector} from '../../hooks/use-app-selector.ts';
import {useAppDispatch} from '../../hooks/use-app-dispatch.ts';
import {SortingType} from '../../const.ts';
import {setActiveSortingTypeAction} from '../../store/actions.ts';
import cn from 'classnames';


export default function Sorting(): ReactElement {
  const [isOpen, setIsOpen] = useState(false);
  const activeSortingType = useAppSelector((state) => state.activeSortingType);
  const dispatch = useAppDispatch();

  const handleSetActiveSortingType = (sortingType: SortingType): void => {
    dispatch(setActiveSortingTypeAction(sortingType));
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

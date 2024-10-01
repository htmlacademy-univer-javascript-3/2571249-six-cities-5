import {Price} from '../price/price.tsx';
import {BookmarkButton} from '../bookmark-button/bookmark-button.tsx';


type PriceWrapperProps = {
  priceInEuros: number;
  isBookmarked: boolean;
}


export function PriceWrapper({priceInEuros, isBookmarked}: PriceWrapperProps) {
  return (
    <div className="place-card__price-wrapper">
      <Price priceInEuros={priceInEuros} />
      <BookmarkButton isActive={isBookmarked} />
    </div>
  );
}

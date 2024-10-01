import {PriceWrapper} from '../price-wrapper/price-wrapper.tsx';
import {Rating} from '../rating/rating.tsx';
import {PlaceTitle} from '../place-title/place-title.tsx';


type PlaceCardInfoProps = {
  priceInEuros: number;
  isBookmarked: boolean;
  rating: number;
  placeTitleProps: {
    placeName: string;
    placeType: string;
  };
}


export function PlaceCardInfo({priceInEuros, isBookmarked, rating, placeTitleProps}: PlaceCardInfoProps) {
  return (
    <div className="place-card__info">
      <PriceWrapper priceInEuros={priceInEuros} isBookmarked={isBookmarked}/>
      <Rating rating={rating}/>
      <PlaceTitle placeName={placeTitleProps.placeName} placeType={placeTitleProps.placeType}/>
    </div>
  );
}

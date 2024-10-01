import {Mark} from '../mark/mark.tsx';
import {ImageWrapper} from '../image-wrapper/image-wrapper.tsx';
import {PlaceCardInfo} from '../place-card-info/place-card-info.tsx';


type PlaceCardProps = {
  markContents?: string;
  imageSource: string;
  priceInEuros: number;
  isBookmarked: boolean;
  rating: number;
  placeTitleProps: {
    placeName: string;
    placeType: string;
  };
}


export function PlaceCard({markContents, imageSource, priceInEuros, isBookmarked, rating, placeTitleProps}: PlaceCardProps) {
  return (
    <article className="cities__card place-card">
      <Mark contents={markContents} />
      <ImageWrapper imageSource={imageSource} />
      <PlaceCardInfo
        priceInEuros={priceInEuros}
        isBookmarked={isBookmarked}
        rating={rating}
        placeTitleProps={placeTitleProps}
      />
    </article>
  );
}

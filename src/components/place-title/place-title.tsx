type PlaceTitleProps = {
  placeName: string;
  placeType: string;
}


export function PlaceTitle({placeName, placeType}: PlaceTitleProps) {
  return (
    <>
      <h2 className="place-card__name">
        <a href="#">{placeName}</a>
      </h2>
      <p className="place-card__type">{placeType}</p>
    </>
  );
}

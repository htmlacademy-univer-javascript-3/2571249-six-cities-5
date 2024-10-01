type PriceProps = {
  priceInEuros: number;
}

export function Price({priceInEuros}: PriceProps) {
  return (
    <div className="place-card__price">
      <b className="place-card__price-value">&euro;{priceInEuros}</b>
      <span className="place-card__price-text">&nbsp;&#47;&nbsp;night</span>
    </div>
  );
}

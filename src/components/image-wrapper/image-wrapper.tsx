type ImageWrapperProps = {
  imageSource: string;
}

export function ImageWrapper({imageSource}: ImageWrapperProps) {
  return (
    <div className="cities__image-wrapper place-card__image-wrapper">
      <a href="#">
        <img className="place-card__image" src={imageSource} width={260} height={200} alt="Place image"/>
      </a>
    </div>
  );
}

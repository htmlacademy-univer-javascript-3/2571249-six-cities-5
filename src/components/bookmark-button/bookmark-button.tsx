type BookmarkButtonProps = {
  isActive: boolean;
}


export function BookmarkButton({isActive}: BookmarkButtonProps) {
  return (
    <button className={
      isActive ?
        'place-card__bookmark-button place-card__bookmark-button--active button' :
        'place-card__bookmark-button button'
    }
    type="button"
    >
      <svg className="place-card__bookmark-icon" width={18} height={19}>
        <use xlinkHref="#icon-bookmark"></use>
      </svg>
      <span className="visually-hidden">To bookmarks</span>
    </button>
  );
}

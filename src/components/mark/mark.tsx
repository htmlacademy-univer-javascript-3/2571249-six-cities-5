type MarkProps = {
  contents?: string;
}


export function Mark({contents}: MarkProps) {
  if (!contents) {
    return null;
  }
  return (
    <div className="place-card__mark">
      <span>{contents}</span>
    </div>
  );
}

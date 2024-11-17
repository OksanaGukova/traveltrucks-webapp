import sprite from "../../../public/svg/icons.svg";
import css from './StarRating.module.css'

const StarRating = ({ rating = 0 }) => {
  const stars = Array(5)
    .fill(0)
    .map((_, index) => (
      <svg key={index} className={css.star}>
        <use
          href={`${sprite}#${
            index < Math.round(rating)
              ? "icon-Star-Pressed-1" 
              : "icon-Star-1Default-1" 
          }`}
        ></use>
      </svg>
    ));
  return <div className={css.starContainer}>{stars}</div>;
};


export default StarRating
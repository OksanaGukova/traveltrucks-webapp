import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react"; // Додаємо useEffect
import css from "./Camper.module.css";
import sprite from "../../../public/svg/icons.svg";

function Camper({
  id,
  gallery,
  name,
  price,
  rating,
  location,
  description,
  equipment,
  reviewsCount,
}) {
  const navigate = useNavigate();
  const [isFavorite, setIsFavorite] = useState(false); // Стан обраного кемпера


  useEffect(() => {
    const favorites = JSON.parse(localStorage.getItem("favorites")) || [];
    setIsFavorite(favorites.includes(id));
  }, [id]);


  const handleFavoriteToggle = () => {
    const favorites = JSON.parse(localStorage.getItem("favorites")) || [];

    if (isFavorite) {
 
      const updatedFavorites = favorites.filter((favId) => favId !== id);
      localStorage.setItem("favorites", JSON.stringify(updatedFavorites));
    } else {
     
      favorites.push(id);
      localStorage.setItem("favorites", JSON.stringify(favorites));
    }

    setIsFavorite((prev) => !prev);
  };

  const handleShowMore = () => {
    navigate(`/catalog/${id}`);
  };

  const availableEquipment = Object.entries(equipment).filter(
    ([_, value]) => value
  );

  return (
    <div className={css.container}>
      <div>
        <img
          className={css.img}
          src={gallery[0]?.original}
          alt={name}
          width={292}
          height={320}
        />
      </div>
      <div className={css.descriptionContainer}>
        <ul className={css.textContainer}>
          <p className={css.text}>{name}</p>
          <div className={css.priceContainer}>
            <p className={css.text}>€{price.toFixed(2)}</p>
            <button className={css.svgButton} onClick={handleFavoriteToggle}>
              <svg className={css.svg}>
                <use
                  href={`${sprite}#${
                    isFavorite ? "icon-Heart-1pressed" : "icon-Heart-1Default"
                  }`}
                ></use>
              </svg>
            </button>
          </div>
        </ul>
        <ul className={css.smallTextContainer}>
          <svg className={css.starSvg}>
            <use href={`${sprite}#icon-Star-1Default-1`}></use>
          </svg>
          <p className={css.smallText}>
            {rating} ({reviewsCount} reviews)
          </p>
          <p className={css.smallText}>{location}</p>
        </ul>
        <p className={css.description}>{description.split(".")[0]}.</p>

        {availableEquipment.length > 0 && (
          <div>
            <ul className={css.equipmentContainer}>
              {availableEquipment.map(([key]) => (
                <li className={css.equipment} key={key}>
                  {key}
                </li>
              ))}
            </ul>
          </div>
        )}
        <button className={css.button} onClick={handleShowMore}>
          Show more
        </button>
      </div>
    </div>
  );
}

export default Camper;

import { useNavigate } from "react-router-dom";
import css from "./Camper.module.css";

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

  const availableEquipment = Object.entries(equipment).filter(
    ([_, value]) => value
  );

  const handleShowMore = () => {
    navigate(`/catalog/${id}`);
  };

  return (
    <>
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
            <p className={css.text}> {price}</p>
          </ul>
          <ul className={css.smallTextContainer}>
            <p className={css.smallText}>
              {" "}
              {rating} ({reviewsCount} reviews)
            </p>
            <p className={css.smallText}> {location}</p>
          </ul>
          <p className={css.description}> {description}</p>

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
    </>
  );
}

export default Camper;

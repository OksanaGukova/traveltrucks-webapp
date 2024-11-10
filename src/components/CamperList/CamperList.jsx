import { useSelector } from "react-redux";
import Camper from "../Camper/Camper.jsx";
import { useState } from "react";
import css from './CamperList.module.css'

function CamperList() {
  const filteredCampers = useSelector((state) => state.filters.filteredCampers);
  const [visibleCount, setVisibleCount] = useState(4);


  const handleShowMore = () => {
    setVisibleCount((prevCount) => prevCount + 4); 
  };

  return (
    <div>
      <ul className={css.list}>
        {filteredCampers.slice(0, visibleCount).map((camper) => (
          <li className={css.container} key={camper.id}>
            <Camper
              id={camper.id}
              gallery={camper.gallery}
              name={camper.name}
              price={camper.price}
              rating={camper.rating}
              location={camper.location}
              description={camper.description}
              equipment={{
                AC: camper.AC,
                kitchen: camper.kitchen,
                TV: camper.TV,
                bathroom: camper.bathroom,
                radio: camper.radio,
                refrigerator: camper.refrigerator,
                microwave: camper.microwave,
                gas: camper.gas,
                water: camper.water,
              }}
              reviewsCount={camper.reviews.length}
            />
          </li>
        ))}
      </ul>
      <div className={css.buttonContainer}>
        {visibleCount < filteredCampers.length && (
          <button className={css.button} onClick={handleShowMore}>
            Load more
          </button>
        )}
      </div>
    </div>
  );
  
}

export default CamperList;

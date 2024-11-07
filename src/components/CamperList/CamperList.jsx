import { useSelector } from "react-redux";

import Camper from "../Camper/Camper.jsx";


function CamperList() {

  const filteredCampers = useSelector((state) => state.filters.filteredCampers);

  const handleShowMore = () => {
    
  };


  return (
    <div>
      <ul>
        {filteredCampers.map((camper) => (
          <li key={camper.id}>
            <Camper
              url={camper.url} 
              name={camper.name} 
              price={camper.price} 
              reviews={camper.reviews}
              location={camper.location}
              description={camper.description}
            />
          </li>
        ))}
      </ul>
      <button onClick={handleShowMore}>Show more</button>
    </div>
  );
}

export default CamperList;
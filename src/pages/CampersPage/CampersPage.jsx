import { Suspense, useEffect, useState } from "react";
import { NavLink, Outlet, useLocation, useParams } from "react-router-dom";
import { fetchCamperDetails } from "../../apiServise/apiServise.js";

function CampersPage() {
  const campersId = useParams();
  const location = useLocation();

  const [selectedCamper, setSelectedCamper] = useState(
    location.state?.movie ?? ""
  );
  useEffect(() => {
    async function fetchDetails() {
      try {
        const { data } = await fetchCamperDetails(campersId);
        setSelectedCamper(data);
      } catch (error) {
        alert("Error fetching movie details");
      }
    }

    if (!selectedCamper) {
      fetchDetails();
    }
  }, [campersId, selectedCamper]);
  return (
    <div>
      <nav>
        <NavLink to="features">Features</NavLink>
        <NavLink to="reviews">Reviews</NavLink>
      </nav>
      <Suspense fallback={<div>Loading subpage...</div>}>
        <Outlet />
      </Suspense>
    </div>
  );
}

export default CampersPage;

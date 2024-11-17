import { Suspense, useEffect } from "react";
import { NavLink, Outlet, useParams } from "react-router-dom";
import { fetchCamperDetails } from "../../apiServise/apiServise.js";
import css from "./CamperDetailsPage.module.css";
import Logo from "../../components/Logo/Logo.jsx";
import { useDispatch, useSelector } from "react-redux";
import sprite from "../../../public/svg/icons.svg";

function CamperDetailsPage() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const selectedCamper = useSelector((state) => state.campers.details);

  useEffect(() => {
    if (id) {
      dispatch(fetchCamperDetails(id));
    }
  }, [id, dispatch]);

  return (
    <div className={css.body}>
      <div className={css.header}>
        <Logo />
        <div className={css.navContainer}>
          <NavLink className={css.nav} to="/">
            Home
          </NavLink>
          <NavLink className={css.nav} to="/catalog">
            Catalog
          </NavLink>
        </div>
      </div>
      <div className={css.bodyContainer}>
        {selectedCamper ? (
          <div>
            <p className={css.name}>{selectedCamper.name}</p>
            <ul>
              <div className={css.starContainer}>
                <svg className={css.starSvg}>
                  <use href={`${sprite}#icon-Star-Pressed-1`}></use>
                </svg>
                <p className={css.rating}>
                  {selectedCamper.rating} ({selectedCamper.reviews?.length || 0}{" "}
                  reviews)
                </p>
              </div>
              <p className={css.location}>{selectedCamper.location}</p>
            </ul>
            <p className={css.price}>€{selectedCamper.price.toFixed(2)}</p>
            <div className={css.imgContainer}>
              {selectedCamper.gallery?.map((image, index) => (
                <img
                  className={css.img}
                  key={index}
                  src={image.original}
                  alt={`Image ${index + 1}`}
                  style={{ width: "292px", height: "312px" }}
                />
              ))}
            </div>
            <p className={css.description}>{selectedCamper.description}</p>
          </div>
        ) : (
          <p>Loading camper details...</p>
        )}

        <nav className={css.navLink}>
          <NavLink
            className={({ isActive }) =>
              isActive ? `${css.link} ${css.active}` : css.link
            }
            to="features"
          >
            Features
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              isActive ? `${css.link} ${css.active}` : css.link
            }
            to="reviews"
          >
            Reviews
          </NavLink>
        </nav>
        <Suspense fallback={<div>Loading subpage...</div>}>
          <Outlet />
        </Suspense>
      </div>
    </div>
  );
}

export default CamperDetailsPage;

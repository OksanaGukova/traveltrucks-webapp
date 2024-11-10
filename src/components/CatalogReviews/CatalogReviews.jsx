import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchCamperDetails } from "../../apiServise/apiServise.js";
import css from './CatalogReviews.module.css'
import Form from "../Form/Form.jsx";


function CatalogRewiews() {

  const { id } = useParams();
  const dispatch = useDispatch();
  const selectedCamper = useSelector((state) => state.campers.details);

  useEffect(() => {
    if (id) {
      dispatch(fetchCamperDetails(id));
    }
  }, [id, dispatch]);
  return (
    <div className={css.container}>
      <div className={css.reviewsContainer}>
        {selectedCamper.reviews.map((review, index) => (
          <div key={index} className={css.review}>
            <p className={css.reviewerName}>{review.reviewer_name}</p>
            <div className={css.reviewerRating}>{review.reviewer_rating}</div>
            <p className={css.comment}>{review.comment}</p>
          </div>
        ))}
      </div>
      <div className={css.formContainer}>
<Form/>
      </div>
    </div>
  );
}

export default CatalogRewiews
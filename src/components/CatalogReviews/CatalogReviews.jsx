import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchCamperDetails } from "../../apiServise/apiServise.js";
import css from './CatalogReviews.module.css'
import Form from "../Form/Form.jsx";
import StarRating from "../StarRating/StarRating.jsx";


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
        {Array.isArray(selectedCamper.reviews) &&
        selectedCamper.reviews.length > 0 ? (
          selectedCamper.reviews.map((review, index) => (
            <div key={index} className={css.review}>
              <p className={css.reviewerName}>{review.reviewer_name}</p>
              <div className={css.reviewerRating}>
                <StarRating rating={Number(review.reviewer_rating)} />
              </div>
              <p className={css.comment}>{review.comment}</p>
            </div>
          ))
        ) : (
          <p>No reviews available.</p>
        )}
      </div>
      <div className={css.formContainer}>
        <Form />
      </div>
    </div>
  );
  
}


export default CatalogRewiews
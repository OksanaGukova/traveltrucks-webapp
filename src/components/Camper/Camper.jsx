import React from "react";
import { useDispatch } from "react-redux";

function Camper({ url, name, price, reviews, location, description }) {
  return (
    <div>
      <img src={url} alt={name} />
      <h2>{name}</h2>
      <p>Price: ${price}</p>
      <p>Location: {location}</p>
      <p>{description}</p>

      <h3>Reviews:</h3>
      <ul>
        {reviews.map((review, index) => (
          <li key={index}>
            <h4>{review.reviewer_name}</h4>
            <p>Rating: {review.reviewer_rating}</p>
            <p>{review.comment}</p>
          </li>
        ))}
      </ul>

      <div>
        {/* Example SVG icons, replace with actual paths */}
        <svg>
          <use href={""}></use>
        </svg>
        <svg>
          <use href={""}></use>
        </svg>
        <svg>
          <use href={""}></use>
        </svg>
        <svg>
          <use href={""}></use>
        </svg>
      </div>

      <button>Show more</button>
    </div>
  );
}

export default Camper;

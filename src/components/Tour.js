import React, { useState } from "react";

const Tour = ({ tour, onDelete }) => {
  const [showMore, setShowMore] = useState(false);

  const toggleDescription = () => {
    setShowMore(!showMore);
  };

  return (
    <div className="single-tour">
      <img src={tour.image} alt={tour.name} />
      <p>Id: {tour.id}</p>
      <p>Name: {tour.name}</p>
      <p className="tour-price">Price: ${tour.price}</p>
        <p className="tour-info">
          {showMore ? tour.info : `${tour.info.substring(0, 200)}...`}
           </p>
      <button onClick={toggleDescription}>
        {showMore ? "See Less" : "Show More"}
      </button>
      <button className="delete-btn" onClick={() => onDelete(tour.id)}>
        Remove
      </button>
    </div>
  );
};

export default Tour;
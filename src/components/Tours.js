import React, { useState, useEffect } from "react";
import toursData from "../data/toursData";
import Tour from "./Tour";
import Loading from "./Loading";

const Tours = () => {
  const [dataArr, setDataArr] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate fetching data
    setTimeout(() => {
      setDataArr(toursData);
      setLoading(false);
    }, 1000);
  }, []);

  const handleDelete = (id) => {
    setDataArr(dataArr.filter((tour) => tour.id !== id));
  };

  if (loading) {
    return <Loading />;
  }

  if (dataArr.length === 0) {
    return (
      <div className="empty-data">
        <h2>No More Tours</h2>
        <button className="btn" onClick={() => window.location.reload()}>
          Refresh
        </button>
      </div>
    );
  }

  return (
    <div className="tours">
      {dataArr.map((tour) => (
        <Tour key={tour.id} tour={tour} onDelete={handleDelete} />
      ))}
    </div>
  );
};

export default Tours;
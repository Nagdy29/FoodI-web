import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
export const Detials = () => {
  const [detials, setDetails] = useState(null);
  let prams = useParams();
  async function moviedetails(image) {
    let response = await fetch(`/menu.json/${image}`);
    let data = await response.json();
    setDetails(data);
  }
  useEffect(() => {
    moviedetails(prams._id);
  }, []);

  return (
    <>
      <div>
        {detials ? (
          <div className="row my-5">
            <div className="col-md-3">
              <img className="w-100" src={`/menu.json/image`} alt="" />
            </div>
            <div className="col-md-9 my-5">
              <h2>{detials.title}</h2>
              <p>{detials.overview}</p>
              <ul>
                <li className="my-2">budget: {detials.budget} </li>
                <li className="my-2">vote_average: {detials.vote_average} </li>
                <li className="my-2">vote_count: {detials.vote_count} </li>
              </ul>
            </div>
          </div>
        ) : null}
      </div>
    </>
  );
};

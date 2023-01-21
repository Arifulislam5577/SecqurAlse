import React from "react";
import { Link } from "react-router-dom";

const PersonModel = ({ _id, location, date, time }) => {
  return (
    <Link to={`/${_id}`}>
      <figure className="p-3 mb-2 bg-gray-300 hover:bg-gray-400 cursor-pointer">
        <div className="flex items-center justify-between">
          <p className="text-sm">
            {_id} : {location}
          </p>
          <p className="text-sm">
            {date} {time}
          </p>
        </div>
        <p className="text-sm">Person detected.</p>
      </figure>
    </Link>
  );
};

export default PersonModel;

import React from "react";
import { Link } from "react-router-dom";

const ServiceItem = ({ data }) => {
  const { _id, slugTitle, category, developerInfo, price, serviceImage } = data;

  return (
    <div className="card w-full bg-base-100 shadow-xl ">
      <Link to={`/services/slug/${_id}`}>
        <div class="group block ">
          <div class="relative h-72 ">
            <img
              src={serviceImage?.img1}
              alt=""
              class="absolute  inset-0 w-full h-full object-cover object-center  opacity-100 "
            />
          </div>
        </div>

        <div className="card-body bg-state-300">
          <div className="flex">
            <div className="avatar-group -space-x-6">
              <div className="avatar">
                <div className="w-12">
                  <img src={developerInfo?.photoURL} alt="" />
                </div>
              </div>
            </div>
            <div className="pl-4">
              <h3 className="text-left font-bold">
                {developerInfo?.displayName}
              </h3>
              <h2 className="font-medium">{category?.name}</h2>
            </div>
          </div>
          <div>
            <p className="text-left font-medium font-xl my-3">{slugTitle}</p>
          </div>
          <div className="card-actions justify-between items-end border-t-2 pt-4">
            <div>
              <div className="rating flex items-center">
                <input
                  type="radio"
                  name="rating-1"
                  className="mask text-sm mask-star base-400 bg-warning"
                />
              </div>
            </div>
            <div className="flex">
              <h2 className="text-sm flex items-center font-medium pt-1 pr-1">
                STARTING AT
              </h2>
              <h3 className="text-2xl font-semibold">${price}</h3>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default React.memo(ServiceItem);

import React, { useState } from "react";
import GunModal from "../Modal/GunModal";

const GunCard = ({ gun, AddToCart }) => {
  const { action, bullet, capacity, category, img, name, price } = gun;

  const [info, setInfo] = useState({});
  return (
    <div>
      <div className="card w-full bg-base-100 shadow-2xl ">
        <figure>
          <img src={img} className="w-96 h-60 p-2 rounded-3xl" alt="Shoes" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">
            {name}
            <div className="badge badge-secondary">NEW</div>
          </h2>
          <div className="card-actions justify-end">
            <div className="badge badge-outline">{action}</div>
            <div className="badge badge-outline">{category}</div>
            <div className="badge badge-outline">{bullet}</div>
            <div className="badge badge-outline">{capacity}</div>
            <div className="badge badge-outline bg-green-600 font-semibold text-white text-lg p-3">
              ${price}
            </div>
          </div>
          <div className="flex justify-between">
            <button
              onClick={() => AddToCart()}
              className="btn btn-primary btn-sm"
            >
              Add To Cart
            </button>

            <label
              onClick={() => setInfo(gun)}
              htmlFor="my-modal-3"
              className="btn  btn-success btn-sm text-gray-200"
            >
              Details
            </label>
          </div>
        </div>
        {info && <GunModal info={info} setInfo={setInfo}></GunModal>}
      </div>
    </div>
  );
};

export default GunCard;

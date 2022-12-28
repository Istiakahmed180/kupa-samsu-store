import React from "react";

const GunModal = ({ info, setInfo }) => {
  const { action, bullet, capacity, category, img, name, price } = info;
  return (
    <div>
      <input type="checkbox" id="my-modal-3" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box relative">
          <label
            onClick={() => setInfo(null)}
            htmlFor="my-modal-3"
            className="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <h3 className="text-center  text-lg font-bold text-orange-600">
            {name}
          </h3>
          <img
            src={img}
            className="w-96 h-60 mt-5 mx-auto rounded-2xl"
            alt=""
          />
          <p className="text-lg font-semibold mt-5 ">Category: {category}</p>
          <p className="">Action: {action}</p>
          <p className="">Bullet: {bullet}</p>
          <p className="">Capacity: {capacity}</p>
          <p className="text-center font-bold text-xl text-orange-600">
            Price: ${price}
          </p>
        </div>
      </div>
    </div>
  );
};

export default GunModal;

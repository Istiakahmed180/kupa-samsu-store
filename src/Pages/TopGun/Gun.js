import React, { useEffect, useState } from "react";
import GunCard from "./GunCard";

const Gun = ({ AddToCart, setGuns, Guns }) => {
  useEffect(() => {
    fetch("https://raw.githubusercontent.com/mir-hussain/guns/main/data.json")
      .then((res) => res.json())
      .then((data) => setGuns(data));
  }, []);

  return (
    <div>
      <h1 className="text-center text-3xl mt-5 font-semibold">
        Welcome To Copa Samsu Store
      </h1>
      <p className="text-center px-10 mt-3">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Est velit
        totam cum, quidem assumenda eaque doloribus harum ducimus? Perferendis
        odit recusandae dicta ab iste tempora voluptatibus est numquam! Ad nihil
        reiciendis dolor repudiandae doloremque totam provident necessitatibus,
        ex illum, excepturi dolorum quibusdam fugiat ipsa expedita quas
        blanditiis odit animi illo.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 my-10 mx-10">
        {Guns.map((gun) => (
          <GunCard gun={gun} key={gun.id} AddToCart={AddToCart}></GunCard>
        ))}
      </div>
    </div>
  );
};

export default Gun;

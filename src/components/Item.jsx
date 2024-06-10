import React from "react";

const Item = ({ itemImg, price, title, desc }) => {
  return (
    <>
      <div className="menu-item">
        <img src={itemImg} alt="" className="img" />
        <div className="item-info">
          <header>
            <h5> {title} </h5>
            <span className="item-price">{price}$</span>
          </header>
          <p className="item-text"> {desc} </p>
        </div>
      </div>
    </>
  );
};

export default Item;

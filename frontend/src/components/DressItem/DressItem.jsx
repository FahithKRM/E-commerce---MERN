import React, { useContext } from "react";
import "./DressItem.css";
import { assets } from "../../assets/assets";
import { StoreContext } from "../../context/StoreContext";

const DressItem = ({ id, name, price, description, image }) => {
    const {cartItems, addToCart, removeFromCart, url} = useContext(StoreContext);

  return (
    <div className="dress-item">
      <div className="dress-item-img-container">
        <img className="dress-item-image" src={url+"/images/"+image} alt="" />
        {!cartItems[id]
            ? <img className="add" onClick={() => addToCart(id)} src={assets.add_icon_white} alt="" />
            : <div className="dress-item-counter">
                <img onClick={() => removeFromCart(id)} src={assets.remove_icon_red} alt="" />
                <p>{cartItems[id]}</p>
                <img onClick={() => addToCart(id)} src={assets.add_icon_green} alt="" />
            </div>
        }
      </div>
      <div className="dress-item-info">
        <div className="dress-item-name-rating">
          <p>{name}</p>
          <img src={assets.rating_starts} alt="" />
        </div>
        <p className="dress-item-desc">{description}</p>
        <p className="dress-item-price">$ {price}</p>
      </div>
    </div>
  );
};

export default DressItem;

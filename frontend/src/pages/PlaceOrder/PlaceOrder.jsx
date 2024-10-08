import React, { useContext, useEffect, useState } from "react";
import "./PlaceOrder.css";
import { StoreContext } from "../../context/StoreContext";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const PlaceOrder = () => {
  const {getTotalCartAmount, token, dress_list, cartItems, url} = useContext(StoreContext);

  const [data, setData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    street: "",
    city: "",
    district: "",
    zipcode: "",
    country: "",
    phone: ""
  });

  const onChangeHandler = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setData(data => ({...data, [name]:value}));
  };

  const placeOrder = async (event) => {
    event.preventDefault();
    let orderItems = [];
    dress_list.map((item) => {
      if(cartItems[item._id] > 0){
        let itemInfo = item;
        itemInfo["quantity"] = cartItems[item._id];
        orderItems.push(itemInfo);
      }
    });
    let orderData = {
      address: data,
      items: orderItems,
      amount: getTotalCartAmount() + 5,
    }
    let response = await axios.post(url+"/api/order/place", orderData, {headers:{token}});
    if(response.data.success){
      const {session_url} = response.data;
      window.location.replace(session_url);
    }
    else{
      alert("Error");
    }
  };

  const navigate = useNavigate();

  useEffect(() => {
    if(!token){
      navigate('/cart');
    }
    else if(getTotalCartAmount() === 0){
      navigate('/cart');
    }
  }, [token]);
  
  return (
    <form onSubmit={placeOrder} className="place-order">
        <div className="place-order-left">
          <p className="title">Delivery Information</p>
          <div className="multi-fields">
            <input name="firstname" onChange={onChangeHandler} value={data.firstname} type="text" placeholder="First Name" required />
            <input name="lastname" onChange={onChangeHandler} value={data.lastname} type="text" placeholder="Last Name" required />
          </div>
          <input name="email" onChange={onChangeHandler} value={data.email} type="email" placeholder="Email address" required />
          <input name="street" onChange={onChangeHandler} value={data.street} type="text" placeholder="Street" required />
          <div className="multi-fields">
            <input name="city" onChange={onChangeHandler} value={data.city} type="text" placeholder="City" required />
            <input name="district" onChange={onChangeHandler} value={data.district} type="text" placeholder="District" required />
          </div>
          <div className="multi-fields">
            <input name="zipcode" onChange={onChangeHandler} value={data.zipcode} type="text" placeholder="Zip code" required />
            <input name="country" onChange={onChangeHandler} value={data.country} type="text" placeholder="Country" required />
          </div>
          <input name="phone" onChange={onChangeHandler} value={data.phone} type="text" placeholder="Phone" required />
        </div>
        <div className="place-order-right">
          <div className="cart-total">
            <h2>Cart Totals</h2>
            <div>
            <div className="cart-total-details">
              <p>Subtotal</p>
              <p>$ {getTotalCartAmount() }</p>
            </div>
            <hr />
            <div className="cart-total-details">
              <p>Delivery Fee</p>
              <p>$ {getTotalCartAmount() === 0 ? 0 : 5}</p>
            </div>
            <hr />
            <div className="cart-total-details">
              <b>Total</b>
              <b>$ {getTotalCartAmount() === 0 ? 0 : getTotalCartAmount() + 5}</b>
            </div>
            </div>
            <button type="submit">
              PROCEED TO PAYMENT
            </button>
          </div>
        </div>
      </form>
  );
};

export default PlaceOrder;

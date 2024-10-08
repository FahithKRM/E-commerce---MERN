import React, { useContext } from 'react';
import "./DressDisplay.css";
import { StoreContext } from '../../context/StoreContext';
import DressItem from '../DressItem/DressItem';

const DressDiplay = ({ category }) => {
  const { dress_list } = useContext(StoreContext);

  return (
    <div className='dress-display' id='dress-display'>
      <h2>Stylish dresses for you</h2>
      <div className="dress-display-list">
        {dress_list.map((item, index) => {
          if (category === "All" || category === item.category) {
            return (
              <DressItem key={index} id={item._id} name={item.name} description={item.description} price={item.price} image={item.image} />
            )
          }
        })}
      </div>
    </div>
  )
}

export default DressDiplay

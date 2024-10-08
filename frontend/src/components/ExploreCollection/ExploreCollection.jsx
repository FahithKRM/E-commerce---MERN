import React from 'react';
import './ExploreCollection.css';
import {collection_list} from '../../assets/assets';

const ExploreCollection = ({category, setCategory}) => {
  return (
    <div className='explore-collection' id='explore-collection'>
      <h1>Explore our collection</h1>
      <p className='explore-collection-text'>Discover a curated selection of men's fashion essentials and statement pieces, each crafted with quality materials and attention to detail. Elevate your wardrobe with pieces that reflect your unique style.</p>
      <div className="explore-collection-list">
        {collection_list.map((item, index) => {
          return(
            <div onClick={() => setCategory(prev => prev === item.collection_name ? "All" : item.collection_name)} key={index} className="explore-collection-list-item">
              <img className={category === item.collection_name ? "active" : ""} src={item.collection_image} alt="" />
              <p>{item.collection_name}</p>
            </div>
          )
        })}
      </div>
      <hr />
    </div>
  )
}

export default ExploreCollection

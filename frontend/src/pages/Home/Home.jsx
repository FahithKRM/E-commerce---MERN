import React, { useState } from 'react';
import './Home.css';
import Header from '../../components/Header/Header';
import ExploreCollection from '../../components/ExploreCollection/ExploreCollection';
import DressDiplay from '../../components/DressDisplay/DressDiplay';
import About from '../../components/About/About';

const Home = () => {
  const [category, setCategory] = useState("All");

  return (
    <div className='home'>
      <Header />
      <ExploreCollection category={category} setCategory={setCategory} />
      <DressDiplay category={category} />
      <About />
    </div>
  )
}

export default Home

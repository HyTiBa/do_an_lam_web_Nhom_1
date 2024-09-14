import React, { useState } from 'react'
import './home.css'
import Header from '../../components/header/header'
import Exploremenu from '../../components/exploremenu/exploremenu'
import FoodDisplay from '../../components/food display/fooddisplay'
const Home = () => {

  const [category,setCategory] = useState("All")

  return (
    <div>
      <Header />
      <Exploremenu category={category} setCategory={setCategory}/>
      <FoodDisplay category={category}/>
    </div>
  )
}

export default Home

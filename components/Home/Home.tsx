import React from 'react'
import Hero from './Hero/Hero'
import AppartmentType from './Appartmenttype/AppartmentType'
import Properties from '@/Properties/Properties'
import CityProperties from './CityProperties/CityProperties'
import BuildingFeature from './BuildingFeature/BuildingFeature'
import Review from './Review/Review'
import Blog from './Blog/Blog'




const Home = () => {
  return (
    <div className="overflow-hidden">
        <Hero />
        <AppartmentType />
        <Properties />
        <CityProperties />
        <BuildingFeature />
        <Review />
        <Blog />
     
    </div>
  )
}

export default Home
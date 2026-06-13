import React from 'react'
import Navbar from './Navbar'
import Innerbox from './Innerbox'
import Cards from './Cards'

const Section1 = () => {
  return (
    <div className="min-h-screen w-full bg-blue-950 ">
      <Navbar/>
      <div className="flex justify-center items-center">
      <Innerbox/>
      </div>
      
    </div>
  )
}

export default Section1

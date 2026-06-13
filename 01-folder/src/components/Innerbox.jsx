import React from 'react'
import Cards from './Cards'

const Innerbox = () => {
  return (
   
      <div className="flex flex-nowrap overflow-x-auto justify-between items-center bg-blue-800 m-4 p-10">
      <Cards/>
      <Cards/>
      <Cards/>
      <Cards/>
      <Cards/>
      <Cards/>
      </div>
   
  )
}

export default Innerbox

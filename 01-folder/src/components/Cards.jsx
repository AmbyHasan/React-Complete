import React from 'react'
import Btn from './Btn'

const Cards = () => {
  return (
    <div className="w-1/3 h-[70vh] m-2 bg-white rounded-lg shadow-lg p-4 shrink-0" >
      <h3 className="text-lg font-bold mb-2">Card Title</h3>
      <p className="text-gray-600">Card content goes here</p>
      <Btn/>
    </div>
  )
}

export default Cards

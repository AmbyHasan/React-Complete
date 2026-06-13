import React from 'react'

const Navbar = () => {
  return (
    <div className=" text-sm font-bold  text-black bg-blue-500 flex justify-between items-center " >
        <span className="rounded-full bg-red-700 text-yellow-300 font-bold px-2 py-2 m-2">
            Amber Hasan
        </span>
      <ul className="flex justify-between items-center px-4 py-4">
       <li className="hover:text-yellow-300 cursor-pointer m-2">Home</li>
       <li className="hover:text-yellow-300 cursor-pointer m-2">About</li>
       <li className="hover:text-yellow-300 cursor-pointer m-2">Contact</li>
       <li className="hover:text-yellow-300 cursor-pointer m-2">Feedback</li>
       <li className="hover:text-yellow-300 cursor-pointer m-2">Help</li>
      </ul>
    </div>
  )
}

export default Navbar

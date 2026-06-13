import React from 'react'

const Btn = () => {
    function func(){
        alert("Button clicked");
    }
  return (
    <div className="bg-amber-400 rounded-full p-3 m-2 cursor-pointer" onClick={func}>
      Click me
    </div>
  )
}

export default Btn

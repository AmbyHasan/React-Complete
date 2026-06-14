import { useState } from 'react'

import './App.css'
import './index.css'
import Section1 from './components/Section1'
import Section2 from './components/Section2'

function App() {
  const [count, setCount] = useState(0)
  localStorage.setItem("user" , "Amber");
  let user= localStorage.getItem("user");
  console.log(user);
  return (
    <>
     <Section1/>
     <Section2/>


    
    </>
  )
}

export default App

import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Counter from './Counter';
import Team from './Team';
import Users from './Users';
import Friends from './Friends';


function App() {
function handleClick(){
  console.log("button clicked");
}

function addSum(sum){
  console.log(sum);
}


  return (
   <div>
    <Friends></Friends>
    <Counter></Counter>
    <Team></Team>
    <Users></Users>
    <button onClick={handleClick}>Click me</button>
    <button onClick={()=>{console.log("clicked")}}>Click me</button>
    <button onClick={()=>addSum(5)}>Click me</button>
   </div>
  )
}

export default App

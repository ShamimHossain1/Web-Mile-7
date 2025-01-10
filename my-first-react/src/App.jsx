import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>Hello world</h1>
      <Developer></Developer>
      <Device name ="laptop"></Device>
    </>
  )
}

function Developer() {
  const developerStyle = {
    backgroundColor: 'lightblue',
    padding: '20px',
    border: '1px solid black',
    borderRadius: '10px',
    width: '50%',
    margin: '20px auto'

  }
  return (
    <div style={developerStyle}>
      <h1>Developer</h1> 
    </div>
  )
}

function Device(props){
  console.log(props);
  return <h2>This device is: {props.name}</h2>
}


export default App

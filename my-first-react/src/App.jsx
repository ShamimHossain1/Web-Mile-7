import { useState } from 'react'
import './App.css'
import Todo from './Todo'
import Actor from './Actor'
import Singer from './Singer'

function App() {
  const [count, setCount] = useState(0)

  const actors = ['rock', 'john cena', 'michael jackson'];
  const singers = [
    { name: 'arjit sing', age: 20 },
    { name: 'honey singh', age: 40 },
    { name: 'atif ashlam', age: 50 }
  ];

  return (
    <>
      {/* <h1>Hello world</h1>
      <Developer></Developer>
      <Device name ="laptop"></Device> */}

      {/* <Todo task="learn react"></Todo>
      <Todo task="learn JSX"></Todo> */}

      <Actor name="Sakib Khan"></Actor>
      {
        actors.map(actor => <Actor name={actor}></Actor>)
      }

      

    </>
  )
}

// function Developer() {
//   const developerStyle = {
//     backgroundColor: 'lightblue',
//     padding: '20px',
//     border: '1px solid black',
//     borderRadius: '10px',
//     width: '50%',
//     margin: '20px auto'

//   }
//   return (
//     <div style={developerStyle}>
//       <h1>Developer</h1> 
//     </div>
//   )
// }

// function Device(props){
//   console.log(props);
//   return <h2>This device is: {props.name}</h2>
// }


export default App

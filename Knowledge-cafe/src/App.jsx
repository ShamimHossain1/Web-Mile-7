
import { useState } from 'react'
import Blogs from './Components/Blogs/Blogs'
import Bookmarks from './Components/Bookmarks/Bookmarks'
import Header from './Components/Header'

function App() {

  const [bookMark, setBookMark] = useState([]);
  const [readTime, setReadTime] = useState(0);

  return (
    <div className='md:mx-80 mx-5'>
      <Header></Header>
      <div className='md:flex'>
        <Blogs setReadTime={setReadTime} readTime={readTime}></Blogs>
        <Bookmarks readTime={readTime} ></Bookmarks>
        
        </div>
    </div>
  )
}

export default App

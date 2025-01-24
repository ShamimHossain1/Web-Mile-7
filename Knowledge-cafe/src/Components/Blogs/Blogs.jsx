import { useEffect } from "react";
import { useState } from "react";


const Blogs = () => {

    const [data, setData] = useState([]);

    useEffect(()=>{
        fetch('blogs.json')
        .then(response => response.json())
        .then(data => setData(data))  
    },[])

    const {author, author_img, cover, hastags, id, posted_data, reading_time, title} = data;

    return (
        <div>
          
          
            
        </div>
    );
};

export default Blogs;
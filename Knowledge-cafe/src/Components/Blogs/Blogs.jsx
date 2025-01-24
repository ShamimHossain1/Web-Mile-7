import { useEffect } from "react";
import { useState } from "react";
import Blog from "./Blog/Blog";


const Blogs = () => {

    const [data, setData] = useState([]);

    useEffect(()=>{
        fetch('blogs.json')
        .then(response => response.json())
        .then(data => setData(data))  
    },[])

    

    return (
        <div className="md:w-2/3">
         <Blog blog={data}></Blog>
        </div>
    );
};

export default Blogs;
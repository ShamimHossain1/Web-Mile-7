
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBookmark } from '@fortawesome/free-solid-svg-icons';
import PropTypes from 'prop-types';
const Blog = ({blog, setReadTime,readTime,bookMark, setBookMark}) => {
    const {author, author_img, cover, hashtags, posted_date, reading_time, title} = blog;
    const handleRead = () => {
      const extractedTime = parseInt(reading_time, 10) || 0;  
        setReadTime(readTime + extractedTime); 
    };
    const handleBookmark = () => {
        setBookMark([...bookMark, blog]);
       
    }
    return (
        <div>
              <div>
                <img src={cover} alt={title} className="w-full h-64 object-cover rounded-lg" />
            </div>
            <div className="flex items-center justify-between mt-5">
                <div className="flex items-center">
                    <img src={author_img} alt={author} className="w-10 h-10 rounded-full" />
                    <div className="ml-3">
                        <h3 className="text-xl font-bold text-gray-900">{author}</h3>
                        <p className="text-sm font-light text-gray-500">{posted_date}</p>
                    </div>
                </div>
                <div className='flex items-center gap-3'>
                <p className="text-sm font-light text-gray-500">{reading_time}</p>
                <button onClick={handleBookmark}><FontAwesomeIcon icon={faBookmark} /></button>
                </div>
            </div>
                                                                                                                       
            <div className="mt-4">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">{title}</h2>
                {
                    hashtags.map((hastag, idx) => (
                        <a key={idx} className="mt-2 text-sm font-light text-gray-500"> #{hastag}</a>
                    ))
                } <br />
                <button onClick={handleRead} className='text-blue-600 underline font-semibold'>Mark as read</button>
                
            </div>
            <hr  className='text-gray-300 my-10'/>
        </div>
    );
};

Blog.propTypes = {
    blog: PropTypes.object.isRequired
}
export default Blog;
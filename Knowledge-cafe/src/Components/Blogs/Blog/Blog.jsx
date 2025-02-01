
import PropTypes from 'prop-types';
const Blog = ({blog}) => {
    const {author, author_img, cover, hastags, id, posted_date, reading_time, title} = blog;
    console.log(posted_date);
    return (
        <div>
              <div className="mt-4">
                <img src={cover} alt={title} className="w-full h-64 object-cover rounded-lg" />
            </div>
            <div className="flex items-center justify-between">
                <div className="flex items-center">
                    <img src={author_img} alt={author} className="w-10 h-10 rounded-full" />
                    <div className="ml-3">
                        <h3 className="text-sm font-medium text-gray-900">{author}</h3>
                        <p className="text-sm font-light text-gray-500">{posted_date}</p>
                    </div>
                </div>
                <div className='flex items-center gap-3'>
                <p className="text-sm font-light text-gray-500">{reading_time}</p>
                    <button className="text-sm font-medium text-blue-500 hover:text-blue-700">Save</button>
                </div>
            </div>
          
            <div className="mt-4">
                <h2 className="text-2xl font-semibold text-gray-900">{title}</h2>
                <p className="mt-2 text-sm font-light text-gray-500">{hastags}</p>
            </div>
        </div>
    );
};

Blog.propTypes = {
    blog: PropTypes.object.isRequired
}
export default Blog;
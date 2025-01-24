
import PropTypes from 'prop-types';
const Blog = ({blog}) => {
    const {author, author_img, cover, hastags, id, posted_data, reading_time, title} = blog;
    return (
        <div>
            
        </div>
    );
};

Blog.propTypes = {
    blog: PropTypes.object.isRequired
}
export default Blog;
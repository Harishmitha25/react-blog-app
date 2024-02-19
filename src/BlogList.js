import { Link } from "react-router-dom";

//destructure props
//Can accept functions as props
// const BlogList = ({blogs, title, handleClick}) => {
const BlogList = ({blogs, title}) => {

    // const blogs = props.blogs;
    // const title = props.title;

    //should not update props directly here. Need to us setBlogs in the parent component
    // const handleDelete = (id) => {

    // }
    return ( 
        <div className="blog-list">
            <h2>{title}</h2>
            {/* map cycles through the array and manipulates the array */}
            {blogs.map((blog) => (
                // always add key - unique property when displaying list (React uses it when there is an update to the list. Like appending beginning, last etc)
                <div className="blog-preview" key={blog.id}>
                    <Link to = {`/blogs/${blog.id}`}>
                        <h2>{ blog.title }</h2>
                        <p>Written by { blog.author }</p>
                    </Link>
                    
                    {/* <button onClick={() => handleDelete(blog.id)}>Delete Blog</button> */}
                </div>
            ))}
        </div>
     );
}
 
export default BlogList;
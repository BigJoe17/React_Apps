import {Link} from "react-router-dom";
const BlogList = ({ title, blogs, handleDelete }) => {
  return (
    <div className="blog-list">
      <h1>{title}</h1>
      {blogs.map((blog) => (
        <div className="blog-preview" key={blog.id}>
          <Link  className="Blog-title" to={`/blogs/${blog.id}`}>
            <h2>{blog.title}</h2>
            <p> Written by {blog.author}</p>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default BlogList;

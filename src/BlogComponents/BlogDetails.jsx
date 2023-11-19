
import { useParams, useNavigate } from "react-router-dom";
import useFetch from "./useFetch";
import NavBar from "./NavBar";

function BlogDetails() {
    
  const { id } = useParams();

  const {
    data:blog,
    error,
    isPending,
  } = useFetch("http://localhost:5000/blogs/" + id);

  const history = useNavigate();

  const handleDelete  = () =>{
    fetch('http://localhost:5000/blogs/' + id, {
        method: 'DELETE'
    }).then(()=>{
    history(-1);
    })
    
  }

  return (
    <div>
        <NavBar/>
      <div className="blog-details">
        {isPending && <div>Loading... </div>}
        {error && <div>{error}</div>}
        {blog && (
          <article>
            <h2>{blog.title}</h2>
            <p>Written by {blog.author}</p>
            <div>{blog.body}</div>
            <button onClick={handleDelete}>Delete</button>
          </article>
        )}
      </div>
    </div>
  );
}

export default BlogDetails;

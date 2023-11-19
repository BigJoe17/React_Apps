// import NavBar from "./NavBar";
import "./CSS/Style.css";
import BlogList from "./BlogList";
import useFetch from "./useFetch";
import NavBar from "./NavBar";

const Home = () => {

  const { data: blogs, isPending, error } = useFetch("http://localhost:5000/blogs");
  
  return (
    <div>
      <NavBar/>
      <div className="content">
        {error && <div>{error}</div>}
        {isPending && <div>loading....</div>}
        {blogs && <BlogList blogs={blogs} title={"All Blogs"} />}
      </div>
    </div>
  );
};

export default Home;

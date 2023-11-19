import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import NavBar from "./NavBar";

const Create = () => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [author, setAuthor] = useState("");
  const [isPending, setIsPending] = useState(false);

   const history  = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const blog = { title, body, author };
    setIsPending(true);
   

    setTimeout(() => {
      fetch("http://localhost:5000/blogs", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(blog),
      }).then(() => {
        console.log("new blog added");
        setIsPending(false);
        history.go(-1);
      });
    }, 1000);
  };

  return (
    <div>
      <NavBar />
      <div className="create">
        <h2>Add New Blog</h2>
        <form onSubmit={handleSubmit}>
          <label>Blog title: </label>
          <input
            type="text"
            required
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <label>Add body: </label>

          <textarea
            rows={6}
            required
            value={body}
            onChange={(e) => setBody(e.target.value)}
          ></textarea>

          <select
            required
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
          >
            <option value="Joshua">Joshua</option>
            <option value="John">John</option>
            <option value="Mario">Mario</option>
          </select>

          {!isPending && <button>Add Blog</button>}
          {isPending && <button disabled>Adding Blog...</button>}
        </form>
      </div>
    </div>
  );
};

export default Create;

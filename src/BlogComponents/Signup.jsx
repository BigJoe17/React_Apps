import React, { useState } from "react";
import "./CSS/Blog.css";
import { Link } from "react-router-dom";
import Validation from "./Validation";

function Signup() {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
    contact: "",
  });

 const [errors, setErrors] = useState(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem('userData', JSON.stringify(formData));
    console.log("Form data submited:", formData);
    
const handleValidation = ()=>{
  setErrors(Validation(values));
}

  };
  return (
    <>
      <div className="box-container">
        <form onSubmit={handleSubmit}>
          <h2>SignUp JBlog</h2>

          <div className="content">
            <label htmlFor="">Name</label>
            <input type="text" name="username" value={formData.username} onChange={handleInputChange} />
            <label htmlFor="">Email</label>        
            <input type="email" name="email" value={formData.email}  onChange={handleInputChange}/>
            <label htmlFor="">Password</label>
            <input type="password" name="password" value={formData.password} onChange={handleInputChange} />
            <label htmlFor="">confirm password</label>
            <input type="password"  name="confirmPassword"  value={formData.confirmPassword} onChange={handleInputChange} />
            <label htmlFor="">contact</label>
            <input type="tel" name="contact" value={formData.contact} onChange={handleInputChange} />

            <input type="submit" value={"signup"} />
          </div>
          <span className="footLinks">
            <p>already have an account</p>
            <Link to="/login">Login</Link>
          </span>
        </form>
      </div>
    </>
  );
}

export default Signup;

import React from 'react'
import { Link } from 'react-router-dom'

function Login() {
  return (
    <>
    <div className="box-container">
        <form>
          <h2>Login JBlog</h2>

          <div className="content">
            
            <label htmlFor="">Email</label>
            <input type="Email"  placeholder='Enter email'/>
            <label >Password</label>
            <input type="password"  placeholder='Enter password'/>
             <div id='remind'>
            <input type="checkbox" /><span>Remember me</span>
            </div>
            <input type="submit" value={"Login"} />
          </div>
          <span className="footLinks">
            <p>do not have an account</p>
            <Link to="/signup">Signup</Link>
          </span>
        </form>
      </div>
    </>
  )
}

export default Login
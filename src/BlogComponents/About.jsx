import { Link } from "react-router-dom";
import NavBar from "./NavBar";
function About() {
  return (
    <div>
      <NavBar />
      <div className="about">
        <h2>About Jtech Blog</h2>
        <p>
          this is a mini blog platform build using Reactjs it was built to
          enhance and strengthen understanding in react development.
        </p>
        < Link to ="/"  className="btn" onClick={() => window.history.back}>
          back
        </Link>
      </div>
    </div>
  );
}

export default About;

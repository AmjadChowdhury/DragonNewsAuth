import { Link,useLocation,useNavigate } from "react-router-dom";
import Navbar from "./Shared/Navbar";
import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";

const Login = () => {
 const {signIn} = useContext(AuthContext)
 const location = useLocation()
 console.log('location here ',location)
 const navigate = useNavigate()
 const handleLogin = e => {
    e.preventDefault()
    const email = e.target.email.value
    const password = e.target.password.value
    console.log(email,password)

    signIn(email,password)
      .then(result => {
        console.log(result.user)
        // navigate...
        navigate(location?.state ? location.state : '/')
      })
      .catch(error => {
        console.log(error.message)
      })
 }


  return (
    <div>
      <Navbar></Navbar>
      <h2 className="text-2xl">Log in</h2>

      <div className="hero ">   
          
          <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form onSubmit={handleLogin} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="email"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  name="password"
                  placeholder="password"
                  className="input input-bordered"
                  required
                />
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">
                    Forgot password?
                  </a>
                </label>
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">Login</button>
              </div>
            </form>
            <p className="text-center my-2">Do not have an account? <Link to='/register' className="text-blue-600 ml-2">Register</Link></p>
          </div>
      </div>
    </div>
  );
};

export default Login;

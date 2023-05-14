import React from "react";
import { useNavigate,Link } from "react-router-dom";
import { auth, googleProvider } from "../firebase";
import {
  signInWithEmailAndPassword,
  signInWithPopup,
} from "firebase/auth";
import { useState } from "react";




function Login() {

  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
 
 


  console.log(auth?.currentUser?.email);

  const signIn = async (e) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigate("/Language-Learning-App");
    } catch (err) {
      console.error(err);
    }
  };

  const signInWithGoogle = async (e) => {
    e.preventDefault();
    try {
      await signInWithPopup(auth, googleProvider);
      navigate("/Language-Learning-App");
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="formContainer">
      <div className="formWrapper">
        <Link to="/Language-Learning-App">
          <span className="logo">Learn Arabic !</span>
        </Link>
        <span className="title1">Login</span>
        <form>
          <input type="email" placeholder="Email" name="" onChange={(e) => setEmail(e.target.value)}/>
          <input type="password" placeholder="Password" name=""  onChange={(e) => setPassword(e.target.value)}/>
          <button className="btn " onClick={signIn}>Login</button>
          <span className="title1">or</span>
          <button className="btn " onClick={signInWithGoogle}>Sign In with Google</button>
          {/* {err && <span>Something went wrong</span>} */}
        </form>
        <p>
          You don't have an account?{" "}
          <Link to="/Language-Learning-App/Register" className="">
            Register
          </Link>
        </p>
      </div>
    </div>
  );
}

export default Login;

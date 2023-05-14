import React from "react";
import { useNavigate,Link } from "react-router-dom";
import { auth, googleProvider } from "../firebase";
import {
  createUserWithEmailAndPassword,
  signInWithPopup,
} from "firebase/auth";
import { useState } from "react";



function Register() {

  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
const [passwordsMatch, setPasswordsMatch] = useState(true);

  const signUp = async (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      setPasswordsMatch(false);
      return;
    }
    try {
      await createUserWithEmailAndPassword(auth, email, password);
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
  
  const handleConfirmPasswordChange = (e) => {
    setConfirmPassword(e.target.value);
    setPasswordsMatch(e.target.value === password);
  };
  return (
    <div className="formContainer">
      <div className="formWrapper">
        <Link to="/Language-Learning-App">
          <span className="logo">Learn Arabic !</span>
        </Link>
        <span className="title1">Register</span>
        <form>
          <input type="email" placeholder="Email" name="" onChange={(e) => setEmail(e.target.value)} />
          <input type="password" placeholder="Password" name="" onChange={(e) => setPassword(e.target.value)} />
          <input type="password" placeholder="Confirm Password" name="" onChange={handleConfirmPasswordChange} />
          {!passwordsMatch && <span className="err">Passwords do not match</span>}
          <button className="btn" onClick={signUp} disabled={!passwordsMatch}>Sign Up</button>
          <span className="title1">or</span>
          <button className="btn " onClick={signInWithGoogle}>Sign In with Google</button>
        </form>
        <p>
          You do have an account?{" "}
          <Link to="/Language-Learning-App/Login" className="">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
}

export default Register;

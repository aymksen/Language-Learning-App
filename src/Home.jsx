import React from "react";
import { Link } from "react-router-dom";
import "./App.scss";
import { useEffect , useState} from "react";
import { signOut } from "firebase/auth";
import { auth } from "./firebase";
import guest from "./img/guest.png";

// import { l1 } from "./Components/Letters1";
// import { l2 } from "./Components/Letters2";
// import { l3 } from "./Components/Letters3";
// import { l4 } from "./Components/Letters4";
// import { n1 } from "./Components/Numbers";
// import { n2 } from "./Components/Numbers2";
// import { n3 } from "./Components/Numbers3";
// import { d1 } from "./Components/Days";
// import { g1 } from "./Components/Grammar1";
// import { g2 } from "./Components/Grammar2";
// import { g3 } from "./Components/Grammar3";
// import { c1 } from "./Components/Colors";


function Home() {

  const [l1, setl1] = useState(0);
  const [l2, setl2] = useState(0);
  const [l3, setl3] = useState(0);
  const [l4, setl4] = useState(0);
  const [n1, setn1] = useState(0);
  const [n2, setn2] = useState(0);
  const [n3, setn3] = useState(0); 
  const [d1, setd1] = useState(0);
  const [g1, setg1] = useState(0);
  const [g2, setg2] = useState(0);
  const [g3, setg3] = useState(0);
  const [c1, setc1] = useState(0);
  const [user, setUser] = useState(null);

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      setUser(user);
    });
  }, []);


  useEffect(() => {
    setl1(parseInt(localStorage.getItem("l1")) || 0);
    setl2(parseInt(localStorage.getItem("l2")) || 0);
    setl3(parseInt(localStorage.getItem("l3")) || 0);
    setl4(parseInt(localStorage.getItem("l4")) || 0);
    setn1(parseInt(localStorage.getItem("n1")) || 0);
    setn2(parseInt(localStorage.getItem("n2")) || 0);
    setn3(parseInt(localStorage.getItem("n3")) || 0);
    setd1(parseInt(localStorage.getItem("d1")) || 0);
    setg1(parseInt(localStorage.getItem("g1")) || 0);
    setg2(parseInt(localStorage.getItem("g2")) || 0);
    setg3(parseInt(localStorage.getItem("g3")) || 0);
    setc1(parseInt(localStorage.getItem("c1")) || 0);
    
  }, []);

  const logout = async () => {
    try {
      await signOut(auth);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div>
      
      <div >
      {user ? (
        <div className="userinfo">
          <div className="textinfo">
        <h2 className="pdt" >{auth.currentUser.email}</h2>
        <h3 className="pdt pointshow">Points : {l1 + l2 + l3 + l4 + n1 + n2 + n3 + d1 +g1 +g2 + g3+ c1}</h3>
        <button className="logout" onClick={logout} >Logout</button>
        </div>
        {auth.currentUser.photoURL ? (
            <img className="pdp" src={auth.currentUser.photoURL} alt="Profile" />
          ) : (
            <img className="pdp" src={guest} alt="Guest" />
          )}
        
         </div>
      ) : (
        <Link to="/Language-Learning-App/Login" className="">
      <h1 className="login">Login</h1></Link>
      )}
    </div>


      <h1 className="lvltitle">Points : {l1 + l2 + l3 + l4 + n1 + n2 + n3 + d1 +g1 +g2 + g3+ c1}</h1>
      <h2 className="challenges">Challenges</h2>

      <h1 className="level">Letters</h1>

      <div className="cont1">
        <Link to="/Language-Learning-App/Letters1" className="btn quizz grid">
          <h2>Part 1</h2>
          <h3>score :{l1}/7</h3>
        </Link>
        <Link to="/Language-Learning-App/Letters2" className="btn quizz grid">
          <h2>Part 2</h2>
          <h3>score :{l2}/7</h3>
        </Link>
        <Link to="/Language-Learning-App/Letters3" className="btn quizz grid">
          <h2>Part 3</h2>
          <h3>score :{l3}/7</h3>
        </Link>
        <Link to="/Language-Learning-App/Letters4" className="btn quizz grid">
          <h2>Part 4</h2>
          <h3>score :{l4}/7</h3>
        </Link>
      </div>

      <h1 className="level">Numbers</h1>

      <div className="cont1">
        <Link to="/Language-Learning-App/Numbers" className="btn quizz grid">
          <h2>Part 1</h2>
          <h3>score :{n1}/10</h3>
        </Link>
        <Link to="/Language-Learning-App/Numbers2" className="btn quizz grid">
          <h2>Part 2</h2>
          <h3>score :{n2}/10</h3>
        </Link>
        <Link to="/Language-Learning-App/Numbers3" className="btn quizz grid">
          <h2>Part 3</h2>
          <h3>score :{n3}/10</h3>
        </Link>
      </div>

      <h1 className="level">Days</h1>

      <div className="cont1">
        <Link to="/Language-Learning-App/Days" className="btn quizz grid">
          <h2>Part 1</h2>
          <h3>score :{d1}/7</h3>
        </Link>
      </div>

      <h1 className="level">Grammar</h1>

      <div className="cont1">
        <Link to="/Language-Learning-App/Grammar1" className="btn quizz grid">
          <h2>Part 1</h2>
          <h3>score :{g1}/10</h3>
        </Link>
        <Link to="/Language-Learning-App/Grammar2" className="btn quizz grid">
          <h2>Part 2</h2>
          <h3>score :{g2}/10</h3>
        </Link>
        <Link to="/Language-Learning-App/Grammar3" className="btn quizz grid">
          <h2>Part 3</h2>
          <h3>score :{g3}/10</h3>
        </Link>
        </div>

      <h1 className="level">Colors</h1>

      <div className="cont1">
        <Link to="/Language-Learning-App/Colors" className="btn quizz grid">
          <h2>Part 1</h2>
          <h3>score :{c1}/10</h3>
        </Link>
      </div>
      <div className="footer"></div>


    </div>
  );
}

export default Home;

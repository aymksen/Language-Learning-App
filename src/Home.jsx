import React from "react";
import { Link } from "react-router-dom";
import "./App.scss";

import { l1 } from "./Components/Letters1";
import { l2 } from "./Components/Letters2";
import { l3 } from "./Components/Letters3";
import { l4 } from "./Components/Letters4";
import { n1 } from "./Components/Numbers";
import { n2 } from "./Components/Numbers2";
import { n3 } from "./Components/Numbers3";
import { d1 } from "./Components/Days";
import { g1 } from "./Components/Grammar1";
import { g2 } from "./Components/Grammar2";
import { g3 } from "./Components/Grammar3";
import { c1 } from "./Components/Colors";


function Home() {
  return (
    <div>
      <h1 className="lvltitle">Points : {l1 + l2 + l3 + l4 + n1 + n2 + n3 + d1 +g1 +g2 + g3+ c1}</h1>
      <h2 className="challenges">Challenges</h2>

      <h1 className="level">Letters</h1>

      <div className="cont1">
        <Link to="/Language-Learning-App/Letters1" className="btn quizz">
          <h2>Part 1</h2>
          <h3>score :{l1}/7</h3>
        </Link>
        <Link to="/Language-Learning-App/Letters2" className="btn quizz">
          <h2>Part 2</h2>
          <h3>score :{l2}/7</h3>
        </Link>
        <Link to="/Language-Learning-App/Letters3" className="btn quizz">
          <h2>Part 3</h2>
          <h3>score :{l3}/7</h3>
        </Link>
        <Link to="/Language-Learning-App/Letters4" className="btn quizz">
          <h2>Part 4</h2>
          <h3>score :{l4}/7</h3>
        </Link>
      </div>

      <h1 className="level">Numbers</h1>

      <div className="cont1">
        <Link to="/Language-Learning-App/Numbers" className="btn quizz">
          <h2>Part 1</h2>
          <h3>score :{n1}/10</h3>
        </Link>
        <Link to="/Language-Learning-App/Numbers2" className="btn quizz">
          <h2>Part 2</h2>
          <h3>score :{n2}/10</h3>
        </Link>
        <Link to="/Language-Learning-App/Numbers3" className="btn quizz">
          <h2>Part 3</h2>
          <h3>score :{n3}/10</h3>
        </Link>
      </div>

      <h1 className="level">Days</h1>

      <div className="cont1">
        <Link to="/Language-Learning-App/Days" className="btn quizz">
          <h2>Part 1</h2>
          <h3>score :{d1}/7</h3>
        </Link>
      </div>

      <h1 className="level">Grammar</h1>

      <div className="cont1">
        <Link to="/Language-Learning-App/Grammar1" className="btn quizz">
          <h2>Part 1</h2>
          <h3>score :{g1}/10</h3>
        </Link>
        <Link to="/Language-Learning-App/Grammar2" className="btn quizz">
          <h2>Part 2</h2>
          <h3>score :{g2}/10</h3>
        </Link>
        <Link to="/Language-Learning-App/Grammar3" className="btn quizz">
          <h2>Part 3</h2>
          <h3>score :{g3}/10</h3>
        </Link>
        </div>

      <h1 className="level">Colors</h1>

      <div className="cont1">
        <Link to="/Language-Learning-App/Colors" className="btn quizz">
          <h2>Part 1</h2>
          <h3>score :{c1}/10</h3>
        </Link>
      </div>
      <div className="footer"></div>


    </div>
  );
}

export default Home;

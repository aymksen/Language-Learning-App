import React from "react";
import { Link } from "react-router-dom";
import "../App.scss";
import { useState, useEffect } from "react";

let d1 = 0;

function Days() {
  const letter = [
    
    {
      q: "How can we say 'Monday' in arabic",
      correctAnswer: "إثنين",
      letter: "Monday",
      var1: "جمعة",
      var2: "خميس",
      var3: "إثنين",
      var4: "أحد",
    },
    {
      q: "How can we say 'Tuesday' in arabic",
      correctAnswer: "ثلاثاء",
      letter: "Tuesday",
      var1: "أربعاء",
      var2: "جمعة",
      var3: "ثلاثاء ",
      var4: "أَرْبَعَة",
    },
    {
      q: "How can we say 'Wednesday' in arabic",
      correctAnswer: "أربعاء",
      letter: "Wednesday",
      var1: "خميس",
      var2: "أحد",
      var3: "سبت",
      var4: "أربعاء",
    },
    {
      q: "How can we say 'Thursday' in arabic",
      correctAnswer: "خميس",
      letter: "Thursday",
      var1: "خميس",
      var2: "ثلاثاء ",
      var3: "إثنين",
      var4: "خميس",
    },
    {
      q: "How can we say 'Friday' in arabic",
      correctAnswer: "جمعة",
      letter: "Friday",
      var1: "جمعة",
      var2: "سَبْعَة",
      var3: "خميس",
      var4: "ثلاثاء ",
    },
    {
      q: "How can we say 'Saturday' in arabic",
      correctAnswer: "سبت",
      letter: "Saturday",
      var1: "إثنين",
      var2: "أربعاء",
      var3: "ثلاثاء ",
      var4: "سبت",
    },
    {
      q: "How can we say 'Sunday' in arabic",
      correctAnswer: "أحد",
      letter: "Sunday",
      var1: "جمعة",
      var2: "أربعاء",
      var3: "سبت",
      var4: "أحد",
    },
  ];

  const [current, setCurrent] = useState(0);
  const [currquizz, setCurrquizz] = useState(0);

  const quizz = document.getElementById("quizz");

  const [streak, setStreak] = useState(0);
  const [maxStreak, setMaxStreak] = useState(0);
  const [currstreak, setCurrStreak] = useState(0);

  const [error, setError] = useState(false);

  const setRandomletter = () => {
    setCurrquizz(1);
    setCurrent(currquizz);
  };

  const btn1 = (e) => {
    e.preventDefault();

    const btn1 = document.getElementById("btn1");
    if (btn1.innerText === letter[current].correctAnswer) {
      win();
    } else {
      loss();
    }
  };
  const btn2 = (e) => {
    e.preventDefault();
    const btn2 = document.getElementById("btn2");
    if (btn2.innerText === letter[current].correctAnswer) {
      win();
    } else {
      loss();
    }
  };
  const btn3 = (e) => {
    e.preventDefault();
    const btn3 = document.getElementById("btn3");
    if (btn3.innerText === letter[current].correctAnswer) {
      win();
    } else {
      loss();
    }
  };
  const btn4 = (e) => {
    e.preventDefault();
    const btn4 = document.getElementById("btn4");
    if (btn4.innerText === letter[current].correctAnswer) {
      win();
    } else {
      loss();
    }
  };

  const win = () => {
    if (streak !== maxStreak) {
      setCurrStreak(currstreak + 1);
      setStreak(streak + 1);
      setError(false);
      setRandomletter();

      console.log("win");

      setCurrquizz(currquizz + 1);
      
    } else {
      setCurrStreak(currstreak + 1);
      d1 = currstreak;
      localStorage.setItem("d1", d1);
      quizz.innerHTML = `<h1 className="score"> You answered ${currstreak}/${maxStreak} questions correctly</h1>`;
      
    }
  };
  const loss = () => {
    if (streak !== maxStreak) {
      setStreak(streak + 1);
      const h = letter[current].letter;
      const r = letter[current].correctAnswer;
      setError(`Wrong! The correct answer for "${h}" is "${r}"`);
      setRandomletter();
      setCurrquizz(currquizz + 1);

      console.log("loss");
    } else {
      d1 = currstreak;
      localStorage.setItem("d1", d1);
      quizz.innerHTML = `<h1 class="score"> You answered ${currstreak}/${maxStreak} questions correctly</h1>`;
    }
  };

  useEffect(() => {
    setStreak(1);
    setCurrStreak(1);
    setMaxStreak(7);
    setRandomletter();

    // eslint-disable-next-line
  }, []);

  return (
    <div>
      <h1 className="lvltitle">Days : Part 1</h1>

      <div className="App" id="quizz">
        <header className="header">
          <h1 className="title">Arabic Days</h1>
          <div>
            <p>
              {streak} / {maxStreak}
            </p>
          </div>
        </header>
        <div className="actletter">
          <p>
            {letter[current].q}
          </p>
        </div>

        <div className="contcont ">
          <form className="cont">
            <button type="text" onClick={btn1} id="btn1" className="btn">
              {letter[current].var1}
            </button>

            <button type="text" onClick={btn2} id="btn2" className="btn">
              {letter[current].var2}
            </button>

            <button type="text" onClick={btn3} id="btn3" className="btn">
              {letter[current].var3}
            </button>

            <button type="text" onClick={btn4} id="btn4" className="btn">
              {letter[current].var4}
            </button>
          </form>
        </div>
      </div>
      {error && (
        <div className="error">
          <p>{error}</p>
        </div>
      )}

      <h2 className="backbtn">
        <Link to="/Language-Learning-App">Home</Link>
      </h2>
    </div>
  );
}

export default Days;
export { d1 };

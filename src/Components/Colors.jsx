import React from "react";
import { Link } from "react-router-dom";
import "../App.scss";
import { useState, useEffect } from "react";

let c1 = 0;

function Colors() {
  const letter = [
    
    {
      q: "What is the Arabic word for 'white'?",
      correctAnswer: "أبيض",
      letter: "white",
      var1: "أحمر",
      var2: "أسود",
      var3: "أخضر",
      var4: "أبيض",
      },
      {
      q: "What is the Arabic word for 'black'?",
      correctAnswer: "أسود",
      letter: "black",
      var1: "أصفر",
      var2: "أزرق",
      var3: "أخضر",
      var4: "أسود",
      },
      {
      q: "What is the Arabic word for 'red'?",
      correctAnswer: "أحمر",
      letter: "red",
      var1: "أصفر",
      var2: "أخضر",
      var3: "أحمر",
      var4: "أسود",
      },
      {
      q: "What is the Arabic word for 'green'?",
      correctAnswer: "أخضر",
      letter: "green",
      var1: "أحمر",
      var2: "أسود",
      var3: "أزرق",
      var4: "أخضر",
      },
      {
      q: "What is the Arabic word for 'blue'?",
      correctAnswer: "أزرق",
      letter: "blue",
      var1: "أحمر",
      var2: "أخضر",
      var3: "أصفر",
      var4: "أزرق",
      },
      {
      q: "What is the Arabic word for 'yellow'?",
      correctAnswer: "أصفر",
      letter: "yellow",
      var1: "أزرق",
      var2: "أخضر",
      var3: "أصفر",
      var4: "أحمر",
      },
      {
      q: "What is the Arabic word for 'purple'?",
      correctAnswer: "بنفسجي",
      letter: "purple",
      var1: "رمادي",
      var2: "أحمر",
      var3: "بنفسجي",
      var4: "أزرق",
      },
      {
      q: "What is the Arabic word for 'orange'?",
      correctAnswer: "برتقالي",
      letter: "orange",
      var1: "أحمر",
      var2: "أزرق",
      var3: "برتقالي",
      var4: "أخضر",
      },
      {
      q: "What is the Arabic word for 'gray'?",
      correctAnswer: "رمادي",
      letter: "gray",
      var1: "بني",
      var2: "أحمر",
      var3: "رمادي",
      var4: "أسود",
      },
      {
      q: "What is the Arabic word for 'brown'?",
      correctAnswer: "بني",
      letter: "brown",
      var1: "رمادي",
      var2: "أحمر",
      var3: "بني",
      var4: "أزرق",
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
      c1 = currstreak;

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
      c1 = currstreak;
      quizz.innerHTML = `<h1 class="score"> You answered ${currstreak}/${maxStreak} questions correctly</h1>`;
    }
  };

  useEffect(() => {
    setStreak(1);
    setCurrStreak(1);
    setMaxStreak(10);
    setRandomletter();

    // eslint-disable-next-line
  }, []);

  return (
    <div>
      <h1 className="lvltitle">Colors : Part 1</h1>

      <div className="App" id="quizz">
        <header className="header">
          <h1 className="title">Arabic colors</h1>
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
        <Link to="/">Home</Link>
      </h2>
    </div>
  );
}

export default Colors;
export { c1 };

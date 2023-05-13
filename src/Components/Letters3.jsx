import React from "react";
import { Link } from "react-router-dom";
import "../App.scss";
import { useState, useEffect } from "react";

let l3 = 0;

function Letters3() {
  const letter = [
    {
      q: "What sound does this make",
      correctAnswer: "Dhad",
      letter: "ض",
      var1: "ghain",
      var2: "tha",
      var3: "waw",
      var4: "Dhad",
    },
    {
      q: "What sound does this make",
      correctAnswer: "thaa",
      letter: "ط",
      var1: "haa",
      var2: "baa",
      var3: "alif",
      var4: "thaa",
    },
    {
      q: "What sound does this make",
      correctAnswer: "Dhaa",
      letter: "ظ",
      var1: "khaa",
      var2: "yaa",
      var3: "Dhaa",
      var4: "waw",
    },
    {
      q: "What sound does this make",
      correctAnswer: "hain",
      letter: "ع",
      var1: "hain",
      var2: "nun",
      var3: "jiim",
      var4: "Dhaa",
    },
    {
      q: "What sound does this make",
      correctAnswer: "ghain",
      letter: "غ",
      var1: "baa",
      var2: "taa",
      var3: "khaa",
      var4: "ghain",
    },
    {
      q: "What sound does this make",
      correctAnswer: "faa",
      letter: "ف",
      var1: "jiim",
      var2: "faa",
      var3: "zay",
      var4: "zay",
    },
    {
      q: "What sound does this make",
      correctAnswer: "qaaf",
      letter: "ق",
      var1: "raa",
      var2: "yaa",
      var3: "haa",
      var4: "qaaf",
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
      l3 = currstreak;

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
      l3 = currstreak;
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
      <h1 className="lvltitle">Letters : Part 3</h1>

      <div className="App" id="quizz">
        <header className="header">
          <h1 className="title">Arabic Letters</h1>
          <div>
            <p>
              {streak} / {maxStreak}
            </p>
          </div>
        </header>
        <div className="actletter">
          <p>
            {letter[current].q} "{letter[current].letter}"
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

export default Letters3;
export { l3 };

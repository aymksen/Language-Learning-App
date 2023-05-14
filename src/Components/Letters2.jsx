import React from "react";
import { Link } from "react-router-dom";
import "../App.scss";
import { useState, useEffect } from "react";

let l2 = 0;

function Letters2() {
  const letter = [
    {
      q: "What sound does this make",
      correctAnswer: "khaa",
      letter: "خ",
      var1: "alif",
      var2: "raa",
      var3: "faa",
      var4: "khaa",
    },
    {
      q: "What sound does this make",
      correctAnswer: "dal",
      letter: "د",
      var1: "dal",
      var2: "nun",
      var3: "Saad",
      var4: "Dhad",
    },
    {
      q: "What sound does this make",
      correctAnswer: "dhal",
      letter: "ذ",
      var1: "Saad",
      var2: "dhal",
      var3: "alif",
      var4: "qaaf",
    },
    {
      q: "What sound does this make",
      correctAnswer: "raa",
      letter: "ر",
      var1: "baa",
      var2: "raa",
      var3: "khaa",
      var4: "laam",
    },
    {
      q: "What sound does this make",
      correctAnswer: "zay",
      letter: "ز",
      var1: "alif",
      var2: "zay",
      var3: "nun",
      var4: "Dhaa",
    },
    {
      q: "What sound does this make",
      correctAnswer: "siin",
      letter: "س",
      var1: "haa",
      var2: "zay",
      var3: "miim",
      var4: "siin",
    },
    {
      q: "What sound does this make",
      correctAnswer: "shiin",
      letter: "ش",
      var1: "taa",
      var2: "jiim",
      var3: "haa",
      var4: "shiin",
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
      l2 = currstreak;
      localStorage.setItem("l2", l2);
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
      l2 = currstreak;
      quizz.innerHTML = `<h1 class="score"> You answered ${currstreak}/${maxStreak} questions correctly</h1>`;
      localStorage.setItem("l2", l2);
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
      <h1 className="lvltitle">Letters : Part 2</h1>

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

export default Letters2;
export { l2 };

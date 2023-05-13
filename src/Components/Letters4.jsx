import React from "react";
import { Link } from "react-router-dom";
import "../App.scss";
import { useState, useEffect } from "react";

let l4 = 0;

function Letters4() {
  const letter = [
    {
      q: "What sound does this make",
      correctAnswer: "kaaf",
      letter: "ك",
      var1: "dal",
      var2: "thaa",
      var3: "jiim",
      var4: "kaaf",
    },
    {
      q: "What sound does this make",
      correctAnswer: "laam",
      letter: "ل",
      var1: "siin",
      var2: "dal",
      var3: "laam",
      var4: "alif",
    },
    {
      q: "What sound does this make",
      correctAnswer: "miim",
      letter: "م",
      var1: "miim",
      var2: "laam",
      var3: "qaaf",
      var4: "faa",
    },
    {
      q: "What sound does this make",
      correctAnswer: "nun",
      letter: "ن",
      var1: "siin",
      var2: "nun",
      var3: "shiin",
      var4: "qaaf",
    },
    {
      q: "What sound does this make",
      correctAnswer: "haa",
      letter: "ه",
      var1: "haa",
      var2: "shiin",
      var3: "kaaf",
      var4: "hain",
    },
    {
      q: "What sound does this make",
      correctAnswer: "waw",
      letter: "و",
      var1: "zay",
      var2: "tha",
      var3: "miim",
      var4: "waw",
    },
    {
      q: "What sound does this make",
      correctAnswer: "yaa",
      letter: "ي",
      var1: "Saad",
      var2: "Dhaa",
      var3: "yaa",
      var4: "siin",
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
      l4 = currstreak;

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
      l4 = currstreak;
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
      <h1 className="lvltitle">Letters : Part 4</h1>

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
        <Link to="/">Home</Link>
      </h2>
    </div>
  );
}

export default Letters4;
export { l4 };

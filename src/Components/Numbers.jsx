import React from "react";
import { Link } from "react-router-dom";
import "../App.scss";
import { useState, useEffect } from "react";

let n1 = 0;

function Numbers() {
  const letter = [
    
    {
      q: "How can we say 'Zero' in arabic",
      correctAnswer: "صِفْر",
      letter: "Zero",
      var1: "سِتَّة",
      var2: "خَمْسَة",
      var3: "صِفْر",
      var4: "تِسْعَة",
    },
    {
      q: "How can we say 'One' in arabic",
      correctAnswer: "وَاحِد",
      letter: "One",
      var1: "ثَلَاثَة",
      var2: "وَاحِد",
      var3: "اثْنَان",
      var4: "أَرْبَعَة",
    },
    {
      q: "How can we say 'two' in arabic",
      correctAnswer: "اثْنَان",
      letter: "two",
      var1: "أَرْبَعَة",
      var2: "اثْنَان",
      var3: "وَاحِد",
      var4: "سِتَّة",
    },
    {
      q: "How can we say 'three' in arabic",
      correctAnswer: "ثَلَاثَة",
      letter: "three",
      var1: "أَرْبَعَة",
      var2: "تِسْعَة",
      var3: "سَبْعَة",
      var4: "ثَلَاثَة",
    },
    {
      q: "How can we say 'four' in arabic",
      correctAnswer: "أَرْبَعَة",
      letter: "four",
      var1: "أَرْبَعَة",
      var2: "سَبْعَة",
      var3: "ثَمَانِيَة",
      var4: "سِتَّة",
    },
    {
      q: "How can we say 'five' in arabic",
      correctAnswer: "خَمْسَة",
      letter: "five",
      var1: "تِسْعَة",
      var2: "خَمْسَة",
      var3: "ثَلَاثَة",
      var4: "سِتَّة",
    },
    {
      q: "How can we say 'six' in arabic",
      correctAnswer: "سِتَّة",
      letter: "six",
      var1: "سِتَّة",
      var2: "خَمْسَة",
      var3: "أَرْبَعَة",
      var4: "سَبْعَة",
    },
    {
      q: "How can we say 'seven' in arabic",
      correctAnswer: "سَبْعَة",
      letter: "seven",
      var1: "خَمْسَة",
      var2: "وَاحِد",
      var3: "سَبْعَة",
      var4: "تِسْعَة",
    },
    {
      q: "How can we say 'eight' in arabic",
      correctAnswer: "ثَمَانِيَة",
      letter: "eight",
      var1: "سَبْعَة",
      var2: "تِسْعَة",
      var3: "أَرْبَعَة",
      var4: "ثَمَانِيَة",
    },
    {
      q: "How can we say 'nine' in arabic",
      correctAnswer: "تِسْعَة",
      letter: "nine",
      var1: "ثَمَانِيَة",
      var2: "تِسْعَة",
      var3: "سِتَّة",
      var4: "سَبْعَة",
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
      n1 = currstreak;

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
      n1 = currstreak;
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
      <h1 className="lvltitle">Numbers : Part 1</h1>

      <div className="App" id="quizz">
        <header className="header">
          <h1 className="title">Arabic numbers</h1>
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

export default Numbers;
export { n1 };

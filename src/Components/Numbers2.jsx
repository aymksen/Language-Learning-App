import React from "react";
import { Link } from "react-router-dom";
import "../App.scss";
import { useState, useEffect } from "react";

let n2 = 0;

function Numbers2() {
  const letter = [
    
    {
      q: "How do you say the Arabic number 'أَرْبَعَة' in English?",
      correctAnswer: "four",
      letter: "أَرْبَعَة",

      var1: "nine",
      var2: "four",
      var3: "zero",
      var4: "one",
    },
    {
      q: "How do you say the Arabic number 'سِتَّة' in English?",
      correctAnswer: "six",
      letter: "سِتَّة",

      var1: "ثَلَاثَة",
      var2: "five",
      var3: "six",
      var4: "three",
    },
    {
      q: "How do you say the Arabic number 'صِفْر' in English?",
      correctAnswer: "zero",
      letter: "صِفْر",

      var1: "zero",
      var2: "seven",
      var3: "three",
      var4: "one",
    },
    {
      q: "How do you say the Arabic number 'ثَمَانِيَة' in English?",
      correctAnswer: "eight",
      letter: "ثَمَانِيَة",

      var1: "four",
      var2: "two",
      var3: "eight",
      var4: "nine",
    },
    {
      q: "How do you say the Arabic number 'خَمْسَة' in English?",
      correctAnswer: "five",
      letter: "خَمْسَة",

      var1: "zero",
      var2: "five",
      var3: "six",
      var4: "four",
    },
    {
      q: "How do you say the Arabic number 'سَبْعَة' in English?",
      correctAnswer: "seven",
      letter: "سَبْعَة",

      var1: "seven",
      var2: "five",
      var3: "three",
      var4: "two",
    },
    {
      q: "How do you say the Arabic number 'اثْنَان' in English?",
      correctAnswer: "two",
      letter: "اثْنَان",

      var1: "six",
      var2: "two",
      var3: "zero",
      var4: "eight",
    },
    {
      q: "How do you say the Arabic number 'تِسْعَة' in English?",
      correctAnswer: "nine",
      letter: "تِسْعَة",

      var1: "five",
      var2: "nine",
      var3: "seven",
      var4: "khaa",
    },
    {
      q: "How do you say the Arabic number 'وَاحِد' in English?",
      correctAnswer: "one",
      letter: "وَاحِد",

      var1: "one",
      var2: "eight",
      var3: "six",
      var4: "nine",
    },
    {
      q: "How do you say the Arabic number 'ثَلَاثَة' in English?",
      correctAnswer: "three",
      letter: "nine",

      var1: "five",
      var2: "three",
      var3: "one",
      var4: "seven",
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
      n2 = currstreak;
      localStorage.setItem("n2", n2);
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
      n2 = currstreak;
      localStorage.setItem("n2", n2);
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
      <h1 className="lvltitle">Numbers : Part 2</h1>

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

export default Numbers2;
export { n2 };

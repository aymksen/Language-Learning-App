import React from "react";
import { Link } from "react-router-dom";
import "../App.scss";
import { useState, useEffect } from "react";

let g2 = 0;

function Grammar2() {
  const letter = [
    
    {
      q: "What is the Arabic word for 'to eat'?",
      correctAnswer: "يأكل",
      letter: "to eat",
      var1: "يشرب",
      var2: "يقرأ",
      var3: "يأكل",
      var4: "ينام",
      },
      {
      q: "What is the Arabic word for 'to write'?",
      correctAnswer: "يكتب",
      letter: "to write",
      var1: "يحضر",
      var2: "يفتح",
      var3: "يكتب",
      var4: "يسير",
      },
      {
      q: "What is the Arabic word for 'yesterday'?",
      correctAnswer: "أمس",
      letter: "yesterday",
      var1: "اليوم",
      var2: "الأسبوع",
      var3: "الشهر",
      var4: "أمس",
      },
      {
      q: "What is the Arabic word for 'tomorrow'?",
      correctAnswer: "غداً",
      letter: "tomorrow",
      var1: "الأسبوع",
      var2: "غداً",
      var3: "الشهر",
      var4: "اليوم",
      },
      {
      q: "What is the plural form of the Arabic word 'كتاب' (book)?",
      correctAnswer: "كُتُب",
      letter: "books",
      var1: "كِتابَات",
      var2: "كُتُب",
      var3: "كَتَبَات",
      var4: "كُتَب",
      },
      {
      q: "What is the Arabic word for 'car'?",
      correctAnswer: "سيارة",
      letter: "car",
      var1: "طائرة",
      var2: "قطار",
      var3: "سيارة",
      var4: "دراجة",
      },
      {
      q: "What is the Arabic word for 'beautiful'?",
      correctAnswer: "جميل",
      letter: "beautiful",
      var1: "وسيم",
      var2: "جميل",
      var3: "عالي",
      var4: "طويل",
      },
      {
      q: "What is the Arabic word for 'to speak'?",
      correctAnswer: "يتكلم",
      letter: "to speak",
      var1: "ينظر",
      var2: "يحضر",
      var3: "يتكلم",
      var4: "يسمع",
      },
      {
      q: "What is the Arabic word for 'to see'?",
      correctAnswer: "يرى",
      letter: "to see",
      var1: "يسمع",
      var2: "يحضر",
      var3: "يرى",
      var4: "يجلس",
      },
      {
      q: "What is the Arabic word for 'to study'?",
      correctAnswer: "يدرس",
      letter: "to study",
      var1: "يحضر",
      var2: "يدرس",
      var3: "يسمع",
      var4: "يشاهد",
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
      g2 = currstreak;

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
      g2 = currstreak;
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
      <h1 className="lvltitle">Grammar : Part 2</h1>

      <div className="App" id="quizz">
        <header className="header">
          <h1 className="title">Arabic grammar</h1>
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

export default Grammar2;
export { g2 };

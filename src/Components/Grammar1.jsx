import React from "react";
import { Link } from "react-router-dom";
import "../App.scss";
import { useState, useEffect } from "react";

let g1 = 0;

function Grammar1() {
  const letter = [
    
    {
      q: "What is the Arabic equivalent of the English article 'the'?",
      correctAnswer: "الـ",
      letter: "the",
      var1: "إلى",
      var2: "هذا",
      var3: "أنا",
      var4: "الـ",
      },
      {
      q: "How do you say 'hello' in Arabic?",
      correctAnswer: "مرحباً",
      letter: "hello",
      var1: "شكراً",
      var2: "أنا",
      var3: "لا",
      var4: "مرحباً",
      },
      {
      q: "What is the Arabic word for 'book'?",
      correctAnswer: "كتاب",
      letter: "book",
      var1: "قلم",
      var2: "مدرسة",
      var3: "كتاب",
      var4: "فصل",
      },
      {
      q: "What is the Arabic word for 'cat'?",
      correctAnswer: "قطة",
      letter: "cat",
      var1: "كلب",
      var2: "حصان",
      var3: "قطة",
      var4: "فأر",
      },
      {
      q: "What is the Arabic word for 'thank you'?",
      correctAnswer: "شكراً",
      letter: "thank you",
      var1: "مع السلامة",
      var2: "مرحباً",
      var3: "شكراً",
      var4: "أنا آسف",
      },
      {
      q: "What is the Arabic word for 'school'?",
      correctAnswer: "مدرسة",
      letter: "school",
      var1: "كتاب",
      var2: "فصل",
      var3: "مدرسة",
      var4: "قلم",
      },
      {
      q: "What is the Arabic word for 'water'?",
      correctAnswer: "ماء",
      letter: "water",
      var1: "طعام",
      var2: "هواء",
      var3: "ماء",
      var4: "نار",
      },
      {
      q: "How do you say 'goodbye' in Arabic?",
      correctAnswer: "مع السلامة",
      letter: "goodbye",
      var1: "مرحباً",
      var2: "شكراً",
      var3: "مع السلامة",
      var4: "لا",
      },
      {
      q: "What is the Arabic word for 'I'?",
      correctAnswer: "أنا",
      letter: "I",
      var1: "هذا",
      var2: "أنا",
      var3: "إلى",
      var4: "شكراً",
      },
      {
      q: "What is the Arabic word for 'you'?",
      correctAnswer: "أنتَ / أنتِ",
      letter: "you",
      var1: "شكراً",
      var2: "أنتَ / أنتِ",
      var3: "هذا",
      var4: "إلى",
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
      g1 = currstreak;

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
      g1 = currstreak;
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
      <h1 className="lvltitle">Grammar : Part 1</h1>

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

export default Grammar1;
export { g1 };

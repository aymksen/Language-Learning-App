import React from "react";
import { Link } from "react-router-dom";
import "../App.scss";
import { useState, useEffect } from "react";

let n3 = 0;

function Numbers3() {
  const letter = [
    
    {
      q: "How can we say 'ten' in arabic",
      correctAnswer: "عَشَرَة",
      letter: "Zero",

      var1: "سَبْعُونَ",
      var2: "خَمْسَة",
      var3: "صِفْر",
      var4: "عَشَرَة",
    },
    {
      q: "How can we say 'twenty' in arabic",
      correctAnswer: "عِشْرُونَ",
      letter: "twenty",

      var1: "سِتُّونَ",
      var2: "ثَلَاثُونَ",
      var3: "اثْنَان",
      var4: "عِشْرُونَ",
    },
    {
      q: "How can we say 'thirty' in arabic",
      correctAnswer: "ثَلَاثُونَ",
      letter: "thirty",

      var1: "سَبْعُونَ",
      var2: "ثَلَاثُونَ",
      var3: "وَاحِد",
      var4: "أَرْبَعُونَ",
    },
    {
      q: "How can we say 'forty' in arabic",
      correctAnswer: "أَرْبَعُونَ",
      letter: "forty",
      
      var1: "تِسْعُونَ",
      var2: "أَرْبَعُونَ",
      var3: "سَبْعَة",
      var4: "ثَلَاثَة",
    },
    {
      q: "How can we say 'fifty' in arabic",
      correctAnswer: "خَمْسُونَ",
      letter: "fifty",

      var1: "خَمْسُونَ",
      var2: "سَبْعَة",
      var3: "ثَمَانِيَة",
      var4: "أَرْبَعُونَ",
    },
    {
      q: "How can we say 'Sixty' in arabic",
      correctAnswer: "سِتُّونَ",
      letter: "Sixty",
      
      var1: "أَرْبَعُونَ",
      var2: "سِتُّونَ",
      var3: "ثَلَاثَة",
      var4: "سِتَّة",
    },
    {
      q: "How can we say 'seventy' in arabic",
      correctAnswer: "سَبْعُونَ",
      letter: "seventy",

      var1: "سِتَّة",
      var2: "خَمْسَة",
      var3: "خَمْسُونَ",
      var4: "سَبْعُونَ",
    },
    {
      q: "How can we say 'Eighty' in arabic",
      correctAnswer: "ثَمَانُونَ",
      letter: "Eighty",

      var1: "عِشْرُونَ",
      var2: "أَرْبَعُونَ",
      var3: "ثَمَانُونَ",
      var4: "سِتُّونَ",
    },
    {
      q: "How can we say 'ninety' in arabic",
      correctAnswer: "تِسْعُونَ",
      letter: "ninety",

      var1: "خَمْسُونَ",
      var2: "سَبْعُونَ",
      var3: "تِسْعُونَ",
      var4: "ثَمَانِيَة",
    },
    {
      q: "How can we say 'one hundred' in arabic",
      correctAnswer: "مِئَة",
      letter: "one hundred",

      var1: "مِئَة",
      var2: "خَمْسُونَ",
      var3: "ثَمَانُونَ",
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
      n3 = currstreak;
      localStorage.setItem("n3", n3);
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
      n3 = currstreak;
      localStorage.setItem("n3", n3);
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
      <h1 className="lvltitle">Numbers : Part 3</h1>

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

export default Numbers3;
export { n3 };

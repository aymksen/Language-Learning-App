import React from "react";
import { Link } from "react-router-dom";
import "../App.scss";
import { useState, useEffect } from "react";

let g3 = 0;

function Grammar3() {
  const letter = [
    
    {
      q: "What is the Arabic plural of 'شجرة' (tree)?",
      correctAnswer: "أَشْجَار",
      letter: "tree (plural)",
      var1: "شُجُون",
      var2: "شَجَرَات",
      var3: "شُجْرَة",
      var4: "أَشْجَار",
      },
      {
      q: "What is the Arabic dual form of 'كَلِمَة' (word)?",
      correctAnswer: "كَلِمَتَانِ",
      letter: "word (dual)",
      var1: "كَلِمَةٌ",
      var2: "كَلِمَتَانِ",
      var3: "كَلِمَاتٌ",
      var4: "كَلِمَ",
      },
      {
      q: "What is the Arabic dual form of 'حَمَامَة' (pigeon)?",
      correctAnswer: "حَمَامَتَانِ",
      letter: "pigeon (dual)",
      var1: "حَمَامَاتٌ",
      var2: "حَمَامَةٌ",
      var3: "حَمَامَ",
      var4: "حَمَامَتَانِ",
      },
      {
      q: "What is the Arabic plural of 'كَتَبَ' (he wrote)?",
      correctAnswer: "كَتَبُوا",
      letter: "he wrote (plural)",
      var1: "يَكْتُبُ",
      var2: "كَتَبَ",
      var3: "كَتَبْتُ",
      var4: "كَتَبُوا",
      },
      {
      q: "What is the Arabic dual form of 'أُخْتٌ' (sister)?",
      correctAnswer: "أُخَتَانِ",
      letter: "sister (dual)",
      var1: "أُخْتٌ",
      var2: "أَخَتَيْنِ",
      var3: "أَخَوَاتٌ",
      var4: "أُخَتَانِ",
      },
      {
      q: "What is the Arabic plural of 'سَاعَةٌ' (hour)?",
      correctAnswer: "سَاعَاتٌ",
      letter: "hour (plural)",
      var1: "سَاعَةَانِ",
      var2: "سَاعَةٌ",
      var3: "سَاعَ",
      var4: "سَاعَاتٌ",
      },
      {
      q: "What is the Arabic dual form of 'حِمَارٌ' (donkey)?",
      correctAnswer: "حِمَارَانِ",
      letter: "donkey (dual)",
      var1: "حِمَارٌ",
      var2: "حَمِيرٌ",
      var3: "حِمَارَةٌ",
      var4: "حِمَارَانِ",
      },
      {
        q: "What is the feminine plural form of 'مسلم' (Muslim)?",
        correctAnswer: "مُسْلِمات",
        letter: "Muslim (feminine plural)",
        var1: "مُسْلِمَات",
        var2: "مُسْلِمِين",
        var3: "مُسْلِمات",
        var4: "مُسْلِمون",
        },
        {
          q: "What is the Arabic plural of 'مكتب' (office)?",
          correctAnswer: "مكاتب",
          letter: "office (plural)",
          var1: "مكتبات",
          var2: "مكاتيب",
          var3: "مكتاب",
          var4: "مكاتب",
          },
          {
            q: "What is the dual form of 'جميل' (beautiful)?",
            correctAnswer: "جميلان",
            letter: "beautiful (dual)",
            var1: "جميلان",
            var2: "جميلتان",
            var3: "جميلون",
            var4: "جميلات",
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
      g3 = currstreak;
      localStorage.setItem("g3", g3);
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
      g3 = currstreak;
      localStorage.setItem("g3", g3);
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
      <h1 className="lvltitle">Grammar : Part 3</h1>

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

export default Grammar3;
export { g3 };

import "./App.css";
import { useEffect, useMemo, useState } from "react";
import Timer from "./project/Components/timer";
import Start from "./project/Components/start";
import Trivia from "./project/Components/trivia";
function App() {
  const [username, setUsername] = useState(null);
  const [timeOut, setTimeOut] = useState(false);
  const [questionNumber, setQuestionNumber] = useState(1);
  const [earned, setEarned] = useState("$ 0");

  const data = [
    {
      id: 1,
      question: "Rolex is a company that specializes in what type of product?",
      answers: [
        {
          text: "Phone",
          correct: false,
        },
        {
          text: "Watches",
          correct: true,
        },
        {
          text: "Food",
          correct: false,
        },
        {
          text: "Cosmetic",
          correct: false,
        },
      ],
    },
    {
      id: 2,
      question: "When did the website Facebook launch?",
      answers: [
        {
          text: "2004",
          correct: true,
        },
        {
          text: "2005",
          correct: false,
        },
        {
          text: "2006",
          correct: false,
        },
        {
          text: "2007",
          correct: false,
        },
      ],
    },
    {
      id: 3,
      question: "Who played the character of harry potter in movie?",
      answers: [
        {
          text: "Johnny Deep",
          correct: false,
        },
        {
          text: "Leonardo Di Caprio",
          correct: false,
        },
        {
          text: "Denzel Washington",
          correct: false,
        },
        {
          text: "Daniel Red Cliff",
          correct: true,
        },
      ],
    },
    {
      id: 4,
      question: "How Would you consult to know your Horoscope?",
      answers: [
        {
          text: "Astronomist",
          correct: false,
        },
        {
          text: "Astrologer",
          correct: true,
        },
        {
          text: "Economist",
          correct: false,
        },
        {
          text: "Agronomist",
          correct: false,
        },
      ],
    },
    {
      id: 5,
      question: "Which of these associated to White Revolution?",
      answers: [
        {
          text: "Milk",
          correct: true,
        },
        {
          text: "Chicken",
          correct: false,
        },
        {
          text: "Petrol",
          correct: false,
        },
        {
          text: "Diesel",
          correct: false,
        },
      ],
    },
    {
      id: 6,
      question: "Which of these following missiles is made by together India and Russia?",
      answers: [
        {
          text: "Agni",
          correct: false,
        },
        {
          text: "Prudhvi",
          correct: false,
        },
        {
          text: "Brahmas",
          correct: true,
        },
        {
          text: "Akash",
          correct: false,
        },
      ],
    },
    {
      id: 7,
      question: "Which of the following is given given Ink mark during elections?",
      answers: [
        {
          text: "To Eye",
          correct: false,
        },
        {
          text: "To Ear",
          correct: false,
        },
        {
          text: "To Nose",
          correct: false,
        },
        {
          text: "To Finger",
          correct: true,
        },
      ],
    },
    {
      id: 8,
      question: "On which of the following days Easter is celebrated?",
      answers: [
        {
          text: "Friday",
          correct: false,
        },
        {
          text: "Saturday",
          correct: false,
        },
        {
          text: "Sunday",
          correct: true,
        },
        {
          text: "Monday",
          correct: false,
        },
      ],
    },
    {
      id: 9,
      question: "Yanam is the colony of the which of the European powers?",
      answers: [
        {
          text: "Danish",
          correct: false,
        },
        {
          text: "French",
          correct: true,
        },
        {
          text: "Spanish",
          correct: false,
        },
        {
          text: "Portugese",
          correct: false,
        },
      ],
    },
    {
      id: 10,
      question: "Which is the 4th planet from the sun in our Solar system?",
      answers: [
        {
          text: "Mercury",
          correct: false,
        },
        {
          text: "Mars",
          correct: true,
        },
        {
          text: "Jupiter",
          correct: false,
        },
        {
          text: "Earth",
          correct: false,
        },
      ],
    },
    {
      id: 11,
      question: "Samosas are usually made in which of the following shapes?",
      answers: [
        {
          text: "Triangle",
          correct: true,
        },
        {
          text: "Rectangle",
          correct: false,
        },
        {
          text: "Square",
          correct: false,
        },
        {
          text: "Circle",
          correct: false,
        },
      ],
    },
    {
      id: 12,
      question: "The Human Heart Comprises of how many Chambers?",
      answers: [
        {
          text: "2",
          correct: false,
        },
        {
          text: "5",
          correct: false,
        },
        {
          text: "4",
          correct: true,
        },
        {
          text: "3",
          correct: false,
        },
      ],
    },{
      id: 13,
      question: "Which of these following Mueseum is located in Hyderabad?",
      answers: [
        {
          text: "Victoria jublee Mueseum",
          correct: false,
        },
        {
          text: "National Mueseum",
          correct: false,
        },
        {
          text: "Indian Mueseum",
          correct: false,
        },
        {
          text: "Salarjung Mueseum",
          correct: true,
        },
      ],
    },
    {
      id: 14,
      question: "Which of these was Invented by Johannes Gutenberg?",
      answers: [
        {
          text: "Refrigerator",
          correct: false,
        },
        {
          text: "Telephone",
          correct: false,
        },
        {
          text: "Printing Press",
          correct: true,
        },
        {
          text: "World Wide Web",
          correct: false,
        },
      ],
    },
    {
      id: 15,
      question: "The ISRO Space centre in sriharikota is named after which of these Scientists?",
      answers: [
        {
          text: "Abdul kalam",
          correct: false,
        },
        {
          text: "Vikram Sarabhai",
          correct: false,
        },
        {
          text: "Homi J Baba",
          correct: false,
        },
        {
          text: "Satish Dhawan",
          correct: true,
        },
      ],
    },
  ];

  const moneyPyramid = useMemo(
    () =>
      [
        { id: 1, amount: "$ 100" },
        { id: 2, amount: "$ 200" },
        { id: 3, amount: "$ 300" },
        { id: 4, amount: "$ 500" },
        { id: 5, amount: "$ 1.000" },
        { id: 6, amount: "$ 2.000" },
        { id: 7, amount: "$ 4.000" },
        { id: 8, amount: "$ 8.000" },
        { id: 9, amount: "$ 16.000" },
        { id: 10, amount: "$ 32.000" },
        { id: 11, amount: "$ 64.000" },
        { id: 12, amount: "$ 125.000" },
        { id: 13, amount: "$ 250.000" },
        { id: 14, amount: "$ 500.000" },
        { id: 15, amount: "$ 1.000.000" },
      ].reverse(),
    []
  );

  useEffect(() => {
    questionNumber > 1 &&
      setEarned(moneyPyramid.find((m) => m.id === questionNumber - 1).amount);
  }, [questionNumber, moneyPyramid]);

  return (
    <div className="app">
      {!username ? (
        <Start setUsername={setUsername} />
      ) : (
        <>
          <div className="main">
            {timeOut ? (
              <h1 className="endText">You earned: {earned}</h1>
            ) : (
              <>
                <div className="top">
                  <div className="timer">
                    <Timer
                      setTimeOut={setTimeOut}
                      questionNumber={questionNumber}
                    />
                  </div>
                </div>
                <div className="bottom">
                  <Trivia
                    data={data}
                    questionNumber={questionNumber}
                    setQuestionNumber={setQuestionNumber}
                    setTimeOut={setTimeOut}
                  />
                </div>
              </>
            )}
          </div>
          <div className="pyramid">
            <ul className="moneyList">
              {moneyPyramid.map((m) => (
                <li
                  className={
                    questionNumber === m.id
                      ? "moneyListItem active"
                      : "moneyListItem"
                  }
                >
                  <span className="moneyListItemNumber">{m.id}</span>
                  <span className="moneyListItemAmount">{m.amount}</span>
                </li>
              ))}
            </ul>
          </div>
        </>
      )}
    </div>
  );
}

export default App

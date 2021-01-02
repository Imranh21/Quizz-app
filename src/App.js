import React, { useState } from "react";
import "./styles.css";

export default function App() {
  const [currentQ, setCurrentQ] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [score, setScore] = useState(0);

  const questions = [
    {
      questionText: "What is the capital of France?",
      answerOptions: [
        { answerText: "New York", isCorrect: false },
        { answerText: "London", isCorrect: false },
        { answerText: "Paris", isCorrect: true },
        { answerText: "Dublin", isCorrect: false }
      ]
    },
    {
      questionText: "Who is CEO of Tesla?",
      answerOptions: [
        { answerText: "Jeff Bezos", isCorrect: false },
        { answerText: "Elon Musk", isCorrect: true },
        { answerText: "Bill Gates", isCorrect: false },
        { answerText: "Tony Stark", isCorrect: false }
      ]
    },
    {
      questionText: "The iPhone was created by which company?",
      answerOptions: [
        { answerText: "Apple", isCorrect: true },
        { answerText: "Intel", isCorrect: false },
        { answerText: "Amazon", isCorrect: false },
        { answerText: "Microsoft", isCorrect: false }
      ]
    },
    {
      questionText: "How many Harry Potter books are there?",
      answerOptions: [
        { answerText: "1", isCorrect: false },
        { answerText: "4", isCorrect: false },
        { answerText: "6", isCorrect: false },
        { answerText: "7", isCorrect: true }
      ]
    },
    {
      questionText: "Which is not a programming language?",
      answerOptions: [
        { answerText: "Python", isCorrect: false },
        { answerText: "JavaScript", isCorrect: false },
        { answerText: "HTML", isCorrect: true },
        { answerText: "C++", isCorrect: false }
      ]
    }
  ];

  const HandleOnClick = (isCorrect) => {
    if (isCorrect === true) {
      setScore(score + 1);
    }

    const nextQ = currentQ + 1;
    if (nextQ < questions.length) {
      setCurrentQ(currentQ + 1);
    } else {
      setShowScore(true);
    }
  };

  return (
    <div className="App">
      {showScore ? (
        <div className="scoreSection">
          <h1>
            You scored {score} out of {questions.length}
          </h1>
          <button onClick={() => window.location.reload()}>Restart</button>
        </div>
      ) : (
        <div className="qnaSection">
          <div className="questionSection">
            <div className="question-count">
              <span>Question {currentQ + 1}</span>/{questions.length}
            </div>
            <div className="questionText">
              {questions[currentQ].questionText}
            </div>
          </div>
          <div className="answerSection">
            {questions[currentQ].answerOptions.map((q) => {
              return (
                <button
                  className="btns"
                  onClick={() => HandleOnClick(q.isCorrect)}
                >
                  {q.answerText}
                </button>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
}

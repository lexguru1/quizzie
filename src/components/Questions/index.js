import React from "react";
import { useDispatch } from "react-redux";
import { newPrice } from "../../store/users/actions";
import { useState } from "react";
import { incrementQnNumber } from "../../store/users/actions";

export default function Questions(props) {
  const [terminate, setTerminate] = useState("");
  const dispatch = useDispatch();
  const { question, current_qn } = props;
  console.log(question, current_qn);

  return (
    <>
      <div className="main-question-wrapper">
        Question wrapper
        <div className="question-info">
          <div>{current_qn + 1}/15</div>
          <div>{question.money}</div>
        </div>
        <div className="question-container">{question.Qn}</div>
        <div className="answer-container">{question.Ans[0].answer1}</div>
        <div className="answer-container">{question.Ans[1].answer1}</div>
        <div className="answer-container">{question.Ans[2].answer1}</div>
        <div className="answer-container">{question.Ans[3].answer1}</div>
        <div className="answer-container">
          {question.Ans.map((value) => ({ value, sort: Math.random() }))
            .sort((a, b) => a.sort - b.sort)
            .map(({ value }) => value)
            .map((ans, index) => {
              return (
                <div key={index}>
                  <button
                    onClick={(e) => {
                      e.preventDefault();
                      if (ans.result) {
                        dispatch(newPrice(question.money));
                        dispatch(incrementQnNumber());
                        //update current qn index
                      } else {
                        //terminate
                        setTerminate("Wrong answer");
                      }
                    }}
                  >
                    {ans.answer}
                  </button>
                </div>
              );
            })}
          <div>{terminate}</div>
        </div>
      </div>
    </>
  );
}

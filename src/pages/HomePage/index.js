import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { getQuestion } from "../../store/questions/selectors";
import { useState } from "react";
import Questions from "../../components/Questions";
import { getCurrent_qn } from "../../store/users/selectors";
import "./style.scss";
import SidePanel from "../../components/SidePanel";
import Timer from "../../components/Timer";
import logo from "../../assets/Quizzy.png";

export default function HomePage() {
  const questions = useSelector(getQuestion);
  const current_qn = useSelector(getCurrent_qn);
  const manySeconds = 20;
  // console.log(current_qn);
  useEffect(() => {}, [current_qn]);
  // console.log(questions);

  return (
    <section className="vh-100 vw-100">
      <div className="container">
        <div className="row pt-5">
          <div className="col-12 text-center">
            <img src={logo}></img>
          </div>
        </div>
        <div className="row">
          <div className="col-8 d-flex justify-content-center align-items-centerleft-panel">
            <Questions
              question={questions[current_qn]}
              current_qn={current_qn}
            />
          </div>
          <div className="col-3 right-panel background-blur-effect p-3">
            <div>
              <SidePanel />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

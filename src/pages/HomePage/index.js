import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { getQuestion } from "../../store/questions/selectors";
import { useState } from "react";
import Questions from "../../components/Questions";
import { getCurrent_qn } from "../../store/users/selectors";
import "./style.scss";
import SidePanel from "../../components/SidePanel";
import Timer from "../../components/Timer";

export default function HomePage() {
  const questions = useSelector(getQuestion);
  const current_qn = useSelector(getCurrent_qn);
  const manySeconds = 20;
  // console.log(current_qn);
  useEffect(() => {}, [current_qn]);
  // console.log(questions);

  return (
    <section>
      <div className="container-fluid">
        <div className="row">
          <div className="col-9 left-panel bg-success">
            <div>
              <div className="placeholder"></div>
              {/* <Timer /> */}
            </div>
            <div>
              <div className="placeholder-2">
                <Questions
                  question={questions[current_qn]}
                  current_qn={current_qn}
                />
              </div>
            </div>
          </div>
          <div className="col-3 right-panel bg-danger">
            <div>
              <SidePanel />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

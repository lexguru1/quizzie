import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { getQuestion } from "../../store/questions/selectors";
import { useState } from "react";
import Questions from "../../components/Questions";
import { getCurrent_qn } from "../../store/users/selectors";

export default function HomePage() {
  const questions = useSelector(getQuestion);
  const current_qn = useSelector(getCurrent_qn);
  // console.log(current_qn);
  useEffect(() => {}, [current_qn]);
  // console.log(questions);
  return (
    <div>
      <Questions question={questions[current_qn]} current_qn={current_qn} />
    </div>
  );
}

import React, { startTransition, useEffect } from "react";
import { useDispatch } from "react-redux";
import { newPrice } from "../../store/users/actions";
import { useState } from "react";
import { incrementQnNumber } from "../../store/users/actions";
// import { Button, Modal } from "bootstrap";
import { Modal, Button } from "react-bootstrap";
import { reset } from "../../store/users/actions";
import Timer from "../Timer";
import "./style.scss";

export default function Questions(props) {
  const [terminate, setTerminate] = useState("");
  const dispatch = useDispatch();
  const { question, current_qn } = props;
  const [show, setShow] = useState(false);
  const [startTimer, setStartTimer] = useState(false);

  const handleClose = () => {
    setShow(false);
    dispatch(reset());
  };
  const handleShow = () => setShow(true);
  useEffect(() => {
    setStartTimer(true);
  }, [current_qn]);
  console.log(question, current_qn);

  return (
    <>
      <div className="main-question-wrapper  row container flex-direction-row d-flex justify-content-center align-items-center">
        {/* {startTimer ? <Timer /> : ""} */}
        <div className="question-info col-12 d-flex flex-direction-row ">
          <div className="">{current_qn + 1}/15</div>
          <div className="px-5">{question.money}</div>
        </div>
        <div className="question-container p-5 background-blur-effect_without-background text-white col-12 d-flex justify-content-center">
          {question.Qn}
        </div>
        <div className="answer-container d-flex row justify-content-space-between">
          {question.Ans.map((value) => ({ value, sort: Math.random() }))
            .sort((a, b) => a.sort - b.sort)
            .map(({ value }) => value)
            .map((ans, index) => {
              return (
                <div
                  key={index}
                  className="col-6 d-flex justify-content-center"
                >
                  <button
                    className="m-2 answer-button justify-content-center background-blur-effect_without-background text-white"
                    onClick={(e) => {
                      e.preventDefault();
                      if (ans.result) {
                        dispatch(newPrice(question.money));
                        dispatch(incrementQnNumber());
                        //update current qn index
                      } else {
                        //terminate
                        setTerminate("Wrong answer");
                        handleShow();
                      }
                    }}
                  >
                    {ans.answer}
                  </button>
                </div>
              );
            })}
          <div>
            <Modal
              className="background-blur-effect_without-background"
              show={show}
              onHide={handleClose}
            >
              <Modal.Header>
                <Modal.Title>GAME OVER!</Modal.Title>
              </Modal.Header>
              <Modal.Body>Want to try again?</Modal.Body>
              <Modal.Footer>
                <Button variant="primary" onClick={handleClose}>
                  Try again
                </Button>
                <Button variant="primary" onClick={handleClose}>
                  Close
                </Button>
              </Modal.Footer>
            </Modal>
          </div>
        </div>
      </div>
    </>
  );
}

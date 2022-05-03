import React from "react";
import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Modal, Button } from "react-bootstrap";
import { reset } from "../../store/users/actions";
import { useSelector } from "react-redux";
import { getCurrent_qn } from "../../store/users/selectors";

const Timer = () => {
  const current_qn = useSelector(getCurrent_qn);
  const dispatch = useDispatch();
  const seconds = 20;
  const [secs, setTime] = useState(seconds);
  const [show, setShow] = useState(false);

  //   console.log(seconds);
  const handleClose = () => {
    setShow(false);
    dispatch(reset());
  };
  const handleShow = () => setShow(true);

  const tick = () => {
    if (secs === 0) {
      //   resetTimer();
      handleShow();
    } else {
      setTime(secs - 1);
    }
  };

  const resetTimer = () => {
    setTime(parseInt(seconds));
    // handleShow();
  };

  useEffect(() => {
    // resetTimer();
    const timerId = setInterval(() => tick(), 1000);
    return () => clearInterval(timerId);
  });

  return (
    <div>
      <p>{`${secs.toString().padStart(2, "0")}`}</p>
      <div>
        <Button variant="primary" onClick={() => resetTimer()}>
          reset
        </Button>
      </div>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>GAME OVER!</Modal.Title>
        </Modal.Header>
        <Modal.Body>Want to try again?</Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={handleClose}>
            Try again
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default Timer;

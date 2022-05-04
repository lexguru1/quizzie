import React from "react";
import { useSelector } from "react-redux";
import { getCurrent_qn } from "../../store/users/selectors";
import { useState } from "react";
import "./style.scss";
export default function SidePanel() {
  const [divColor, setDivColor] = useState("blue");
  const current_qn = useSelector(getCurrent_qn);
  const panel = [
    { Qn: 1, Money: 100 },
    { Qn: 2, Money: 200 },
    { Qn: 3, Money: 300 },
    { Qn: 4, Money: 500 },
    { Qn: 5, Money: 1000 },
    { Qn: 6, Money: 2000 },
    { Qn: 7, Money: 4000 },
    { Qn: 8, Money: 8000 },
    { Qn: 9, Money: 16000 },
    { Qn: 10, Money: 32000 },
    { Qn: 11, Money: 64000 },
    { Qn: 12, Money: 125000 },
    { Qn: 13, Money: 250000 },
    { Qn: 14, Money: 500000 },
    { Qn: 15, Money: "1 Million" },
  ];
  return (
    <div>
      <div>
        {panel.reverse().map((score, index) => {
          return (
            <div
              key={index}
              className={
                score.Qn === current_qn + 1
                  ? "highlighted border my-3 px-3 py-1 "
                  : "border my-3 px-3 py-1"
              }
            >
              {/* {score.Qn === current_qn + 1
                ? setDivColor("yellow")
                : setDivColor("blue")} */}
              <span className="text-white">{score.Qn}</span>
              <span className="px-5 text-white">{score.Money}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
}

'use client'

import { useEffect, useRef, useState } from "react";

export default function Home() {
  const [timer, settimer] = useState(0)
  const [timeon, settimeon] = useState(false)
  let interval = useRef(null);



  const handlestart = () => {
    if (timeon) return;
    settimeon(true);
    interval.current = setInterval(() => {
      settimer((prev) => prev + 1)
    }, 10)
  };


  const handlePause = () => {
    if (!timeon) return;
    settimeon(false);
    clearInterval(interval.current);
  };
  const handleReset = () => {
    settimeon(false);
    clearInterval(interval.current);
    settimer(0)
  };


  const formattime=(timer)=>{
    const minutes=Math.floor(timer/60000)
    .toString()
    .padStart(2,'0');
    const seconds = Math.floor((timer / 1000) % 60)
    .toString()
    .padStart(2, "0");
  const milliseconds = (timer % 1000).toString().padStart(3, "0");
  return { minutes, seconds, milliseconds };

  }
  const { minutes, seconds, milliseconds } = formattime(timer);

  return (
    <>
      <div className="container">
        <div className="wrapper">
          <p>
            <span className="mins">{minutes}</span>:<span className="seconds">{seconds}</span>:<span className="tens">{milliseconds}</span>
          </p> <br />
          <button onClick={handlestart} className="btn-start">Start</button>
          <button onClick={handlePause} className="btn-stop">Pause</button>
         
          <button onClick={handleReset} className="btn-reset">Reset</button>
        </div>
      </div>
    </>
  );
}

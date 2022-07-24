import React, { useState, useEffect } from "react";
import useSound from "use-sound";
import sound from "../../assets/freeSound.mp3";

import "./CurrentTime.css";

export const CurrenTime = ({ list, setListOfSeans }) => {
  const [play] = useSound(sound);
  const [time, setTime] = useState("");
  const startAlarm = (id) => {
    setListOfSeans((prev) => [
      ...prev.map((obj) => {
        if (obj.id === id.id) {
          return { ...obj, alarm: true };
        }
        return obj;
      }),
    ]);

    play();
  };

  const doNothing = () => {
    console.log("I had to make this fn for ternary operator ");
    console.log(new Date().toLocaleTimeString());
  };
  useEffect(() => {
    const intervalId = setInterval(() => {
      const findEachOne = list.find((item) => item.time === time);
      setTime(
        new Date().toLocaleTimeString([], {
          hour: "2-digit",
          minute: "2-digit",
        })
      );
      list.map((item) => item.time === time).includes(true)
        ? startAlarm(findEachOne)
        : doNothing();
    }, 1000);
    return () => clearInterval(intervalId);
  }, [time, list]);
  return (
    <>
      <div className="clock">Current Time: {time}</div>
    </>
  );
};

"use client";

import React, { FC, useEffect, useState } from "react";

type CountdownProps = {
  hours: number;
};

export const Countdown: FC<CountdownProps> = ({ hours }) => {
  const [time, setTime] = useState(hours * 60 * 60);

  useEffect(() => {
    const interval = setInterval(() => {
      setTime((prevTime) => prevTime - 1);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const formatTime = (time) => String(time).padStart(2, "0");

  const hoursLeft = Math.floor(time / 3600);
  const minutesLeft = Math.floor((time % 3600) / 60);
  const secondsLeft = time % 60;

  return (
    <div className="flex gap-4 text-secondary">
      <div className="rounded-md border border-green-400 p-6 text-center">
        <div className={"w-24 text-7xl"}>{formatTime(hoursLeft)}</div>
        <div className={"opacity-60"}>Годин</div>
      </div>
      <div className="rounded-md border border-green-400 p-6 text-center">
        <div className={"w-24 text-7xl"}>{formatTime(minutesLeft)}</div>
        <div className={"opacity-60"}>Хвилин</div>
      </div>
      <div className="rounded-md border border-green-400 p-6 text-center">
        <div className={"w-24 text-7xl"}>{formatTime(secondsLeft)}</div>
        <div className={"opacity-60"}>Секунд</div>
      </div>
    </div>
  );
};

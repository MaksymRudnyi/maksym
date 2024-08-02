"use client";

import React, { FC, useEffect, useState } from "react";

type CountdownProps = {
  hours: number;
  isPrimaryText?: boolean;
};

export const Countdown: FC<CountdownProps> = ({ hours, isPrimaryText }) => {
  const [time, setTime] = useState(hours * 60 * 60);

  useEffect(() => {
    const interval = setInterval(() => {
      setTime((prevTime) => prevTime - 1);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const formatTime = (time: number) => String(time).padStart(2, "0");

  const hoursLeft = Math.floor(time / 3600);
  const minutesLeft = Math.floor((time % 3600) / 60);
  const secondsLeft = time % 60;

  const textColor = isPrimaryText ? "text-primary" : "text-secondary";

  return (
    <div className={`flex gap-4 ${textColor}`}>
      <div className="rounded-md border border-green-400 p-3 text-center md:p-6">
        <div className={"w-20 text-5xl md:w-24 md:text-7xl"}>
          {formatTime(hoursLeft)}
        </div>
        <div className={"opacity-60"}>Годин</div>
      </div>
      <div className="rounded-md border border-green-400 p-3 text-center md:p-6">
        <div className={"w-20 text-5xl md:w-24 md:text-7xl"}>
          {formatTime(minutesLeft)}
        </div>
        <div className={"opacity-60"}>Хвилин</div>
      </div>
      <div className="rounded-md border border-green-400 p-3 text-center md:p-6">
        <div className={"w-20 text-5xl md:w-24 md:text-7xl"}>
          {formatTime(secondsLeft)}
        </div>
        <div className={"opacity-60"}>Секунд</div>
      </div>
    </div>
  );
};

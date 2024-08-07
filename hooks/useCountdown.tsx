import { useCallback, useEffect, useState } from "react";

import { COUNTDOWN_STORAGE_KEY, DEFAULT_COUNTDOWN_HOURS } from "@/config";

export const useCountdown = (timeInHours = DEFAULT_COUNTDOWN_HOURS) => {
  const [timeLeft, setTimeLeft] = useState(0);

  useEffect(() => {
    const currentTime = Date.now();
    let countdownEndTime = Number(localStorage.getItem(COUNTDOWN_STORAGE_KEY));

    if (!countdownEndTime || countdownEndTime <= currentTime) {
      countdownEndTime = currentTime + timeInHours * 60 * 60 * 1000;
      localStorage.setItem(COUNTDOWN_STORAGE_KEY, countdownEndTime.toString());
    }

    const difference = countdownEndTime - currentTime;
    setTimeLeft(difference > 0 ? Math.floor(difference / 1000) : 0);
  }, [timeInHours]);

  const resetCountdown = useCallback(() => {
    const newCountdownEndTime = Date.now() + timeInHours * 60 * 60 * 1000;
    localStorage.setItem(COUNTDOWN_STORAGE_KEY, newCountdownEndTime.toString());
    setTimeLeft(Math.floor((newCountdownEndTime - Date.now()) / 1000));
  }, [timeInHours]);

  return { timeLeft, resetCountdown };
};

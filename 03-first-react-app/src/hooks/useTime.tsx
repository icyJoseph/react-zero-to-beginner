import { useEffect, useState } from "react";

export const useTime = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const interval = window.setInterval(() => setTime(new Date()), 1_000);

    return () => clearInterval(interval);
  }, []);

  return time;
};

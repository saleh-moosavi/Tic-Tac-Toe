import { useEffect, useState } from "react";

export default function useTime() {
  const [time, setTime] = useState<String>("");
  useEffect(() => {
    const times = setInterval(() => {
      const newTime = new Date();
      setTime(newTime.toLocaleTimeString());
    }, 1000);
    return () => {
      clearInterval(times);
    };
  }, []);
  return { time };
}

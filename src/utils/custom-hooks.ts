import { useEffect, useRef, useState } from "react";

const useCountdown = ({
  initialMinutes,
  start,
  setStart,
  setIsFinish,
}: {
  initialMinutes: number;
  start: boolean;
  setStart: React.Dispatch<React.SetStateAction<boolean>>;
  setIsFinish: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  const [countDown, setCountDown] = useState(initialMinutes * 60 * 1000);
  const interval = useRef<any>(null);

  useEffect(() => {
    setCountDown(initialMinutes * 60 * 1000);
  }, [initialMinutes]);

  useEffect(() => {
    if (start) {
      setIsFinish(false);
      interval.current = setInterval(() => {
        setCountDown((old) => old - 1000);
      }, 1000);

      return () => clearInterval(interval.current);
    }
  }, [start]);

  useEffect(() => {
    if (countDown === 0) {
      setIsFinish(true);
      clearInterval(interval.current);
    }
  }, [countDown]);

  return { ...getReturnValues(countDown) };
};

const getReturnValues = (countDown: number) => {
  // calculate time left
  const minutes = Math.floor((countDown % (1000 * 60 * 60)) / (1000 * 60)).toString();
  const seconds = Math.floor((countDown % (1000 * 60)) / 1000).toString();

  return {
    minutes: minutes.length === 2 ? minutes : `0${minutes}`,
    seconds: seconds.length === 2 ? seconds : `0${seconds}`,
  };
};

export { useCountdown };

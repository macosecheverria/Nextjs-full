"use client"

import { useState } from "react";

export const useCounter = (value: number) => {
  const [counter, setCounter] = useState<number>(value);

  const handlerCounterSum = () => {
    setCounter(counter + 1);
  };

  const handlerCountSustract = () => {
    setCounter(counter - 1);
  };

  return {
    counter,
    handlerCounterSum,
    handlerCountSustract,
  };
};

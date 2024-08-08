"use client";

import { useCounter } from "../hooks/useCounter";

interface Props {
  value: number;
}

export const CartCounter = ({ value }: Props) => {
  const { counter, handlerCounterSum, handlerCountSustract } =
    useCounter(value);

  return (
    <>
      <span className="text-9xl">{counter}</span>
      <div className="flex">
        <button
          className="flex items-center justify-center p-2 rounded-xl bg-gray-900 text-white hover:bg-gray-600 transition-all w-[100px] mr-2"
          onClick={handlerCounterSum}
        >
          +1
        </button>
        <button
          className="flex items-center justify-center p-2 rounded-xl bg-gray-900 text-white hover:bg-gray-600 transition-all w-[100px] mr-2"
          onClick={handlerCountSustract}
        >
          -1
        </button>
      </div>
    </>
  );
};

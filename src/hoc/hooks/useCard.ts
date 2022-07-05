import { useState } from "react";

export const useCard = () => {
  const [counterClick, setCounterClick] = useState(0);
  const addCounterClick = (val: number) => {
    setCounterClick((actual) => Math.max(actual + val, 0));
  };

  return {
    counterClick,
    addCounterClick,
  };
};

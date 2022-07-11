import { createContext } from "react";

import { useCard } from "../hooks/useCard";
import { CardContextProps, CardProps } from "../interfaces/interfaces";

// import styles from "../styles/styles.module.css";

export const ProductContext = createContext({} as CardContextProps);
const { Provider } = ProductContext;

export const Card = ({ children, cardItems, className }: CardProps) => {
  const { counterClick, addCounterClick } = useCard();
  return (
    <Provider
      value={{
        counterClick,
        cardItems,
        addCounterClick,
      }}
    >
      <section className={className}>{children}</section>
    </Provider>
  );
};

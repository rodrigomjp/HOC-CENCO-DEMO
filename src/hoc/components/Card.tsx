import { createContext } from "react";
import { useCard } from "../hooks/useCard";
import { CardContextProps, CardProps } from "../interfaces/interfaces";

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
      <section className={className ? className : ""}>{children}</section>
    </Provider>
  );
};

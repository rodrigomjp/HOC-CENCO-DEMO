import { createContext } from "react";
import { useCard } from "../hooks/useCard";
import { ICardContextProps, ICardProps } from "../interfaces/interfaces";

export const ProductContext = createContext({} as ICardContextProps);
const { Provider } = ProductContext;

export const Card = ({ children, cardItems, className }: ICardProps) => {
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

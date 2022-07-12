import { ReactElement } from "react";

export interface CardProps {
  cardItems: CardItems;
  children?: ReactElement | ReactElement[];
  className?: string;
}

export interface CardItems {
  id: string;
  title: string;
  img?: string;
  desc?: string;
  dynamicComponentSons?: ReactElement | ReactElement[];
  className?: string;
  dynamicComponentSons2?: any;
  cousin?: any;
}

export interface CardContextProps {
  counterClick: number;
  cardItems: CardItems;
  addCounterClick: (value: number) => void;
  className?: string;
  style?: React.CSSProperties;
}

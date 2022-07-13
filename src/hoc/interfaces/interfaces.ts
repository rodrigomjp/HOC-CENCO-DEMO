import { ReactElement } from "react";

export interface ICardProps {
  cardItems: ICardItems;
  children?: ReactElement | ReactElement[];
  className?: string;
}

export interface ICardItems {
  id: string;
  title: string;
  img?: string;
  desc?: string;
  dynamicComponentSons?: ReactElement | ReactElement[];
  className?: string;
  dynamicComponentSons2?: any;
  cousin?: any;
}

export interface ICardContextProps {
  counterClick: number;
  cardItems: ICardItems;
  addCounterClick: (value: number) => void;
  className?: string;
  style?: React.CSSProperties;
}

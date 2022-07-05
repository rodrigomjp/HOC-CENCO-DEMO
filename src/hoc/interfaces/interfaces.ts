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
}

export interface CardContextProps {
  counterClick: number;
  cardItems: CardItems;
  addCounterClick: (value: number) => void;
}

export interface CardHOCProps {
  ({ children, cardItems }: CardProps): JSX.Element;
  Title: ({ title }: { title?: string }) => JSX.Element;
  Image: ({ img }: { img?: string }) => JSX.Element;
  Description: ({ desc }: { desc?: string }) => JSX.Element;
  Bscl?: ({ config }: { config?: ReactElement }) => ReactElement;
}

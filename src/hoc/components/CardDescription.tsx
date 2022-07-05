import { useContext } from "react";
import { ProductContext } from "./Card";

import styles from "../styles/styles.module.css";

export const CardDescription = ({
  desc,
  className,
}: {
  desc?: string;
  className?: string;
}) => {
  const { cardItems } = useContext(ProductContext);

  return (
    <div className={`${styles.cardDescription} ${className}`}>
      {desc ? desc : cardItems.desc}
    </div>
  );
};

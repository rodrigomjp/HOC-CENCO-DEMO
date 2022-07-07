import { useContext } from "react";
import { ProductContext } from "./Card";

import styles from "../styles/styles.module.css";

export const CardDescription = ({
  desc,
  className,
  style,
}: {
  desc?: string;
  className?: string;
  style?: React.CSSProperties;
}) => {
  const { cardItems } = useContext(ProductContext);

  return (
    <div className={`${styles.cardDescription} ${className}`} style={style}>
      {desc ? desc : cardItems.desc}
    </div>
  );
};

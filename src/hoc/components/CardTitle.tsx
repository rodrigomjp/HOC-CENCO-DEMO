import { useContext } from "react";
import { ProductContext } from "./Card";

import styles from "../styles/styles.module.css";

export const CardTitle = ({
  title,
  className,
}: {
  title?: string;
  className?: string;
}) => {
  const { cardItems } = useContext(ProductContext);

  return (
    <div className={`${className}`}>
      <span className={`${styles.cardTitle}`}>
        {title ? title : cardItems.title}
      </span>
    </div>
  );
};

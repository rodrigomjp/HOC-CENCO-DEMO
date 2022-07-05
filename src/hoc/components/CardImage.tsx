import { useContext } from "react";
import { ProductContext } from "./Card";

import styles from "../styles/styles.module.css";
import noImage from "../assets/no_image.jpeg";

export const CardImage = ({
  img = "",
  className,
}: {
  img?: any;
  className?: string;
}) => {
  const { cardItems } = useContext(ProductContext);
  let imgToShow: string;

  if (img) {
    imgToShow = img;
  } else if (cardItems.img) {
    imgToShow = cardItems.img;
  } else {
    imgToShow = noImage;
  }

  return (
    <div className={`${className}`}>
      <img className={`${styles.cardImg} `} src={imgToShow} alt="Product" />
    </div>
  );
};

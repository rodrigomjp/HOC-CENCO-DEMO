import { Component, CSSProperties, useContext } from "react";
import { ProductContext } from "./Card";

import styles from "../styles/styles.module.css";

// export const CardTitle = ({
//   title,
//   className,
//   style,
// }: {
//   title?: string;
//   className?: string;
//   style?: React.CSSProperties;
// }) => {
//   const { cardItems } = useContext(ProductContext);

//   return (
//     <div className={`${className}`} style={style}>
//       <span className={`${styles.cardTitle}`}>
//         {title ? title : cardItems.title}
//       </span>
//     </div>
//   );
// };

export type CardTitleProps = {
  title?: string,
  className?: string,
  style?: CSSProperties
}

export class CardTitle extends Component<CardTitleProps> {
  render() {
    const { className, title = 'Texto Por defecto', style } = this.props;
    return (
    <div className={`${className}`} style={style}>
      <span className={`${styles.cardTitle}`}>
        {title}
      </span>
    </div>
    )
  }
}

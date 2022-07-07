import { useCard } from "../hooks/useCard";

export const CardButtons = ({
  className,
  style,
}: {
  className?: string;
  style?: React.CSSProperties;
}) => {
  const { counterClick, addCounterClick } = useCard();
  const onMyClick = () => {
    addCounterClick(1);
  };
  return (
    <div className={`${className}`} style={style}>
      <p>Botón demo </p>
      <button onClick={() => onMyClick()}>Botón</button>
      <p>Click número {counterClick}</p>
    </div>
  );
};

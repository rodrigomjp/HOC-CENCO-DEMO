import { useCard } from "../hooks/useCard";
import { Button } from '@library/cenco-ux-components/layout';


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
      <Button variant="secondary" onClick={() => onMyClick()}>Botón</Button>
      <p>Click número {counterClick}</p>
    </div>
  );
};

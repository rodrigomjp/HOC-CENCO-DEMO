import { useCard } from "../hooks/useCard";

export const CardButtons = ({ className }: { className?: string }) => {
  const { counterClick, addCounterClick } = useCard();
  const onMyClick = () => {
    addCounterClick(1);
  };
  return (
    <div className={`${className}`}>
      <p>Botón demo </p>
      <button onClick={() => onMyClick()}>Botón</button>
      <p>Click número {counterClick}</p>
    </div>
  );
};

import {
  CardTitle,
  CardImage,
  CardButtons,
  CardDescription,
  Sons,
  Cousin,
} from ".";

export default function useDisplayComponent() {
  const CreateSon = ({ component, data, cousin }: any): any => {
    switch (component) {
      case "CardTitle":
        return <CardTitle title={data} />;
      case "CardImage":
        return <CardImage img={data} />;
      case "CardButtons":
        return <CardButtons />;
      case "CardDescription":
        return <CardDescription desc={data} />;
      case "Sons":
        return <Sons cousin={cousin} />;
      case "Cousin":
        return <Cousin />;
      default:
        return <></>;
    }
  };

  return { CreateSon };
}

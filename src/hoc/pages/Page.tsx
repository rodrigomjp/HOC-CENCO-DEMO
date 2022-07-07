import {
  Card,
  CardImage,
  CardTitle,
  CardDescription,
  CardButtons,
  BSonsComponent,
} from "../components";
// import { CardDescription } from "../components/CardDescription";
import styles from "../styles/styles.module.css";

import { response, response2 } from "./../../api";

import { CardItems } from "../interfaces/interfaces";
const items = {
  id: "1",
  title: "Estado del pedido",
  img: "./logo.png",
  desc: `Seguimiento de compra
  Recuperar boleta
  Cambiar datos de quien retira`,
  className: `${styles.FlexContainer}`,
};

const items2 = {
  id: "2",
  title: "Estado del pedido 2",
  img: "./logo2.jpeg",
  desc: `Seguimiento del pedido
    Recuperar boleta
    Cambiar datos de quien retira`,
};

const items3 = {
  id: "3",
  title: "Estado del pedido 3",
  img: "./logo3.png",
  desc: `Seguimiento de pedido
      Ver pedido
      No me ha llegado`,
  dynamicComponentSons: [
    <CardImage />,
    <CardTitle />,
    <CardDescription />,
    // <CardButtons />,
  ],
};

export const Page = () => {
  const resp = () => {
    try {
      const respuesta = JSON.parse(response2);
      // console.log(respuesta);

      return respuesta;
    } catch (err) {
      console.log(err);
      // return items2;
    }
  };

  const x: any = resp();
  // console.log(x[0]);
  // const DynamicSons = () => {
  //   try {
  //     let son: any;
  //     response.forEach((item) => {
  //       // console.log(JSON.parse(item.dynamicComponentSons.replace("`", "")));
  //       console.log(item.dynamicComponentSons);
  //     });
  //   } catch (err) {
  //     console.log(err);
  //   }
  // };

  return (
    <div>
      <h1>CencoDemo - HOC - Compund Component Pattern </h1>
      <hr />

      <div
        style={{
          display: "flex",
          flexDirection: "row",
          flexWrap: "wrap",
        }}
      >
        <Card cardItems={items}>
          <CardImage
            style={{
              boxShadow: " rgba(0,0,0,0.2)",
              width: "200px",
            }}
          />
          <CardTitle />
          <CardDescription />
        </Card>

        <br></br>

        <Card cardItems={items2}>
          <CardTitle />
          <CardImage />
          <CardDescription />
          <CardButtons />
        </Card>

        <br></br>

        <Card cardItems={x[0]}>
          <BSonsComponent />
        </Card>

        {/* <Card cardItems={resp()} className={items.className}>
          <BSonsComponent />
        </Card> */}
      </div>
    </div>
  );
};

import {
  Card,
  CardImage,
  CardTitle,
  CardDescription,
  CardButtons,
  BSonsComponent,
} from "../components";

import styles from "../styles/styles.module.css";
import { response2 } from "./../../api";

import { DynamicComponentSons } from "../components/DynamicComponentSons";

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
      return respuesta;
    } catch (err) {
      console.log(err);
    }
  };

  const x: any = resp();

  return (
    <div>
      <h1>CencoDemo - HOC - Compund Component Pattern </h1>

      <br />

      <br />
      <br />
      <hr />

      <div
        style={{
          display: "flex",
          flexDirection: "row",
          flexWrap: "wrap",
        }}
      >
        {/* className={styles.FlexContainer} 
        style={{ color: "red", textAlign: "center" }}
        style={{ width: "180px", fontSize: "20px" }}
        */}

        {/* 
            Solución 1 
            Descripción: Agregar o quitar componentes hijos de forma
            manuel
        
        */}
        <Card cardItems={items2}>
          <CardImage />
          <CardTitle />
          <CardDescription />
          <CardButtons />
        </Card>
        <br></br>
        {/* 
            Solución 2 
            Descripción: Agregar o quitar componentes hijos por
            configuración local.
            dynamicComponentSons se le pasa los hijos y BSonsComponent
            se encarga de desplegarlos.
        
        */}
        <Card cardItems={items3}>
          <BSonsComponent />
        </Card>
        {/* 
            Solución 3 
            Descripción: Agregar o quitar componentes hijos por
            configuración dinamica, mediante base de datos.
            dynamicComponentSons se le pasa los hijos y DynamicComponentSons
            se encarga de desplegarlos.
        
        */}
        <Card cardItems={x[0]}>
          <DynamicComponentSons />
        </Card>
      </div>
    </div>
  );
};

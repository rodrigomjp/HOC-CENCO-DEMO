export const response = [
  {
    id: "3",
    title: "Estado del pedido 3",
    img: "./logo3.png",
    desc: `Seguimiento de pedido
            Ver pedido
            No me ha llegado`,
    dynamicComponentSons: `[
      <CardImage />,
      <CardTitle title="nuevo" />,
      <CardDescription />,
      <CardButtons />,
    ],`,
  },
];

// style={{ color: 'red', textAlign: 'center' }}
export const response2 = `
[
    {
       "id":"3",
       "title":"Estado del pedido 3",
       "img":"./logo3.png",
       "desc":"Seguimiento de pedido",
       "dynamicComponentSons":[
          "<CardImage />",
          "<CardTitle title='nuevo texto' />",
          "<CardDescription />",
          "<CardButtons />"
       ]
    }
 ]
`;

export const response3 = `
[
    {
       "id":"3",
       "title":"Estado del pedido Dynamic 3",
       "img":"./logo3.png",
       "desc":"Seguimiento de pedido",
       "dynamicComponentSons2":[
          {
            "component":"CardTitle",
            "order":"3",
            "className":"",
            "style":"",
            "data":""
          },
          {
            "component":"CardImage",
            "order":"1",
            "className":"",
            "style":"",
            "data":""
          },
          {
            "component":"CardDescription",
            "order":"2",
            "className":"",
            "style":"",
            "data":""
          },
          {
            "component":"Sons",
            "order":"4",
            "className":"",
            "style":"",
            "data":"",
            "cousin":[
              {
                "component":"Cousin",
                "order":"1",
                "className":"",
                "style":"",
                "data":""
              }
            ]
          }
       ]
    }
 ]
`;

import { useEffect, useState } from "react";

export interface IProduct {
  department: string;
  store: number;
  brandName: string;
  vendorId: string;
  code: string;
  isMkp: boolean;
  storeName: string;
  description: string;
  quantity: number;
  originalQuantity?: number;
  priceByUnit: number;
  discount: number;
  lineNumber: number;
  isService: boolean;
  displayTrackingForServices: boolean;
  isBigTicket: boolean;
  total: number;
  changeTicketUrl: string;
  unitOfMeasurement: string;
  dte_url: string;
  imageUrl: string;
  status: string;
  config?: IConfig;
}

export interface IConfig {
  url: string;
  reason: boolean;
  check: boolean;
  request: boolean;
  send: boolean;
  unitPrice: boolean;
}
interface IData {
  data: IProduct[];
}
export default function useProducts() {
  const [products, setProducts] = useState<IData>();
  const [config, setConfig] = useState<IConfig>();
  const [loading, setLoading] = useState<boolean>();
  useEffect(() => {
    setLoading(true);
    const fetchData = async () => {
      const bandera = "paris";
      const env = {
        jumbo: {
          url: "https://run.mocky.io/v3/15f32089-253b-4599-ab2a-765c9ef45c06",
          reason: false,
          check: true,
          request: true,
          send: true,
          unitPrice: true,
        },
        paris: {
          url: "https://run.mocky.io/v3/be723c8a-7213-41fe-843b-716a519b1c70",
          reason: true,
          check: true,
          request: true,
          send: false,
          unitPrice: false,
        },
        new: {
          url: "https://run.mocky.io/v3/15f32089-253b-4599-ab2a-765c9ef45c06",
          reason: false,
          check: false,
          request: false,
          send: false,
          unitPrice: false,
        },
      };
      const environment = env[bandera]
        ? env[bandera]
        : {
            url: "https://run.mocky.io/v3/15f32089-253b-4599-ab2a-765c9ef45c06",
            reason: false,
            check: false,
            request: false,
            send: false,
            unitPrice: false,
          };
      try {
        const response = await fetch(environment.url);
        if (response.status === 200) {
          response.json().then((res: any) => {
            setProducts({
              data: res,
            });
            setConfig(environment);
          });
        }
        console.log("response " + response.status, response);
        setLoading(false);
      } catch (e) {
        setLoading(false);
        console.log("fallo :C?", e);
      }
    };
    fetchData();
  }, []);
  return { products, config, setConfig, loading };
}

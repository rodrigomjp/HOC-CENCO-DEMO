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
}

interface IData {
  data: IProduct[];
}
export default function useProducts() {
  const [products, setProducts] = useState<IData>();
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://run.mocky.io/v3/be723c8a-7213-41fe-843b-716a519b1c70"
        );
        if (response.status === 200) {
          response.json().then((res: any) => {
            setProducts({
              data: res.data,
            });
          });
        }
        console.log("response ", response);
      } catch (e) {
        console.log("fallo :C?", e);
      }
    };
    fetchData();
  }, []);
  return { products };
}

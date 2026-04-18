// Datos que se espera recibir para un producto
export interface Product {
  id: string;
  name: string;
  type: "ahorro" | "corriente" | "CDT";
  interestRate: number;
  minAmount: number;
  description: string;
}

//tipo de los datos que se espera recubir

export interface Product {
  id: string;
  name: string;
  type: 'ahorro' | 'corriente' | 'CDT';
  interestRate: number;
  minAmount: number;
  description: string;
}

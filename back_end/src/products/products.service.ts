import { Injectable } from '@nestjs/common';
import { Product } from './interfaces/product.interface';
// COnstantes que va a traer el front-end
const products: Product[] = [
  {
    id: '1',
    name: 'Cuenta de Ahorro Digital',
    type: 'ahorro',
    interestRate: 4.5,
    minAmount: 50000,
    description: 'Cuenta de ahorro con rendimientos mensuales y sin cuota de manejo.',
  },
  {
    id: '2',
    name: 'Cuenta Corriente Plus',
    type: 'corriente',
    interestRate: 1.2,
    minAmount: 100000,
    description: 'Cuenta corriente ideal para transacciones frecuentes y empresas.',
  },
  {
    id: '3',
    name: 'CDT 180 días',
    type: 'CDT',
    interestRate: 11.5,
    minAmount: 500000,
    description: 'Certificado de depósito a término con alta rentabilidad a 180 días.',
  },
  {
    id: '4',
    name: 'Ahorro Programado',
    type: 'ahorro',
    interestRate: 6.0,
    minAmount: 20000,
    description: 'Ahorra mes a mes con aportes automáticos y gana más intereses.',
  },
  {
    id: '5',
    name: 'CDT 360 días',
    type: 'CDT',
    interestRate: 13.2,
    minAmount: 1000000,
    description: 'Máxima rentabilidad con certificado de depósito a un año plazo.',
  },
];

// Servicios de los productos, Busqueda generak, busqueda por id o especifica y busqueda por tipo

@Injectable()
export class ProductsService {
  findAll(): Product[] {
    return products;
  }

  findOne(id: string): Product | undefined {
    return products.find((p) => p.id === id);
  }

  findByType(type: string): Product[] {
    return products.filter((p) => p.type === type);
  }
}
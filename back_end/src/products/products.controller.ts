import { Controller, Get, Param, Query } from '@nestjs/common';
import { ProductsService } from './products.service';

// Controlador para llamar a los metodos del servicio y retornar los productos 
@Controller('products')
export class ProductsController {
  constructor(private readonly productsService: ProductsService) {}

  @Get()
  findAll(@Query('type') type?: string) {
    if (type) {
      return this.productsService.findByType(type);
    }
    return this.productsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.productsService.findOne(id);
  }
}
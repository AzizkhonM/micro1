import { Injectable } from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Product } from './entities/product.entity';
import { Repository } from 'typeorm';

@Injectable()
export class ProductService {
  constructor(@InjectRepository(Product) private readonly productRepo: Repository<Product>){}

  create(createProductDto: CreateProductDto) {
    const { title, image } = createProductDto
    return this.productRepo.save({ title, image })
  }

  findAll(): Promise<Product[]> {
    return this.productRepo.find();
  }

  findOne(id: number): Promise<Product[]> {
    return this.productRepo.findBy({ id });
  }

  update(id: number, updateProductDto: UpdateProductDto) {
    return this.productRepo.update({ id }, updateProductDto);
  }

  remove(id: number) {
    return this.productRepo.delete({ id });
  }
}

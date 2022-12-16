import { MongoDB } from '../../db/MongoDB.js';
import { ProductModel } from '../../models/index.js';

export class ProductsMongo extends MongoDB {
  constructor() {
    super({
      name: ProductModel.ProductCollection,
      schema: ProductModel.ProductSchema,
    });
  }
};
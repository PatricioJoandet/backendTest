import { MongoDB } from '../../db/MongoDB.js';
import { CartModel } from '../../models/index.js';

export class CartsMongo extends MongoDB {
  constructor() {
    super({
      name: CartModel.CartCollection,
      schema: CartModel.CartSchema
    });
   }

   async getById(id) {
    const response = await this.model.findById(id).populate('products');
    return response;
   }
}
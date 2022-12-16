
import { CartsMongo } from './Carts/Cart'
import { ProductsMongo } from './Product/Product.js'
import { UsersMongo } from './Users/User'
import { MongoDBService } from '../services/index.js'

const getDaos = () => {
  MongoDBService.init();
  return {
    ProductDao: new ProductsMongo(),
    CartDao: new CartsMongo(),
    // MessageDao: new MessagesMongo() **NO CREADO**
    UserDao: new UsersMongo()
  }
}

const { ProductDao, CartDao, UserDao } = getDaos();

export { ProductDao, CartDao, UserDao };
import { MongoDB } from '../../db/MongoDB.js';
import { UserModel } from '../../models/index.js';

export class UsersMongo extends MongoDB {
  constructor(){
    super({
      name: UserModel.UserCollection,
      schema: UserModel.UserSchema,
    });
  }
};
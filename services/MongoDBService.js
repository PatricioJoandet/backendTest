import { config } from '../config/index.js';
import mongoose from 'mongoose';

const init = async () => {
  try {
    mongoose.connect(config.DATABASE.mongo.url, {
      dbName: config.DATABASE.mongo.dbName
    });
    console.log('Connection with MongoDB succesful 🤠');
  } catch(error) {
    console.log(`Error: ${error}`);
  }
}

export const MongoDBService = { init, };
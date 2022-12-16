import dotenv from 'dotenv';
dotenv.config();

const config = {
  SERVER: {
    PORT: process.env.PORT || 8080
  },
  DATABASE: {
    mongo: {
      url: process.env.MONGO_URL,
      dbName: process.env.MONGO_NAME
    }
  }
}

export { config };
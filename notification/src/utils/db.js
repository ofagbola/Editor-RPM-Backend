import mongoose from 'mongoose';
import logger from './logger.js';

export const connectDB = async () => {
  try {
    const uri = `mongodb://${process.env.MONGO_INITDB_ROOT_USERNAME}:${process.env.MONGO_INITDB_ROOT_PASSWORD}@${process.env.MONGO_INITDB_HOST}:27017/${process.env.MONGO_INITDB_DATABASE}?retryWrites=true&writeConcern=majority&authSource=admin`;
    await mongoose.connect(uri, {});
    logger.info(`Database connected successfully`);
  } catch (error) {
    logger.error(`Database connection failed ${error}`);
  }
};

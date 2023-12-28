import mongoose from "mongoose";

interface Options {
  mongoUrl: string;
  dbName: string;
}

export class MongoDatabase {
  static async connect(options: Options) {
    const { dbName, mongoUrl } = options;    
    try {
      await mongoose.connect(mongoUrl, {
        dbName,
      });

      console.log("Mongo Connected");
      return true;
    } catch (error) {
      console.log("Mongo Connected");
      throw error;
    }
  }
}

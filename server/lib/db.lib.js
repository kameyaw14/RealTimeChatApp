import mongoose from "mongoose";

export const connectDB = async () => {
  try {
    const connect = await mongoose.connect(process.env.MONGODB_URI, {
      serverSelectionTimeoutMS: 20000,
      connectTimeoutMS: 20000,
    });
    console.log("MongoDb connected:", connect.connection.host);
  } catch (error) {
    console.log("Mongo connection error:", error);
  }
};

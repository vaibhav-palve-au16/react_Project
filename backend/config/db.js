import dotenv from "dotenv";
import mongoose from "mongoose";

dotenv.config();
const connectdb = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URL, {
      useUnifiedTopology: true,
      useNewUrlParser: true,
      useCreateIndex: true,
    });
    console.log(`MongoDB Connected : ${conn.connection.host}`.cyan.underline);
  } catch (error) {
    console.log(`error Massage ${error}`.red.underline.bold);
    process.exit(1);
  }
};

export default connectdb;

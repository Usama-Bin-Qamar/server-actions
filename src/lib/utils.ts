import mongoose from "mongoose";

export const connectToDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO!);
    const connection = mongoose.connection;
    console.log("MongoDB connected");
    connection.on("connected", () => {
      console.log("MongoDB connected");
    });
    connection.on("error", () => {
      console.log("error connected");
      process.exit();
    });
  } catch (error) {
    console.log(error);
    // throw new Error(error);
  }
};

import mongoose from "mongoose";

export const connectToDB = async () => {
  const connection = {};
  try {
    if (connection.isConnected) return;
    const db = await mongoose.connect(process.env.MONGO);
    connection.isConnected = db.connections[0].readyState;
    console.log("=> Database connected successfully");
  } catch (err) {
    console.log(err, "herer");
    throw new Error(err);
  }
};

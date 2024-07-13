import mongoose from "mongoose";

export const connectToDB = async () => {
  const connection = {};
  console.log(process.env.MONGO, "mongo");
  try {
    console.log(connection, "con");
    if (connection.isConnected) return;
    const db = await mongoose.connect(process.env.MONGO);
    console.log(db, "db");
    connection.isConnected = db.connections[0].readyState;
  } catch (err) {
    console.log(err, "herer");
    throw new Error(err);
  }
};

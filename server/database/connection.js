import mongoose from "mongoose";
export default async function connection() {
  await mongoose.connect(process.env.ATLAS_URL);
  console.log("database connected");
}

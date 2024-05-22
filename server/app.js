import express from "express";
import { connectDB } from "./utils/features.js";
import dotenv from "dotenv";
import userRoute from "./routes/user.js";
dotenv.config({
  path: "./.env",
});
const mongoUrl = process.env.MONGO_URI;
const port = process.env.PORT;
connectDB(mongoUrl);

const app = express();

app.use("/user", userRoute);

app.get("/", (req, res) => {
  res.send("Hello from express!");
});

app.listen(port , () => {
  console.log(`server is running on port 3000`);
});

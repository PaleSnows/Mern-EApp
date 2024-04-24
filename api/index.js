import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import mongoose from "mongoose";
dotenv.config();

const app = express();

mongoose
  .connect(process.env.MONGO)
  .then(() => {
    console.log("Mongodb connected successfully!");
  })
  .catch((err) => {
    console.log(err);
  });
  
app.use(cors());
app.use(express.json())


// app.use('/',)

app.listen(process.env.PORT, () => {
  console.log(`Server running on ${process.env.PORT}`);
});

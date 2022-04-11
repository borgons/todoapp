import mongoose, { ConnectOptions } from "mongoose";
import express from "express";
import dotenv from "dotenv";

import todo from './routes/routes';

const app = express();

dotenv.config();

app.use(express.urlencoded({
   extended: false
}));

app.use(express.json());

mongoose.connect(
   `${process.env.MONGO_URI}`,
   {
      useUnifiedTopology: true,
      useNewUrlParser: true,
   } as ConnectOptions,
   () => {
      console.log("DB Connected");
   }
);  

app.use("/", todo);
app.listen(process.env.PORT || 8000, () => {
   console.log("Server is rocking at 8000");
});

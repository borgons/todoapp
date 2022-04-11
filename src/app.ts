import mongoose, { ConnectOptions } from "mongoose";
import express from "express";
import dotenv from "dotenv";

import todo from './routes/routes';

dotenv.config();

const app = express();

app.use(express.urlencoded({
   extended: false
}));

app.use(express.json());

mongoose.connect(
   process.env.MONGO_URL as string,
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

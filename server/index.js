import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";

import postRouter from "./route/posts.js";
import userRouter from "./route/users.js";

const app = express();
dotenv.config()
app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());
// app.use(express.urlencoded());
// app.use(express.json())

app.use("/posts", postRouter);
app.use("/user", userRouter);

const PORT = process.env.PORT || 5000
mongoose
  .connect(process.env.CONNECTION_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() =>
    app.listen(PORT, () =>
      console.log("server running on port " +PORT )
    )
  )
  .catch((err) => {
    console.log(err.message);
  });

// no necessary
  // mongoose.set("useFindAndModify", false);

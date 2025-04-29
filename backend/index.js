import express from "express";
import { PORT, mongoDBURL } from "./config.js";
import mongoose from "mongoose";
import { Book } from "./models/bookModel.js";
import booksRoute from "./routes/booksRoute.js";

const app = express();

app.use(express.json());

app.use("/books", booksRoute );

app.get("", (req, res) => {
  res.status(234).send(`Welcome to MERN Project`);
});



mongoose
  .connect(mongoDBURL)
  .then(() => {
    console.log("Database Connected");
    app.listen(PORT, () => {
      console.log(`App listens of port ${PORT}:- http://localhost:5555/`);
    });
  })
  .catch((err) => console.error(err));

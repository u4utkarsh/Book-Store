import express from "express";
import { PORT, mongoDBURL } from "./config.js";
import mongoose from "mongoose";
import { Book } from "./models/bookModel.js";
import booksRoute from "./routes/booksRoute.js";
import cors from "cors";

const app = express();

//default cors allows all origin
app.use(cors());

app.use(express.json());


app.use("/books", booksRoute );

app.get("", (req, res) => {
  res.status(234).send(`Welcome to MERN Project`);
});

//database connection
mongoose
  .connect(mongoDBURL)
  .then(() => {
    console.log("Database Connected");
    app.listen(PORT, () => {
      console.log(`App listens of port ${PORT}:- http://localhost:5555/`);
    });
  })
  .catch((err) => console.error(err));

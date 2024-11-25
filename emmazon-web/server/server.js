import express from "express";
import dotenv from "dotenv";
import { connectDB } from "./config/db.js";
import cors from "cors";
import productRoutes from "./routes/productRoutes.js";
import userRoutes from "./routes/userRoutes.js";

dotenv.config();

connectDB();

const app = express();

app.use(cors());
app.use(express.json()); //body parser(this will allow us accept json data from body)

//product api
app.use("/products", productRoutes);
//user api
app.use("/user", userRoutes);

app.get("/", (req, res) => {
  res.send("Api runnning...");
});

const PORT = 5000;

app.listen(PORT, console.log(`Server running on port ${PORT}`));

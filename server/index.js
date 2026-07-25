import app from "./src/app.js";
import express from "express";

import "dotenv/config";

app.use(express.json());

const PORT = process.env.PORT;

app.listen(PORT, () => {
  console.log(`Server is running on ${PORT}`);
});

import app from "./src/app.js";

import "dotenv/config";
import connectDB from "./src/config/bd.js";

const PORT = process.env.PORT || 3000;

connectDB();

app.listen(PORT, () => {
  console.log(`Server is running on ${PORT}`);
});

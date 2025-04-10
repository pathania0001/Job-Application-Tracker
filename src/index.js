
import dotenv from "dotenv";
import app from "./app.js";
import connectDB from "./config/db.js";

dotenv.config();

const port = process.env.PORT || 5500;

app.on("error", (err) => {
  console.error("Error in Express", err);
  throw err;
});

const server = app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});

server.setTimeout(10 * 60 * 1000);

connectDB();

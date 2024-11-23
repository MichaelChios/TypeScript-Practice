import express, { Application } from "express";
import routes from "./routes";

const app: Application = express();

// Routes
app.use("/", routes);

// Server
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

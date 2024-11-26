import express, { Application } from "express";
import routes from "./routes";

const app: Application = express();

// Server
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

// Routes
app.use(express.static("public")); // Serves static files from the public folder
app.use(express.json()); // Parses JSON data from requests
app.use(express.urlencoded({ extended: true })); // Parses URL-encoded form data (important for form submissions)
app.use("/", routes);

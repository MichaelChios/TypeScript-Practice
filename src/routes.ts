import { Request, Response, Router } from "express";
import {createUser, getUsers} from "./controllers/userController";
import validate from "./middleware/validateReq";
import userSchema from "./models/userSchema";

const router = Router();

router.get("/", (req: Request, res: Response) => {
  res.sendFile("index.html", { root: "./src/public" });
});

// Endpoint for getting the IP address
router.get("/get-ip", (req: Request, res: Response) => {
  const clientIp = req.headers["x-forwarded-for"] || req.socket.remoteAddress;
  res.json({ ip: clientIp });
});

// Endpoint for status OK
router.get("/status", (req: Request, res: Response) => {
  res.json({ status: "OK" });
});

// Endpoint for creating a user
router.post("/signup", validate(userSchema), createUser);

// Endpoint for getting all users 
router.get("/users", getUsers);

export default router;

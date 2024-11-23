import { Request, Response, Router } from "express";

const router = Router();

// Endpoint for
router.get("/get-ip", (req: Request, res: Response) => {
  const clientIp = req.headers["x-forwarded-for"] || req.socket.remoteAddress;
  res.json({ ip: clientIp });
});

// Endpoint που επιστρέφει status OK
router.get("/status", (req: Request, res: Response) => {
  res.json({ status: "OK" });
});

export default router;

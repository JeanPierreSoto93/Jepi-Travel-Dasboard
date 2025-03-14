import type { Express } from "express";
import { createServer, type Server } from "http";
import { setupAuth } from "./auth";
import { storage } from "./storage";

export async function registerRoutes(app: Express): Promise<Server> {
  setupAuth(app);

  app.get("/api/users/:id/profile", async (req, res) => {
    if (!req.isAuthenticated()) return res.sendStatus(401);
    
    const user = await storage.getUser(parseInt(req.params.id));
    if (!user) return res.sendStatus(404);
    
    res.json(user);
  });

  const httpServer = createServer(app);
  return httpServer;
}

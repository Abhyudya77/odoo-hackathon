import express from "express";
import {
  getPendingEvents,
  approveEvent,
  rejectEvent,
  verifyOrganizer,
  banUser,
} from "../controllers/adminController.js";
import { protect, adminOnly } from "../middleware/authMiddleware.js";

const router = express.Router();

router.use(protect, adminOnly);

router.get("/pending-events", getPendingEvents);
router.put("/event/:id/approve", approveEvent);
router.put("/event/:id/reject", rejectEvent);

router.put("/user/:id/verify", verifyOrganizer);
router.put("/user/:id/ban", banUser);

export default router;

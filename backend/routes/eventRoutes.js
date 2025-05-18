import express from "express";
import {
  createEvent,
  getAllEvents,
  getUserEvents,
  updateEvent,
  deleteEvent,
  rsvpEvent,
} from "../controllers/eventController.js";
import { protect } from "../middleware/authMiddleware.js";

const router = express.Router();

router.get("/", getAllEvents);
router.post("/:id/rsvp", rsvpEvent);

router.post("/", protect, createEvent);
router.get("/my-events", protect, getUserEvents);
router.put("/:id", protect, updateEvent);
router.delete("/:id", protect, deleteEvent);

export default router;

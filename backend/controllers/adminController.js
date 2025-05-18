import Event from "../models/Event.js";
import User from "../models/User.js";

export const getPendingEvents = async (req, res) => {
  try {
    const events = await Event.find({ status: "pending" }).populate("creator", "name email");
    res.json(events);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

export const approveEvent = async (req, res) => {
  try {
    const event = await Event.findById(req.params.id);
    if (!event) return res.status(404).json({ message: "Event not found" });

    event.status = "approved";
    await event.save();
    res.json({ message: "Event approved" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

export const rejectEvent = async (req, res) => {
  const { note } = req.body;
  try {
    const event = await Event.findById(req.params.id);
    if (!event) return res.status(404).json({ message: "Event not found" });

    event.status = "rejected";
    event.adminNotes = note || "";
    await event.save();
    res.json({ message: "Event rejected" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

export const verifyOrganizer = async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    if (!user) return res.status(404).json({ message: "User not found" });

    user.isVerifiedOrganizer = true;
    await user.save();
    res.json({ message: "User verified as organizer" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

export const banUser = async (req, res) => {
  const { reason, expiresAt } = req.body;
  try {
    const user = await User.findById(req.params.id);
    if (!user) return res.status(404).json({ message: "User not found" });

    user.isBanned = true;
    user.banReason = reason;
    user.banExpiresAt = expiresAt || null;
    await user.save();
    res.json({ message: "User banned" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

import Event from "../models/Event.js";

export const createEvent = async (req, res) => {
  const { title, description, category, location, date } = req.body;
  try {
    const event = await Event.create({
      title,
      description,
      category,
      location,
      date,
      creator: req.user._id,
    });
    res.status(201).json(event);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

export const getAllEvents = async (req, res) => {
  try {
    const events = await Event.find({ status: "approved" }).populate("creator", "name email");
    res.json(events);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

export const getUserEvents = async (req, res) => {
  try {
    const events = await Event.find({ creator: req.user._id });
    res.json(events);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

export const updateEvent = async (req, res) => {
  const { id } = req.params;
  try {
    const event = await Event.findById(id);
    if (!event) return res.status(404).json({ message: "Event not found" });
    if (String(event.creator) !== req.user._id.toString()) {
      return res.status(403).json({ message: "Unauthorized" });
    }

    Object.assign(event, req.body);
    const updated = await event.save();
    res.json(updated);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

export const deleteEvent = async (req, res) => {
  const { id } = req.params;
  try {
    const event = await Event.findById(id);
    if (!event) return res.status(404).json({ message: "Event not found" });
    if (String(event.creator) !== req.user._id.toString()) {
      return res.status(403).json({ message: "Unauthorized" });
    }

    await event.deleteOne();
    res.json({ message: "Event deleted" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

export const rsvpEvent = async (req, res) => {
  const { id } = req.params;
  const { name, email, phone, numberOfGuests } = req.body;
  try {
    const event = await Event.findById(id);
    if (!event) return res.status(404).json({ message: "Event not found" });

    event.rsvps.push({ name, email, phone, numberOfGuests });
    await event.save();
    res.status(200).json({ message: "RSVP successful" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

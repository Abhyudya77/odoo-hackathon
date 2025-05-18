import mongoose from "mongoose";

const rsvpSchema = new mongoose.Schema(
  {
    name: String,
    email: String,
    phone: String,
    numberOfGuests: {
      type: Number,
      default: 1,
    },
  },
  { timestamps: true }
);

const eventSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },

    description: {
      type: String,
      required: true,
    },

    category: {
      type: String,
      enum: [
        "Garage Sale",
        "Sports Match",
        "Community Class",
        "Volunteer Opportunity",
        "Exhibition",
        "Festival",
      ],
      required: true,
    },

    location: {
      address: String,
      coordinates: {
        lat: Number,
        lng: Number,
      },
    },

    date: {
      type: Date,
      required: true,
    },

    creator: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },

    rsvps: [rsvpSchema],

    status: {
      type: String,
      enum: ["pending", "approved", "rejected", "cancelled"],
      default: "pending",
    },

    adminNotes: {
      type: String,
      default: "",
    },
  },
  { timestamps: true }
);

const Event = mongoose.model("Event", eventSchema);
export default Event;

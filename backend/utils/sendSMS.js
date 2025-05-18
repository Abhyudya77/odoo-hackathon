import twilio from "twilio";
import { sendSMS } from "../utils/sendSMS.js";

const client = twilio(process.env.TWILIO_SID, process.env.TWILIO_AUTH);

export const sendSMS = async (to, message) => {
  try {
    await client.messages.create({
      body: message,
      from: process.env.TWILIO_PHONE,
      to,
    });
    console.log(`📱 SMS sent to ${to}`);
  } catch (error) {
    console.error("SMS error:", error);
  }
};

await sendSMS(user.phone, `Reminder: ${event.title} is tomorrow at ${event.location.address}`);

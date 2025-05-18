import nodemailer from "nodemailer";
import { sendEmail } from "../utils/sendEmail.js";

const transporter = nodemailer.createTransport({
  service: "gmail", 
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

export const sendEmail = async (to, subject, html) => {
  try {
    await transporter.sendMail({
      from: `"Community Events" <${process.env.EMAIL_USER}>`,
      to,
      subject,
      html,
    });
    console.log(`📧 Email sent to ${to}`);
  } catch (error) {
    console.error("Email error:", error);
  }
};

await sendEmail(
  user.email,
  "Event Reminder",
  `<p>Hi ${user.name}, don't forget your event tomorrow: <strong>${event.title}</strong></p>`
);

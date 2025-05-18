# odoo-hackathon
A location-aware platform for local event participation and community engagement.


Community Events Platform

A location-aware platform designed to facilitate interaction, visibility, and participation within defined geographic communities.

## Features

User Functions:
  - Post, edit, and delete community events.
  - Browse events by category:
    - Garage Sales
    - Sports Matches (local cricket, football, tennis, etc.)
    - Community Classes (yoga, art, workshops)
    - Volunteer Opportunities (clean-up drives, donation camps)
    - Exhibitions
    - Small Festivals or Celebrations
  - Mark interest to attend events with minimal form (name, email, phone, number of attendees).
  - Receive notifications via Email, SMS, or WhatsApp:
    - Reminder 1 day before the event.
   

  Admin Functions:
  - View, approve, or reject submitted events.
  - Flag and remove inappropriate content.
  - View event history per user.
  - Assign "Verified Organizer" status.
  - Ban users if necessary.

## Technology Stack

- Backend: Node.js, Express, MongoDB
- Frontend: React.js
- Notifications: Integration with Email, SMS, WhatsApp APIs (e.g., Twilio)

## Project Structure

 frontend/
 ├── public/
 └── index.html
├── src/
│   ├── assets/            # Static images, icons
│   ├── components/        # Reusable UI elements (Navbar, EventCard, etc.
│   ├── pages/             # Page components (Home, EventDetail, PostEvent)
│   ├── hooks/             # Custom hooks (e.g., useEvents)
│   ├── utils/             # Formatters, API handlers
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css          # Tailwind imports
├── tailwind.config.js
├── postcss.config.js
└── package.json 



├── backend/                        # Express.js + MongoDB API 
│   ├── config/                     # DB and environment configuration 
│   │   └── db.js 
│   │ 
│   ├── controllers/               # Business logic for routes 
│   │   ├── eventController.js 
│   │   ├── authController.js 
│   │   └── adminController.js 
│   │ 
│   ├── middleware/                # Auth, error handling, role checks 
│   │   ├── authMiddleware.js 
│   │   └── errorMiddleware.js 
│   │ 
│   ├── models/                    # Mongoose schemas 
│   │   ├── User.js 
│   │   └── Event.js 
│   │ 
│   ├── routes/                    # Express routes 
│   │   ├── eventRoutes.js 
│   │   ├── authRoutes.js 
│   │   └── adminRoutes.js 
│   │ 
│   ├── utils/                     # Utility functions (email/SMS) 
│   │   ├── emailService.js 
│   │   └── smsService.js 
│   │ 
│   ├── index.js                   # Entry point 
│   └── package.json 
│ 



Your Backend Already Supports:
Feature	Backend Ready?	Notes
Create/Edit/Delete events	                            ✅  Already handled in your event controller
Browse/filter events	                                ✅  You may want to add filtering by category
RSVP with name, email, phone, no signup required	    ✅  RSVP model is defined; simple form will work
Admin approval, status flags	                        ✅  Your event model and admin routes handle this
Notifications (email/SMS/WhatsApp)	                  ✅ (basic)  Configs ready — you just need to call them correctly


Ready for pull requent and do necessary change in program 

**ERROR AND  NOT RECTIFIED ** :-
- However program still is not able to handle event cancellation and rescheduling.
- Login and register page is not done yet.
- Classical and beautifiying pages and look nice is not done yet.




const express = require("express");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 3000;

// Serve static files from the "public" directory
app.use(express.static(path.join(__dirname, "public")));

// Serve the homepage
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "views", "index.html"));
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});











// Experiment 3A

// 🎯 Aim:
// To develop a simple web application using HTML, CSS, JavaScript (Frontend) and Node.js with Express (Backend) that displays a company profile with services, testimonials, and a contact form.
// ________________________________________
// 🧪 Objective / Purpose:
// •	Learn to build a complete web app using modern web technologies.
// •	Understand how a Node.js server serves web pages and assets.
// •	Demonstrate usage of Express middleware and routing.
// •	Design a user-friendly frontend with Bootstrap.
// •	Handle static assets and page navigation.
// Based on the files you provided, your experiment is a basic web application developed using:
// •	Frontend: HTML, CSS (including Bootstrap), JavaScript
// •	Backend: Node.js with Express.js
// •	Folder Structure (implied): Static files are likely inside a public/ folder (for images, CSS, JS), and views/index.html is the main HTML page served
// ________________________________________
// ✅ FULL EXPLANATION FOR VIVA:
// 🔧 1. Backend - server.js (Node.js + Express)
// This is the main entry point of your server.
// •	Dependencies: Uses the express module (package.json confirms this).
// •	Functionality:
// o	Creates a web server that listens on port 3000 (or a port defined by the environment).
// o	Serves static files (like CSS, JS, images) from the public/ directory using express.static(...).
// o	When a user accesses the home route (/), it serves the index.html file from the views folder.
// Code logic:
// app.get("/", (req, res) => {
//   res.sendFile(path.join(__dirname, "views", "index.html"));
// });
// This sends your main web page when someone visits the site.
// ________________________________________
// 🖥️ 2. Frontend – index.html
// This is your main webpage structured using HTML5 and styled with Bootstrap and custom CSS.
// Key Sections:
// •	Navbar: Navigation bar with links to sections (#services, #contact, etc.).
// •	Hero Section: Large background image with a call-to-action.
// •	Services Section: Describes offerings like software development, cloud solutions.
// •	Testimonials Section: Feedback from fictional clients.
// •	Contact Form: Form with Name, Email, Message fields (not connected to backend in current code).
// •	Footer: Contains copyright.
// ________________________________________
// 🎨 3. CSS Styling – style.css and inline styles
// •	Applies custom fonts and colors.
// •	Responsive layout with Flexbox.
// •	Enhances visual appeal with background images and text styling.
// •	Some styles are inline inside index.html, others are likely in style.css.
// Example from style.css:
// .hero {
//     background: url('/images/background_image.png') no-repeat center center/cover;
//     ...
// }
// ________________________________________
// 📜 4. JavaScript – script.js
// Very minimal logic, mainly for debugging:
// document.addEventListener("DOMContentLoaded", () => {
//     console.log("Website Loaded Successfully!");
// });
// •	Ensures the message logs once the DOM is fully loaded.
// •	You could enhance this later to validate forms, handle events, etc.
// ________________________________________
// 📦 5. Dependencies – package.json
// •	Lists Express as the only dependency.
// •	No scripts defined except a placeholder "test".
// ________________________________________
// 🧠 CONCEPTS USED
// 1.	Web Server with Express.js – Handles HTTP requests.
// 2.	Routing – The route / sends the homepage.
// 3.	Static Middleware – Serves static assets (JS, CSS, images).
// 4.	HTML5 – Semantically structured document.
// 5.	Bootstrap – Responsive, prebuilt UI components.
// 6.	CSS3 – Custom styling for sections.
// 7.	Client-Side JavaScript – DOM events and interactivity.
// 8.	Responsive Design – Sections adjust to screen size.
// 9.	Form Elements – Basic frontend form for user input.
// ________________________________________
// 🌐 Flow of the Web App
// 1.	User visits site →
// 2.	server.js serves index.html →
// 3.	Browser loads HTML, CSS, JS →
// 4.	User sees hero section, services, testimonials →
// 5.	Interacts with navbar or contact form →
// 6.	All static assets (images, styles) are served from /public via Express.


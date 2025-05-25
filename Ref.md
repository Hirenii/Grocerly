# Software Documentation

## Project Overview
This application is a full-stack e-commerce solution consisting of a React-based frontend and a Node.js + Express backend.  
The backend uses MongoDB for data persistence and follows RESTful API architecture.

---

## Frontend

### Framework & Tooling
- React (^18.2.0): JavaScript library for building UI components.
- React DOM (^18.2.0): DOM-specific methods for React rendering.
- React Scripts (5.0.1): Scripts and configuration used by Create React App.

### UI Libraries
- @material-ui/core (^4.12.4): React components that implement Google's Material Design.
- @material-ui/lab (^4.0.0-alpha.61): Experimental Material UI components.
- react-icons (^4.7.1): Popular icon libraries (like FontAwesome) in React components.
- react-slick (^0.29.0) & slick-carousel (^1.8.1): Carousel/slider components.
- swiper (^8.4.5): Modern touch slider/swiper component.

### Data Visualization
- chart.js (^4.1.2): JavaScript charting library.
- react-chartjs-2 (^5.1.0): React wrapper for Chart.js.

### State Management
- redux (^4.2.0): State container for JavaScript apps.
- react-redux (^8.0.5): Official React bindings for Redux.
- redux-thunk (^2.4.2): Middleware for async actions in Redux.
- @redux-devtools/extension (^3.2.3): DevTools integration for Redux debugging.

### Routing
- react-router-dom (^6.5.0): Declarative routing for React web apps.

### Networking
- axios (^1.2.1): Promise-based HTTP client for API calls.

### Analytics
- @vercel/analytics (^0.1.10): Lightweight, privacy-friendly analytics tool.

### Testing
- @testing-library/react, jest-dom, user-event: Tools for writing and running unit/component tests.

### Misc
- web-vitals (^2.1.4): Measures performance metrics.

---

## Backend

### Runtime & Framework
- Node.js: JavaScript runtime for server-side execution.
- Express (^4.18.2): Minimal and flexible Node.js web application framework.

### Authentication & Security
- bcrypt (^5.1.0): Password hashing.
- jsonwebtoken (^8.5.1): JSON Web Token creation and verification.
- cookie-parser (^1.4.6): Parse HTTP cookies.
- cors (^2.8.5): Enable CORS for cross-origin requests.

### API & Request Handling
- body-parser (^1.20.1): Parses incoming request bodies.
- express-fileupload (^1.4.0): Handles file uploads.
- multer (^1.4.5-lts.1): Middleware for handling multipart/form-data.

### Cloud & Media
- cloudinary (^1.33.0): Cloud storage & image manipulation.

### Emails
- nodemailer (^6.8.0): Module to send emails via SMTP.

### Data Validation
- validators (^0.3.1): Input validation utilities.

### Environment
- dotenv (^16.0.3): Loads environment variables from .env file.

### Database
- mongodb (^6.15.0): MongoDB native driver.
- mongoose (^6.8.0): MongoDB ODM (Object Data Modeling).

### Development Tools
- nodemon (^2.0.20): Automatically restarts server on file changes.

---

## Frontend-Backend Integration
Proxy Setup: "proxy": "http://localhost:8000"  
Enables frontend to make API calls to the backend without CORS issues during development.

---

## Tech Stack Summary

| Layer      | Technology Stack                                                                 |
|------------|-----------------------------------------------------------------------------------|
| Frontend   | React, Material-UI, Redux, Axios, Chart.js, React Router, Swiper                 |
| Backend    | Node.js, Express, MongoDB, Mongoose, JWT, Bcrypt, Nodemailer, Cloudinary        |
| Dev Tools  | Nodemon, Redux DevTools, Testing Library, Vercel Analytics                       |
| Hosting    | Localhost development (Vercel/Netlify or Render/Heroku suggested)                |
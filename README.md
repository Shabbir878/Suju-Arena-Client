# SuJu Arena - Sports Facility Booking Platform

SuJu Arena is a fully functional web platform that enables users to browse, book, and manage sports facility reservations. It provides seamless interactions between the frontend and backend, facilitating smooth user experiences for both customers and administrators. This project integrates essential features like booking management, facility listings, and secure payment integration to offer a comprehensive sports facility booking solution.

## Table of Contents

- [Project Overview](#project-overview)
- [Features](#features)
- [Landing Page](#landing-page)
- [User Dashboard](#user-dashboard)
- [Admin Dashboard](#admin-dashboard)
- [Authentication](#authentication)
- [Facility Listings](#facility-listings)
- [Booking System](#booking-system)
- [Additional Features](#additional-features)
- [Technologies Used](#technology-used)
- [Setup Instructions](#setup-instructions)
- [Error Handling](#error-handling)
- [License](#license)

## Project Overview

SuJu Arena is a robust sports facility booking platform designed for both regular users and administrators. The frontend, built with a modern design approach, integrates with a backend developed in Assignment 3 and supports user-friendly interfaces for managing bookings, facilities, and admin operations. With AmarPay payment gateway integrated, users can securely book facilities with ease.

The application supports responsive design, clean navigation, and is designed to work smoothly across mobile, tablet, and desktop devices.

## Features

### Landing Page

- **Header**: Contains the platform’s logo, navigation menu, and login/registration buttons.
- **Hero Section**: A visually appealing banner with a brief intro and a "Book Now" call-to-action button.
- **Featured Facilities**: Showcases popular sports facilities.
- **How It Works**: Step-by-step guide to help users understand the booking process.
- **Customer Testimonials**: Display user feedback and success stories.
- **Unique Section**: Additional creative component related to the project.
- **Footer**: Links to About Us, Contact Us, and social media pages.

## User Dashboard

- **Welcome Message**: Personalized user greeting fetched from the backend.
- **My Bookings**: Lists user bookings, with options to view details or cancel.

## Admin Dashboard

- **Facility Management**: Admins can add, edit, or remove sports facilities. Facilities include images managed via a service like Cloudinary.
- **Booking Management**: Admins can view and manage all bookings on the platform.
- **Admin Creation**: Admins can create new admin accounts via a registration form with fields like name, email, password, phone number, and address.

## Authentication

- **Login/Registration**: Users can log in with email and password or register with name, email, password, phone, and address. The system assigns roles as either "user" or "admin".

## Facility Listings

- **Facility Listing Page**: Displays a list of available facilities with search, filters, and pagination.
- **Facility Details Page**: Provides detailed information about a specific facility with a "Book Now" button.

## Booking System

- **Availability Checker**: Check facility availability by selecting a date and viewing time slots.
- **Booking Form**: Fields to select time slots, start and end times, and other booking details.
- **Payment Integration**: Integrated with AmarPay for secure online payments.
- **Booking Confirmation**: Displays a summary of the booking after successful payment.

## Additional Features

- **Scroll to Top Button**: A button that appears when users scroll down to return to the top.
- **Error Pages**: Custom 404 and unauthorized access pages with navigation options.
- **Toast Notifications**: Error handling and form validation with toast notifications.
- **Pagination**: Implemented on facility listing pages for easy navigation.

## Technologies Used

- **Frontend**: React.js, Redux, Tailwind CSS
- **Backend**: Node.js, Express.js, MongoDB
- **API**: RESTful APIs for interaction between frontend and backend
- **Payment Integration**: AmarPay
- **Authentication**: JWT-based authentication
- **Other**: React Toast, JSON for static data display

## Setup Instructions

To set up the SuJu Arena platform on your local machine, follow these steps:

### Prerequisites

- **Node.js**: Ensure you have Node.js installed on your machine.
- **MongoDB**: A running instance of MongoDB (local or cloud-based).

### Installation

Clone the Repository:

```bash Copy code
git clone https://github.com/your-username/Suju-Arena-Client.git
git clone https://github.com/your-username/Suju-Arena-Server.git
```

### Install Dependencies:

```bash Copy code
npm install
```

### Backend Configuration:

Navigate to the backend folder:

```bash Copy code
cd Suju-Arena-Server
```

### Create .env File:

Create a .env file in the backend directory and add the following environment variables:

```plaintext Copy code
NODE_ENV=Development
PORT=your_port
DATABASE_URL=your_database_url
BCRYPT_SALT_ROUNDS=your_bcrypt_salt_rounds
JWT_ACCESS_SECRET=your_jwt_access_secret
JWT_REFRESH_SECRET=your_jwt_refresh_secret
JWT_ACCESS_EXPIRES_IN=your_jwt_access_expires_in
JWT_REFRESH_EXPIRES_IN=your_jwt_refresh_expires_in
STORE_ID=amarpay_Store_id
SIGNATURE_KEY=amarpay_ signature_key
PAYMENT_URL=amarpay_payment_url
```

### Start the Backend Server:

```bash Copy code
npm start run:dev
```

### Frontend Configuration:

Navigate to the frontend folder:

```bash Copy code
cd Suju-Arena-Client
```

### Install Frontend Dependencies:

```bash Copy code
npm install
```

### Create .env.local File:

Create a .env.local file in the frontend directory and add:

```plaintext Copy code
VITE_API_URL=your_backend_url
```

### Start the Frontend Development Server:

```bash Copy code
npm run dev
```

### Admin

```
suju@gmail.com
Suju8788
```

## Testing

- **API Testing**: Use Postman or similar tools to test the API endpoints.
- **Frontend Testing**: Ensure that the frontend components render correctly and interact smoothly with the backend.

## Error Handling

- **Toast Notifications**: Display real-time error messages for API failures.
- **Form Validation**: In-field error messages for user-friendly feedback during registration, login, and booking processes.
- **Custom Error Pages**: Custom 404 and unauthorized access pages with clear navigation options.

## License

This project is licensed under the MIT License. See the LICENSE file for more details.

**SuJu Arena - A Sports Facility Booking Platform for seamless booking and management.**

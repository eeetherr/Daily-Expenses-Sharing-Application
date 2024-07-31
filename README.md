
# Daily Expenses Sharing Application

## Description
The Daily Expenses Sharing Application is a web application designed to help users share and manage daily expenses among a group of people. The application allows users to register, log in, add expenses, and share them with other users.

## Features
- User Authentication: Register and log in securely.
- Expense Management: Add, edit, and delete expenses.
- Expense Sharing: Share expenses with other users in the group.
- Token-based Authentication: Secure API endpoints using JWT.

## Prerequisites
- Node.js
- npm (Node Package Manager)
- MongoDB (for database)

## Installation

1. **Clone the repository**
   ```bash
   git clone <repository_url>
   cd Daily-Expenses-Sharing-Application
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   - Create a `.env` file in the root directory.
   - Add the following variables to the `.env` file:
     ```
     PORT=5000
     MONGO_URI=<your_mongo_db_connection_string>
     JWT_SECRET=<your_jwt_secret_key>
     ```

4. **Start the application**
   ```bash
   npm start
   ```

## Project Structure

- `.env`: Environment variables configuration.
- `package.json`: Project metadata and dependencies.
- `server.js`: Entry point of the application.
- `config/db.js`: MongoDB connection configuration.
- `controllers/`: Contains the logic for handling requests.
  - `authController.js`: Handles user authentication.
  - `expensesController.js`: Handles expense-related operations.
- `middleware/`: Middleware functions.
  - `authMiddleware.js`: Middleware for authentication.
  - `errorMiddleware.js`: Middleware for error handling.
- `models/`: Mongoose models.
  - `userModel.js`: User model schema.
- `routes/`: API routes.
  - `authRoutes.js`: Routes for authentication.
  - `expensesRoutes.js`: Routes for expenses.
- `utils/`: Utility functions.
  - `generateToken.js`: Function to generate JWT.

## Usage

### Register a User
- Endpoint: `POST /api/auth/register`
- Payload:
  ```json
  {
    "name": "John Doe",
    "mobile": 1234567890,
    "email": "john@example.com",
    "password": "password123"
  }
  ```

### Log in a User
- Endpoint: `POST /api/auth/login`
- Payload:
  ```json
  {
    "email": "john@example.com",
    "password": "password123"
  }
  ```

### Add an Expense
- Endpoint: `POST /api/expenses`
- Payload:
  ```json
  {
    "friends": ["f1","f2","f3"],
    "total": 2000,
    "method": "Percentage",
    "share": [50,25,25]
  }
  ```

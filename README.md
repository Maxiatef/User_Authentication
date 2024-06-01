# User_Authentication
- This project is a backend server for user authentication built with Node.js, using Mongoose for database access and Bcrypt for hashing and securing passwords. It supports user registration and login, ensuring secure password storage and authentication.
- This project provides a secure user authentication system using Node.js, Mongoose, and Bcrypt, offering a robust foundation for more complex applications.


## Getting Started
1. **Install Dependencies**: `npm install`
2. **Setup MongoDB**: Add your own database link in DBcon.js (const **connectionString**).
3. **Run the Server**: `node app.js`

## Technologies Used
- **Node.js**: JavaScript runtime environment.
- **Express**: Web application framework.
- **Mongoose**: ODM library for MongoDB.
- **Bcrypt**: Password hashing function.

## Features
- **User Registration**: Create new users with hashed passwords.
- **User Login**: Authenticate users by comparing passwords.
- **Database Integration**: Store user information in MongoDB with Mongoose.

## Project Structure
- **Server Setup**: Initializes an Express server.
- **Database Connection**: Connects to MongoDB using Mongoose.
- **User Model**: Defines user schema and model with Mongoose.
- **Routes**:
  - **GET /users**: Retrieve all users.
  - **POST /users**: Create a new user with a hashed password.
  - **POST /users/login**: Authenticate a user.

## How It Works
1. **Registration**:
   - User submits username and password.
   - Password is hashed with Bcrypt.
   - User is stored in MongoDB via Mongoose.
2. **Login**:
   - User submits username and password.
   - Retrieve user from database by username.
   - Compare submitted password with stored hashed password using Bcrypt.
   - Grant or deny access based on match.


## Future Enhancements
- **Session Management**: Implement sessions or JWT.
- **Password Reset**: Add password reset functionality.
- **User Profiles**: Expand user data with additional profile information.

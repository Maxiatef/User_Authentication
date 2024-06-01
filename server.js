const express = require('express');
const app = express();
const bcrypt = require('bcrypt');
const DBcon = require('./DBcon');
const User = require('./usersmodel');
const port = 3000;

// Initialize the database connection
DBcon();

// Middleware to parse JSON bodies
app.use(express.json());

// Start the server
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});

// Get all users
app.get('/users', async (req, res) => {
    try {
        const users = await User.find();
        res.status(200).json(users);
    } catch (error) {
        res.status(500).send("Error retrieving users");
    }
});

// Create a new user
app.post('/users', async (req, res) => {
    try {
        const hashedPassword = await bcrypt.hash(req.body.password, 10);
        const user = { name: req.body.name, password: hashedPassword };
        const newUser = await User.create(user);
        res.status(201).json(newUser);
    } catch (error) {
        res.status(500).send("Error creating user");
    }
});

// User login
app.post('/users/login', async (req, res) => {
    try {
        const user = await User.findOne({ name: req.body.name });
        if (user == null) {
            return res.status(400).send('Cannot find user');
        }
        const isMatch = await bcrypt.compare(req.body.password, user.password);
        if (isMatch) {
            res.status(200).send('Success');
        } else {
            res.status(400).send('Wrong Password');
        }
    } catch (error) {
        res.status(500).send("Error logging in");
    }
});

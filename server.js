const express = require('express');
const helmet = require('helmet');
const bodyParser = require('body-parser');
const PORT = 8080;

const app = express();

// Middleware
app.use(helmet()); // Adds various security headers
app.use(bodyParser.json()); // Parses incoming JSON payloads

// Route handlers
app.get('/', (req, res) => {
    res.send('Hello World');
});

// Secure API route with authentication and authorization
app.get('/api/projects', authenticateUser, authorizeUser, (req, res) => {
    // Access the authenticated user's data securely
    const user = req.user;
    
    // Perform necessary operations and respond with the data
    res.send([1, 2, 3]);
});

// Error handling middleware
app.use((err, req, res, next) => {
    // Log the error and handle it securely
    console.error(err);
    res.status(500).send('Internal Server Error');
});

app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
});

// Simulated authentication middleware
function authenticateUser(req, res, next) {
    // Check if user is authenticated based on credentials, tokens, etc.
    // For simplicity, let's assume the user is authenticated and proceed
    req.user = { id: '123', username: 'exampleUser' };
    next();
}

// Simulated authorization middleware
function authorizeUser(req, res, next) {
    // Check if the authenticated user has the necessary permissions
    // For simplicity, let's assume the user is authorized and proceed
    next();
}

// Create web server
// 1. Create web server
// 2. Create route for GET /comments
// 3. Create route for GET /comments/:id
// 4. Create route for POST /comments
// 5. Create route for PUT /comments/:id
// 6. Create route for DELETE /comments/:id

// Import modules
const express = require('express');
const fs = require('fs');
const path = require('path');
const Joi = require('joi');
const app = express();

// Create route for GET /comments
app.get('/', (req, res) => {
    res.send('Hello, World');
});

// Create route for GET /comments/:id
app.get('/:id', (req, res) => {
    res.send('Hello, World');
});

// Create route for POST /comments
app.post('/', (req, res) => {
    res.send('Hello, World');
});

// Create route for PUT /comments/:id
app.put('/:id', (req, res) => {
    res.send('Hello, World');
});

// Create route for DELETE /comments/:id
app.delete('/:id', (req, res) => {
    res.send('Hello, World');
});

// Listen on port 3000
app.listen(3000, () => console.log('Listening on port 3000...'));
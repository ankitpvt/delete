const express = require('express');
const app = express();

// Middleware to parse JSON bodies
app.use(express.json());

// Route: Home
app.get('/', (req, res) => {
    res.send('Welcome to the Simple Express Backend!');
});

// Route: Get all items
app.get('/api/items', (req, res) => {
    const items = [
        { id: 1, name: 'Item One' },
        { id: 2, name: 'Item Two' },
        { id: 3, name: 'Item Three' },
    ];
    res.json(items);
});

// Route: Add a new item
app.post('/api/items', (req, res) => {
    const newItem = req.body;
    if (!newItem.name) {
        return res.status(400).json({ error: 'Item name is required' });
    }
    newItem.id = Date.now();
    res.status(201).json(newItem);
});

// Route: Delete an item
app.delete('/api/items/:id', (req, res) => {
    const { id } = req.params;
    res.json({ message: `Item with id ${id} deleted` });
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});

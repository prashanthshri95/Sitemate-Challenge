// app.js

const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());

let issue = {
    id: 1,
    title: 'Sample Issue',
    description: 'This is a sample issue for demonstration purposes.'
};

app.get('/', (req, res) => res.send('Hello world!'));

// Create Operation
app.post('/api/issues', (req, res) => {
    const newIssue = req.body;
    console.log('Created Issue:', newIssue);
    res.json({ message: 'Issue created successfully.' });
});

// Read Operation
app.get('/api/issues', (req, res) => {
    console.log('Read Issue:', issue);
    res.json(issue);
});

// Update Operation
app.put('/api/issues', (req, res) => {
    const updatedIssue = req.body;
    console.log('Updated Issue:', updatedIssue);
    res.json({ message: 'Issue updated successfully.' });
});

// Delete Operation
app.delete('/api/issues/:id', (req, res) => {
    const issueId = req.params.id;
    console.log('Deleted Issue ID:', issueId);
    res.json({ message: 'Issue deleted successfully.' });
});


const port = process.env.PORT || 8082;

app.listen(port, () => console.log(`Server running on port ${port}`));
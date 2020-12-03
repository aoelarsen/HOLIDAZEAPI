'use strict';
const express = require('express');
const serverless = require('serverless-http');

const app = express();
const establishments = require('../mockEstablishmentsData.json');
const contacts = require('../mockContactData.json');
const enquiries = require('../mockEnquiriesData.json');

// GET OPERATIONS
// Home
app.get('/', (req, res) => {
  const html = `<h1>Holidaze API</h1>
  <p>An API created for Noroff students to use</p>`;
  res.writeHead(200, { 'Content-Type': 'text/html' });
});

// Establishments
app.get('/api/establishments', (req, res) => {
  res.send(establishments);
});

app.get('/api/establishments/:id', (req, res) => {
  const establishment = establishments.find((est) => est.id === req.params.id);
  if (!establishment) {
    res.status(404).send('The establishment with the given id was not found');
  }
  res.send(establishment);
});

// Contacts
app.get('/api/contacts', (req, res) => {
  res.send(contacts);
});

// Enquiry
app.get('/api/enquiries', (req, res) => {
  res.send(enquiries);
});

// POST OPERATIONS:

// app.post('/api/establishments', (req, res) => {
//   const establishements = {};
// });

// app.put();
// app.delete();

app.use(express.json());
app.use('/.netlify/fuinctions/server', router);
app.use('/', (req, res) => res.sendFile(path.join(__dirname, '../index.html')));

module.exports = app;
module.exports.handler = serverless(app);

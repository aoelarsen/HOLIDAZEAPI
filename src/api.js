'use strict';
const express = require('express');
const path = require('path');
const serverless = require('serverless-http');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const router = express.Router();
const establishments = require('../mockEstablishmentsData.json');
const contacts = require('../mockContactData.json');
const enquiries = require('../mockEnquiriesData.json');

// GET OPERATIONS
// Home
router.get('/', (req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/html' });
  res.write(
    `<h1>Hello and welcome to Holdaze API</h1>
      <h4>Endpoints:</h4>
      <ul>
        <li><a href="./api/establishments">/establishments</a></li>
        <li><a href="./api/contacts">/contacts</a></li>
        <li><a href="./api/enquiries">/enquiries</a></li>
      </ul>`
  );
  res.end();
});

// Establishments
router.get('/establishments', (req, res) => {
  res.send(establishments);
});

router.get('/establishments/:id', (req, res) => {
  const establishment = establishments.find((est) => est.id === req.params.id);
  if (!establishment) {
    res.status(404).send('The establishment with the given id was not found');
  }
  res.send(establishment);
});

// Contacts
router.get('/contacts', (req, res) => {
  res.send(contacts);
});

// Enquiry
router.get('/enquiries', (req, res) => {
  res.send(enquiries);
});

app.use(bodyParser.json());
app.use(cors());
app.use('/.netlify/functions/api', router);
app.use('/', (req, res) => res.sendFile(path.join(__dirname, '../index.html')));

module.exports = app;
module.exports.handler = serverless(app);

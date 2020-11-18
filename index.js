const express = require('express');
const app = express();
const establishments = require('./mockEstablishmentsData.json');
const contacts = require('./mockContactData.json');
const enquiries = require('./mockEnquiriesData.json');

app.use(express.json());

// GET OPERATIONS
// Home
app.get('/', (req, res) => {
  const html = `<html>
                  <head>
                    <title>Noroff Holidaze API</title>
                  </head>
                  <body>
                    <h1>Holidaze API</h1>
                    <p>An API created for Noroff students to use</p>
                    <br />
                  </body>
                </html>`;
  res.send(html);
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

app.post('/api/establishments', (req, res) => {
  const establishements = {};
});

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on port ${port}`));

// app.put();
// app.delete();

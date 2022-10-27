const diagnostics = require('express').Router();
const { v4: uuidv4 } = require('uuid');
const { readAndAppend, readFromFile } = require('../helpers/fsUtils');
const path = require('path');

// GET Route for retrieving diagnostic information
diagnostics.get('/', (req, res) => {
  // TODO: Logic for sending all the content of db/diagnostics.json

});

// POST Route for a error logging
diagnostics.post('/', (req, res) => {
  // TODO: Logic for appending data to the db/diagnostics.json file
  // readFromFile(__dirname+'/db/diagnostics.json')
  readFromFile(path.join(__dirname, '../db/diagnostics.json'), 'utf-8')
  .then(data => {
    console.log(data);
    res.json(JSON.parse(data));
  })

});

module.exports = diagnostics;

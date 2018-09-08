const { app, BrowserWindow } = require('electron');
const mongoose = require('mongoose');

// Bring in Models
const Part = require('./models/part');

// Connect to MongoDB
mongoose.connect('mongodb://localhost/test');
const db = mongoose.connection;
db.on('error', console.error.bind(console, "connection error"));
db.once('open', function() {
  console.log('Connected to mongodb');
});


function createWindow() {
  // Create the browser window.
  win = new BrowserWindow({ width: 800, height: 600 });

  // and load the index.html of the app.
  win.loadFile('index.html');
};

// Init app window
app.on('ready', createWindow);
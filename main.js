const { app, BrowserWindow } = require('electron');
const mongoose = require('mongoose');

// Bring in Models
const Part = require('./models/part');

// Keep a global of the main window to prevent garbage collection
let mainWindow = null

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/test', {useNewUrlParser: true});
const db = mongoose.connection;
db.on('error', console.error.bind(console, "connection error"));
db.once('open', function() {
  console.log('Connected to mongodb');
});


function createWindow() {
  const windowOptions = {
    width: 1360,
    height: 980,
    title: 'Inventory Management'
  }
  // Create the browser window.
  mainWindow = new BrowserWindow(windowOptions);

  // and load the index.html of the app.
  mainWindow.loadFile('index.html');
};

// Init app window
app.on('ready', createWindow);


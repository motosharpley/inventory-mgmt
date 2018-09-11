const { app, BrowserWindow } = require('electron');
const mongoose = require('mongoose');

const debug = /--debug/.test(process.argv[2])

// Bring in Models
const Part = require('./models/part');

// Keep a global of the main window to prevent garbage collection
let mainWindow = null

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/test', { useNewUrlParser: true });
const db = mongoose.connection;
db.on('error', console.error.bind(console, "connection error"));
db.once('open', function () {
  console.log('Connected to mongodb');
});

function init() {
  const shouldQuit = makeSingleInstance();
  if (shouldQuit) return app.quit();

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

    // Launch fullscreen with DevTools open, usage: npm run debug
    if (debug) {
      mainWindow.webContents.openDevTools();
      mainWindow.maximize();
      require('devtron').install();
    }

    mainWindow.on('closed', () => {
      mainWindow = null
    })
  }

  app.on('ready', () => {
    createWindow()
  })

  app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
      app.quit()
    }
  })

  app.on('activate', () => {
    if (mainWindow === null) {
      createWindow()
    }
  })

}

// Make this app a single instance app.
//
// The main window will be restored and focused instead of a second window
// opened when a person attempts to launch a second instance.
//
// Returns true if the current version of the app should quit instead of
// launching.
function makeSingleInstance() {
  if (process.mas) return false

  return app.makeSingleInstance(() => {
    if (mainWindow) {
      if (mainWindow.isMinimized()) mainWindow.restore();
      mainWindow.focus();
    }
  });
}

// Initialize the app
init();
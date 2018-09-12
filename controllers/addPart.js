const BrowserWindow = require('electron').remote.BrowserWindow;

let addPart = document.getElementById('addPart');
addPart.addEventListener('click', function (e) {
	let modal = new BrowserWindow({ width: 400, height: 600, modal: true });

	// and load the index.html of the app.
	modal.loadFile('views/addPart.html');
});
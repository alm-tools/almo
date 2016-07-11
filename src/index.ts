/**
 * The following is from the quickstart
 * https://github.com/electron/electron/blob/master/docs/tutorial/quick-start.md
 *
 * - Just the `createWindow` `url` is changed to point to alm
 * - The osx special handling is removed
 */

import electron = require('electron');
// Module to control application life.
const app = electron.app;
// Module to create native browser window.
const BrowserWindow = electron.BrowserWindow;

function createWindow(url:string) {
  // Create the browser window.
  let win = new BrowserWindow({
    // Nice title
    title: 'ALM',
    // don't have any use for menus
    autoHideMenuBar: true,
    // the default zoom is too low
    webPreferences: {
        zoomFactor: 1.2,
    },
    // don't show before maximizing
    show: false,
  });

  // and load the index.html of the app.
  win.loadURL(url);

  win.maximize();
  win.show();

  // Emitted when the window is closed.
  win.on('closed', () => {
    win = null;
  });
}

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.on('ready', () => {
    const {listeningAtUrl} = require("alm/src/server");
    listeningAtUrl.on(({url}) => {
        console.log('url',url)
        createWindow(url)
    });
});

// Quit when all windows are closed.
app.on('window-all-closed', () => {
    app.quit();
});

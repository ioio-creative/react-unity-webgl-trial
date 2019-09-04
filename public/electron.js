const electron = require('electron');
const app = electron.app;
const BrowserWindow = electron.BrowserWindow;

const path = require('path');
//const url = require('url');
const isDev = require('electron-is-dev');

let mainWindow;

function createWindow() {
  mainWindow = new BrowserWindow({width: 900, height: 680});
  mainWindow.loadURL(isDev ? 'http://localhost:3000' : `file://${path.join(__dirname, '../build/index.html')}`);
  mainWindow.on('closed', () => mainWindow = null);

  mainWindow.webContents.openDevTools();

  // set menu
  const Menu = electron.Menu;
  const MenuItem = electron.MenuItem;
  const menu = new Menu();
  menu.append(new MenuItem({
    label: 'Toggle DevTools',
    accelerator: 'F12',
    click: () => {
      mainWindow.webContents.toggleDevTools();
    }
  }));
  Menu.setApplicationMenu(menu);
}

app.on('ready', createWindow);

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', () => {
  if (mainWindow === null) {
    createWindow();
  }
});
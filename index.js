const { app, BrowserWindow } = require('electron')
const path = require('path')
var AutoLaunch = require('auto-launch');
var autoLauncher = new AutoLaunch({
    name: "tomaatTimer",
});

function createWindow () {
  const win = new BrowserWindow({
    width: 800,
    height: 600,
    icon: 'icon.ico',
    autoHideMenuBar: true,
    webPreferences: {
        nodeIntegration: true,
        contextIsolation: false
    },
      frame: false,
      show: true,
  });

  win.loadFile('app/index.html')
  win.maximize();
}

app.whenReady().then(() => {
  createWindow()
  app.max

  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) {
      createWindow()
    }
  })
})

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})




	

// Checking if autoLaunch is enabled, if not then enabling it.
autoLauncher.isEnabled().then(function(isEnabled) {
  if (isEnabled) return;
   autoLauncher.enable();
}).catch(function (err) {
  throw err;
});
 
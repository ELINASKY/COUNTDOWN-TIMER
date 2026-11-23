const { app, BrowserWindow, session } = require('electron');
const path = require('path');
function createWindow() {
  const win = new BrowserWindow({
    width: 1280, height: 800, backgroundColor: '#000000',
    title: 'DigiCre8 Countdown Timer', autoHideMenuBar: true,
    icon: path.join(__dirname, 'build', 'icon.png')
  });
  win.setMenuBarVisibility(false);
  win.loadFile(path.join(__dirname, 'index.html'));
}
app.whenReady().then(() => {
  session.defaultSession.setPermissionRequestHandler((wc, permission, cb) => cb(true));
  createWindow();
  app.on('activate', () => { if (BrowserWindow.getAllWindows().length === 0) createWindow(); });
});
app.on('window-all-closed', () => { if (process.platform !== 'darwin') app.quit(); });

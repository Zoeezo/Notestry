const { app, BrowserWindow, Menu, MenuItem, Accelerator } = require('electron')

function createWindow () {
  const win = new BrowserWindow({
    width: 800,
    height: 600,
    frame: false,
    backgroundColor: '#777777',
    minWidth: 800,
    webPreferences: {
      nodeIntegration: true,
      enableRemoteModule: true
    }
  })

  win.loadFile('src/index.html')
  win.toggleDevTools();
  win.removeMenu()

  const menu = new Menu()

  menu.append(new MenuItem({
    label: 'Restart',
    accelerator: process.platform === 'darwin' ? 'Cmd+R' : 'Ctrl+R',
    click: () => {
      app.relaunch()
      app.exit()
      console.log('ooop')
    }
  }))

  win.setMenu(menu)
}

app.whenReady().then(createWindow)

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', () => {
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow()
  }
})
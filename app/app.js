import app from 'app'
import Tray from 'tray'
import BrowserWindow from 'browser-window'

/*
if (process.platform === 'darwin') {
  app.dock.hide()
}
*/

let appIcon = null
app.on('ready', () => {
  // appIcon = new Tray(`${__dirname}/Icon.png`) // /app/Icon.png
  mainWindow = new BrowserWindow({width: 480, height: 640})
  mainWindow.loadUrl(`file://${__dirname}/renderer/index.html`)
  mainWindow.on('closed', () => {
    mainWindow = null
  })
})

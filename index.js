const { app, BrowserWindow } = require('electron')

const createWindow = () => {
  const win = new BrowserWindow({
    width: 1920, //404,
    height: 1080, //763,
    maximizable: true, //支持最大化
    icon: "https://medical.3vyd.com/alk/prod/pc/icon/icon.ico"
  })
  
  win.setMenu(null)
  win.loadURL('http://www.baidu.com')
}

app.whenReady().then(() => {
  createWindow()
})

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') app.quit()
})
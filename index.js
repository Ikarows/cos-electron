const { app, BrowserWindow } = require('electron')
const url = require('url')
const path = require('path')

const createWindow = () => {
  const win = new BrowserWindow({
    width: 1920, //404,
    height: 1080, //763,
    maximizable: true, //支持最大化
    icon: "https://medical.3vyd.com/alk/prod/pc/icon/icon.ico"
  })
  
  win.setMenu(null)
  win.loadURL('http://www.baidu.com')

  // 加载本地
  /*win.loadURL(url.format({
    pathname: path.join(__dirname, '/web/fireExtinguisher_renter.html'),
    protocol: 'file:',
    slashes: true
  }));*/
}

app.whenReady().then(() => {
  createWindow()
})

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') app.quit()
})
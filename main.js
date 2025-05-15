console.log(" #  *Arquitetura da telas")
const { app, BrowserWindow } = require('electron')

const createWindow = () => {
  const win = new BrowserWindow({
    width: 800,
    height: 430
  })

  win.loadFile('./views/index.html')
}
// janela reconhecido
const reco = () => {
  const about = new BrowserWindow({
    width:1350,
    height:900,
    autoHideMenuBar:true,
    resizable:false,
    
  })
  about.loadFile('./views/reconhecido.html')
}
app.whenReady().then(() => {
  
  reco()
})
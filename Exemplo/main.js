const { app, BrowserWindow } = require('electron')
const path = require('path')

function createWindow () {
  // Criando a variável "win" para receber uma nova janela
  const win = new BrowserWindow({ width: 800, height: 600, })
  // Carregando o arquivo "index.html" na janela
  win.loadFile('index.html')
}

// Configurando inicialização e finalização da aplicação
app.whenReady().then(() => {
  createWindow()

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
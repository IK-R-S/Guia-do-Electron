# electron-notes
Notas de instalação e configuração básica do Electron

## Instalando dependências necessárias
```bash
sudo apt update
sudo apt upgrade -y
sudo apt install nodejs -y
sudo apt install npm -y

## Criando um app com npm
```bash
mkdir ./Electron-app
cd Electron-app
npm init
```

## Editando arquivos de configuração do pacote
**package.json**
```json
{
  "name": "electron-app",
  "version": "1.0.0",
  "description": "Descrição do aplicativo",
  "main": "main.js",
  "scripts": {
    "start": "electron .",
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "author": "Autor do app",
  "license": "ISC"
}
```
## Instalando o Electron via npm
```bash
npm install --save-dev electron
```
Nese momento o electron já vai estar pronto para interpretar o código da aplicação, então precisamos criar os arquivos principais que farão parte do app:

### main.js
```javascript
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
```

### index.html
```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8">
    <!-- https://developer.mozilla.org/en-US/docs/Web/HTTP/CSP -->
    <meta http-equiv="Content-Security-Policy" content="default-src 'self'; script-src 'self'">
    <title>Electron</title>
  </head>
  <body>
    <h1>App Electron!</h1>
    Node.js <span id="node-version"></span>,
    Chromium <span id="chrome-version"></span>,
    Electron <span id="electron-version"></span>.
  </body>
</html>
```

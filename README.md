# electron-notes
Notas de instalação e configuração básica do Electron

## Instalando dependências necessárias
```bash
sudo apt update
sudo apt upgrade -y
sudo apt install nodejs -y
sudo apt install npm -y

## Criando um app
```bash
mkdir ./Electron-app
cd Electron-app
npm init
```

## Adicionando ou editando arquivos de configuração
1. **package.json**
```json
{
  "name": "electron-app",
  "version": "1.0.0",
  "description": "Descrição do aplicativo",
  "main": "index.js",
  "scripts": {
    "start": "electron .",
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "author": "Autor do app",
  "license": "ISC"
}
```

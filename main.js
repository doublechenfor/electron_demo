// 通常remote暴露一些只能在主进程中获取到的api,所以通常将remote作为中间件
// 文档: http://www.electronjs.org/docs/tutorial/application-architecture
const { app, BrowserWindow } = require('electron')
// const { app } = require('electron')

// 关闭警告
process.env.ELECTRON_DISABLE_SECURITY_WARNINGS = true

function createWindow() {
    let win = new BrowserWindow({
        width: 800,
        height: 600,
        webPreferences: {
            nodeIntegration: true
        }
    })
    win.loadFile('index.html').then()
    win.webContents.openDevTools()
    win.on('closed', () => {
        // 取消引用 window 对象，如果你的应用支持多窗口的话，
        // 通常会把多个 window 对象存放在一个数组里面，
        // 与此同时，你应该删除相应的元素。
        win = null
    })
}
// console.log('app',app)
app.on('ready', createWindow)
// app.whenReady().then(createWindow)
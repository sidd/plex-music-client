var BrowserWindow = require('browser-window')
var globalShortcut = require('global-shortcut')
var app = require('app')

var path = require('path')

var notifier = require('node-notifier')

require('crash-reporter').start()
var mainWindow = null

function PlayPause() {

  var button
  if((button = $('.pause-btn')).is(':visible')) {
    button.click()
  } else {
   $('.play-btn').click()
  }
}

function Next() {
  $('.mini-controls .next-btn').click()
}
function Prev() { $('.mini-controls .previous-btn').click() }

function ExecFunction(fn) {
  if (typeof fn === 'function') {
    return function() {
      console.log('hello')
      setTimeout(function () {
        notifier.notify({
          message: mainWindow.getTitle(),
          title: 'plex',
        })
      }, 100)
      mainWindow.webContents.executeJavaScript('(' + fn.toString() + ')()')
    }
  }
}

app.on('window-all-closed', function () {
  app.quit()
})

app.on('ready', function () {

  mainWindow = new BrowserWindow({
    width: 1200,
    height: 800,
    icon: path.join(__dirname, "/icon.png"),
    "node-integration": false
  })
  mainWindow.openDevTools()

  mainWindow.loadUrl('http://192.168.1.170:32400/web')
  mainWindow.webContents.on('did-finish-load', function () {
    var self = this
      self.executeJavaScript('(' + function () {
        var chk = setInterval(function () {
          var el
          if ((el = $('#plex > div.side-bar.dark-scrollbar > div.dashboard-servers-container > ul > li > ul > li:contains("Music") > a span')).is(':visible')) {
            el[0].click()
            clearInterval(chk)
          }
        }, 100)
      } + ')()')
  })

  globalShortcut.register('MediaPlayPause', ExecFunction(PlayPause))
  globalShortcut.register('MediaNextTrack', ExecFunction(Next))
  globalShortcut.register('MediaPreviousTrack', ExecFunction(Prev))

  mainWindow.on('closed', function () {
    mainWindow = null
  })
})


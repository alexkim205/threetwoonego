import browser from 'webextension-polyfill'
import initUi from './ui'
import './options-storage'

console.log('BROWSER', browser)

browser.action.onClicked.addListener(tab => {
  browser.scripting.executeScript({
    target: {tabId: tab.id ?? -1},
    func: initUi,
  })
})

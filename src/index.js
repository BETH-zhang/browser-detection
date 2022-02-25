import Dialog from './dialog.js'
import systemNavigator from './systemNavigator.js'
import { IS_BROWSER } from './util/index.js'
class BrowserDetection {
  constructor() {
    this.info = systemNavigator()
    this.dialog = new Dialog()
  }

  check() {
    const info = this.info
    const dialog = this.dialog
    
    if (info && info.name === 'IE') {
      dialog.show('当前浏览器与教室不匹配')
    } else if (info && info.name !== 'Chrome') {
      dialog.show('当前浏览器与教室不匹配，请更换<br />推荐使用微软官方的Edge浏览器。')
    } else if (Number(info && info.version) < 80) {
      dialog.show('当前浏览器与教室不匹配，请更换<br />推荐使用微软官方的Edge浏览器。')
    }
  }
}

function init() {
  let bd = null

  try {
    const sEle = document.getElementById('drowserDetection')
    bd = new BrowserDetection()
    if (sEle && sEle.getAttribute('data-check') === 'auto') {
      bd.check()
    }
  } catch(err) {
    console.log('bd-err: ', err)
  }
}

if (IS_BROWSER) {
  window.addEventListener('load', init)
}

export default BrowserDetection
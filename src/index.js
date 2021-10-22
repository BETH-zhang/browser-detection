import BrowserDetection from './browserDetection.js'
import { IS_BROWSER } from './util/index.js'

function init() {
  let bd = null

  try {
    console.log(window.location)
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
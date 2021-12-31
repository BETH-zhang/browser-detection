import { $, addBox, addBtn, addStyle } from "./util";

const css = `
  .browser-detection-mask {
    display: none;
    content: '';
    position: fixed;
    z-index: 99998;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    background: rgba(0, 0, 0, 0.3);
    margin: 0;
    border: 0;
    border-radius: inherit;
  }
  .browser-detection-box {
    display: none;
    position: fixed;
    z-index: 99999;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 500px;
    height: auto;
    background: #fff;
    border: 1px solid rgba(0, 0, 0, 0.1);
    border-radius: 6px;
    box-shadow: 0 0 10px 6px rgba(0, 0, 0, 0.1);
    color: #000;
  }
  .browser-detection-box-show {
    display: block;
  }
  .browser-detection-header {
    height: 48px;
    border-bottom: 1px solid rgba(0, 0, 0, 0.1);
    padding: 0 12px;
    line-height: 48px;
    font-size: 14px;
  }
  .browser-detection-content {
    padding: 32px 24px;
    height: 120px;
    box-sizing: border-box;
    font-size: 14px;
  }
  .browser-detection-footer {
    padding-bottom: 32px;
  }

  .browser-detection-close,
  .browser-detection-download-edge {
    margin: 0 auto;
    height: 32px;
    background: #295ef5;
    border: 2px solid #1e53e8;
    text-align: center;
    line-height: 32px;
    width: 220px;
    border-radius: 6px;
    padding: 0 14px;
    margin-bottom: 12px;
  }

  .browser-detection-close {
    background: #f5f5f5;
    color: #295ef5;
    border: 0;
  }

  .browser-detection-download-edge div:after {
    content: '';
    clear: both;
  }

  .browser-detection-download-edge a {
    display: inline-block;
    float: left;
    color: #fff;
    font-size: 16px;
  }

  .browser-detection-download-edge img {
    display: inline-block;
    float: left;
    width: 17px;
    margin-left: 7px;
    margin-top: 7px;
  }

  .browser-detection-close a {
    color: #295ef5;
    display: inline-block;
    width: 100%;
    font-size: 16px;
  }
`
export default class Dialog {
  constructor() {
    this.init()
  }

  init() {
    const boxMask = addBtn(null, null, { class: 'browser-detection-mask' })
    const box = addBox(null, null, { class: 'browser-detection-box' })
    const header = addBox('⚠️ 系统检测', box, { class: 'browser-detection-header' })
    const main = addBox('您当前的 Chrome 版本浏览器版本过低，请安装新版浏览器。', box, { class: 'browser-detection-content' })
    const footer = addBox(null, box, { class: 'browser-detection-footer' })
    const download = addBox('<div style="display: inline-block;"><a href="https://www.microsoft.com/zh-cn/edge" target="_blank">下载最新版Edge浏览器</a><img src="https://static.uskid.com/web/garden/kv1u1i28_nDrUEUrFQ6bAFcecbLyNLwdJ.png" alt="" /></div>', footer, { class: 'browser-detection-download-edge' })
    const next = addBox('<a href="javascript:;">下次再说</a>', footer, { class: 'browser-detection-close' })
    
    addStyle(css)

    this.boxMask = boxMask
    this.box = box
    this.main = main
    this.next = next
  }

  show(message) {
    this.boxMask.classList.add('browser-detection-box-show')
    this.box.classList.add('browser-detection-box-show')
    if (message) {
      this.main.innerHTML = `${message}`
    }
    this.next.onclick = () => {
      this.hide()
    }
  }

  hide() {
    this.boxMask.classList.remove('browser-detection-box-show')
    this.box.classList.remove('browser-detection-box-show')
  }
}
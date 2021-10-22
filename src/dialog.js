import { $, addBox, addBtn, addStyle } from "./util";

const css = `
  .browser-detection-mask {
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
    height: 250px;
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
    padding: 0 24px;
    height: 120px;
    line-height: 120px;
  }
  .browser-detection-footer {
    padding-bottom: 32px;
  }
  .browser-detection-download-edge {
    margin: 0 auto;
    height: 38px;
    width: auto;
    background: #295ef5;
    border: 2px solid #1e53e8;
    text-align: center;
    line-height: 38px;
    max-width: 160px;
    border-radius: 6px;
  } 
  .browser-detection-download-edge a {
    color: #fff;
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
    const download = addBox('<a href="https://www.microsoft.com/zh-cn/edge" target="_blank">下载 Edge</a>', footer, { class: 'browser-detection-download-edge' })
    
    addStyle(css)

    this.boxMask = boxMask
    this.box = box
    this.main = main
  }

  show(message) {
    this.box.classList.add('browser-detection-box-show')
    if (message) {
      this.main.innerHTML = `${message}`
    }
  }
}
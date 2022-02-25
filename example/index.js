!function(e,n){"object"==typeof exports&&"undefined"!=typeof module?module.exports=n():"function"==typeof define&&define.amd?define(n):(e="undefined"!=typeof globalThis?globalThis:e||self).browserDetection=n()}(this,function(){"use strict";function n(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}function o(e,n){for(var t=0;t<n.length;t++){var o=n[t];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function t(e,n,t){return n&&o(e.prototype,n),t&&o(e,t),e}function c(e,n,t){var o=document.createElement("div");return o.innerHTML=e,Object.keys(t).forEach(function(e){"class"===e?o.classList.add(t[e]):o[e]=t[e]}),n?n.appendChild(o):document.body&&document.body.appendChild(o),o}var e="undefined"!=typeof window;window.matchMedia("(prefers-color-scheme: dark)").matches;var i=function(){function e(){n(this,e),this.init()}return t(e,[{key:"init",value:function(){var e="下载最新版Edge浏览器",n="https://www.microsoft.com/zh-cn/edge",t=!1,o=document.getElementById("drowserDetection");o&&(e=o.getAttribute("data-btn-text")||e,n=o.getAttribute("data-btn-href")||n,t=o.getAttribute("data-btn-text"));var i,s,r=(a=d=null,i={class:"browser-detection-mask"},(s=document.createElement("button")).innerHTML=d,Object.keys(i).forEach(function(e){"class"===e?s.classList.add(i[e]):s[e]=i[e]}),a?a.appendChild(s):document.body&&document.body.appendChild(s),s),o=c(null,null,{class:"browser-detection-box"});c("⚠️ 系统检测",o,{class:"browser-detection-header"});var d=c("您当前的 Chrome 版本浏览器版本过低，请安装新版浏览器。",o,{class:"browser-detection-content"}),a=c(null,o,{class:"browser-detection-footer"});c('<div style="display: inline-block;">\n      <a href="'.concat(n,'" target="_blank">').concat(e,'</a>\n      <img style="display: ').concat(t?"none":"block",'" src="https://static.uskid.com/web/garden/kv1u1i28_nDrUEUrFQ6bAFcecbLyNLwdJ.png" alt="" />\n    </div>'),a,{class:"browser-detection-download-edge"});e=c('<a href="javascript:;">下次再说</a>',a,{class:"browser-detection-close"});t="\n  .browser-detection-mask {\n    display: none;\n    content: '';\n    position: fixed;\n    z-index: 99998;\n    top: 0;\n    left: 0;\n    width: 100%;\n    height: 100vh;\n    background: rgba(0, 0, 0, 0.3);\n    margin: 0;\n    border: 0;\n    border-radius: inherit;\n  }\n  .browser-detection-box {\n    display: none;\n    position: fixed;\n    z-index: 99999;\n    top: 50%;\n    left: 50%;\n    transform: translate(-50%, -50%);\n    width: 500px;\n    height: auto;\n    background: #fff;\n    border: 1px solid rgba(0, 0, 0, 0.1);\n    border-radius: 6px;\n    box-shadow: 0 0 10px 6px rgba(0, 0, 0, 0.1);\n    color: #000;\n  }\n  .browser-detection-box-show {\n    display: block;\n  }\n  .browser-detection-header {\n    height: 48px;\n    border-bottom: 1px solid rgba(0, 0, 0, 0.1);\n    padding: 0 12px;\n    line-height: 48px;\n    font-size: 14px;\n  }\n  .browser-detection-content {\n    padding: 32px 24px;\n    height: 120px;\n    box-sizing: border-box;\n    font-size: 14px;\n  }\n  .browser-detection-footer {\n    padding-bottom: 32px;\n  }\n\n  .browser-detection-close,\n  .browser-detection-download-edge {\n    margin: 0 auto;\n    height: 32px;\n    background: #295ef5;\n    border: 2px solid #1e53e8;\n    text-align: center;\n    line-height: 32px;\n    width: 220px;\n    border-radius: 6px;\n    padding: 0 14px;\n    margin-bottom: 12px;\n  }\n\n  .browser-detection-close {\n    background: #f5f5f5;\n    color: #295ef5;\n    border: 0;\n  }\n\n  .browser-detection-download-edge div:after {\n    content: '';\n    clear: both;\n  }\n\n  .browser-detection-download-edge a {\n    display: inline-block;\n    float: left;\n    color: #fff;\n    font-size: 16px;\n  }\n\n  .browser-detection-download-edge img {\n    display: inline-block;\n    float: left;\n    width: 17px;\n    margin-left: 7px;\n    margin-top: 7px;\n  }\n\n  .browser-detection-close a {\n    color: #295ef5;\n    display: inline-block;\n    width: 100%;\n    font-size: 16px;\n  }\n",(a=document.createElement("link")).setAttribute("rel","stylesheet"),a.setAttribute("type","text/css"),a.setAttribute("href","data:text/css;charset=UTF-8,"+encodeURIComponent(t)),document.head.appendChild(a),this.boxMask=r,this.box=o,this.main=d,this.next=e}},{key:"show",value:function(e){var n=this;this.boxMask.classList.add("browser-detection-box-show"),this.box.classList.add("browser-detection-box-show"),e&&(this.main.innerHTML="".concat(e)),this.next.onclick=function(){n.hide()}}},{key:"hide",value:function(){this.boxMask.classList.remove("browser-detection-box-show"),this.box.classList.remove("browser-detection-box-show")}}]),e}(),s=[{system:"Windows 10",regx:/(Windows 10.0|Windows NT 10.0)/},{system:"Windows 8.1",regx:/(Windows 8.1|Windows NT 6.3)/},{system:"Windows 8",regx:/(Windows 8|Windows NT 6.2)/},{system:"Windows 7",regx:/(Windows 7|Windows NT 6.1)/},{system:"Windows Vista",regx:/Windows NT 6.0/},{system:"Windows Server 2003",regx:/Windows NT 5.2/},{system:"Windows XP",regx:/(Windows NT 5.1|Windows XP)/},{system:"Windows 2000",regx:/(Windows NT 5.0|Windows 2000)/},{system:"Windows ME",regx:/(Win 9x 4.90|Windows ME)/},{system:"Windows 98",regx:/(Windows 98|Win98)/},{system:"Windows 95",regx:/(Windows 95|Win95|Windows_95)/},{system:"Windows NT 4.0",regx:/(Windows NT 4.0|WinNT4.0|WinNT|Windows NT)/},{system:"Windows CE",regx:/Windows CE/},{system:"Windows 3.11",regx:/Win16/},{system:"Android",regx:/Android/},{system:"Open BSD",regx:/OpenBSD/},{system:"Sun OS",regx:/SunOS/},{system:"Linux",regx:/(Linux|X11)/},{system:"iOS",regx:/(iPhone|iPad|iPod)/},{system:"Mac OS X",regx:/Mac OS X/},{system:"Mac OS",regx:/(MacPPC|MacIntel|Mac_PowerPC|Macintosh)/},{system:"QNX",regx:/QNX/},{system:"UNIX",regx:/UNIX/},{system:"BeOS",regx:/BeOS/},{system:"OS/2",regx:/OS\/2/},{system:"Search Bot",regx:/(nuhk|Googlebot|Yammybot|Openbot|Slurp|MSNBot|Ask Jeeves\/Teoma|ia_archiver)/}],r=function(){function e(){n(this,e),this.info=function(e){var n=null,t=e||navigator.userAgent,o=t.match(/(opera|chrome|safari|firefox|msie|trident(?=\/))\/?\s*(\d+)/i)||[],e="";console.log("agentArr: ",o),"Chrome"===o[1]?(e="chrome",n=t.match(/(OPR(?=\/))\/?(\d+)/i),console.log(n),null!==n&&(o[2]=n[1])):"Safari"===o[1]?(e="safari",null!==(n=t.match(/version\/(\d+)/i))&&(o[2]=n[1])):~t.toLowerCase().indexOf("qqbrowser")?(e="qqbrowser",null!==(n=t.match(/(qqbrowser(?=\/))\/?(\d+)/i))&&(o[2]=n[1])):~t.toLowerCase().indexOf("micromessenger")?(e="weixin",null!==(n=t.match(/(micromessenger(?=\/))\/?(\d+)/i))&&(o[1]="WeiXin",o[2]=n[1])):~t.toLowerCase().indexOf("edge")?(e="edge",null!==(n=t.match(/(edge(?=\/))\/?(\d+)/i))&&(o[2]=n[1])):~t.toLowerCase().indexOf("trident")&&(e="ie",o=[null,"IE",(n=/\brv[ :]+(\d+)/g.exec(t)||[])[1]]);var i=[];return s.forEach(function(e){var n;e.regx.test(t)&&(n=t.indexOf(e.system),~t.toLowerCase().indexOf("xiaomi")?i.length||(i=[e.system,n]):(!i.length||i.length&&n<i[1])&&(i=[e.system,n]))}),/Android|iOS/.test(i[0])?~t.toLowerCase().indexOf("xiaomi")?(e="xiaomi",n=t.match(/(XiaoMi\/MiuiBrowser(?=\/))\/?(\d+)/i),o[1]="XiaoMi/MiuiBrowser",o[2]=n[2]):~t.toLowerCase().indexOf("dingtalk")&&(e="dingding",n=t.match(/(com.laiwang.DingTalk(?=\/))\/?(\d+)/i),o[1]="DingTalk",o[2]=n[2]):/Android/.test(t)&&~t.toLowerCase().indexOf("micromessenger")&&(e="weixin",n=t.match(/(micromessenger(?=\/))\/?(\d+)/i),o[1]="WeiXin",o[2]=n[1],i[0]="Android"),{name:o[1],version:o[2],os:i[0],brand:e,userAgent:navigator.userAgent}}(),this.dialog=new i}return t(e,[{key:"check",value:function(){var e=this.info,n=this.dialog;(e&&"Chrome"===e.name||Number(e&&e.version)<80)&&n.show("当前浏览器与教室不匹配，请更换<br />推荐使用微软官方的Edge浏览器。")}}]),e}();return e&&window.addEventListener("load",function(){var e=null;try{var n=document.getElementById("drowserDetection"),e=new r;n&&"auto"===n.getAttribute("data-check")&&e.check()}catch(e){console.log("bd-err: ",e)}}),r});
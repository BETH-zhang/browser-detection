// var io = navigator.userAgent.match(/\s(Edge\/|MSIE\s|rv:)([0-9]*).\d*/);

import Dialog from "./dialog"

// module.export = {
//   isEdge: io && io[1] === "Edge/",
//   isIE: io && io[1] !== "Edge/",
//   isMs: Boolean(io),
//   version: io ? parseInt(io[2] || 0) : 0
// };

export const userAgentData = {
  webChrome:
    'Mozilla/5.0 (Linux; Android 6.0; Nexus 5 Build/MRA58N) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/74.0.3729.131 Mobile Safari/537.36',
  webSafari:
    'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_13_6) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/12.1 Safari/605.1.15',
  androidWeixin:
    'Mozilla/5.0 (Linux; Android 8.0.0; MIX 2 Build/OPR1.170623.027; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/66.0.3359.126 MQQBrowser/6.2 TBS/044611 Mobile Safari/537.36 MMWEBID/8369 MicroMessenger/7.0.4.1420(0x2700043A) Process/tools NetType/WIFI Language/zh_CN',
  androidDefaultBrowser:
    'Mozilla/5.0 (Linux; U; Android 8.0.0; zh-cn; MIX 2 Build/OPR1.170623.027) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/61.0.3163.128 Mobile Safari/537.36 XiaoMi/MiuiBrowser/10.7.3',
  iosWeixin:
    'Mozilla/5.0 (iPhone; CPU iPhone OS 12_2 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148 MicroMessenger/7.0.1(0x17000120) NetType/WIFI Language/zh_CN',
  iosDefaultBrowser:
    'Mozilla/5.0 (iPhone; CPU iPhone OS 12_2 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/12.1 Mobile/15E148 Safari/604.1',
  iosDingDing:
    'Mozilla/5.0 (iPhone; CPU iPhone OS 12_2 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148 AiApp(DingTalk/4.6.18) com.laiwang.DingTalk/11131669 Channel/201200 language/zh-Hans-CN WK',
}

const systemConstant = [
  {
    system: 'Windows 10',
    regx: /(Windows 10.0|Windows NT 10.0)/,
  },
  {
    system: 'Windows 8.1',
    regx: /(Windows 8.1|Windows NT 6.3)/,
  },
  {
    system: 'Windows 8',
    regx: /(Windows 8|Windows NT 6.2)/,
  },
  {
    system: 'Windows 7',
    regx: /(Windows 7|Windows NT 6.1)/,
  },
  {
    system: 'Windows Vista',
    regx: /Windows NT 6.0/,
  },
  {
    system: 'Windows Server 2003',
    regx: /Windows NT 5.2/,
  },
  {
    system: 'Windows XP',
    regx: /(Windows NT 5.1|Windows XP)/,
  },
  {
    system: 'Windows 2000',
    regx: /(Windows NT 5.0|Windows 2000)/,
  },
  {
    system: 'Windows ME',
    regx: /(Win 9x 4.90|Windows ME)/,
  },
  {
    system: 'Windows 98',
    regx: /(Windows 98|Win98)/,
  },
  {
    system: 'Windows 95',
    regx: /(Windows 95|Win95|Windows_95)/,
  },
  {
    system: 'Windows NT 4.0',
    regx: /(Windows NT 4.0|WinNT4.0|WinNT|Windows NT)/,
  },
  {
    system: 'Windows CE',
    regx: /Windows CE/,
  },
  {
    system: 'Windows 3.11',
    regx: /Win16/,
  },
  {
    system: 'Android',
    regx: /Android/,
  },
  {
    system: 'Open BSD',
    regx: /OpenBSD/,
  },
  {
    system: 'Sun OS',
    regx: /SunOS/,
  },
  {
    system: 'Linux',
    regx: /(Linux|X11)/,
  },
  {
    system: 'iOS',
    regx: /(iPhone|iPad|iPod)/,
  },
  {
    system: 'Mac OS X',
    regx: /Mac OS X/,
  },
  {
    system: 'Mac OS',
    regx: /(MacPPC|MacIntel|Mac_PowerPC|Macintosh)/,
  },
  {
    system: 'QNX',
    regx: /QNX/,
  },
  {
    system: 'UNIX',
    regx: /UNIX/,
  },
  {
    system: 'BeOS',
    regx: /BeOS/,
  },
  {
    system: 'OS/2',
    regx: /OS\/2/,
  },
  {
    system: 'Search Bot',
    regx: /(nuhk|Googlebot|Yammybot|Openbot|Slurp|MSNBot|Ask Jeeves\/Teoma|ia_archiver)/,
  },
]

const systemNavigator = (agent) => {
  let navigatorInfo = null
  const userAgent = agent || navigator.userAgent
  
  let agentArr =
    userAgent.match(/(opera|chrome|safari|firefox|msie|trident(?=\/))\/?\s*(\d+)/i) || []

  if (agentArr[1] === 'Chrome') {
    navigatorInfo = userAgent.match(/(OPR(?=\/))\/?(\d+)/i)
    if (navigatorInfo !== null) {
      agentArr[2] = navigatorInfo[1]
    }
  } else if (agentArr[1] === 'Safari') {
    navigatorInfo = userAgent.match(/version\/(\d+)/i)
    if (navigatorInfo !== null) {
      agentArr[2] = navigatorInfo[1]
    }
  } else if (~userAgent.toLowerCase().indexOf('qqbrowser')) {
    navigatorInfo = userAgent.match(/(qqbrowser(?=\/))\/?(\d+)/i)
    if (navigatorInfo !== null) {
      agentArr[2] = navigatorInfo[1]
    }
  } else if (~userAgent.toLowerCase().indexOf('micromessenger')) {
    navigatorInfo = userAgent.match(/(micromessenger(?=\/))\/?(\d+)/i)
    if (navigatorInfo !== null) {
      agentArr[1] = 'WeiXin'
      agentArr[2] = navigatorInfo[1]
    }
  } else if (~userAgent.toLowerCase().indexOf('edge')) {
    navigatorInfo = userAgent.match(/(edge(?=\/))\/?(\d+)/i)
    if (navigatorInfo !== null) {
      agentArr[2] = navigatorInfo[1]
    }
  } else if (~userAgent.toLowerCase().indexOf('trident')) {
    navigatorInfo = /\brv[ :]+(\d+)/g.exec(userAgent) || []
    agentArr = [null, 'IE', navigatorInfo[1]]
  }

  let osArr = []
  systemConstant.forEach((item) => {
    if (item.regx.test(userAgent)) {
      const index = userAgent.indexOf(item.system)
      if (~userAgent.toLowerCase().indexOf('xiaomi')) {
        if (!osArr.length) {
          osArr = [item.system, index]
        }
      } else if (!osArr.length || (osArr.length && index < osArr[1])) {
        osArr = [item.system, index]
      }
    }
  })

  if (/Android|iOS/.test(osArr[0])) {
    if (~userAgent.toLowerCase().indexOf('xiaomi')) {
      navigatorInfo = userAgent.match(/(XiaoMi\/MiuiBrowser(?=\/))\/?(\d+)/i)
      agentArr[1] = 'XiaoMi/MiuiBrowser'
      agentArr[2] = navigatorInfo[2]
    } else if (~userAgent.toLowerCase().indexOf('dingtalk')) {
      navigatorInfo = userAgent.match(/(com.laiwang.DingTalk(?=\/))\/?(\d+)/i)
      agentArr[1] = 'DingTalk'
      agentArr[2] = navigatorInfo[2]
    }
  } else if (/Android/.test(userAgent) && ~userAgent.toLowerCase().indexOf('micromessenger')) {
    navigatorInfo = userAgent.match(/(micromessenger(?=\/))\/?(\d+)/i)
    agentArr[1] = 'WeiXin'
    agentArr[2] = navigatorInfo[1]
    osArr[0] = 'Android'
  }

  return {
    name: agentArr[1],
    version: agentArr[2],
    os: osArr[0],
    userAgent: navigator.userAgent,
  }
}

export default class BrowserDetection {
  constructor() {
    this.info = systemNavigator()
  }

  check() {
    const info = this.info
    const dialog = new Dialog()
    if (info && info.name !== 'Chrome') {
      dialog.show('您当前的浏览器我们暂不支持，请安装 Edge 浏览器。')
    } else if (Number(info && info.version) < 80) {
      dialog.show('您当前的【Chrome内核】版本过低，请安装 Edge 浏览器。')
    }
  }
}
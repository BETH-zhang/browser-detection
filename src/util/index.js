
export const IS_BROWSER = typeof window !== 'undefined';

export const addBox = (name, fatherEle, rest) => {
  const box = document.createElement('div');
  box.innerHTML = name
  Object.keys(rest).forEach((key) => {
    if (key === 'class') {
      box.classList.add(rest[key])
    } else {
      box[key] = rest[key]
    }
  })
  if (fatherEle) {
    fatherEle.appendChild(box)
  } else if (document.body) {
    document.body.appendChild(box)
  }
  return box
}

export const addBtn = (name, fatherEle, rest) => {
  const box = document.createElement('button')
  box.innerHTML = name
  // const child = document.createElement('b')
  Object.keys(rest).forEach((key) => {
    if (key === 'class') {
      box.classList.add(rest[key])
    } else {
      box[key] = rest[key]
    }
  })
  // box.appendChild(child)
  if (fatherEle) {
    fatherEle.appendChild(box)
  } else if (document.body) {
    document.body.appendChild(box)
  }
  return box
}

export const getId = id => document.getElementById(id)

export const $ = className => document.querySelector(className)

export const addStyle = (css) => {
  const linkElement = document.createElement('link');

  linkElement.setAttribute('rel', 'stylesheet');
  linkElement.setAttribute('type', 'text/css');
  linkElement.setAttribute('href', 'data:text/css;charset=UTF-8,' + encodeURIComponent(css));
  document.head.appendChild(linkElement);
}

export const isAllowDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches

export const getLocal = (name) => window.localStorage.getItem(name)

export const setLocal = (name, value) => window.localStorage.setItem(name, value)

export const insertTop = (ele) => document.body.insertBefore(ele, document.body.firstChild);
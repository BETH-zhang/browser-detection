/*
 * @Author: beth
 * @Date: 2020-07-29 11:32:32
 * @LastEditors: beth
 * @LastEditTime: 2021-03-02 21:30:36
 * @Description:
 */
/* eslint-disable */

class Test {
  constructor({ params, ...rest }) {
    this.options = rest
    this.params = params

    this.init()
  }

  init = () => {
    this.initDivs()
    this.initButtons()
    this.initTable()
    this.initTables()
    this.initFixed()
  }

  initDivs = () => {
    if (this.options.divs) {
      const box = document.createElement('section')
      box.className = 'div-box'
      box.style = 'display: flex;'

      const ary = this.options.divs.map(item => (`<div style="flex: 1;"><h2 id="${item.id}Title">${item.title}</h2><div id="${item.id}" style="${item.style}"></div></div>`))
      box.innerHTML = ary.join('')
      if (this.options.fatherEle) {
        this.options.fatherEle.appendChild(box)
      } else {
        document.body.appendChild(box)
      }
    }
  }

  initFixed = () => {
    if (this.options.fixed) {
      const box = document.createElement('div')
      box.className = 'fixed-box'
      box.style = 'padding: 20px; position: fixed; bottom: 0; right: 0; max-height: 100vh; overflow: scroll;'

      const ary = this.options.fixed.map(item => (`<div id="${item.id}">${item.children || ''}</div>`))
      box.innerHTML = ary.join('')
      if (this.options.fatherEle) {
        this.options.fatherEle.appendChild(box)
      } else {
        document.body.appendChild(box)
      }
    }
  }

  initTable = () => {
    if (this.options.table) {
      const box = document.createElement('section')
      const table = document.createElement('table')
      table.className = 'table-box'

      const ths = this.options.table.column.map(item => (`<th>${item}</th>`))
      table.innerHTML = `<thead><tr>${ths.join('')}</tr></thead><tbody></tbody>`

      box.appendChild(table)
      if (this.options.fatherEle) {
        this.options.fatherEle.appendChild(box)
      } else {
        document.body.appendChild(box)
      }
    }
  }

  initTables = () => {
    if (this.options.tables) {
      const box = document.createElement('section')
      box.className = 'tables-box'
      box.style = 'display: flex; width: 100%;'

      const tables = this.options.tables.map((item, index) => {
        const tableBox = document.createElement('div')
        tableBox.innerHTML = `<h2 id="title-${index}">${item.title}</h2>`

        const table = document.createElement('table')
        table.className = 'table-box-' + index
        const ths = item.column.map(item => (`<th>${item}</th>`))
        table.innerHTML = `<thead><tr>${ths.join('')}</tr></thead><tbody></tbody>`
        tableBox.appendChild(table)

        return `<div id="table-box-${index}" style="flex: 1; padding: 12px;">${tableBox.innerHTML}</div>`
      })

      box.innerHTML = tables.join('')
      if (this.options.fatherEle) {
        this.options.fatherEle.appendChild(box)
      } else {
        document.body.appendChild(box)
      }
    }
  }

  addTableLine = (data, insertBefore, index) => {
    if (!this.options.table && !this.options.tables) return null
    let isAdd = true
    const column = this.options.table ? this.options.table.column : this.options.tables[index || 0].column

    const ary = column.map(key => {
      const currentData = data[key]
      if (Array.isArray(currentData)) {
        if (currentData[1] === '+' && currentData[2].includes(currentData[0])) {
          return `<td><b>${currentData[0]}</b></td>`
        } else if (currentData[1] === '-' && !currentData[2].includes(currentData[0])) {
          return `<td>${currentData[0]}</td>`
        }
        isAdd = false
        return null
      }
      return `<td>${data[key] || ''}</td>`
    })

    if (isAdd) {
      const tr = document.createElement('tr')
      tr.id = data.id
      tr.style = data.style || ''
      tr.innerHTML = ary.join('')
  
      const parentDom = data.ele || this.getEle('tbody')
      if (insertBefore && parentDom.children.length) {
        parentDom.insertBefore(tr, parentDom.children[0])
      } else {
        parentDom.appendChild(tr)
      }
    }
  }

  clearTable = () => {
    this.getEles('tbody').innerHTML('')
  }

  initButtons = () => {
    if (this.options.buttons) {
      const box = document.createElement('section')
      box.className = 'button-box'

      const btns = this.options.buttons.map((item, index) => (item.html || `<a class="button" id="${item.id}"><${index % 2 ? 'i' : 'b'}>${item.text}</${index % 2 ? 'i' : 'b'}></a>`))
      box.innerHTML = btns.join('')
      if (this.options.fatherEle) {
        this.options.fatherEle.appendChild(box)
      } else {
        document.body.appendChild(box)
      }
    }
  }

  getId = id => document.getElementById(id)

  getEles = className => {
    const classes = document.querySelectorAll(className)

    return {
      innerHTML: () => {
        if (classes.length) {
          classes.forEach((item) => {
            item.innerHTML = ''
          })
        }
      }
    }
  }

  getClass = className => document.querySelector(className)

  getEle = (name) => {
    return this.getId(name) || this.getClass(name)
  }
}

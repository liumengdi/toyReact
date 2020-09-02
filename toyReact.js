// 小写认为是原生的标签名, 大写的话,是class或者函数  
export function createElement(tagName, attributes, ...children) {


  let elem = document.createElement(tagName)

  if (typeof tagName === 'string') {
    elem = new ElementWrapper(tagName)
  } else {
    elem = new type
  }


  for (let p in attributes) {
    elem.setAttribute(p, attributes[p])
  }

  let insertChildren = (children) => {
    for (let child of children) {
      if (typeof child === 'string') {
        child = new TextWrapper(child)
      }
      if (typeof child === 'object' && child instanceof Array) {
        insertChildren(child)
      }else {
        elem.appendChild(child)
      }
    }
  }
  insertChildren(children)

  return elem
}

export class Component {
  constructor() {
    this.props = Object.create(null)
    this.children = []
    this._root = null
  }
  setAttribute(name, value) {
    this.props[name] = value
  }
  appendChild(component) {
    this.children.push(component)
  }

  get root() {
    if (!this.root) {   
      this._root = this.render().root
    }
    return this._root
  }
}

class ElementWrapper {
  constructor(type) {
    this.root = document.createElement(type)
  }
  setAttribute(name, value) {
    this.root.setAttribute(name, value)
  }
  appendChild(component) {
    this.root.appendChild(component.root)

  }
}

class TextWrapper {
  constructor(content) {
    this.root = document.createTextNode(content)
  }
}



export function render(component, parentElement) {
  parentElement.appendChild(component.root)
}
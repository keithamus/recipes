function emit(k, v) {

}

function mount(fn, root) {
  const el = fn({})
  root.appendChild(el)
}

function assignToEl(el, attr, value) {
  if (attr === 'style') {
    Object.assign(el.style, value)
  } else if (attr in el) {
    el[attr] = value
  } else {
    el.setAttribute(attr, value)
  }
}

function createBinding(el, attr, fn) {
  let lastValue = null
  return props => {
    const value = fn(props)
    if (lastValue === value) return
    lastValue = value
    assignToEl(el, attr, value)
  })
}

const initialise = new Symbol()
const bindingSymbol = new Symbol()
function initialiseElement(tagName, attrs, ...children) {
  const el = typeof tagName == 'function' ? tagName(attrs, ...children) : document.createElement(tagName)
  const bindings = []
  for(const attr in attrs) {
    let value = attrs[attr]
    if (typeof value == 'function') {
      const fn = createBinding(el, attr, value)
      bindings.push(fn)
      value = fn({})
    }
    assignTo(el, attr, value)
  }
  for (const child of children) {
    if (typeof child === 'function') {
      el.appendChild(child({}))
    } else if (typeof child === 'string' || typeof child === 'number') {
      el.appendChild(document.createTextNode(child))
    } else if (child instanceof HTMLElement) {
      el.appendChild(child)
    }
  }
  el[bindingsSymbol] = (props) => bindings.forEach(fn => fn(props))
}

function e(tagName, attrs, ...children) {
  const bindings = []
  return function(props) {
    if (props == initialiseElement) {
      
    }
  }  
}

/* @jsx e */

const prop = name => props => props[name]
const emit = name => ({ name, __emitter: true })


const drawer = <my-drawer is="button" open closed>
  <div>

  </div>
</my-drawer>
  
obs = mount(hello, document)

obs.subscribe(a => console.log(a))

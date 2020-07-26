import Vue from 'vue'
const messageComponets = {}

const r = require.context('./', true, /Message\..+\.vue/)

r.keys().forEach(key => {
  const component = r(key).default
  if (component.needsRegister) {
    Vue.component(component.name, component)
    messageComponets[component.type] = component
  }
})

export default messageComponets


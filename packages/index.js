import MessageTemplateCreator from './messageTemplateCreator/MessageTemplateCreator'

const components = [
  MessageTemplateCreator
]

const install = function (Vue) {
  if (install.installed) return
  install.installed = true
  Vue.component(MessageTemplateCreator.name, MessageTemplateCreator)
}

if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}

export default MessageTemplateCreator

export {
  install,
  MessageTemplateCreator
}

import MessageTemplateCreator from './MessageTemplateCreator'
/* istanbul ignore next */
MessageTemplateCreator.install = function (Vue) {
  Vue.component(MessageTemplateCreator.name, MessageTemplateCreator)
}

export default MessageTemplateCreator

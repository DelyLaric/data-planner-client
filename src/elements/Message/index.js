import Vue from 'vue'
import Message from './Message'

const MessageComponent = Vue.extend(Message)

const open = (propsData = {}) => {
  return new MessageComponent({
    el: document.createElement('div'),
    propsData
  })
}

export default {
  success (opts) {
    if (typeof (opts) === 'string') opts = {title: opts}
    opts.type = 'success'
    return open(opts)
  },
  error (opts) {
    if (typeof (opts) === 'string') opts = {title: opts}
    opts.type = 'error'
    return open(opts)
  }
}

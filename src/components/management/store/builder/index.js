// import store from '@/store'
/* 直接 import 全局 store 会导致实例下的 store 出现未知异常
 * 故使用 上下文 将实例中的 store 直接传入
 */

export default function (config, modules, store) {
  let result = {}

  modules.forEach(module => {
    result[module.name] = config[module.name]

    if (module.store) {
      let namespace = '$auto/' + module.name + '/' + config.name
      store.registerModule(namespace, module.store)

      result[module.name] = {
        ...result[module.name],

        $namespace: namespace,

        $unregister: () => {
          store.unregisterModule(namespace)
        },

        $state: (key) => {
          return store.state[namespace][key]
        },

        $getters: (key) => {
          return store.getters[namespace + '/' + key]
        },

        $commit: (type, payload) => {
          store.commit(namespace + '/' + type, payload)
        },

        $dispatch: (type, payload) => {
          store.dispatch(namespace + '/' + type, payload)
        }
      }
    }
  })

  return result
}

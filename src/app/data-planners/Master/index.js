import config from './config'
import TheManagement from '@/components/management'

export default {
  render (h) {
    return h(
      TheManagement,
      {
        props: {
          data: config
        }
      }
    )
  }
}

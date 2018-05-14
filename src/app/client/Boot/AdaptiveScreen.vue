<script>
export default {
  inject: ['homepage'],

  render: h => ({}),

  beforeMount () {
    const { body } = document
    const WIDTH = 768
    const RATIO = 3

    const handler = () => {
      if (!document.hidden) {
        let rect = body.getBoundingClientRect()
        let isMobile = rect.width - RATIO < WIDTH
        if (isMobile) this.homepage.$commit('hideSidebar')
        else this.homepage.$commit('showSidebar')
      }
    }

    document.addEventListener('visibilitychange', handler)
    window.addEventListener('DOMContentLoaded', handler)
    window.addEventListener('resize', handler)
  }
}
</script>

import Notification from './notification.vue'

export default {
  extends: Notification,
  data () {
    return {
      verticalOffset: 0,
      autoClose: 3000,
      height: 0,
      visible: false
    }
  },
  computed: {
    style () {
      return {
        position: 'fixed',
        right: '20px',
        bottom: `${this.verticalOffset}px`
      }
    }
  },
  mounted () {
    this.creatTimer()
  },
  methods: {
    creatTimer () {
      if (this.autoClose) {
        this.timer = setTimeout(() => {
          this.visible = false
        }, this.autoClose)
      }
    },
    clearTimer () {
      console.log(123)
      if (this.timer) {
        clearTimeout(this.timer)
      }
    },
    afterEnter () {
      this.height = this.$el.offsetHeight
    }
  },
  beforeDestroy () {
    this.clearTimer()
  }
}

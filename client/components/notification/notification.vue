<template>
  <transition>
    <div class="notification" name="fade" :style="style">
      <span class="content">
        {{content}}
      </span>
      <a class="btn" @click="handleClose">
        {{btn || '关闭'}}
      </a>
    </div>
  </transition>
</template>

<script>
export default {
  name: 'Notification',
  props: {
    content: {
      type: String,
      required: true
    },
    btn: {
      type: String,
      required: false
    }
  },
  computed: {
    style () {
      return {}
    }
  },
  methods: {
    handleClose (e) {
      e.preventDefault()
      this.$emit('close')
    }
  }
}
</script>

<style lang="stylus">
.notification
  position fixed
  bottom 0
  right 0
  background rgba(111, 111, 111, .6)
  padding 20px
  transition all .3s
</style>
